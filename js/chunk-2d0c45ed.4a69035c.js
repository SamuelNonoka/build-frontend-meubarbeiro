(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c45ed"],{"3b19":function(r,o,e){"use strict";e.r(o);var n=function(){var r=this,o=r.$createElement,e=r._self._c||o;return e("confirm",{attrs:{success:r.success,error:r.error,isBarber:!0}})},t=[],c=e("be3b"),s=e("cc2d"),a={name:"ConfirmRegister",components:{Confirm:s["a"]},data:function(){return{success:null,error:null}},mounted:function(){var r=this,o=this.$route.params.token;c["a"].post("/auth/barber/register/confirm",{token:o}).then((function(o){200===o.data.codigo?r.success=o.data.corpo:r.error=o.data.corpo})).catch((function(o){window.console.log(o),r.error="Não foi possível confirmar o seu cadastro :("}))}},u=a,i=e("2877"),l=Object(i["a"])(u,n,t,!1,null,null,null);o["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c45ed.4a69035c.js.map