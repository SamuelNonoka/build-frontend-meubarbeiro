(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07e7e4ba"],{"126c":function(e,t,r){},"243e":function(e,t,r){"use strict";var o=r("126c"),n=r.n(o);n.a},"26e9":function(e,t,r){"use strict";var o=r("23e7"),n=r("e8b5"),i=[].reverse,a=[1,2];o({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),i.call(this)}})},"2b3f":function(e,t,r){"use strict";var o=r("6acd"),n=r.n(o);n.a},"2c3c":function(e,t,r){"use strict";var o={methods:{focusToNext:function(e){this.$refs[e].focus()},setData:function(e,t){return this.$data[t]=e}}};t["a"]=o},"2ce5":function(e,t,r){"use strict";r("b0c0");var o={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.$route.name;e!=r&&(t?this.$router.push({name:e,params:t}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};t["a"]=o},"39db":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"font-weight-medium text-none py-3",attrs:{height:"auto",block:e.block,disabled:e.disabled,dark:e.dark,text:""},on:{click:e.clicked}},[e.icon?r("v-icon",[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" "),e.appendIcon?r("v-icon",[e._v(" "+e._s(e.appendIcon)+" ")]):e._e()],1)},n=[],i={name:"BtnText",props:{block:{default:!0},dark:{default:!1},disabled:{default:!1},text:{required:!0},icon:{default:null},appendIcon:{default:""}},methods:{clicked:function(){this.$emit("clicked")}}},a=i,s=r("2877"),c=r("6544"),l=r.n(c),u=r("8336"),d=r("132d"),h=Object(s["a"])(a,o,n,!1,null,null,null);t["a"]=h.exports;l()(h,{VBtn:u["a"],VIcon:d["a"]})},"3c93":function(e,t,r){},5329:function(e,t,r){},"5cbb":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"btn-secondary accent text-none",attrs:{height:"auto",dark:""},on:{click:e.clicked}},[e._v(" "+e._s(e.text)+" ")])},n=[],i={name:"BtnSecondary",props:{text:{required:!0}},methods:{clicked:function(){this.$emit("clicked")}}},a=i,s=(r("d02d"),r("2877")),c=r("6544"),l=r.n(c),u=r("8336"),d=Object(s["a"])(a,o,n,!1,null,"ff7cfb78",null);t["a"]=d.exports;l()(d,{VBtn:u["a"]})},"6acd":function(e,t,r){},"6cd4":function(e,t,r){"use strict";r("b0c0");var o=r("2ce5"),n={mixins:[o["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(e){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",e)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"home"==this.$route.name?window.location=window.location.origin+"/":this.goTo("home")}}};t["a"]=n},"83c9":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("auth-template",{attrs:{title:"Login",alert:e.alertInfo,isBarber:e.isBarber,goBackRoute:"home",userNotEnabled:e.userNotEnabled},on:{sendMail:e.sendMail}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.logar(t)}}},[r("div",{staticClass:"text-center"},[r("btn-primary",{attrs:{text:"Logar com e-mail e senha",loading:e.progressLoader},on:{clicked:e.openFormDialog}})],1),r("gbutton",{staticClass:"mt-4 mx-auto d-inline-block",attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.loginWithGoogle}},[e._v(" Logar com o Google ")]),r("div",{staticClass:"d-block mt-12"},[r("btn-secondary",{attrs:{text:"Recuperar senha",dark:""},on:{clicked:e.recoveryPassword}})],1),r("div",{staticClass:"mt-4 d-block"},[r("btn-secondary",{attrs:{text:"Cadastrar-se"},on:{clicked:function(t){return e.register()}}})],1)],1),r("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"350",persistent:""},model:{value:e.formDialog,callback:function(t){e.formDialog=t},expression:"formDialog"}},[r("v-card",{staticClass:"modal-content pa-4",attrs:{dark:""}},[r("div",{staticClass:"text-right"},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.formDialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),r("div",[r("div",{staticClass:"text-center"},[r("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),r("div",{staticClass:"form-group"},[r("v-text-field",{staticClass:"email",attrs:{id:"email",dark:"",label:"E-mail",rules:e.emailRules,success:e.isEmailValid(e.email),autocomplete:"off",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("password")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[r("v-icon",{staticClass:"outlined material-icons-outlined mr-2",attrs:{dense:""}},[e._v("mail")])]},proxy:!0}]),model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("div",{staticClass:"form-group"},[r("v-text-field",{ref:"password",attrs:{id:"password",success:e.isPasswordValid(e.email),dark:"",type:e.showPassword?"text":"password",label:"Senha",color:"success","append-icon":e.showPassword?"visibility_off":"remove_red_eye",rules:e.passwordRules,clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(t){e.showPassword=!e.showPassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterClick(t)}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[r("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("div",{staticClass:"text-center mt-6"},[r("btn-primary",{staticClass:"btnLogin",attrs:{text:"LOGAR",loading:e.progressLoader},on:{clicked:e.login}})],1)])])],1)],1)},n=[],i=r("e571"),a=r.n(i),s=r("94bb"),c=r("a30b"),l=r("5cbb"),u=r("ef49"),d=r("2c3c"),h=r("2ce5"),v=r("5988"),f=r("6cd4"),p=r("be1f"),m={name:"Login",components:{AuthTemplate:s["a"],BtnPrimary:c["a"],BtnSecondary:l["a"],gbutton:a.a},mixins:[u["a"],d["a"],h["a"],v["a"],f["a"],p["a"]],props:{progressLoader:{default:!1},alertInfo:{default:!1},isBarber:{default:!1},userNotEnabled:{default:!1}},data:function(){return{showPassword:!1,email:"",formDialog:!1,password:"",params:{client_id:"69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com"},renderParams:{height:45,width:200,theme:"dark"}}},methods:{loginWithGoogle:function(e){var t=e.getBasicProfile(),r={google_id:t.getId(),name:t.getName(),email:t.getEmail()};this.$emit("loginWithGoogle",r)},enterClick:function(){this.login()},isFormValid:function(){return!!this.isEmailValid(this.email)&&!!this.isPasswordValid(this.password)},login:function(){if(this.isFormValid()){var e={email:this.email,password:this.password};this.$emit("login",e)}else this.showSnackbarErro("Preencha todos os dados corretamente!")},openFormDialog:function(){this.formDialog=!0,setTimeout((function(){document.querySelector("#email").focus()}),500)},register:function(){this.isBarber?this.goTo("register-barber"):this.goTo("register")},recoveryPassword:function(){this.isBarber?this.goTo("barber-recovery-password"):this.goTo("recovery-password")},sendMail:function(){this.$emit("sendMail")}}},b=m,g=(r("2b3f"),r("2877")),y=r("6544"),w=r.n(y),_=r("8336"),S=r("b0af"),k=r("169a"),x=r("132d"),O=r("8654"),B=Object(g["a"])(b,o,n,!1,null,"b64a6d2e",null);t["a"]=B.exports;w()(B,{VBtn:_["a"],VCard:S["a"],VDialog:k["a"],VIcon:x["a"],VTextField:O["a"]})},"8c08":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.overlay?r("div",{staticClass:"overlay",class:e.overlayVisible},[r("div",{staticClass:"overlay-content text-center"},[r("div",[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error&&e.icon&&!e.textLoaderSuccess,expression:"!loading && !error && icon && !textLoaderSuccess"}],attrs:{size:"80",color:"success"}},[e._v(" check_circle_outline ")]),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],attrs:{size:"80",color:"danger"}},[e._v(" error_outline ")]),r("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:"",size:"50",color:"primaryLight"}})],1),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"overlay-text"},[e._v(" "+e._s(e.textLoader)+" ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error,expression:"!loading && !error"}],staticClass:"overlay-text overlay-text-success successDark text-left"},[r("div",{staticClass:"icone"},[r("v-icon",[e._v("check")])],1),r("span",{staticClass:"ml-4 white--text"},[e._v(e._s(e.textLoaderSuccess))])]),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],staticClass:"overlay-text overlay-text-success",domProps:{innerHTML:e._s(e.textLoaderError)}})])]):e._e()},n=[],i={name:"Overlay",data:function(){return{overlay:!1,loading:!1,overlayVisible:"",textLoader:"",textLoaderSuccess:"",textLoaderError:"",error:!1,icon:!1}},methods:{showOverlay:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.textLoader=t||"Aguarde...",this.overlay=!0,this.loading=!0,setTimeout((function(){e.overlayVisible="visible"}),300)},hideOverlayError:function(e){this.error=!0,this.textLoaderError=e,this.hideOverlay(!0,!1)},hideOverlaySuccess:function(e){this.error=!1,this.textLoaderSuccess=e,this.hideOverlay(!0,!0)},hideOverlay:function(e,t){var r=this;this.icon=t,this.loading=!1,e?(setTimeout((function(){r.overlayVisible=""}),3e3),setTimeout((function(){r.error=!1,r.overlay=!1,r.loading=!1}),4e3)):(this.overlayVisible="",this.error=!1,this.overlay=!1,this.loading=!1)}}},a=i,s=(r("d588"),r("2877")),c=r("6544"),l=r.n(c),u=r("132d"),d=r("490a"),h=Object(s["a"])(a,o,n,!1,null,"c6454eae",null);t["a"]=h.exports;l()(h,{VIcon:u["a"],VProgressCircular:d["a"]})},"8ec8":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert"},[e.icon?r("v-icon",{staticClass:"alert-icon"},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._t("default")],2)},n=[],i={name:"Alert",props:{icon:{default:"warning"}}},a=i,s=(r("9a9c"),r("2877")),c=r("6544"),l=r.n(c),u=r("132d"),d=Object(s["a"])(a,o,n,!1,null,"3f5f4d53",null);t["a"]=d.exports;l()(d,{VIcon:u["a"]})},"90a2":function(e,t,r){"use strict";r("7db0");var o=r("bf2d");function n(e,t){var r=t.modifiers||{},n=t.value,a="object"===Object(o["a"])(n),s=a?n.handler:n,c=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(e._observe){if(s&&(!r.quiet||e._observe.init)){var n=Boolean(t.find((function(e){return e.isIntersecting})));s(t,o,n)}e._observe.init&&r.once?i(e):e._observe.init=!0}}),n.options||{});e._observe={init:!1,observer:c},c.observe(e)}function i(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var a={inserted:n,unbind:i};t["a"]=a},"94bb":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-template"},[e.alert||e.userNotEnabled?r("div",[r("alert",[r("span",{domProps:{innerHTML:e._s(e.alert)}}),r("span",{directives:[{name:"show",rawName:"v-show",value:e.userNotEnabled,expression:"userNotEnabled"}]},[e._v(" Seu cadastro ainda não foi confirmado!!"),r("br"),e._v("Verifique sua caixa de e-mail e confirme o seu cadastro. ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.userNotEnabled,expression:"userNotEnabled"}],staticClass:"text-center"},[r("v-btn",{staticClass:"mt-6 mx-auto text-none",attrs:{dark:""},on:{click:e.sendMail}},[r("v-icon",{staticClass:"mr-2"},[e._v("send")]),e._v(" Reenviar e-mail ")],1)],1)]),r("btn-secondary",{staticClass:"btn-voltar mt-8",attrs:{text:"Voltar para o site"},on:{clicked:function(t){return e.goTo("home")}}})],1):r("div",{staticClass:"text-center"},[r("h1",{staticClass:"titulo"},[e._v(" "+e._s(e.title)+" ")]),r("img",{staticClass:"logo my-8",attrs:{src:"/logo.png"}}),e._t("default"),e.goBackRoute?r("div",{staticClass:"mt-6"},[r("btn-text",{staticClass:"d-inline-block",attrs:{text:"Voltar",dark:!0},on:{clicked:function(t){return e.goTo(e.goBackRoute)}}})],1):e._e()],2)])},n=[],i=r("8ec8"),a=r("39db"),s=r("5cbb"),c=r("2ce5"),l={components:{Alert:i["a"],BtnSecondary:s["a"],BtnText:a["a"]},mixins:[c["a"]],props:{alert:{default:null},goBackRoute:{default:null},title:{required:!0},userNotEnabled:{default:!1}},methods:{sendMail:function(){this.$emit("sendMail")}}},u=l,d=(r("243e"),r("2877")),h=r("6544"),v=r.n(h),f=r("8336"),p=r("132d"),m=Object(d["a"])(u,o,n,!1,null,"41b45f93",null);t["a"]=m.exports;v()(m,{VBtn:f["a"],VIcon:p["a"]})},"9a9c":function(e,t,r){"use strict";var o=r("5329"),n=r.n(o);n.a},"9d26":function(e,t,r){"use strict";var o=r("132d");t["a"]=o["a"]},a30b:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"btn-primary accent text-none",attrs:{height:"auto",dark:""},on:{click:e.clicked}},[e.loading?[r("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[e._v(" "+e._s(e.text)+" ")]],2)},n=[],i={name:"BtnPrimary",props:{loading:{default:!1},text:{required:!0}},methods:{clicked:function(){this.$emit("clicked")}}},a=i,s=(r("aad3"),r("2877")),c=r("6544"),l=r.n(c),u=r("8336"),d=r("490a"),h=Object(s["a"])(a,o,n,!1,null,"e393a35a",null);t["a"]=h.exports;l()(h,{VBtn:u["a"],VProgressCircular:d["a"]})},aad3:function(e,t,r){"use strict";var o=r("d05d"),n=r.n(o);n.a},af07:function(e,t,r){},b133:function(e,t,r){},be1f:function(e,t,r){"use strict";var o={data:function(){return{nameRules:[function(e){return!!e||"Informe o nome"},function(e){return!e||e.length<=50||"O nome deve ter no máximo 50 dígitos"}],emailRules:[function(e){return!!e||"Informe o e-mail"},function(e){return!e||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Informe um e-mail válido"}],passwordRules:[function(e){return!!e||"Informe a senha"},function(e){return!e||e.length>=6||"A senha precisa ter pelo meno 6 dígitos"},function(e){return!e||e.length<=10||"A senha deve ter no máximp 10 dígitos"}]}},methods:{isEmailValid:function(e){if(!e)return!1;var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!t.test(e)},isPhoneNumberValid:function(e){return e&&(15===e.length||16==e.length)},isPasswordValid:function(e){return!!e&&!(e.length<6||e.length>10)},isNameValid:function(e){return!(!e||e.length>50)}}};t["a"]=o},d02d:function(e,t,r){"use strict";var o=r("b133"),n=r.n(o);n.a},d05d:function(e,t,r){},d588:function(e,t,r){"use strict";var o=r("af07"),n=r.n(o);n.a},e571:function(e,t,r){!function(e,r){r(t)}(0,(function(e){"use strict";var t,r,o=function(e){return t?Promise.resolve(t):(r||(r=function(e){return new Promise((function(r,o){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{t=window.gapi.auth2.init(Object.assign({},e))}catch(e){o({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}r(t)}))}}))}(e)),r)},n=function(e,t){return e?e[t]():Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},i={load:function(e){return Promise.all([o(e),new Promise((function(e,t){if(!document.getElementById("auth2_script_id")){var r=document.createElement("script");r.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),r.setAttribute("async",!0),r.setAttribute("defer","defer"),r.setAttribute("id","auth2_script_id"),document.head.appendChild(r)}e()}))]).then((function(e){return e[0]}))},signIn:function(){return n(t,"signIn")},signOut:function(){return n(t,"signOut")},isSignedIn:function(){return n(t.isSignedIn,"get")},currentUser:function(){return n(t.currentUser,"get")},grantOfflineAccess:function(){return n(t,"grantOfflineAccess")}},a=0,s=function(e,t,r,o,n,i,a,s,c,l){"boolean"!=typeof a&&(c=s,s=a,a=!1);var u,d="function"==typeof r?r.options:r;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),o&&(d._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=u):t&&(u=a?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(d.functional){var h=d.render;d.render=function(e,t){return u.call(t),h(e,t)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,u):[u]}return r}({render:function(){var e=this.$createElement,t=this._self._c||e;return this.renderParams&&!this.logoutButton?t("div",{attrs:{id:this.id},on:{click:this.handleClick}}):t("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(a++)},methods:{handleClick:function(){var e=this,t=this.logoutButton?"signOut":"signIn";i[t]().then((function(t){return e.onSuccess(t)})).catch((function(t){return e.onFailure(t)}))}},mounted:function(){var e=this;i.load(this.params).then((function(){e.renderParams&&!1===e.logoutButton&&window.gapi.signin2.render(e.id,e.renderParams),i.isSignedIn()&&e.onCurrentUser(i.currentUser())})).catch((function(e){console.log(e)}))}},void 0,!1,void 0,void 0,void 0),c={install:function(e,t){e.GoogleAuth=i.load(t)}};e.GoogleLogin=s,e.LoaderPlugin=c,e.default=s,Object.defineProperty(e,"__esModule",{value:!0})}))},e707:function(e,t,r){"use strict";r("caad"),r("a9e3"),r("2532"),r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var o=r("2fa7"),n=(r("3c93"),r("a9ad")),i=r("7560"),a=r("f2e7"),s=r("58df");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=Object(s["a"])(n["a"],i["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return l({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),d=u,h=r("80d2"),v=r("2b0e");t["a"]=v["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(h["s"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[h["v"].up,h["v"].pageup],r=[h["v"].down,h["v"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!r.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),r=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var o=this.$refs.dialog,n=window.getSelection().anchorNode;return!(o&&this.hasScrollbar(o)&&this.isInside(n,o))||this.shouldScroll(o,r)}for(var i=0;i<t.length;i++){var a=t[i];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return this.shouldScroll(a,r)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],r=e.target;while(r){if(t.push(r),"HTML"===r.tagName)return t.push(document),t.push(window),t;r=r.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ef49:function(e,t,r){"use strict";var o=r("be3b"),n={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}},barbershopState:function(){return this.$store.getters["BarbershopStore/barbershop"]}},methods:{storeBarbershop:function(e){this.$store.dispatch("BarbershopStore/store",e)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(e){var t=this;o["a"].get("/barbershop/".concat(e)).then((function(e){200===e.data.codigo?t.onGetBarbershopByIdOnServiceSuccess(e.data.corpo):t.onGetBarbershopByIdOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopByIdOnServiceSuccess:function(e){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+e)},onGetBarbershopByIdOnServiceError:function(e){window.console.log("onGetBarbershopByIdOnServiceError: "+e)},getBarbershopAllOnService:function(){var e=this;o["a"].get("/barbershop").then((function(t){200===t.data.codigo?e.onGetBarbershopAllOnServiceSuccess(t.data.corpo):e.onGetBarbershopAllOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopAllOnServiceSuccess:function(e){window.console.log("onGetBarbershopAllOnServiceSuccess: "+e)},onGetBarbershopAllOnServiceError:function(e){window.console.log("onGetBarbershopAllOnServiceError: "+e)},syncBarbershop:function(){var e=this;o["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(t){200===t.data.codigo&&e.storeBarbershop(t.data.corpo)}))},updateBarbershopOnService:function(e,t){var r=this,n="barbershop/".concat(t);o["a"].put(n,e).then((function(e){200===e.data.codigo?r.onUpdateBarbershopOnServiceSuccess(e.data.corpo):r.onUpdateBarbershopOnServiceError(e.data.corpo)})).catch((function(e){window.console.log(e),r.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(e){window.console.log("onUpdateBarbershopOnServiceSuccess: "+e)},onUpdateBarbershopOnServiceError:function(e){window.console.log("onUpdateBarbershopOnServiceError: "+e)}}};t["a"]=n}}]);
//# sourceMappingURL=chunk-07e7e4ba.a14fee6d.js.map