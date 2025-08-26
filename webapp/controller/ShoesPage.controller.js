sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.ShoesPage", {
        onInit() {
            var oProductsModel = new sap.ui.model.json.JSONModel();
            oProductsModel.loadData("model/cart.json");
            this.getView().setModel(oProductsModel, "products");

            var oCartModel = this.getOwnerComponent().getModel("cart");
            if (!oCartModel) {
                oCartModel = new sap.ui.model.json.JSONModel({ items: [] });
                this.getOwnerComponent().setModel(oCartModel, "cart");
            }
    this.getView().setModel(oCartModel, "cart");
        },
         onPressWishlist:function(oEvent){
            var oButton = oEvent.getSource();
            var oCurrentIcon = oButton.getIcon();

            if (oCurrentIcon === "sap-icon://heart-2") {
                oButton.setIcon("sap-icon://heart"); 
                 MessageToast.show("Added to Wishlist");   
            }else {
                oButton.setIcon("sap-icon://heart-2");
                 MessageToast.show("Removed from Wishlist");
            }
        },
        onPressAddToCart:function(oEvent){
            var oView = this.getView();
            var oCartModel = oView.getModel("cart");
            // var aCartItems = oCartModel.getProperty("/items");

            var oButton = oEvent.getSource();
            var oProductContext = oButton.getBindingContext("products");
            var oProductData = oProductContext.getObject();
            oProductData.Quantity = 1;
            oCartModel.setProperty("/items", [oProductData]);
            oCartModel.refresh(true);
            MessageToast.show("Added to your Cart...!!")
        },
    });
});