(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e57e0"],{"955c":function(o,r,e){"use strict";e.r(r);var n=function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("confirm",{attrs:{success:o.success,error:o.error}})},t=[],c=e("be3b"),s=e("cc2d"),a={name:"ConfirmRegister",components:{Confirm:s["a"]},data:function(){return{success:null,error:null}},mounted:function(){var o=this,r=this.$route.params.token;c["a"].post("/auth/user/register/confirm",{token:r}).then((function(r){200===r.data.codigo?o.success=r.data.corpo:o.error=r.data.corpo})).catch((function(r){window.console.log(r),o.error="Não foi possível confirmar o cadastro do usuário :("}))}},u=a,i=e("2877"),l=Object(i["a"])(u,n,t,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e57e0.a38adbc7.js.map