sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.Purchase", {
        onInit() {
            var oProductsModel = new sap.ui.model.json.JSONModel();
            oProductsModel.loadData("model/cart.json");
            this.getView().setModel(oProductsModel, "products");
        },
        onRadioSelect:function(oEvent){
            var sel = oEvent.getParameters().selectedIndex;
            var oKey = oEvent.oSource.mAggregations.buttons[sel].sId;

            if (oKey == "container-decathlon---Purchase--excel" ) {
                this.byId("fileUploader").setVisible(true);
                this.byId("fileUploadbutton").setVisible(true);
            } else {
                this.byId("fileUploader").setVisible(false);
                this.byId("fileUploadbutton").setVisible(false);
            }
        },
        handleUploadComplete: function(oEvent) {
			var sResponse = oEvent.getParameter("response"),
				iHttpStatusCode = parseInt(/\d{3}/.exec(sResponse)[0]),
				sMessage;

			if (sResponse) {
				sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
				MessageToast.show(sMessage);
			}
		},

		handleUploadPress: function() {
        var oFileUploader = this.byId("fileUploader");
        var oFile = oFileUploader.oFileUpload.files[0]; 

        if (!oFile) {
            MessageToast.show("Choose a file first");
            return;
        }

        var reader = new FileReader();
        var that = this;

        reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        // Take first sheet
        var firstSheet = workbook.SheetNames[0];
        var excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

        // Now merge this with model
        var oModel = that.getView().getModel("products");
        var aExisting = oModel.getProperty("/po") || [];

        // Add Excel data
        aExisting = aExisting.concat(excelData);
        oModel.setProperty("/po", aExisting);
        MessageToast.show("Excel data uploaded successfully!");
    };
    reader.readAsArrayBuffer(oFile);
		},

		handleTypeMissmatch: function(oEvent) {
			var aFileTypes = oEvent.getSource().getFileType();
			aFileTypes.map(function(sType) {
				return "*." + sType;
			});
			MessageToast.show("The file type " + oEvent.getParameter("fileType") +
									" is not supported. Choose one of the following types: " +
									aFileTypes.join(", "));
		},

		handleValueChange: function(oEvent) {
			MessageToast.show("Press 'Upload File' to upload file '" +
									oEvent.getParameter("newValue") + "'");
		}
        
    });
});