sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.TitleBar", {
        onInit() {
        },
         onPressCart: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("Cart")
            // var oView = this.getView();

            // if (!this.byId("cartDialog")) {
            //     sap.ui.core.Fragment.load({
            //         id: oView.getId(),
            //         name: "decathlon.view.AddtoCart",
            //         controller: this
            //     }).then(function (oDialog) {
            //         oView.addDependent(oDialog);
            //         oDialog.open();
            //     });
            // } else {
            //     this.byId("cartDialog").open();
            // }
            
        },
        // onCloseCart: function () {
        //     this.byId("cartDialog").close();
        // }
    });
});