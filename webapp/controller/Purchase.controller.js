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
            // var oModel = new sap.ui.model.json.JSONModel(sap.ui.require.toUrl("decathlon/webapp/model/cart.json"));
            // this.getView().setModel(oModel, "products");
        },
        
    });
});