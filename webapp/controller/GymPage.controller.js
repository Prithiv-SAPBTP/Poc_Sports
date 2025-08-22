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
            MessageToast.show("Added to Wishlist");
        },
        onPressAddToCart:function(){
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