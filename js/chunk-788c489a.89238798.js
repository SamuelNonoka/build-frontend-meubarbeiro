(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-788c489a"],{"0a09":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"info-cadastro"},[t("div",{staticClass:"text-right"},[t("v-icon",[e._v("check")])],1),t("div",{staticClass:"conteudo"},[e._t("default")],2)])},s=[],o={name:"AlertSuccess"},i=o,n=(t("2891"),t("2877")),l=t("6544"),c=t.n(l),d=t("132d"),u=Object(n["a"])(i,r,s,!1,null,"7b3987e8",null);a["a"]=u.exports;c()(u,{VIcon:d["a"]})},2891:function(e,a,t){"use strict";var r=t("3f7f"),s=t.n(r);s.a},"3f7f":function(e,a,t){},"608b":function(e,a,t){"use strict";var r=t("6ed7"),s=t.n(r);s.a},"6ed7":function(e,a,t){},"77c9":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("register-app",{attrs:{alertInfo:e.alertInfo,progressLoader:e.loading},on:{register:e.register,registerWithGoogle:e.registerWithGoogle}})},s=[],o=t("be3b"),i=t("f102"),n=t("2ce5"),l=t("5988"),c={name:"Register",components:{RegisterApp:i["a"]},mixins:[n["a"],l["a"]],data:function(){return{alertInfo:null,loading:!1}},methods:{register:function(e){var a=this;this.loading=!0,o["a"].post("/auth/user/register",e).then((function(e){a.loading=!1,200===e.data.codigo?a.alertInfo="Obrigado por ter se cadastrado!<br>Verifique sua caixa de e-mail e confirme o seu cadastro.":a.showSnackbarErro(e.data.corpo)})).catch((function(){a.loading=!1,a.showSnackbarErro("Não foi possível realizar seu cadastro!")}))},registerWithGoogle:function(e){var a=this;o["a"].post("/auth/user/register-google",e).then((function(e){200===e.data.codigo?(a.showSnackbar("Cadastro realizado com sucesso!"),a.goTo("login")):a.showSnackbarErro(e.data.corpo)})).catch((function(){return a.showSnackbarErro("Não foi possível realizar seu cadastro!")}))}}},d=c,u=t("2877"),m=Object(u["a"])(d,r,s,!1,null,null,null);a["default"]=m.exports},f102:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("auth-template",{attrs:{title:"Faça seu cadastro",isBarber:e.isBarber}},[e.alertInfo?[t("alert-success",[e._v(" Obrigado por ter se cadastrado! "),t("br"),e._v(" Verifique sua caixa de e-mail e confirme seu cadastro. ")]),t("btn-secondary",{staticClass:"mt-12",attrs:{text:"Voltar para o site",dark:""},on:{clicked:e.voltar}})]:[t("form",{on:{submit:function(a){return a.preventDefault(),e.cadastrar(a)}}},[t("div",{staticClass:"text-center mt-4"},[t("btn-primary",{staticClass:"btn-cadastrar",attrs:{text:"Cadastre-se com email"},on:{clicked:e.openFormDialog}})],1),t("div",{staticClass:"text-center"},[t("gbutton",{staticClass:"mt-6 mx-auto d-flex justify-center",attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.registerWithGoogle}},[e._v(" Cadastrar-se com o Google ")])],1),t("btn-secondary",{staticClass:"mt-12",attrs:{text:"Voltar",dark:""},on:{clicked:e.voltar}})],1),t("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"350",persistent:""},model:{value:e.formDialog,callback:function(a){e.formDialog=a},expression:"formDialog"}},[t("v-card",{staticClass:"modal-content pa-4",attrs:{dark:""}},[t("div",{staticClass:"text-right"},[t("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){e.formDialog=!1}}},[t("v-icon",[e._v("mdi-close")])],1)],1),t("div",[t("div",{staticClass:"text-center"},[t("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),t("div",{staticClass:"form-group"},[t("v-text-field",{attrs:{id:"name",label:"Nome",rules:e.nameRules,success:e.isNameValid(e.name),dark:"",autocomplete:"off",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.focusToNext("email")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("person")])]},proxy:!0}]),model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})],1),t("div",{staticClass:"form-group"},[t("v-text-field",{ref:"email",attrs:{id:"email",label:"E-mail",autocomplete:"off",disabled:e.emailDisabled,rules:e.emailRules,success:e.isNameValid(e.email),dark:"","prepend-inner-icon":"mail",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.focusToNext("password")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("mail")])]},proxy:!0}]),model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})],1),t("div",{staticClass:"form-group"},[t("v-text-field",{ref:"password",attrs:{type:e.showPassword?"text":"password",rules:e.passwordRules,success:e.isNameValid(e.password),dark:"",label:"Senha","append-icon":e.showPassword?"visibility_off":"remove_red_eye",clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(a){e.showPassword=!e.showPassword},keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.focusToNext("confirmPassword")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1),t("div",{staticClass:"form-group"},[t("v-text-field",{ref:"confirmPassword",attrs:{type:e.showConfirmPassword?"text":"password",rules:e.passwordRules,success:e.isNameValid(e.confirmPassword),dark:"",label:"Confirmar Senha","append-icon":e.showConfirmPassword?"visibility_off":"remove_red_eye",clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(a){e.showConfirmPassword=!e.showConfirmPassword},keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.enterClick(a)}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.confirmPassword,callback:function(a){e.confirmPassword=a},expression:"confirmPassword"}})],1),t("div",{staticClass:"text-center mt-6"},[t("btn-primary",{staticClass:"btnRegister",attrs:{text:"CADASTRAR",loading:e.progressLoader},on:{clicked:e.register}})],1)])])],1)]],2)},s=[],o=(t("a15b"),t("d81d"),t("fb6a"),t("0d03"),t("b0c0"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("1276"),t("0a09")),i=t("e571"),n=t.n(i),l=t("94bb"),c=t("a30b"),d=t("5cbb"),u=t("2c3c"),m=t("2ce5"),f=t("5988"),p=t("be1f"),g={name:"Register",components:{AlertSuccess:o["a"],AuthTemplate:l["a"],BtnPrimary:c["a"],BtnSecondary:d["a"],gbutton:n.a},mixins:[u["a"],m["a"],f["a"],p["a"]],props:{alertInfo:{default:!0},isBarber:{default:!1},progressLoader:{default:!1},token:{default:""}},data:function(){return{formDialog:!1,showPassword:!1,showConfirmPassword:!1,name:"",email:"",password:"",confirmPassword:"",params:{client_id:"69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com"},renderParams:{height:45,width:250,theme:"dark"}}},watch:{token:function(e){if(e){var a=this.parseJwt(e);this.email=a.usuario.barber_mail}}},computed:{emailDisabled:function(){return!!this.token}},methods:{enterClick:function(){this.register()},isFormValid:function(){return!!this.isNameValid(this.name)&&(!!this.isEmailValid(this.email)&&(!!this.isPasswordValid(this.password)&&(!!this.isPasswordValid(this.confirmPassword)&&this.confirmPassword===this.password)))},register:function(){if(this.isFormValid()){var e={name:this.name,email:this.email,password:this.password};this.$emit("register",e)}else this.showSnackbarErro("Preencha todos os campos corretamente!")},openFormDialog:function(){this.formDialog=!0,setTimeout((function(){document.querySelector("#name").focus()}),500)},registerWithGoogle:function(e){var a=e.getBasicProfile(),t={google_id:a.getId(),name:a.getName(),email:a.getEmail()};this.$emit("registerWithGoogle",t)},parseJwt:function(e){var a=e.split(".")[1],t=a.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)},voltar:function(){this.isBarber?this.goTo("login-barber"):this.goTo("login")}}},h=g,b=(t("608b"),t("2877")),v=t("6544"),k=t.n(v),w=t("8336"),y=t("b0af"),x=t("169a"),C=t("132d"),_=t("8654"),P=Object(b["a"])(h,r,s,!1,null,"64216322",null);a["a"]=P.exports;k()(P,{VBtn:w["a"],VCard:y["a"],VDialog:x["a"],VIcon:C["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=chunk-788c489a.89238798.js.map