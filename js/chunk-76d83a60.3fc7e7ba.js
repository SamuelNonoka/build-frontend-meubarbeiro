(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76d83a60"],{"0eb5":function(e,t,o){},"169a":function(e,t,o){"use strict";o("a4d3"),o("4de4"),o("4160"),o("caad"),o("45fc"),o("a9e3"),o("e439"),o("dbb4"),o("b64b"),o("2532"),o("498a"),o("159b");var r=o("2fa7"),n=(o("368e"),o("480e")),i=o("4ad4"),s=o("b848"),a=o("75eb"),c=o("e707"),l=o("e4d3"),d=o("21be"),u=o("f2e7"),h=o("a293"),v=o("58df"),f=o("d9bd"),p=o("80d2");function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(o,!0).forEach((function(t){Object(r["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m=Object(v["a"])(i["a"],s["a"],a["a"],c["a"],l["a"],d["a"],u["a"]);t["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(r["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r["a"])(e,"v-dialog--active",this.isActive),Object(r["a"])(e,"v-dialog--persistent",this.persistent),Object(r["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(r["a"])(e,"v-dialog--scrollable",this.scrollable),Object(r["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===p["v"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var o=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');o.length&&o[0].focus()}}},genTransition:function(){var e=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin}},this.showLazyContent((function(){return[e]}))):e},genContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(e.style={maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)}),this.$createElement("div",{class:this.contentClasses,attrs:b({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement("div",e,[this.$createElement(n["a"],{props:{root:!0,light:this.light,dark:this.dark}},this.getContentSlot())])])}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genTransition()])}})},"2c3c":function(e,t,o){"use strict";var r={methods:{focusToNext:function(e){this.$refs[e].focus()},setData:function(e,t){return this.$data[t]=e}}};t["a"]=r},"368e":function(e,t,o){},"3c93":function(e,t,o){},"615b":function(e,t,o){},"66e9":function(e,t,o){"use strict";var r=o("0eb5"),n=o.n(r);n.a},"6cd4":function(e,t,o){"use strict";o("b0c0");var r=o("2ce5"),n={mixins:[r["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(e){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",e)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"home"==this.$route.name?window.location=window.location.origin+"/":this.goTo("home")}}};t["a"]=n},"83c9":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("auth-template",{attrs:{title:"Login",alert:e.alertInfo&&!e.progressLoader,isBarber:e.isBarber,goBackRoute:"home",userNotEnabled:e.userNotEnabled},on:{sendMail:e.sendMail}},[o("form",{on:{submit:function(t){return t.preventDefault(),e.logar(t)}}},[o("div",{staticClass:"text-center"},[o("btn-primary",{attrs:{text:"Logar com e-mail e senha",loading:e.progressLoader},on:{clicked:e.openFormDialog}})],1),o("gbutton",{staticClass:"mt-4 mx-auto d-inline-block",attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.loginWithGoogle}},[e._v(" Logar com o Google ")]),o("div",{staticClass:"d-block mt-12"},[o("btn-secondary",{attrs:{text:"Recuperar senha",dark:""},on:{clicked:e.recoveryPassword}})],1),o("div",{staticClass:"mt-4 d-block"},[o("btn-secondary",{attrs:{text:"Cadastrar-se"},on:{clicked:function(t){return e.register()}}})],1)],1),o("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"350",persistent:""},model:{value:e.formDialog,callback:function(t){e.formDialog=t},expression:"formDialog"}},[o("v-card",{staticClass:"modal-content pa-4",attrs:{dark:""}},[o("div",{staticClass:"text-right"},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.formDialog=!1}}},[o("v-icon",[e._v("mdi-close")])],1)],1),o("div",[o("div",{staticClass:"text-center"},[o("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),o("div",{staticClass:"form-group"},[o("v-text-field",{staticClass:"email",attrs:{id:"email",dark:"",label:"E-mail",rules:e.emailRules,success:e.isEmailValid(e.email),autocomplete:"off",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("password")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[o("v-icon",{staticClass:"outlined material-icons-outlined mr-2",attrs:{dense:""}},[e._v("mail")])]},proxy:!0}]),model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),o("div",{staticClass:"form-group"},[o("v-text-field",{ref:"password",attrs:{id:"password",success:e.isPasswordValid(e.email),dark:"",type:e.showPassword?"text":"password",label:"Senha",color:"success","append-icon":e.showPassword?"visibility_off":"remove_red_eye",rules:e.passwordRules,clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(t){e.showPassword=!e.showPassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterClick(t)}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[o("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),o("div",{staticClass:"text-center mt-6"},[o("btn-primary",{staticClass:"btnLogin",attrs:{text:"LOGAR",loading:e.progressLoader},on:{clicked:e.login}})],1)])])],1)],1)},n=[],i=o("e571"),s=o.n(i),a=o("94bb"),c=o("a30b"),l=o("5cbb"),d=o("ef49"),u=o("2c3c"),h=o("2ce5"),v=o("5988"),f=o("6cd4"),p=o("be1f"),g={name:"Login",components:{AuthTemplate:a["a"],BtnPrimary:c["a"],BtnSecondary:l["a"],gbutton:s.a},mixins:[d["a"],u["a"],h["a"],v["a"],f["a"],p["a"]],props:{progressLoader:{default:!1},alertInfo:{default:!1},isBarber:{default:!1},userNotEnabled:{default:!1}},data:function(){return{showPassword:!1,email:"",formDialog:!1,password:"",params:{client_id:"69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com"},renderParams:{height:45,width:200,theme:"dark"}}},methods:{loginWithGoogle:function(e){var t=e.getBasicProfile(),o={google_id:t.getId(),name:t.getName(),email:t.getEmail()};this.$emit("loginWithGoogle",o)},enterClick:function(){this.login()},isFormValid:function(){return!!this.isEmailValid(this.email)&&!!this.isPasswordValid(this.password)},login:function(){if(this.isFormValid()){var e={email:this.email,password:this.password};this.$emit("login",e)}else this.showSnackbarErro("Preencha todos os dados corretamente!")},openFormDialog:function(){this.formDialog=!0,setTimeout((function(){document.querySelector("#email").focus()}),500)},register:function(){this.isBarber?this.goTo("register-barber"):this.goTo("register")},recoveryPassword:function(){this.isBarber?this.goTo("barber-recovery-password"):this.goTo("recovery-password")},sendMail:function(){this.$emit("sendMail")}}},b=g,m=(o("66e9"),o("2877")),y=o("6544"),w=o.n(y),O=o("8336"),S=o("b0af"),k=o("169a"),x=o("132d"),_=o("8654"),C=Object(m["a"])(b,r,n,!1,null,"1aeda080",null);t["a"]=C.exports;w()(C,{VBtn:O["a"],VCard:S["a"],VDialog:k["a"],VIcon:x["a"],VTextField:_["a"]})},"844e":function(e,t,o){},"8c08":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.overlay?o("div",{staticClass:"overlay",class:e.overlayVisible},[o("div",{staticClass:"overlay-content text-center"},[o("div",[o("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error&&e.icon&&!e.textLoaderSuccess,expression:"!loading && !error && icon && !textLoaderSuccess"}],attrs:{size:"80",color:"success"}},[e._v(" check_circle_outline ")]),o("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],attrs:{size:"80",color:"danger"}},[e._v(" error_outline ")]),o("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:"",size:"50",color:"primaryLight"}})],1),o("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"overlay-text"},[e._v(" "+e._s(e.textLoader)+" ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error,expression:"!loading && !error"}],staticClass:"overlay-text overlay-text-success successDark text-left"},[o("div",{staticClass:"icone"},[o("v-icon",[e._v("check")])],1),o("span",{staticClass:"ml-4 white--text",domProps:{innerHTML:e._s(e.textLoaderSuccess)}})]),o("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],staticClass:"overlay-text overlay-text-success",domProps:{innerHTML:e._s(e.textLoaderError)}})])]):e._e()},n=[],i={name:"Overlay",data:function(){return{overlay:!1,loading:!1,overlayVisible:"",textLoader:"",textLoaderSuccess:"",textLoaderError:"",error:!1,icon:!1}},methods:{showOverlay:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.textLoader=t||"Aguarde...",this.overlay=!0,this.loading=!0,setTimeout((function(){e.overlayVisible="visible"}),300)},hideOverlayError:function(e){this.error=!0,this.textLoaderError=e,this.hideOverlay(!0,!1)},hideOverlaySuccess:function(e){this.error=!1,this.textLoaderSuccess=e,this.hideOverlay(!0,!0)},hideOverlay:function(e,t){var o=this;this.icon=t,this.loading=!1,e?(setTimeout((function(){o.overlayVisible=""}),3e3),setTimeout((function(){o.error=!1,o.overlay=!1,o.loading=!1}),4e3)):(this.overlayVisible="",this.error=!1,this.overlay=!1,this.loading=!1)}}},s=i,a=(o("af93"),o("2877")),c=o("6544"),l=o.n(c),d=o("132d"),u=o("490a"),h=Object(a["a"])(s,r,n,!1,null,"6ac41342",null);t["a"]=h.exports;l()(h,{VIcon:d["a"],VProgressCircular:u["a"]})},"90a2":function(e,t,o){"use strict";o("7db0");var r=o("bf2d");function n(e,t){var o=t.modifiers||{},n=t.value,s="object"===Object(r["a"])(n),a=s?n.handler:n,c=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(e._observe){if(a&&(!o.quiet||e._observe.init)){var n=Boolean(t.find((function(e){return e.isIntersecting})));a(t,r,n)}e._observe.init&&o.once?i(e):e._observe.init=!0}}),n.options||{});e._observe={init:!1,observer:c},c.observe(e)}function i(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var s={inserted:n,unbind:i};t["a"]=s},af93:function(e,t,o){"use strict";var r=o("844e"),n=o.n(r);n.a},b0af:function(e,t,o){"use strict";o("a4d3"),o("4de4"),o("0481"),o("4160"),o("4069"),o("a9e3"),o("e439"),o("dbb4"),o("b64b"),o("159b");var r=o("2fa7"),n=(o("615b"),o("10d2")),i=o("297c"),s=o("1c87"),a=o("58df");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(o,!0).forEach((function(t){Object(r["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t["a"]=Object(a["a"])(i["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var e=l({},n["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),o=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(o,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},e571:function(e,t,o){!function(e,o){o(t)}(0,(function(e){"use strict";var t,o,r=function(e){return t?Promise.resolve(t):(o||(o=function(e){return new Promise((function(o,r){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{t=window.gapi.auth2.init(Object.assign({},e))}catch(e){r({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}o(t)}))}}))}(e)),o)},n=function(e,t){return e?e[t]():Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},i={load:function(e){return Promise.all([r(e),new Promise((function(e,t){if(!document.getElementById("auth2_script_id")){var o=document.createElement("script");o.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),o.setAttribute("async",!0),o.setAttribute("defer","defer"),o.setAttribute("id","auth2_script_id"),document.head.appendChild(o)}e()}))]).then((function(e){return e[0]}))},signIn:function(){return n(t,"signIn")},signOut:function(){return n(t,"signOut")},isSignedIn:function(){return n(t.isSignedIn,"get")},currentUser:function(){return n(t.currentUser,"get")},grantOfflineAccess:function(){return n(t,"grantOfflineAccess")}},s=0,a=function(e,t,o,r,n,i,s,a,c,l){"boolean"!=typeof s&&(c=a,a=s,s=!1);var d,u="function"==typeof o?o.options:o;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,n&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):t&&(d=s?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(u.functional){var h=u.render;u.render=function(e,t){return d.call(t),h(e,t)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,d):[d]}return o}({render:function(){var e=this.$createElement,t=this._self._c||e;return this.renderParams&&!this.logoutButton?t("div",{attrs:{id:this.id},on:{click:this.handleClick}}):t("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(s++)},methods:{handleClick:function(){var e=this,t=this.logoutButton?"signOut":"signIn";i[t]().then((function(t){return e.onSuccess(t)})).catch((function(t){return e.onFailure(t)}))}},mounted:function(){var e=this;i.load(this.params).then((function(){e.renderParams&&!1===e.logoutButton&&window.gapi.signin2.render(e.id,e.renderParams),i.isSignedIn()&&e.onCurrentUser(i.currentUser())})).catch((function(e){console.log(e)}))}},void 0,!1,void 0,void 0,void 0),c={install:function(e,t){e.GoogleAuth=i.load(t)}};e.GoogleLogin=a,e.LoaderPlugin=c,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}))},e707:function(e,t,o){"use strict";o("caad"),o("a9e3"),o("2532"),o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");var r=o("2fa7"),n=(o("3c93"),o("a9ad")),i=o("7560"),s=o("f2e7"),a=o("58df");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(o,!0).forEach((function(t){Object(r["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d=Object(a["a"])(n["a"],i["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return l({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),u=d,h=o("80d2"),v=o("2b0e");t["a"]=v["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new u({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(h["s"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[h["v"].up,h["v"].pageup],o=[h["v"].down,h["v"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!o.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),o=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var r=this.$refs.dialog,n=window.getSelection().anchorNode;return!(r&&this.hasScrollbar(r)&&this.isInside(n,r))||this.shouldScroll(r,o)}for(var i=0;i<t.length;i++){var s=t[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,o)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],o=e.target;while(o){if(t.push(o),"HTML"===o.tagName)return t.push(document),t.push(window),t;o=o.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ef49:function(e,t,o){"use strict";var r=o("be3b"),n={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}},barbershopState:function(){return this.$store.getters["BarbershopStore/barbershop"]}},methods:{storeBarbershop:function(e){this.$store.dispatch("BarbershopStore/store",e)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(e){var t=this;r["a"].get("/barbershop/".concat(e)).then((function(e){200===e.data.codigo?t.onGetBarbershopByIdOnServiceSuccess(e.data.corpo):t.onGetBarbershopByIdOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopByIdOnServiceSuccess:function(e){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+e)},onGetBarbershopByIdOnServiceError:function(e){window.console.log("onGetBarbershopByIdOnServiceError: "+e)},getBarbershopAllOnService:function(){var e=this;r["a"].get("/barbershop").then((function(t){200===t.data.codigo?e.onGetBarbershopAllOnServiceSuccess(t.data.corpo):e.onGetBarbershopAllOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopAllOnServiceSuccess:function(e){window.console.log("onGetBarbershopAllOnServiceSuccess: "+e)},onGetBarbershopAllOnServiceError:function(e){window.console.log("onGetBarbershopAllOnServiceError: "+e)},syncBarbershop:function(){var e=this;r["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(t){200===t.data.codigo&&e.storeBarbershop(t.data.corpo)}))},updateBarbershopOnService:function(e,t){var o=this,n="barbershop/".concat(t);r["a"].put(n,e).then((function(e){200===e.data.codigo?o.onUpdateBarbershopOnServiceSuccess(e.data.corpo):o.onUpdateBarbershopOnServiceError(e.data.corpo)})).catch((function(e){window.console.log(e),o.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(e){window.console.log("onUpdateBarbershopOnServiceSuccess: "+e)},onUpdateBarbershopOnServiceError:function(e){window.console.log("onUpdateBarbershopOnServiceError: "+e)}}};t["a"]=n}}]);
//# sourceMappingURL=chunk-76d83a60.3fc7e7ba.js.map