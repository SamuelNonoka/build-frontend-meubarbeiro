(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d021a"],{6758:function(o,a,t){"use strict";t.r(a);var e=function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("login-app",{attrs:{alertInfo:o.alertInfo,progressLoader:o.loading},on:{login:o.login,loginWithGoogle:o.loginWithGoogle}})},r=[],n=t("be3b"),i=t("6cd4"),s=t("83c9"),l=t("5988"),c=t("2ce5"),u={name:"Login",components:{LoginApp:s["a"]},mixins:[i["a"],l["a"],c["a"]],data:function(){return{alertInfo:null,loading:!1}},methods:{login:function(o){var a=this;this.loading=!0,n["a"].post("/auth/user/login",o).then((function(o){if(a.loading=!1,200===o.data.codigo){var t=o.data.corpo;a.setUser(t)}else a.setError(o.data.corpo)})).catch((function(o){window.console.log(o),a.setError("Não foi possível realizar login na aplicação!")}))},loginWithGoogle:function(o){var a=this;n["a"].post("/auth/user/login-google",o).then((function(o){if(200===o.data.codigo){var t=o.data.corpo;a.setUser(t)}else a.setError(o.data.corpo)})).catch((function(){return a.setError("Não foi possível realizar login na aplicação!")}))},setError:function(o){this.alertInfo=null,this.loading=!1,this.showSnackbarErro(o)},setUser:function(o){var a=localStorage.routePathSite;this.storeUser(o);var t=this.getUser();t?t.enabled?a&&a!==this.$route.path?(localStorage.removeItem("routePathSite"),this.goToPath(a)):this.goTo("home"):this.alertInfo="Seu cadastro ainda não foi confirmado!!<br>Verifique sua caixa de e-mail e confirme o seu cadastro.":this.setError("Não foi possível recuperar o token de acesso à aplicação!")}}},g=u,h=t("2877"),d=Object(h["a"])(g,e,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d021a.5854c485.js.map