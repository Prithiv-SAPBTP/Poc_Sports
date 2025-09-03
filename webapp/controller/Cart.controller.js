sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.Cart", {
        onInit() {
        },
        onIncreaseQuantity: function (oEvent) {
            var oBindingvalue = oEvent.getSource().getBindingContext("cart");
            var oValue = oBindingvalue.getObject();
            oValue.quantity++;
            oBindingvalue.getModel().refresh(true);
        },

        onDecreaseQuantity: function (oEvent) {
            var oBindingvalue = oEvent.getSource().getBindingContext("cart");
            var oValue = oBindingvalue.getObject();
            if (oValue.quantity > 1) {
                oValue.quantity--;
            } else {
                MessageToast.show("Minimum 1 quantity is required...");
            }
            oBindingvalue.getModel().refresh(true);
        },

        onRemoveFromCart: function (oEvent) {
            var oBindingvalue = oEvent.getSource().getBindingContext("cart");
            var oModel = oBindingvalue.getModel();
            var aItems = oModel.getProperty("/items");

            var iIndex = oBindingvalue.getPath().split("/").pop();
            aItems.splice(iIndex, 1);

            oModel.setProperty("/items", aItems);
            MessageToast.show("Item removed from cart");

    //          var oBindingContext = oEvent.getSource().getBindingContext("cart");
    // var oModel = oBindingContext.getModel();

    // // Full path to the item, e.g. "/items/0" or "/Products/2"
    // var sPath = oBindingContext.getPath();

    // // Extract the array name (items OR Products) and the index
    // var aPathParts = sPath.split("/");
    // var sArrayName = aPathParts[1]; // "items" or "Products"
    // var iIndex = parseInt(aPathParts[2], 10);

    // // Get the current array
    // var aData = oModel.getProperty("/" + sArrayName) || [];

    // if (iIndex > -1) {
    //     aData.splice(iIndex, 1); // remove item
    //     oModel.setProperty("/" + sArrayName, aData);
    //     oModel.refresh(true);
    //     sap.m.MessageToast.show("Item removed from cart");
    // }
    
        }
    });
});