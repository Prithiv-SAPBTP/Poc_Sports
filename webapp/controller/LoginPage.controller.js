sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("decathlon.controller.LoginPage", {
        onInit() {
             var oModel = new sap.ui.model.json.JSONModel("model/data.json");
            this.getView().setModel(oModel);
            
        },
        onPressSignin:function(){
             var oView = this.getView();
            var oEmail = oView.byId("signinEmail").getValue();
            var oPassword = oView.byId("signinPassword").getValue();
           
            if (!oEmail || !oPassword) {
              MessageToast.show("Please enter emailid and password.");
              return; 
            }
             var getData = this.getView().getModel().oData.roles;

            for (let i = 0; i < getData.length; i++) {
                if (getData[i].Email == oEmail && getData[i].Password == oPassword) {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    MessageToast.show("Login Successful...");
                    oRouter.navTo("HomePage")
                    break;
                }
                else{
                    MessageToast.show("Enter a valid UserName or Password");    
                }
            }
        },
         onSelect: function (oEvent) {
            var sKey = oEvent.getParameter("id");

            if (sKey === "container-decathlon---LoginPage--b") {
                this.byId("signinForm").setVisible(true);
                this.byId("signupForm").setVisible(false);
            } else {
                this.byId("signinForm").setVisible(false);
                this.byId("signupForm").setVisible(true);
            }
        },
         onPressSignup: function () {
            var name = this.byId("signupName").getValue();
            var email = this.byId("signupEmail").getValue();
            var password = this.byId("signupPassword").getValue();
            var confirmPassword = this.byId("signupConfirmPassword").getValue();

            if (!name || !email || !password || !confirmPassword) {
                MessageToast.show("Please fill in all fields.");
                return;
            }
            if (password !== confirmPassword) {
                MessageToast.show("Passwords do not match.");
                return;
            }

    var oModel = this.getView().getModel();
    var oData = oModel.getData();

    if (!oData.roles) {
        oData.roles = [];
    }

    var userExists = oData.roles.some(role => role.Email === email);
    if (userExists) {
        MessageToast.show("Email already registered.");
        return;
    }
    oData.roles.push({
        Fullname: name,
        Password: password,
        Email: email,
        
    });
    // oModel.refresh(true);
            MessageToast.show("Signup successful for " + name);
        }
    });
});