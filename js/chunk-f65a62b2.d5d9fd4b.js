(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f65a62b2"],{"2c3c":function(e,t,a){"use strict";var s={methods:{focusToNext:function(e){document.querySelector("#".concat(e)).click()}}};t["a"]=s},"39db":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{staticClass:"font-weight-medium text-none py-3",attrs:{height:"auto",block:e.block,disabled:e.disabled,text:""},on:{click:e.clicked}},[e.icon?a("v-icon",[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" "),e.appendIcon?a("v-icon",[e._v(" "+e._s(e.appendIcon)+" ")]):e._e()],1)},o=[],n={name:"BtnText",props:{block:{default:!0},disabled:{default:!1},text:{required:!0},icon:{default:null},appendIcon:{default:""}},methods:{clicked:function(){this.$emit("clicked")}}},r=n,i=a("2877"),l=a("6544"),c=a.n(l),d=a("8336"),u=a("132d"),f=Object(i["a"])(r,s,o,!1,null,null,null);t["a"]=f.exports;c()(f,{VBtn:d["a"],VIcon:u["a"]})},"77c9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("register-app",{attrs:{alertInfo:e.alertInfo,progressLoader:e.loading},on:{register:e.register}})},o=[],n=a("be3b"),r=a("f102"),i=a("5988"),l={name:"Register",components:{RegisterApp:r["a"]},mixins:[i["a"]],data:function(){return{alertInfo:null,loading:!1}},methods:{register:function(e){var t=this;this.loading=!0,n["a"].post("/auth/user/register",e).then((function(e){t.loading=!1,200===e.data.codigo?t.alertInfo="Obrigado por ter se cadastrado!<br>Verifique sua caixa de e-mail e confirme o seu cadastro.":t.showSnackbarErro(e.data.corpo)})).catch((function(){t.loading=!1,t.showSnackbarErro("Não foi possível realizar seu cadastro!")}))}}},c=l,d=a("2877"),u=Object(d["a"])(c,s,o,!1,null,null,null);t["default"]=u.exports},f102:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("template-auth",{attrs:{titulo:"Faça o seu cadastro",progressLoader:e.progressLoader,alert:e.alertInfo,isBarber:e.isBarber}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.cadastrar(t)}}},[a("v-text-field",{attrs:{id:"name",label:"Nome"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("email")}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{ref:"email",attrs:{label:"E-mail",disabled:e.emailDisabled,rules:e.emailRules},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("password")}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{ref:"password",attrs:{type:e.showPassword?"text":"password",rules:e.passwordRules,label:"Senha","append-icon":e.showPassword?"visibility_off":"remove_red_eye"},on:{"click:append":function(t){e.showPassword=!e.showPassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("confirmPassword")}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{ref:"confirmPassword",attrs:{type:e.showConfirmPassword?"text":"password",rules:e.passwordRules,label:"Confirmar Senha","append-icon":e.showConfirmPassword?"visibility_off":"remove_red_eye"},on:{"click:append":function(t){e.showConfirmPassword=!e.showConfirmPassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterClick(t)}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),a("div",{staticClass:"text-center mt-4"},[a("btn-confirm",{attrs:{text:"Cadastrar",disabled:e.btnDisabled},on:{clicked:e.cadastrar}})],1),a("div",{staticClass:"text-center mt-4"},[a("span",{staticClass:"d-block font-weight-light"},[e._v("ou")]),a("btn-text",{staticClass:"mt-2",attrs:{text:"Voltar",icon:"chevron_left",dark:""},on:{clicked:function(t){return e.voltar()}}})],1)],1)])},o=[],n=(a("a15b"),a("d81d"),a("fb6a"),a("0d03"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("96f9")),r=a("39db"),i=a("2c3c"),l=a("2ce5"),c=a("4f01"),d=a("be1f"),u={name:"Register",components:{BtnConfirm:n["a"],BtnText:r["a"],TemplateAuth:c["a"]},mixins:[i["a"],l["a"],d["a"]],props:{alertInfo:{default:null},isBarber:{default:!1},progressLoader:{default:!1},token:{default:""}},data:function(){return{showPassword:!1,showConfirmPassword:!1,name:"",email:"",password:"",confirmPassword:""}},watch:{token:function(e){if(e){var t=this.parseJwt(e);this.email=t.usuario.barber_mail}}},computed:{emailDisabled:function(){return!!this.token},btnDisabled:function(){return!this.isNameValid(this.name)||(!this.isEmailValid(this.email)||(!this.isPasswordValid(this.password)||(!this.isPasswordValid(this.confirmPassword)||this.confirmPassword!==this.password)))}},mounted:function(){document.querySelector("#name").focus()},methods:{enterClick:function(){this.btnDisabled?this.showSnackbarErro("Preencha todos os dados corretamente!"):this.cadastrar()},cadastrar:function(){var e={name:this.name,email:this.email,password:this.password};this.$emit("register",e)},parseJwt:function(e){var t=e.split(".")[1],a=t.replace(/-/g,"+").replace(/_/g,"/"),s=decodeURIComponent(atob(a).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(s)},voltar:function(){this.isBarber?this.goTo("login-barber"):this.goTo("login")}}},f=u,m=a("2877"),p=a("6544"),h=a.n(p),b=a("8654"),w=Object(m["a"])(f,s,o,!1,null,null,null);t["a"]=w.exports;h()(w,{VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-f65a62b2.d5d9fd4b.js.map