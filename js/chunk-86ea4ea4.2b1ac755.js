(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86ea4ea4"],{"1acb":function(t,e,n){"use strict";var a=n("4b3c"),s=n.n(a);s.a},"2ce5":function(t,e,n){"use strict";n("b0c0");var a={methods:{goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.$route.name;t!=n&&(e?this.$router.push({name:t,params:e}):this.$router.push({name:t}))},goToPath:function(t){this.$router.push({path:t})},goToBack:function(){this.$router.go(-1)}}};e["a"]=a},"312b":function(t,e,n){"use strict";var a=n("a1ea"),s=n.n(a);s.a},3937:function(t,e,n){"use strict";var a=n("6543"),s=n.n(a);s.a},"39db":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"font-weight-medium text-none py-3",attrs:{height:"auto",block:t.block,disabled:t.disabled,dark:t.dark,text:""},on:{click:t.clicked}},[t.icon?n("v-icon",[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._v(" "+t._s(t.text)+" "),t.appendIcon?n("v-icon",[t._v(" "+t._s(t.appendIcon)+" ")]):t._e()],1)},s=[],c={name:"BtnText",props:{block:{default:!0},dark:{default:!1},disabled:{default:!1},text:{required:!0},icon:{default:null},appendIcon:{default:""}},methods:{clicked:function(){this.$emit("clicked")}}},o=c,r=n("2877"),i=n("6544"),l=n.n(i),u=n("8336"),d=n("132d"),f=Object(r["a"])(o,a,s,!1,null,null,null);e["a"]=f.exports;l()(f,{VBtn:u["a"],VIcon:d["a"]})},"3b19":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("confirm",{attrs:{success:t.success,error:t.error,isBarber:!0}})},s=[],c=n("be3b"),o=n("cc2d"),r={name:"ConfirmRegister",components:{Confirm:o["a"]},data:function(){return{success:null,error:null}},mounted:function(){var t=this,e=this.$route.params.token;c["a"].post("/auth/barber/register/confirm",{token:e}).then((function(e){200===e.data.codigo?t.success=e.data.corpo:t.error=e.data.corpo})).catch((function(e){window.console.log(e),t.error="Não foi possível confirmar o seu cadastro :("}))}},i=r,l=n("2877"),u=Object(l["a"])(i,a,s,!1,null,null,null);e["default"]=u.exports},"4b3c":function(t,e,n){},"5cbb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"btn-secondary accent text-none",attrs:{height:"auto",dark:""},on:{click:t.clicked}},[t._v(" "+t._s(t.text)+" ")])},s=[],c={name:"BtnSecondary",props:{text:{required:!0}},methods:{clicked:function(){this.$emit("clicked")}}},o=c,r=(n("1acb"),n("2877")),i=n("6544"),l=n.n(i),u=n("8336"),d=Object(r["a"])(o,a,s,!1,null,"399a75de",null);e["a"]=d.exports;l()(d,{VBtn:u["a"]})},6543:function(t,e,n){},8158:function(t,e,n){"use strict";var a=n("8b7bc"),s=n.n(a);s.a},"8b7bc":function(t,e,n){},"8ec8":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[t.icon?n("v-icon",{staticClass:"alert-icon"},[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._t("default")],2)},s=[],c={name:"Alert",props:{icon:{default:"warning"}}},o=c,r=(n("3937"),n("2877")),i=n("6544"),l=n.n(i),u=n("132d"),d=Object(r["a"])(o,a,s,!1,null,"f98acc0c",null);e["a"]=d.exports;l()(d,{VIcon:u["a"]})},"94bb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-template"},[t.alert||t.userNotEnabled?n("div",[n("alert",[n("span",{domProps:{innerHTML:t._s(t.alert)}}),n("span",{directives:[{name:"show",rawName:"v-show",value:t.userNotEnabled,expression:"userNotEnabled"}]},[t._v(" Seu cadastro ainda não foi confirmado!!"),n("br"),t._v("Verifique sua caixa de e-mail e confirme o seu cadastro. ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.userNotEnabled,expression:"userNotEnabled"}],staticClass:"text-center"},[n("v-btn",{staticClass:"mt-6 mx-auto text-none",attrs:{dark:""},on:{click:t.sendMail}},[n("v-icon",{staticClass:"mr-2"},[t._v("send")]),t._v(" Reenviar e-mail ")],1)],1)]),n("btn-secondary",{staticClass:"btn-voltar mt-8",attrs:{text:"Voltar para o site"},on:{clicked:function(e){return t.goTo("search")}}})],1):n("div",{staticClass:"text-center"},[n("h1",{staticClass:"titulo"},[t._v(" "+t._s(t.title)+" ")]),n("img",{staticClass:"logo my-8",attrs:{src:"/logo.png"}}),t._t("default"),t.goBackRoute?n("div",{staticClass:"mt-6"},[n("btn-text",{staticClass:"d-inline-block",attrs:{text:"Voltar",dark:!0},on:{clicked:function(e){return t.goTo(t.goBackRoute)}}})],1):t._e()],2)])},s=[],c=n("8ec8"),o=n("39db"),r=n("5cbb"),i=n("2ce5"),l={components:{Alert:c["a"],BtnSecondary:r["a"],BtnText:o["a"]},mixins:[i["a"]],props:{alert:{default:null},goBackRoute:{default:null},title:{required:!0},userNotEnabled:{default:!1}},methods:{sendMail:function(){this.$emit("sendMail")}}},u=l,d=(n("8158"),n("2877")),f=n("6544"),b=n.n(f),m=n("8336"),v=n("132d"),h=Object(d["a"])(u,a,s,!1,null,"be48a4ca",null);e["a"]=h.exports;b()(h,{VBtn:m["a"],VIcon:v["a"]})},a1ea:function(t,e,n){},cc2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("auth-template",{attrs:{title:null,isBarber:t.isBarber}},[t.error?n("h1",[t._v(" "+t._s(t.error)+" ")]):t._e(),t.success?n("alert",{attrs:{icon:"done"}},[t._v(" "+t._s(t.success)+" ")]):t._e(),t.success?n("btn-secondary",{staticClass:"confirm-register-btn mt-8 accent font-weight-bold",attrs:{text:"Fazer Login",block:!1},on:{clicked:t.goToLogin}}):t._e()],1)},s=[],c=n("94bb"),o=n("5cbb"),r=n("8ec8"),i=n("2ce5"),l={name:"ConfirmRegister",components:{Alert:r["a"],AuthTemplate:c["a"],BtnSecondary:o["a"]},mixins:[i["a"]],props:{success:{default:null},error:{default:null},isBarber:{default:!1}},methods:{goToLogin:function(){this.isBarber?this.goTo("barber-auth"):this.goTo("login")}}},u=l,d=(n("312b"),n("2877")),f=Object(d["a"])(u,a,s,!1,null,"12f3d682",null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-86ea4ea4.2b1ac755.js.map