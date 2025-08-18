sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.CatalogueOrder", {
        onInit() {
           
        },
        onPressGym:function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    MessageToast.show("Gym and Fitness Products loading...");
                    oRouter.navTo("GymPage")

        },
        onPressShoes:function(){

        },
        onPressActivewears:function(){

        },
        onPressBags:function(){

        },
        onPressSports:function(){

        },
        onPressHiking:function(){

        },
        onPressCycle:function(){

        },
        onPressSwimming:function(){

        },
        onPressWinterEssential:function(){

        },
        onPressJackets:function(){

        }

    });
});