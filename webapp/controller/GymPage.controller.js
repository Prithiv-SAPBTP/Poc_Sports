sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.GymPage", {
        onInit() {    
            var oCountModel = new sap.ui.model.json.JSONModel({
            cartCount: 0,
            wishlistCount: 0
    });
    sap.ui.getCore().setModel(oCountModel, "countModel"); 
        },
        onPressWishlist:function(){
            var oModel = sap.ui.getCore().getModel("countModel");
            var iCount = oModel.getProperty("/wishlistCount");
            oModel.setProperty("/wishlistCount", iCount + 1);
            MessageToast.show("Added to Wishlist");
        },
        onPressAddToCart:function(){
            var oModel = sap.ui.getCore().getModel("countModel");
            var iCount = oModel.getProperty("/cartCount");
            oModel.setProperty("/cartCount", iCount + 1);
            MessageToast.show("Added to your Cart...!!")
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