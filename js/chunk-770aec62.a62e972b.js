(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770aec62"],{"09ba":function(r,e,o){"use strict";var t=o("be3b"),a=o("2ce5"),n={mixins:[a["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]},barberState:function(){return this.$store.getters["BarberStore/barber"]}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(r){var e=this;t["a"].get("/barbershop/".concat(r,"/barber?status=ativo")).then((function(r){200===r.data.codigo?e.onGetBarberByBarbershopIdOnServiceSuccess(r.data.corpo):e.onGetBarberByBarbershopIdOnServiceError(r.data.corpo)})).catch((function(r){e.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(r)}))},onGetBarberByBarbershopIdOnServiceError:function(r){window.console.log(r)},onGetBarberByBarbershopIdOnServiceSuccess:function(r){window.console.log(JSON.stringify(r))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(r){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",r)}}};e["a"]=n},"15eb":function(r,e,o){"use strict";o.r(e);var t=function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",[o("login-app",{attrs:{alertInfo:r.alertInfo,progressLoader:r.loading,isBarber:!0,userNotEnabled:r.userNotEnabled},on:{login:r.login,loginWithGoogle:r.loginWithGoogle,sendMail:r.sendMail}}),o("overlay",{ref:"overlay"})],1)},a=[],n=o("be3b"),i=o("09ba"),s=o("83c9"),l=o("8c08"),c=o("5988"),h=o("2ce5"),d={name:"Login",components:{LoginApp:s["a"],Overlay:l["a"]},mixins:[i["a"],c["a"],h["a"]],data:function(){return{alertInfo:null,loading:!1,userNotEnabled:!1}},mounted:function(){this.userNotEnabled=!1},methods:{login:function(r){var e=this;this.loading=!0,n["a"].post("/auth/barber/login",r).then((function(r){if(200===r.data.codigo){var o=r.data.corpo;e.setBarber(o)}else e.setError(r.data.corpo)})).catch((function(r){window.console.log(r),e.setError("Não foi possível realizar login na aplicação!")}))},loginWithGoogle:function(r){var e=this;this.loading=!0,this.$refs.overlay.showOverlay("Carregando..."),n["a"].post("/auth/barber/login-google",r).then((function(r){if(200===r.data.codigo){var o=r.data.corpo;e.setBarber(o)}else e.setError(r.data.corpo)})).catch((function(){return e.setError("Não foi possível realizar login na aplicação!")}))},onSendMailError:function(r){this.$refs.overlay.hideOverlayError(r),this.showSnackbarErro(r)},setBarber:function(r){var e=localStorage.routePathAdmin;this.storeBarber(r);var o=this.getBarber();o?(o.enabled&&(e&&e!==this.$route.path?(localStorage.removeItem("routePathSite"),this.goToPath(e)):this.goTo("admin")),this.loading=!1,this.userNotEnabled=!0,this.$refs.overlay.hideOverlay()):this.setError("Não foi possível recuperar o token de acesso à aplicação!")},setError:function(r){this.alertInfo=null,this.loading=!1,this.$refs.overlay.hideOverlay(),this.showSnackbarErro(r)},sendMail:function(){var r=this,e="";this.$refs.overlay.showOverlay("Enviando e-mail..."),n["a"].post("/barber/resend-register-mail",{email:this.barber.email}).then((function(o){200===o.status?200===o.data.codigo?(r.userNotEnabled=!1,r.alertInfo=!1,r.$refs.overlay.hideOverlaySuccess(o.data.corpo)):r.onSendMailError(o.data.corpo):r.onSendMailError(e)})).catch((function(){return r.onSendMailError(e)}))}}},u=d,b=o("2877"),g=Object(b["a"])(u,t,a,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-770aec62.a62e972b.js.map