sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("decathlon.controller.App", {
          onInit: function () {
      this.getOwnerComponent().getRouter().attachRouteMatched(this.onRouteMatched, this);
    },
    onRouteMatched: function (oEvent) {
      var sRouteName = oEvent.getParameter("name");
      var oPage = this.byId("appPage");
      if (sRouteName == "RouteLoginPage") {
        oPage.setVisible(false);
      } else {
        oPage.setVisible(true);
      }
    },
     onPressCart: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Cart")
        },
       onPressHelp: function(oEvent){
        var oButton = oEvent.getSource();
		    this.byId("actionSheet").openBy(oButton);
       }
  });
});