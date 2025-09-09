sap.ui.define([
    "sap/ui/core/UIComponent",
    "decathlon/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("decathlon.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {

            jQuery.sap.includeScript("libs/xlsx.full.min.js", "XLSX");

            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            var oCartModel = new sap.ui.model.json.JSONModel({ items: [] });
            this.setModel(oCartModel, "cart");

            

            // var oCartModel1 = new sap.ui.model.json.JSONModel({ Products: [] });
            // this.setModel(oCartModel1, "products");
            
        }
    });
});