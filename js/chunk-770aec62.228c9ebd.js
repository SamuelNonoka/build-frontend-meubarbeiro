(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770aec62"],{"09ba":function(r,o,e){"use strict";var t=e("be3b"),a=e("2ce5"),n={mixins:[a["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(r){var o=this;t["a"].get("/barbershop/".concat(r,"/barber")).then((function(r){200===r.data.codigo?o.onGetBarberByBarbershopIdOnServiceSuccess(r.data.corpo):o.onGetBarberByBarbershopIdOnServiceError(r.data.corpo)})).catch((function(r){o.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(r)}))},onGetBarberByBarbershopIdOnServiceError:function(r){window.console.log(r)},onGetBarberByBarbershopIdOnServiceSuccess:function(r){window.console.log(JSON.stringify(r))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(r){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",r)}}};o["a"]=n},"15eb":function(r,o,e){"use strict";e.r(o);var t=function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("div",[e("login-app",{attrs:{alertInfo:r.alertInfo,progressLoader:r.loading,isBarber:!0},on:{login:r.login,loginWithGoogle:r.loginWithGoogle}}),e("overlay",{ref:"overlay"})],1)},a=[],n=e("be3b"),i=e("09ba"),s=e("83c9"),c=e("8c08"),l=e("5988"),h=e("2ce5"),u={name:"Login",components:{LoginApp:s["a"],Overlay:c["a"]},mixins:[i["a"],l["a"],h["a"]],data:function(){return{alertInfo:null,loading:!1}},methods:{login:function(r){var o=this;this.loading=!0,n["a"].post("/auth/barber/login",r).then((function(r){if(o.loading=!1,200===r.data.codigo){var e=r.data.corpo;o.setBarber(e)}else o.setError(r.data.corpo)})).catch((function(r){window.console.log(r),o.setError("Não foi possível realizar login na aplicação!")}))},loginWithGoogle:function(r){var o=this;this.$refs.overlay.showOverlay("Carregando..."),n["a"].post("/auth/barber/login-google",r).then((function(r){if(200===r.data.codigo){var e=r.data.corpo;o.setBarber(e)}else o.setError(r.data.corpo)})).catch((function(){return o.setError("Não foi possível realizar login na aplicação!")}))},setBarber:function(r){var o=localStorage.routePathAdmin;this.storeBarber(r);var e=this.getBarber();e?e.enabled?o&&o!==this.$route.path?(localStorage.removeItem("routePathSite"),this.goToPath(o)):this.goTo("admin"):this.alertInfo="Seu cadastro ainda não foi confirmado!!<br>Verifique sua caixa de e-mail e confirme o seu cadastro.":this.setError("Não foi possível recuperar o token de acesso à aplicação!")},setError:function(r){this.alertInfo=null,this.loading=!1,this.$refs.overlay.hideOverlayError(r),this.showSnackbarErro(r)}}},b=u,d=e("2877"),g=Object(d["a"])(b,t,a,!1,null,null,null);o["default"]=g.exports}}]);
//# sourceMappingURL=chunk-770aec62.228c9ebd.js.map