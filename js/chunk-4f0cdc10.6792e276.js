(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f0cdc10"],{"09ba":function(e,o,r){"use strict";var t=r("be3b"),a=r("2ce5"),n={mixins:[a["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]||{id:null,barbershop_id:null,uuid:null,name:null,email:null,cpf:null,code:null,enabled:null,plan_id:null,plan_old_id:null,plan_due_date:null,plan_old_due_date:null,profile:null,phone:null,image_url:null,instagram_url:null,facebook_url:null,create_at:null,updated_at:null,deleted_at:null}}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(e){var o=this;t["a"].get("/barbershop/".concat(e,"/barber")).then((function(e){200===e.data.codigo?o.onGetBarberByBarbershopIdOnServiceSuccess(e.data.corpo):o.onGetBarberByBarbershopIdOnServiceError(e.data.corpo)})).catch((function(e){o.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarberByBarbershopIdOnServiceError:function(e){window.console.log(e)},onGetBarberByBarbershopIdOnServiceSuccess:function(e){window.console.log(JSON.stringify(e))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(e){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",e)}}};o["a"]=n},"15eb":function(e,o,r){"use strict";r.r(o);var t=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("login-app",{attrs:{alertInfo:e.alertInfo,progressLoader:e.loading,isBarber:!0},on:{login:e.login,loginWithGoogle:e.loginWithGoogle}})},a=[],n=r("be3b"),s=r("09ba"),i=r("83c9"),l=r("5988"),c=r("2ce5"),d={name:"Login",components:{LoginApp:i["a"]},mixins:[s["a"],l["a"],c["a"]],data:function(){return{alertInfo:null,loading:!1}},methods:{login:function(e){var o=this;this.loading=!0,n["a"].post("/auth/barber/login",e).then((function(e){if(o.loading=!1,200===e.data.codigo){var r=e.data.corpo;o.setBarber(r)}else o.setError(e.data.corpo)})).catch((function(e){window.console.log(e),o.setError("Não foi possível realizar login na aplicação!")}))},loginWithGoogle:function(e){var o=this;n["a"].post("/auth/barber/login-google",e).then((function(e){if(200===e.data.codigo){var r=e.data.corpo;o.setBarber(r)}else o.setError(e.data.corpo)})).catch((function(){return o.setError("Não foi possível realizar login na aplicação!")}))},setBarber:function(e){var o=localStorage.routePathAdmin;this.storeBarber(e);var r=this.getBarber();r?r.enabled?o&&o!==this.$route.path?this.goToPath(o):this.goTo("admin"):this.alertInfo="Seu cadastro ainda não foi confirmado!!<br>Verifique sua caixa de e-mail e confirme o seu cadastro.":this.setError("Não foi possível recuperar o token de acesso à aplicação!")},setError:function(e){this.alertInfo=null,this.loading=!1,this.showSnackbarErro(e)}}},u=d,p=r("2877"),h=Object(p["a"])(u,t,a,!1,null,null,null);o["default"]=h.exports},"6cd4":function(e,o,r){"use strict";r("b0c0");var t=r("2ce5"),a={mixins:[t["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(e){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",e)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"home"==this.$route.name?window.location=window.location.origin+"/":this.goTo("home")}}};o["a"]=a},"7b79":function(e,o,r){},"83c9":function(e,o,r){"use strict";var t=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("auth-template",{attrs:{title:"Login",alert:e.alertInfo,isBarber:e.isBarber,goBackRoute:"home"}},[r("form",{on:{submit:function(o){return o.preventDefault(),e.logar(o)}}},[r("div",{staticClass:"text-center"},[r("btn-primary",{attrs:{text:"Logar com e-mail e senha",loading:e.progressLoader},on:{clicked:e.openFormDialog}})],1),r("gbutton",{staticClass:"mt-4 mx-auto d-inline-block",attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.loginWithGoogle}},[e._v(" Logar com o Google ")]),r("div",{staticClass:"d-block mt-12"},[r("btn-secondary",{attrs:{text:"Recuperar senha",dark:""},on:{clicked:e.recoveryPassword}})],1),r("div",{staticClass:"mt-4 d-block"},[r("btn-secondary",{attrs:{text:"Cadastrar-se"},on:{clicked:function(o){return e.register()}}})],1)],1),r("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"350",persistent:""},model:{value:e.formDialog,callback:function(o){e.formDialog=o},expression:"formDialog"}},[r("v-card",{staticClass:"modal-content pa-4",attrs:{dark:""}},[r("div",{staticClass:"text-right"},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(o){e.formDialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),r("div",[r("div",{staticClass:"text-center"},[r("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),r("div",{staticClass:"form-group"},[r("v-text-field",{staticClass:"email",attrs:{id:"email",dark:"",label:"E-mail",rules:e.emailRules,success:e.isEmailValid(e.email),autocomplete:"new-password",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.focusToNext("password")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[r("v-icon",{staticClass:"outlined material-icons-outlined mr-2",attrs:{dense:""}},[e._v("mail")])]},proxy:!0}]),model:{value:e.email,callback:function(o){e.email=o},expression:"email"}})],1),r("div",{staticClass:"form-group"},[r("v-text-field",{ref:"password",attrs:{id:"password",success:e.isPasswordValid(e.email),dark:"",type:e.showPassword?"text":"password",label:"Senha",color:"success","append-icon":e.showPassword?"visibility_off":"remove_red_eye",rules:e.passwordRules,clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(o){e.showPassword=!e.showPassword},keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.enterClick(o)}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[r("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.password,callback:function(o){e.password=o},expression:"password"}})],1),r("div",{staticClass:"text-center mt-6"},[r("btn-primary",{staticClass:"btnLogin",attrs:{text:"LOGAR",loading:e.progressLoader},on:{clicked:e.login}})],1)])])],1)],1)},a=[],n=r("e571"),s=r.n(n),i=r("94bb"),l=r("a30b"),c=r("5cbb"),d=r("ef49"),u=r("2c3c"),p=r("2ce5"),h=r("5988"),b=r("6cd4"),g=r("be1f"),f={name:"Login",components:{AuthTemplate:i["a"],BtnPrimary:l["a"],BtnSecondary:c["a"],gbutton:s.a},mixins:[d["a"],u["a"],p["a"],h["a"],b["a"],g["a"]],props:{progressLoader:{default:!1},alertInfo:{default:null},isBarber:{default:!1}},data:function(){return{showPassword:!1,email:"",formDialog:!1,password:"",params:{client_id:"69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com"},renderParams:{height:45,width:200,theme:"dark"}}},methods:{loginWithGoogle:function(e){var o=e.getBasicProfile(),r={google_id:o.getId(),name:o.getName(),email:o.getEmail()};this.$emit("loginWithGoogle",r)},enterClick:function(){this.login()},isFormValid:function(){return!!this.isEmailValid(this.email)&&!!this.isPasswordValid(this.password)},login:function(){if(this.isFormValid()){var e={email:this.email,password:this.password};this.$emit("login",e)}else this.showSnackbarErro("Preencha todos os dados corretamente!")},openFormDialog:function(){this.formDialog=!0,setTimeout((function(){document.querySelector("#email").focus()}),500)},register:function(){this.isBarber?this.goTo("register-barber"):this.goTo("register")},recoveryPassword:function(){this.isBarber?this.goTo("barber-recovery-password"):this.goTo("recovery-password")}}},m=f,v=(r("e8ae"),r("2877")),B=r("6544"),S=r.n(B),w=r("8336"),k=r("b0af"),y=r("169a"),O=r("132d"),_=r("8654"),E=Object(v["a"])(m,t,a,!1,null,"310935a2",null);o["a"]=E.exports;S()(E,{VBtn:w["a"],VCard:k["a"],VDialog:y["a"],VIcon:O["a"],VTextField:_["a"]})},e8ae:function(e,o,r){"use strict";var t=r("7b79"),a=r.n(t);a.a},ef49:function(e,o,r){"use strict";var t=r("be3b"),a={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}}},methods:{storeBarbershop:function(e){this.$store.dispatch("BarbershopStore/store",e)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(e){var o=this;t["a"].get("/barbershop/".concat(e)).then((function(e){200===e.data.codigo?o.onGetBarbershopByIdOnServiceSuccess(e.data.corpo):o.onGetBarbershopByIdOnServiceError(e.data.corpo)})).catch((function(e){o.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopByIdOnServiceSuccess:function(e){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+e)},onGetBarbershopByIdOnServiceError:function(e){window.console.log("onGetBarbershopByIdOnServiceError: "+e)},getBarbershopAllOnService:function(){var e=this;t["a"].get("/barbershop").then((function(o){200===o.data.codigo?e.onGetBarbershopAllOnServiceSuccess(o.data.corpo):e.onGetBarbershopAllOnServiceError(o.data.corpo)})).catch((function(o){e.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(o)}))},onGetBarbershopAllOnServiceSuccess:function(e){window.console.log("onGetBarbershopAllOnServiceSuccess: "+e)},onGetBarbershopAllOnServiceError:function(e){window.console.log("onGetBarbershopAllOnServiceError: "+e)},updateBarbershopOnService:function(e,o){var r=this,a="barbershop/".concat(o);t["a"].put(a,e).then((function(e){200===e.data.codigo?r.onUpdateBarbershopOnServiceSuccess(e.data.corpo):r.onUpdateBarbershopOnServiceError(e.data.corpo)})).catch((function(e){window.console.log(e),r.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(e){window.console.log("onUpdateBarbershopOnServiceSuccess: "+e)},onUpdateBarbershopOnServiceError:function(e){window.console.log("onUpdateBarbershopOnServiceError: "+e)}}};o["a"]=a}}]);
//# sourceMappingURL=chunk-4f0cdc10.6792e276.js.map