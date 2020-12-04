(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eb7892a"],{"09ba":function(e,r,o){"use strict";var t=o("be3b"),n=o("2ce5"),a={mixins:[n["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]||{id:null,barbershop_id:null,uuid:null,name:null,email:null,cpf:null,code:null,enabled:null,plan_id:null,plan_old_id:null,plan_due_date:null,plan_old_due_date:null,profile:null,phone:null,image_url:null,instagram_url:null,facebook_url:null,create_at:null,updated_at:null,deleted_at:null}}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(e){var r=this;t["a"].get("/barbershop/".concat(e,"/barber")).then((function(e){200===e.data.codigo?r.onGetBarberByBarbershopIdOnServiceSuccess(e.data.corpo):r.onGetBarberByBarbershopIdOnServiceError(e.data.corpo)})).catch((function(e){r.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarberByBarbershopIdOnServiceError:function(e){window.console.log(e)},onGetBarberByBarbershopIdOnServiceSuccess:function(e){window.console.log(JSON.stringify(e))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(e){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",e)}}};r["a"]=a},"15eb":function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("login-app",{attrs:{alertInfo:e.alertInfo,progressLoader:e.loading,isBarber:!0},on:{login:e.login}})},n=[],a=o("be3b"),s=o("09ba"),i=o("83c9"),c=o("5988"),l={name:"Login",components:{LoginApp:i["a"]},mixins:[s["a"],c["a"]],data:function(){return{alertInfo:null,loading:!1}},methods:{login:function(e){var r=this;this.loading=!0,a["a"].post("/auth/barber/login",e).then((function(e){if(r.loading=!1,200===e.data.codigo){var o=e.data.corpo;r.setBarber(o)}else r.setError(e.data.corpo)})).catch((function(e){window.console.log(e),r.setError("Não foi possível realizar login na aplicação!")}))},setBarber:function(e){var r=localStorage.routePathAdmin;this.storeBarber(e);var o=this.getBarber();o?o.enabled?r&&r!==this.$route.path?this.goToPath(r):this.goTo("admin"):this.alertInfo="Seu cadastro ainda não foi confirmado!!<br>Verifique sua caixa de e-mail e confirme o seu cadastro.":this.setError("Não foi possível recuperar o token de acesso à aplicação!")},setError:function(e){this.alertInfo=null,this.loading=!1,this.showSnackbarErro(e)}}},u=l,d=o("2877"),p=Object(d["a"])(u,t,n,!1,null,null,null);r["default"]=p.exports},"2c3c":function(e,r,o){"use strict";var t={methods:{focusToNext:function(e){document.querySelector("#".concat(e)).click()}}};r["a"]=t},"39db":function(e,r,o){"use strict";var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("v-btn",{staticClass:"font-weight-medium text-none py-3",attrs:{height:"auto",block:e.block,disabled:e.disabled,text:""},on:{click:e.clicked}},[e.icon?o("v-icon",[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" "),e.appendIcon?o("v-icon",[e._v(" "+e._s(e.appendIcon)+" ")]):e._e()],1)},n=[],a={name:"BtnText",props:{block:{default:!0},disabled:{default:!1},text:{required:!0},icon:{default:null},appendIcon:{default:""}},methods:{clicked:function(){this.$emit("clicked")}}},s=a,i=o("2877"),c=o("6544"),l=o.n(c),u=o("8336"),d=o("132d"),p=Object(i["a"])(s,t,n,!1,null,null,null);r["a"]=p.exports;l()(p,{VBtn:u["a"],VIcon:d["a"]})},"6cd4":function(e,r,o){"use strict";o("b0c0");var t=o("2ce5"),n={mixins:[t["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(e){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",e)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"home"==this.$route.name?window.location=window.location.origin+"/":this.goTo("home")}}};r["a"]=n},"83c9":function(e,r,o){"use strict";var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("template-auth",{attrs:{titulo:"Faça o seu login",progressLoader:e.progressLoader,alert:e.alertInfo,isBarber:e.isBarber}},[o("form",{on:{submit:function(r){return r.preventDefault(),e.logar(r)}}},[o("div",{staticClass:"form-group"},[o("v-text-field",{attrs:{id:"email",label:"E-mail",rules:e.emailRules,autocomplete:"off",required:""},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.focusToNext("password")}},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})],1),o("div",{staticClass:"form-group"},[o("v-text-field",{ref:"password",attrs:{type:e.showPassword?"text":"password",label:"Senha","append-icon":e.showPassword?"visibility_off":"remove_red_eye",rules:e.passwordRules,required:""},on:{"click:append":function(r){e.showPassword=!e.showPassword},keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.enterClick(r)}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),o("div",{staticClass:"text-center mt-4"},[o("btn-confirm",{attrs:{text:"Logar",disabled:e.btnDisabled},on:{clicked:e.login}})],1),o("div",{staticClass:"text-center mt-4"},[o("btn-text",{attrs:{text:"Recuperar senha",dark:""},on:{clicked:e.recoveryPassword}}),o("span",{staticClass:"d-block font-weight-light",attrs:{light:""}},[e._v("ou")]),o("btn-secondary",{staticClass:"mt-4",attrs:{text:"Cadastrar-se"},on:{clicked:function(r){return e.register()}}})],1),o("div",{staticClass:"mt-8"},[o("btn-text",{attrs:{text:"Voltar",icon:"chevron_left",dark:""},on:{clicked:function(r){return e.goTo("home")}}})],1)])])},n=[],a=o("96f9"),s=o("e7e3"),i=o("39db"),c=o("4f01"),l=o("ef49"),u=o("2c3c"),d=o("2ce5"),p=o("6cd4"),h=o("be1f"),b={name:"Login",components:{BtnConfirm:a["a"],BtnSecondary:s["a"],BtnText:i["a"],TemplateAuth:c["a"]},mixins:[l["a"],u["a"],d["a"],p["a"],h["a"]],props:{progressLoader:{default:!1},alertInfo:{default:null},isBarber:{default:!1}},data:function(){return{showPassword:!1,email:"",password:""}},computed:{btnDisabled:function(){return!this.isEmailValid(this.email)||!this.isPasswordValid(this.password)}},mounted:function(){document.querySelector("#email").focus()},methods:{enterClick:function(){this.btnAtivo?this.setError("Preencha todos os dados corretamente!"):this.login()},login:function(){var e={email:this.email,password:this.password};this.$emit("login",e)},register:function(){this.isBarber?this.goTo("register-barber"):this.goTo("register")},recoveryPassword:function(){this.isBarber?this.goTo("barber-recovery-password"):this.goTo("recovery-password")}}},f=b,g=o("2877"),v=o("6544"),B=o.n(v),m=o("8654"),S=Object(g["a"])(f,t,n,!1,null,null,null);r["a"]=S.exports;B()(S,{VTextField:m["a"]})},ef49:function(e,r,o){"use strict";var t=o("be3b"),n={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}}},methods:{storeBarbershop:function(e){this.$store.dispatch("BarbershopStore/store",e)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(e){var r=this;t["a"].get("/barbershop/".concat(e)).then((function(e){200===e.data.codigo?r.onGetBarbershopByIdOnServiceSuccess(e.data.corpo):r.onGetBarbershopByIdOnServiceError(e.data.corpo)})).catch((function(e){r.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopByIdOnServiceSuccess:function(e){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+e)},onGetBarbershopByIdOnServiceError:function(e){window.console.log("onGetBarbershopByIdOnServiceError: "+e)},getBarbershopAllOnService:function(){var e=this;t["a"].get("/barbershop").then((function(r){200===r.data.codigo?e.onGetBarbershopAllOnServiceSuccess(r.data.corpo):e.onGetBarbershopAllOnServiceError(r.data.corpo)})).catch((function(r){e.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(r)}))},onGetBarbershopAllOnServiceSuccess:function(e){window.console.log("onGetBarbershopAllOnServiceSuccess: "+e)},onGetBarbershopAllOnServiceError:function(e){window.console.log("onGetBarbershopAllOnServiceError: "+e)},updateBarbershopOnService:function(e,r){var o=this,n="barbershop/".concat(r);t["a"].put(n,e).then((function(e){200===e.data.codigo?o.onUpdateBarbershopOnServiceSuccess(e.data.corpo):o.onUpdateBarbershopOnServiceError(e.data.corpo)})).catch((function(e){window.console.log(e),o.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(e){window.console.log("onUpdateBarbershopOnServiceSuccess: "+e)},onUpdateBarbershopOnServiceError:function(e){window.console.log("onUpdateBarbershopOnServiceError: "+e)}}};r["a"]=n}}]);
//# sourceMappingURL=chunk-4eb7892a.bb58343b.js.map