sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.GymPage", {
        onInit() {
            
        },
        onPressWishlist:function(){
            MessageToast.show("Added to Wishlist");
        },
        onPressAddToCart:function(){
    //         var oButton = oEvent.getSource();         // Button pressed
    // var oVBox = oButton.getParent();                          // Get VBox (product container)
    // var aItems = oVBox.getItems();

    // // Extract product details
    // var sName = aItems[2].getText();                          // Product Name
    // var sDesc = aItems[3].getText();                          // Description
    // var sPrice = aItems[4].getItems()[0].getNumber();         // Price
    // var sImage = oVBox.getItems()[0].getPages()[0].getSrc();  // First image from carousel

    // // Prepare cart item
    // var oNewItem = {
    //     brand: sName,
    //     name: sDesc,
    //     price: sPrice,
    //     mrp: sPrice,        // If you want to show MRP vs Offer
    //     discount: 0,        // Calculate if needed
    //     quantity: 1,
    //     image: sImage,
    //     ref: Date.now(),    // Unique Ref
    //     delivery: "Tomorrow"
    // };

    // // Get cart model
    // var oCartModel = this.getOwnerComponent().getModel("cart");
    // var aCartItems = oCartModel.getProperty("/items");

    // // Push product into cart
    // aCartItems.push(oNewItem);
    // oCartModel.setProperty("/items", aCartItems);

    // sap.m.MessageToast.show(sName + " added to your Cart!");
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