(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d55130"],{"0a09":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-cadastro"},[a("div",{staticClass:"text-right"},[a("v-icon",[e._v("check")])],1),a("div",{staticClass:"conteudo"},[e._t("default")],2)])},s=[],o={name:"AlertSuccess"},i=o,n=(a("2891"),a("2877")),l=a("6544"),c=a.n(l),d=a("132d"),u=Object(n["a"])(i,r,s,!1,null,"7b3987e8",null);t["a"]=u.exports;c()(u,{VIcon:d["a"]})},2891:function(e,t,a){"use strict";var r=a("3f7f"),s=a.n(r);s.a},"3f7f":function(e,t,a){},"608b":function(e,t,a){"use strict";var r=a("6ed7"),s=a.n(r);s.a},"6ed7":function(e,t,a){},"96c1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("register-app",{attrs:{alertInfo:e.alertInfo,isBarber:!0,token:e.token,progressLoader:e.loading},on:{register:e.register,registerWithGoogle:e.registerWithGoogle}})},s=[],o=(a("ac1f"),a("5319"),a("be3b")),i=a("f102"),n=a("5988"),l=a("2ce5"),c={name:"Register",components:{RegisterApp:i["a"]},mixins:[n["a"],l["a"]],data:function(){return{alertInfo:null,loading:!1,token:null}},mounted:function(){var e=this.$route.query.token||null;this.token=e.replace(/ /g,"+"),window.console.log(this.token)},methods:{register:function(e){var t=this;e.token=this.token,this.loading=!0,o["a"].post("/auth/barber/register",e).then((function(e){t.loading=!1,200===e.data.codigo?t.alertInfo="Obrigado por ter se cadastrado!<br>Verifique sua caixa de e-mail e confirme o seu cadastro.":t.showSnackbarErro(e.data.corpo)})).catch((function(){t.loading=!1,t.showSnackbarErro("Não foi possível realizar seu cadastro!")}))},registerWithGoogle:function(e){var t=this;o["a"].post("/auth/barber/register-google",e).then((function(e){200===e.data.codigo?(t.showSnackbar("Cadastro realizado com sucesso!"),t.goTo("login-barber")):t.showSnackbarErro(e.data.corpo)})).catch((function(e){t.showSnackbarErro("Não foi possível realizar seu cadastro!"),window.console.error(e)}))}}},d=c,u=a("2877"),m=Object(u["a"])(d,r,s,!1,null,null,null);t["default"]=m.exports},f102:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("auth-template",{attrs:{title:"Faça seu cadastro",isBarber:e.isBarber}},[e.alertInfo?[a("alert-success",[e._v(" Obrigado por ter se cadastrado! "),a("br"),e._v(" Verifique sua caixa de e-mail e confirme seu cadastro. ")]),a("btn-secondary",{staticClass:"mt-12",attrs:{text:"Voltar para o site",dark:""},on:{clicked:e.voltar}})]:[a("form",{on:{submit:function(t){return t.preventDefault(),e.cadastrar(t)}}},[a("div",{staticClass:"text-center mt-4"},[a("btn-primary",{staticClass:"btn-cadastrar",attrs:{text:"Cadastre-se com email"},on:{clicked:e.openFormDialog}})],1),a("div",{staticClass:"text-center"},[a("gbutton",{staticClass:"mt-6 mx-auto d-flex justify-center",attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.registerWithGoogle}},[e._v(" Cadastrar-se com o Google ")])],1),a("btn-secondary",{staticClass:"mt-12",attrs:{text:"Voltar",dark:""},on:{clicked:e.voltar}})],1),a("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"350",persistent:""},model:{value:e.formDialog,callback:function(t){e.formDialog=t},expression:"formDialog"}},[a("v-card",{staticClass:"modal-content pa-4",attrs:{dark:""}},[a("div",{staticClass:"text-right"},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.formDialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("div",[a("div",{staticClass:"text-center"},[a("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),a("div",{staticClass:"form-group"},[a("v-text-field",{attrs:{id:"name",label:"Nome",rules:e.nameRules,success:e.isNameValid(e.name),dark:"",autocomplete:"off",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("email")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("person")])]},proxy:!0}]),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticClass:"form-group"},[a("v-text-field",{ref:"email",attrs:{id:"email",label:"E-mail",autocomplete:"off",disabled:e.emailDisabled,rules:e.emailRules,success:e.isNameValid(e.email),dark:"","prepend-inner-icon":"mail",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("password")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("mail")])]},proxy:!0}]),model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("div",{staticClass:"form-group"},[a("v-text-field",{ref:"password",attrs:{type:e.showPassword?"text":"password",rules:e.passwordRules,success:e.isNameValid(e.password),dark:"",label:"Senha","append-icon":e.showPassword?"visibility_off":"remove_red_eye",clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(t){e.showPassword=!e.showPassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("confirmPassword")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"form-group"},[a("v-text-field",{ref:"confirmPassword",attrs:{type:e.showConfirmPassword?"text":"password",rules:e.passwordRules,success:e.isNameValid(e.confirmPassword),dark:"",label:"Confirmar Senha","append-icon":e.showConfirmPassword?"visibility_off":"remove_red_eye",clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(t){e.showConfirmPassword=!e.showConfirmPassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterClick(t)}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),a("div",{staticClass:"text-center mt-6"},[a("btn-primary",{staticClass:"btnRegister",attrs:{text:"CADASTRAR",loading:e.progressLoader},on:{clicked:e.register}})],1)])])],1)]],2)},s=[],o=(a("a15b"),a("d81d"),a("fb6a"),a("0d03"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("0a09")),i=a("e571"),n=a.n(i),l=a("94bb"),c=a("a30b"),d=a("5cbb"),u=a("2c3c"),m=a("2ce5"),f=a("5988"),p=a("be1f"),g={name:"Register",components:{AlertSuccess:o["a"],AuthTemplate:l["a"],BtnPrimary:c["a"],BtnSecondary:d["a"],gbutton:n.a},mixins:[u["a"],m["a"],f["a"],p["a"]],props:{alertInfo:{default:!0},isBarber:{default:!1},progressLoader:{default:!1},token:{default:""}},data:function(){return{formDialog:!1,showPassword:!1,showConfirmPassword:!1,name:"",email:"",password:"",confirmPassword:"",params:{client_id:"69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com"},renderParams:{height:45,width:250,theme:"dark"}}},watch:{token:function(e){if(e){var t=this.parseJwt(e);this.email=t.usuario.barber_mail}}},computed:{emailDisabled:function(){return!!this.token}},methods:{enterClick:function(){this.register()},isFormValid:function(){return!!this.isNameValid(this.name)&&(!!this.isEmailValid(this.email)&&(!!this.isPasswordValid(this.password)&&(!!this.isPasswordValid(this.confirmPassword)&&this.confirmPassword===this.password)))},register:function(){if(this.isFormValid()){var e={name:this.name,email:this.email,password:this.password};this.$emit("register",e)}else this.showSnackbarErro("Preencha todos os campos corretamente!")},openFormDialog:function(){this.formDialog=!0,setTimeout((function(){document.querySelector("#name").focus()}),500)},registerWithGoogle:function(e){var t=e.getBasicProfile(),a={google_id:t.getId(),name:t.getName(),email:t.getEmail()};this.$emit("registerWithGoogle",a)},parseJwt:function(e){var t=e.split(".")[1],a=t.replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(atob(a).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(r)},voltar:function(){this.isBarber?this.goTo("login-barber"):this.goTo("login")}}},b=g,h=(a("608b"),a("2877")),v=a("6544"),k=a.n(v),w=a("8336"),y=a("b0af"),x=a("169a"),C=a("132d"),_=a("8654"),P=Object(h["a"])(b,r,s,!1,null,"64216322",null);t["a"]=P.exports;k()(P,{VBtn:w["a"],VCard:y["a"],VDialog:x["a"],VIcon:C["a"],VTextField:_["a"]})}}]);
//# sourceMappingURL=chunk-71d55130.5dcf6dbc.js.map