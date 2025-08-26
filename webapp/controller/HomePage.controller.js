sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.HomePage", {
        onInit() {
        },
         onTabSelect: function (oEvent) {
    var sKey = oEvent.getParameter("key");
    if (sKey === "Purchase") {
        if (!this.oPurchaseMenu) {
            this.oPurchaseMenu = new sap.m.Menu({
                items: [
                    new sap.m.MenuItem({ text: "Purchase Order Create",press: () => {this.getOwnerComponent().getRouter().navTo("Purchase"); }  }),
                    new sap.m.MenuItem({ text: "Catalogue Order" , press: () => {this.getOwnerComponent().getRouter().navTo("CatalogueOrder"); }}),
                    new sap.m.MenuItem({ text: "Orders Below Dispatch Limit" })
                ]
            });
            this.getView().addDependent(this.oPurchaseMenu);
        }
        this.oPurchaseMenu.openBy(oEvent.getSource());
    }
     
    if (sKey === "Finance") {
        if (!this.oFinanceMenu) {
            this.oFinanceMenu = new sap.m.Menu({
                items: [
                    // new sap.m.MenuItem({ text: "Finance Order Create", press: () => {/* nav */} }),
                    // new sap.m.MenuItem({ text: "Catalogue Order" }),
                    // new sap.m.MenuItem({ text: "Orders Below Dispatch Limit" }),
                    new sap.m.MenuItem({ text: "Approved Finance Orders" }),
                    new sap.m.MenuItem({ text: "Order Summary List" }),
                    new sap.m.MenuItem({ text: "FOC, Demo & Warranty Order Summary List" }),
                    new sap.m.MenuItem({ text: "Back Order Cancellation" })
                ]
            });
            this.getView().addDependent(this.oFinanceMenu);
        }
        this.oFinanceMenu.openBy(oEvent.getSource());
    }
}
    });
});