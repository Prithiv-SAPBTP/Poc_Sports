sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.ShoesPage", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("model/cart.json"); 
            this.getView().setModel(oModel, "products");

            
            var oCartModel = new sap.ui.model.json.JSONModel({
                items: []
            });
            this.getView().setModel(oCartModel, "cart");

            var oModel1 = this.getOwnerComponent().getModel("cart");
            var oCartValue = oModel1.getProperty("/items");
          
        },
         onPressWishlist:function(oEvent){
            var oButton = oEvent.getSource();
            var oCurrentIcon = oButton.getIcon();

            if (oCurrentIcon === "sap-icon://heart-2") {
                oButton.setIcon("sap-icon://heart");    
            }else {
                oButton.setIcon("sap-icon://heart-2");
            }
            MessageToast.show("Added to Wishlist");
        },
        onPressAddToCart:function(oEvent){
             var oVBox = oEvent.getSource().getParent(); 

            var sName = oVBox.getItems()[2].getText();          // Product name
            var sDesc = oVBox.getItems()[3].getText();          // Description
            var sPrice = oVBox.getItems()[4].getItems()[0].getNumber(); // Price
            var sCurrency = oVBox.getItems()[4].getItems()[0].getUnit();

            // Access cart model
            // var oCartModel = this.getView().getModel("cart");
            // var aCartItems = oCartModel.getProperty("/items");

            // Check if product already in cart
            // oCartValue.push({
            //         name: sName,
            //         description: sDesc,
            //         price: parseFloat(sPrice),
            //         currency: sCurrency,
            //         quantity: 1
            //     });

            // var oExisting = oCartValue.find(item => item.name === sName);

            // if (oExisting) {
            //     oExisting.quantity += 1; // Increase quantity
            // } else {
            //     aCartItems.push({
            //         name: sName,
            //         description: sDesc,
            //         price: parseFloat(sPrice),
            //         currency: sCurrency,
            //         quantity: 1
            //     });
            // }

            // Update cart model
            oCartValue.setProperty("/items", oCartValue);

            MessageToast.show("Added to your Cart...!!")
        },
    });
});