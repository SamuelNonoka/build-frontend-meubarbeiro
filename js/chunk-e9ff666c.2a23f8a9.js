(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9ff666c"],{"213d":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{staticClass:"primary confirm-register",attrs:{fluid:"","fill-height":""}},[n("div",{staticClass:"confirm-register-box text-center"},[e.error?n("h1",[e._v(" "+e._s(e.error)+" ")]):e._e(),e.success?n("h1",[e._v(" "+e._s(e.success)+" ")]):e._e(),e.success?n("btn-secondary",{staticClass:"confirm-register-btn mt-4 accent font-weight-bold",attrs:{text:"Fazer Login",block:!1},on:{clicked:function(t){return e.goTo("login")}}}):e._e()],1)])],1)},r=[],c=(n("f57c"),n("e7e3")),o=n("2ce5"),a={name:"ConfirmRegister",components:{BtnSecondary:c["a"]},mixins:[o["a"]],props:{success:{default:null},error:{default:null}}},i=a,l=n("2877"),u=n("6544"),f=n.n(u),d=n("7496"),m=n("a523"),p=Object(l["a"])(i,s,r,!1,null,null,null);t["a"]=p.exports;f()(p,{VApp:d["a"],VContainer:m["a"]})},"3b19":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("confirm",{attrs:{success:e.success,error:e.error}})},r=[],c=n("be3b"),o=n("213d"),a={name:"ConfirmRegister",components:{Confirm:o["a"]},data:function(){return{success:null,error:null}},mounted:function(){var e=this,t=this.$route.params.token;c["a"].post("/auth/barber/register/confirm",{token:t}).then((function(t){200===t.data.codigo?e.success=t.data.corpo:e.error=t.data.corpo})).catch((function(t){window.console.log(t),e.error="Não foi possível confirmar o seu cadastro :("}))}},i=a,l=n("2877"),u=Object(l["a"])(i,s,r,!1,null,null,null);t["default"]=u.exports},e7e3:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"primary text-capitalize font-weight-regular",class:e.cssClass,attrs:{height:"auto",block:e.block,disabled:e.disabled},on:{click:e.clicked}},[e.icon?n("v-icon",{staticClass:"mr-1"},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" ")],1)},r=[],c={name:"BtnSecondary",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:"py-3"}},methods:{clicked:function(){this.$emit("clicked")}}},o=c,a=n("2877"),i=n("6544"),l=n.n(i),u=n("8336"),f=n("132d"),d=Object(a["a"])(o,s,r,!1,null,null,null);t["a"]=d.exports;l()(d,{VBtn:u["a"],VIcon:f["a"]})},f57c:function(e,t,n){}}]);
//# sourceMappingURL=chunk-e9ff666c.2a23f8a9.js.map