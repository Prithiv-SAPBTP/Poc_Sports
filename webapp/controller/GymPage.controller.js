sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.GymPage", {
        onInit() {
            var oProductsModel = new sap.ui.model.json.JSONModel();
            oProductsModel.loadData("model/cart.json");
            this.getView().setModel(oProductsModel, "products");
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
            var aCartProducts = oCartModel.getProperty("/Products") || [];

            var oButton = oEvent.getSource();
            var oProductContext = oButton.getBindingContext("products");
            var oProductData = oProductContext.getObject();

            var oExistingCartData = aCartProducts.find(cartid => cartid.id === oProductData.id); // assuming `id` is unique
                if (oExistingCartData) {
                    sap.m.MessageToast.show("This item is already there in your Cart...!!");
                } else {
            oProductData.quantity = 1;
            aCartProducts.push(oProductData);
            oCartModel.setProperty("/Products", aCartProducts);
            oCartModel.refresh(true);

        sap.m.MessageToast.show("Added to your Cart...!!");
        }

            
        },

        // onPressCart: function () {
        //     var oView = this.getView();

        //     if (!this.byId("cartDialog")) {
        //         sap.ui.core.Fragment.load({
        //             id: oView.getId(),
        //             name: "decathlon.view.AddtoCart",
        //             controller: this
        //         }).then(function (oDialog) {
        //             oView.addDependent(oDialog);
        //             oDialog.open();
        //         });
        //     } else {
        //         this.byId("cartDialog").open();
        //     }
        // },
        // onCloseCart: function () {
        //     this.byId("cartDialog").close();
        // }
    });
});