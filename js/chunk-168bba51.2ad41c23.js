(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-168bba51"],{"13de":function(e,t,n){},"169a":function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("45fc"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("498a"),n("159b");var o=n("2fa7"),r=(n("368e"),n("480e")),i=n("4ad4"),s=n("b848"),a=n("75eb"),c=n("e707"),l=n("e4d3"),d=n("21be"),u=n("f2e7"),h=n("a293"),f=n("58df"),p=n("d9bd"),v=n("80d2");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=Object(f["a"])(i["a"],s["a"],a["a"],c["a"],l["a"],d["a"],u["a"]);t["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(o["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(e,"v-dialog--active",this.isActive),Object(o["a"])(e,"v-dialog--persistent",this.persistent),Object(o["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(e,"v-dialog--scrollable",this.scrollable),Object(o["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===v["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genTransition:function(){var e=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin}},this.showLazyContent((function(){return[e]}))):e},genContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(e.style={maxWidth:"none"===this.maxWidth?void 0:Object(v["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["f"])(this.width)}),this.$createElement("div",{class:this.contentClasses,attrs:g({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement("div",e,[this.$createElement(r["a"],{props:{root:!0,light:this.light,dark:this.dark}},this.getContentSlot())])])}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genTransition()])}})},"2c3c":function(e,t,n){"use strict";var o={methods:{focusToNext:function(e){this.$refs[e].focus()}}};t["a"]=o},"368e":function(e,t,n){},"3c93":function(e,t,n){},"615b":function(e,t,n){},"6cd4":function(e,t,n){"use strict";n("b0c0");var o=n("2ce5"),r={mixins:[o["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(e){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",e)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"home"==this.$route.name?window.location=window.location.origin+"/":this.goTo("home")}}};t["a"]=r},"83c9":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("auth-template",{attrs:{title:"Login",alert:e.alertInfo,isBarber:e.isBarber,goBackRoute:"home"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.logar(t)}}},[n("div",{staticClass:"text-center"},[n("btn-primary",{attrs:{text:"Logar com e-mail e senha",loading:e.progressLoader},on:{clicked:e.openFormDialog}})],1),n("gbutton",{staticClass:"mt-4 mx-auto d-inline-block",attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.loginWithGoogle}},[e._v(" Logar com o Google ")]),n("div",{staticClass:"d-block mt-12"},[n("btn-secondary",{attrs:{text:"Recuperar senha",dark:""},on:{clicked:e.recoveryPassword}})],1),n("div",{staticClass:"mt-4 d-block"},[n("btn-secondary",{attrs:{text:"Cadastrar-se"},on:{clicked:function(t){return e.register()}}})],1)],1),n("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"350",persistent:""},model:{value:e.formDialog,callback:function(t){e.formDialog=t},expression:"formDialog"}},[n("v-card",{staticClass:"modal-content pa-4",attrs:{dark:""}},[n("div",{staticClass:"text-right"},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.formDialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("div",[n("div",{staticClass:"text-center"},[n("img",{staticClass:"logo",attrs:{src:"/logo.png"}})]),n("div",{staticClass:"form-group"},[n("v-text-field",{staticClass:"email",attrs:{id:"email",dark:"",label:"E-mail",rules:e.emailRules,success:e.isEmailValid(e.email),autocomplete:"off",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusToNext("password")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[n("v-icon",{staticClass:"outlined material-icons-outlined mr-2",attrs:{dense:""}},[e._v("mail")])]},proxy:!0}]),model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("div",{staticClass:"form-group"},[n("v-text-field",{ref:"password",attrs:{id:"password",success:e.isPasswordValid(e.email),dark:"",type:e.showPassword?"text":"password",label:"Senha",color:"success","append-icon":e.showPassword?"visibility_off":"remove_red_eye",rules:e.passwordRules,clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(t){e.showPassword=!e.showPassword},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterClick(t)}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[n("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("div",{staticClass:"text-center mt-6"},[n("btn-primary",{staticClass:"btnLogin",attrs:{text:"LOGAR",loading:e.progressLoader},on:{clicked:e.login}})],1)])])],1)],1)},r=[],i=n("e571"),s=n.n(i),a=n("94bb"),c=n("a30b"),l=n("5cbb"),d=n("ef49"),u=n("2c3c"),h=n("2ce5"),f=n("5988"),p=n("6cd4"),v=n("be1f"),b={name:"Login",components:{AuthTemplate:a["a"],BtnPrimary:c["a"],BtnSecondary:l["a"],gbutton:s.a},mixins:[d["a"],u["a"],h["a"],f["a"],p["a"],v["a"]],props:{progressLoader:{default:!1},alertInfo:{default:!1},isBarber:{default:!1}},data:function(){return{showPassword:!1,email:"",formDialog:!1,password:"",params:{client_id:"69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com"},renderParams:{height:45,width:200,theme:"dark"}}},methods:{loginWithGoogle:function(e){var t=e.getBasicProfile(),n={google_id:t.getId(),name:t.getName(),email:t.getEmail()};this.$emit("loginWithGoogle",n)},enterClick:function(){this.login()},isFormValid:function(){return!!this.isEmailValid(this.email)&&!!this.isPasswordValid(this.password)},login:function(){if(this.isFormValid()){var e={email:this.email,password:this.password};this.$emit("login",e)}else this.showSnackbarErro("Preencha todos os dados corretamente!")},openFormDialog:function(){this.formDialog=!0,setTimeout((function(){document.querySelector("#email").focus()}),500)},register:function(){this.isBarber?this.goTo("register-barber"):this.goTo("register")},recoveryPassword:function(){this.isBarber?this.goTo("barber-recovery-password"):this.goTo("recovery-password")}}},g=b,m=(n("d182"),n("2877")),y=n("6544"),w=n.n(y),O=n("8336"),S=n("b0af"),k=n("169a"),B=n("132d"),C=n("8654"),_=Object(m["a"])(g,o,r,!1,null,"2ffd4d4d",null);t["a"]=_.exports;w()(_,{VBtn:O["a"],VCard:S["a"],VDialog:k["a"],VIcon:B["a"],VTextField:C["a"]})},"90a2":function(e,t,n){"use strict";n("7db0");var o=n("bf2d");function r(e,t){var n=t.modifiers||{},r=t.value,s="object"===Object(o["a"])(r),a=s?r.handler:r,c=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(e._observe){if(a&&(!n.quiet||e._observe.init)){var r=Boolean(t.find((function(e){return e.isIntersecting})));a(t,o,r)}e._observe.init&&n.once?i(e):e._observe.init=!0}}),r.options||{});e._observe={init:!1,observer:c},c.observe(e)}function i(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var s={inserted:r,unbind:i};t["a"]=s},b0af:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("0481"),n("4160"),n("4069"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b");var o=n("2fa7"),r=(n("615b"),n("10d2")),i=n("297c"),s=n("1c87"),a=n("58df");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]=Object(a["a"])(i["a"],s["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},r["a"].options.computed.classes.call(this))},styles:function(){var e=l({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),n=t.tag,o=t.data;return o.style=this.styles,this.isClickable&&(o.attrs=o.attrs||{},o.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,o),[this.genProgress(),this.$slots.default])}})},d182:function(e,t,n){"use strict";var o=n("13de"),r=n.n(o);r.a},e571:function(e,t,n){!function(e,n){n(t)}(0,(function(e){"use strict";var t,n,o=function(e){return t?Promise.resolve(t):(n||(n=function(e){return new Promise((function(n,o){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{t=window.gapi.auth2.init(Object.assign({},e))}catch(e){o({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}n(t)}))}}))}(e)),n)},r=function(e,t){return e?e[t]():Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},i={load:function(e){return Promise.all([o(e),new Promise((function(e,t){if(!document.getElementById("auth2_script_id")){var n=document.createElement("script");n.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),n.setAttribute("async",!0),n.setAttribute("defer","defer"),n.setAttribute("id","auth2_script_id"),document.head.appendChild(n)}e()}))]).then((function(e){return e[0]}))},signIn:function(){return r(t,"signIn")},signOut:function(){return r(t,"signOut")},isSignedIn:function(){return r(t.isSignedIn,"get")},currentUser:function(){return r(t.currentUser,"get")},grantOfflineAccess:function(){return r(t,"grantOfflineAccess")}},s=0,a=function(e,t,n,o,r,i,s,a,c,l){"boolean"!=typeof s&&(c=a,a=s,s=!1);var d,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),o&&(u._scopeId=o),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):t&&(d=s?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(u.functional){var h=u.render;u.render=function(e,t){return d.call(t),h(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,d):[d]}return n}({render:function(){var e=this.$createElement,t=this._self._c||e;return this.renderParams&&!this.logoutButton?t("div",{attrs:{id:this.id},on:{click:this.handleClick}}):t("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(s++)},methods:{handleClick:function(){var e=this,t=this.logoutButton?"signOut":"signIn";i[t]().then((function(t){return e.onSuccess(t)})).catch((function(t){return e.onFailure(t)}))}},mounted:function(){var e=this;i.load(this.params).then((function(){e.renderParams&&!1===e.logoutButton&&window.gapi.signin2.render(e.id,e.renderParams),i.isSignedIn()&&e.onCurrentUser(i.currentUser())})).catch((function(e){console.log(e)}))}},void 0,!1,void 0,void 0,void 0),c={install:function(e,t){e.GoogleAuth=i.load(t)}};e.GoogleLogin=a,e.LoaderPlugin=c,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}))},e707:function(e,t,n){"use strict";n("caad"),n("a9e3"),n("2532"),n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var o=n("2fa7"),r=(n("3c93"),n("a9ad")),i=n("7560"),s=n("f2e7"),a=n("58df");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=Object(a["a"])(r["a"],i["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return l({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),u=d,h=n("80d2"),f=n("2b0e");t["a"]=f["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new u({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(h["p"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[h["r"].up,h["r"].pageup],n=[h["r"].down,h["r"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),n=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var o=this.$refs.dialog,r=window.getSelection().anchorNode;return!(o&&this.hasScrollbar(o)&&this.isInside(r,o))||this.shouldScroll(o,n)}for(var i=0;i<t.length;i++){var s=t[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,n)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ef49:function(e,t,n){"use strict";var o=n("be3b"),r={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}}},methods:{storeBarbershop:function(e){this.$store.dispatch("BarbershopStore/store",e)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(e){var t=this;o["a"].get("/barbershop/".concat(e)).then((function(e){200===e.data.codigo?t.onGetBarbershopByIdOnServiceSuccess(e.data.corpo):t.onGetBarbershopByIdOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopByIdOnServiceSuccess:function(e){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+e)},onGetBarbershopByIdOnServiceError:function(e){window.console.log("onGetBarbershopByIdOnServiceError: "+e)},getBarbershopAllOnService:function(){var e=this;o["a"].get("/barbershop").then((function(t){200===t.data.codigo?e.onGetBarbershopAllOnServiceSuccess(t.data.corpo):e.onGetBarbershopAllOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopAllOnServiceSuccess:function(e){window.console.log("onGetBarbershopAllOnServiceSuccess: "+e)},onGetBarbershopAllOnServiceError:function(e){window.console.log("onGetBarbershopAllOnServiceError: "+e)},syncBarbershop:function(){var e=this;o["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(t){200===t.data.codigo&&e.storeBarbershop(t.data.corpo)}))},updateBarbershopOnService:function(e,t){var n=this,r="barbershop/".concat(t);o["a"].put(r,e).then((function(e){200===e.data.codigo?n.onUpdateBarbershopOnServiceSuccess(e.data.corpo):n.onUpdateBarbershopOnServiceError(e.data.corpo)})).catch((function(e){window.console.log(e),n.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(e){window.console.log("onUpdateBarbershopOnServiceSuccess: "+e)},onUpdateBarbershopOnServiceError:function(e){window.console.log("onUpdateBarbershopOnServiceError: "+e)}}};t["a"]=r}}]);
//# sourceMappingURL=chunk-168bba51.2ad41c23.js.map