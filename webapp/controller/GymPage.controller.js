sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.LoginPage", {
        onInit() {
            
        },
        onPressWishlist:function(){
            MessageToast.show("Added to Wishlist");
        },
        onPressAddToCart:function(){
            MessageToast.show("Added to your Cart...!!")
        },
        onCartPress: function () {
            var oView = this.getView();

            if (!this.byId("cartDialog")) {
                sap.ui.core.Fragment.load({
                    id: oView.getId(),
                    name: "decathlon.view.AddtoCart",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this.byId("cartDialog").open();
            }
        },
        onCloseCart: function () {
            this.byId("cartDialog").close();
        }
    });
});