(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d5502e2"],{"0789":function(t,e,n){"use strict";n("99af");var o=n("d9f7");function i(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return(t=Array()).concat.apply(t,[e].concat(o))}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var r="transition".concat(n.props.group?"-group":""),s={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(s.on.leave=i(s.on.leave,(function(t){return t.style.display="none"}))),e(r,Object(o["a"])(n.data,s),n.children)}}}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,i){return n("transition",Object(o["a"])(i.data,{props:{name:t},on:e}),i.children)}}}var a=n("2fa7"),c=n("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",o="offset".concat(Object(c["w"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(a["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var i=e._initialStyle,r="".concat(e[o],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=i.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave:function(t){t._initialStyle=Object(a["a"])({transition:"",visibility:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[o],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:i,leaveCancelled:i};function i(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}};n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return v}));r("carousel-transition"),r("carousel-reverse-transition");var u=r("tab-transition"),d=r("tab-reverse-transition"),h=(r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("fade-transition")),f=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),p=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),s("expand-transition",l())),v=s("expand-x-transition",l("",!0))},"0798":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("e439"),n("dbb4"),n("b64b"),n("159b");var o=n("2fa7"),i=(n("0c18"),n("10d2")),r=n("afdd"),s=n("9d26"),a=n("f2e7"),c=n("7560"),l=n("f40d"),u=n("58df"),d=n("d9bd");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(u["a"])(i["a"],a["a"],l["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(o["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(s["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(s["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=f({},i["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"09ba":function(t,e,n){"use strict";var o=n("be3b"),i=n("2ce5"),r={mixins:[i["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]||{id:null,barbershop_id:null,uuid:null,name:null,email:null,cpf:null,code:null,enabled:null,plan_id:null,plan_old_id:null,plan_due_date:null,plan_old_due_date:null,profile:null,phone:null,image_url:null,instagram_url:null,facebook_url:null,create_at:null,updated_at:null,deleted_at:null}}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(t){var e=this;o["a"].get("/barbershop/".concat(t,"/barber")).then((function(t){200===t.data.codigo?e.onGetBarberByBarbershopIdOnServiceSuccess(t.data.corpo):e.onGetBarberByBarbershopIdOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarberByBarbershopIdOnServiceError:function(t){window.console.log(t)},onGetBarberByBarbershopIdOnServiceSuccess:function(t){window.console.log(JSON.stringify(t))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(t){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",t)}}};e["a"]=r},"0c18":function(t,e,n){},"169a":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("45fc"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("498a"),n("159b");var o=n("2fa7"),i=(n("368e"),n("480e")),r=n("4ad4"),s=n("b848"),a=n("75eb"),c=n("e707"),l=n("e4d3"),u=n("21be"),d=n("f2e7"),h=n("a293"),f=n("58df"),p=n("d9bd"),v=n("80d2");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=Object(f["a"])(r["a"],s["a"],a["a"],c["a"],l["a"],u["a"],d["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(o["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o["a"])(t,"v-dialog--active",this.isActive),Object(o["a"])(t,"v-dialog--persistent",this.persistent),Object(o["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(o["a"])(t,"v-dialog--scrollable",this.scrollable),Object(o["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===v["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin}},this.showLazyContent((function(){return[t]}))):t},genContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(t.style={maxWidth:"none"===this.maxWidth?void 0:Object(v["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["f"])(this.width)}),this.$createElement("div",{class:this.contentClasses,attrs:g({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement("div",t,[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},this.getContentSlot())])])}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genTransition()])}})},"20f6":function(t,e,n){},"26e9":function(t,e,n){"use strict";var o=n("23e7"),i=n("e8b5"),r=[].reverse,s=[1,2];o({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),r.call(this)}})},"2fa4":function(t,e,n){"use strict";n("20f6");var o=n("80d2");e["a"]=Object(o["h"])("spacer","div","v-spacer")},"368e":function(t,e,n){},"4cd0":function(t,e,n){"use strict";var o=n("b78f"),i=n.n(o);i.a},5988:function(t,e,n){"use strict";var o={data:function(){return{snackbarConfig:{text:"",type:"success"}}},methods:{closeSnackbar:function(){this.snackbar=null},showSnackbar:function(t){this.snackbarConfig.type="success",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))},showSnackbarErro:function(t){this.snackbarConfig.type="error",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))}}};e["a"]=o},"5f08":function(t,e,n){"use strict";n("99af"),n("a9e3");var o={methods:{formatDateToDatePtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,o=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(e,"/").concat(n,"/").concat(o)},formatDateToDateEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,o=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(o,"-").concat(n,"-").concat(e)},formatDateTimeToStringPtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,o=t.getFullYear(),i=t.getHours(),r=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(i)<10&&(i="0".concat(i)),Number(r)<10&&(r="0".concat(r)),"".concat(e,"/").concat(n,"/").concat(o," ").concat(i,":").concat(r)}}};e["a"]=o},"5ff8":function(t,e,n){"use strict";n("a15b"),n("13d5"),n("26e9"),n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276");var o={methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){return t?(t=t.replace("R$ ",""),t=t.split(".").join(""),t=t.split(",").join("."),t):t},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),n=0,o=e.reduce((function(t,e){return n++,3==n?t=","+t:n%3===0&&(t="."+t),String(e)+String(t)}),"");return o},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),t=this.removeSimbols(t),t=this.removeAccents(t),t):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?(t=t.replace(/[!@£$%^&*()_+?/*."']+/,""),t):t}}};e["a"]=o},"81f2":function(t,e,n){"use strict";var o=n("a924"),i=n.n(o);i.a},"8adc":function(t,e,n){},"9d26":function(t,e,n){"use strict";var o=n("132d");e["a"]=o["a"]},a434:function(t,e,n){"use strict";var o=n("23e7"),i=n("23cb"),r=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=Math.max,h=Math.min,f=9007199254740991,p="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var n,o,u,v,b,g,m=a(this),y=s(m.length),S=i(t,y),w=arguments.length;if(0===w?n=o=0:1===w?(n=0,o=y-S):(n=w-2,o=h(d(r(e),0),y-S)),y+n-o>f)throw TypeError(p);for(u=c(m,o),v=0;v<o;v++)b=S+v,b in m&&l(u,v,m[b]);if(u.length=o,n<o){for(v=S;v<y-o;v++)b=v+o,g=v+n,b in m?m[g]=m[b]:delete m[g];for(v=y;v>y-o+n;v--)delete m[v-1]}else if(n>o)for(v=y-o;v>S;v--)b=v+o-1,g=v+n-1,b in m?m[g]=m[b]:delete m[g];for(v=0;v<n;v++)m[v+S]=arguments[v+2];return m.length=y-o+n,u}})},a924:function(t,e,n){},afdd:function(t,e,n){"use strict";var o=n("8336");e["a"]=o["a"]},b305:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"approval"},[0===t.schedules.length?n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{height:"calc(100vh - 100px)"}},[n("v-alert",{staticClass:"py-4 px-8",attrs:{type:"info",color:"primary"}},[t._v(" Não há agendamentos para serem aprovados ")])],1):n("v-row",{staticClass:"pending"},t._l(t.schedules,(function(e,o){return n("v-col",{key:o,staticClass:"text-center",attrs:{cols:"6",sm:"4",md:"3",lg:"auto"}},[n("div",{staticClass:"list-item primaryLight py-4 px-6",class:{ativo:e.ativo},on:{click:function(n){return t.chooseSchedule(e)}}},[n("strong",{staticClass:"d-block"},[t._v(" "+t._s(t.formatDateTimeToStringPtBr(new Date(e.start_date)))+" ")]),n("span",{staticClass:"d-block"},[t._v(" "+t._s(e.user.name)+" ")])])])})),1),n("schedule-dialog",{ref:"scheduleDialog",on:{onApproved:t.onApproved,onRepproved:t.onRepproved}})],1)},i=[],r=(n("c740"),n("a434"),n("be3b")),s=n("09ba"),a=n("5f08"),c=n("fd3b"),l=n("5988"),u=n("5ff8"),d={name:"Approval",components:{ScheduleDialog:c["a"]},mixins:[s["a"],a["a"],l["a"],u["a"]],data:function(){return{schedules:[]}},mounted:function(){this.getSchedules()},methods:{chooseSchedule:function(t){this.$refs.scheduleDialog.show(t)},getSchedules:function(){var t=this;r["a"].get("/schedule/barbershop/".concat(this.barber.barbershop_id,"/pending")).then((function(e){200===e.data.codigo?t.schedules=e.data.corpo:t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError(e)}))},setError:function(t){this.showSnackbarErro(t)},onApproved:function(t){var e=this.schedules.findIndex((function(e){return e.id===t.id}));this.schedules.splice(e,1)},onRepproved:function(t){var e=this.schedules.findIndex((function(e){return e.id===t.id}));this.schedules.splice(e,1)}}},h=d,f=(n("4cd0"),n("2877")),p=n("6544"),v=n.n(p),b=n("0798"),g=n("62ad"),m=n("0fd9"),y=Object(f["a"])(h,o,i,!1,null,"4037b88c",null);e["default"]=y.exports;v()(y,{VAlert:b["a"],VCol:g["a"],VRow:m["a"]})},b78f:function(t,e,n){},c740:function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").findIndex,r=n("44d2"),s="findIndex",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),o({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},cc20:function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var o=n("e587"),i=n("2fa7"),r=(n("8adc"),n("58df")),s=n("0789"),a=n("9d26"),c=n("a9ad"),l=n("4e82"),u=n("7560"),d=n("f2e7"),h=n("1c87"),f=n("af2b"),p=n("d9bd");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(r["a"])(c["a"],f["a"],h["a"],u["a"],Object(l["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return b({"v-chip":!0},h["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var n=Object(o["a"])(e,2),i=n[0],r=n[1];t.$attrs.hasOwnProperty(i)&&Object(p["a"])(i,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(a["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose:function(){var t=this;return this.$createElement(a["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,i=n.data;i.attrs=b({},i.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex}),i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,i),e)}})},f035:function(t,e,n){"use strict";n("a9e3");var o=n("be3b"),i={methods:{getStatusText:function(t){return Number(t)===Number(this.$SCHEDULE_STATUS.APROVADO)?"Agendado":Number(t)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"Cancelado":Number(t)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"Cancelado pelo barbeiro":"Aguardando aprovação do barbeiro"},getScheduleById:function(t){var e=this;o["a"].get("/schedule/".concat(t)).then((function(t){200===t.data.codigo?e.onGetScheduleByIdSuccess(t.data.corpo):e.onGetScheduleByIdError(t.data.corpo)})).catch((function(t){e.onGetScheduleByIdError("Não foi possível recuperar o agendamento!"),window.console.log(t)}))},onGetScheduleByIdSuccess:function(t){window.console.log("onGetScheduleByIdSuccess: ".concat(t))},onGetScheduleByIdError:function(t){window.console.log("onGetScheduleByIdError: ".concat(t))},getScheduleByUserId:function(t){var e=this;o["a"].get("/schedule/user/".concat(t)).then((function(t){200===t.data.codigo?e.onGetScheduleByUserIdSuccess(t.data.corpo):e.onGetScheduleByUserIdError(t.data.corpo)})).catch((function(t){e.onGetScheduleByUserIdError("Não foi possível recuperar os agendamentos!"),window.console.log(t)}))},onGetScheduleByUserIdSuccess:function(t){window.console.log("onGetScheduleByUserIdSuccess: ".concat(t))},onGetScheduleByUserIdError:function(t){window.console.log("onGetScheduleByUserIdError: ".concat(t))},storeSchedule:function(t){var e=this;o["a"].post("/schedule",t).then((function(t){200===t.data.codigo?e.onStoreScheduleSuccess(t.data.corpo):e.onStoreScheduleError(t.data.corpo)})).catch((function(t){e.onStoreScheduleError("Não foi possível fazer o agendamento!"),window.console.log(t)}))},onStoreScheduleSuccess:function(t){window.console.log("onStoreScheduleSuccess: ".concat(t))},onStoreScheduleError:function(t){window.console.log("onStoreScheduleError: ".concat(t))}}};e["a"]=i},f40d:function(t,e,n){"use strict";var o=n("2b0e");e["a"]=o["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},fd3b:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.schedule?n("div",{staticClass:"schedule-dialog pa-4"},[n("div",{staticClass:"d-flex"},[n("h1",{staticClass:"titulo text-center"},[t._v(" Detalhes do Agendamento ")]),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("close")])],1)],1),n("div",{staticClass:"schedule"},[n("v-row",{staticClass:"mt-2 flex-row flex-sm-row-reverse"},[n("v-col",{staticClass:"text-right",attrs:{cols:"12",sm:"auto"}},[n("v-chip",{staticClass:"status",class:t.getStatus(),attrs:{small:""}},[t._v(" "+t._s(t.getStatusText(t.schedule.schedule_status_id))+" ")])],1),n("v-col",[n("div",[t._v(" Cód: "),n("strong",[t._v(t._s(t.schedule.id))])])])],1),t.schedule.user?n("section",{staticClass:"mt-2"},[n("h2",{staticClass:"subtitulo"},[t._v(" Cliente: ")]),n("strong",{staticClass:"nome-cliente d-block"},[t._v(t._s(t.schedule.user.name))]),n("span",{staticClass:"telefone d-block"},[t._v(" "+t._s(this.setPhoneMask(t.schedule.user.phone_number))+" ")])]):t._e(),n("section",{staticClass:"mt-4"},[n("h2",{staticClass:"subtitulo"},[t._v("Servicos:")]),n("ul",{staticClass:"ma-0"},t._l(t.schedule.services,(function(e){return n("li",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),0)]),n("section",{staticClass:"mt-6"},[n("strong",{staticClass:"valor"},[t._v(" R$ "+t._s(this.setMoneyMask(t.schedule.price.toFixed(2)))+" ")])])],1),t.showButtons?n("div",{staticClass:"text-center mt-8"},[n("v-btn",{staticClass:"mx-4 py-2 px-6 primary",attrs:{height:"auto"},on:{click:t.approve}},[n("v-icon",{staticClass:"mr-2"},[t._v("check")]),t._v(" Aprovar ")],1),n("v-btn",{staticClass:"mx-4 py-2 px-6 danger",attrs:{height:"auto"},on:{click:t.repprove}},[n("v-icon",{staticClass:"mr-2"},[t._v("unpublished")]),t._v(" Reprovar ")],1)],1):t._e()]):t._e()])},i=[],r=(n("a9e3"),n("be3b")),s=n("5ff8"),a=n("f035"),c=n("5988"),l={name:"ScheduleDialog",mixins:[a["a"],c["a"],s["a"]],data:function(){return{dialog:!1,schedule:!1}},computed:{showButtons:function(){return this.schedule.schedule_status_id===this.$SCHEDULE_STATUS.AGUARDANDO}},methods:{approve:function(){var t=this;r["a"].put("/schedule/".concat(this.schedule.id,"/approve")).then((function(e){200===e.data.codigo?(t.showSnackbar(e.data.corpo),t.$emit("onApproved",t.schedule),t.dialog=!1):t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError("Não foi possível aprovar o agendamento!")}))},getStatus:function(){return Number(this.schedule.schedule_status_id)===Number(this.$SCHEDULE_STATUS.APROVADO)?"success":Number(this.schedule.schedule_status_id)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"danger":Number(this.schedule.schedule_status_id)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"danger":""},repprove:function(){var t=this;r["a"].put("/schedule/".concat(this.schedule.id,"/repprove")).then((function(e){200===e.data.codigo?(t.showSnackbar(e.data.corpo),t.$emit("onApproved",t.schedule),t.dialog=!1):t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError("Não foi possível reprovar o agendamento!")}))},setError:function(t){this.showSnackbarErro(t),this.dialog=!1},show:function(t){this.dialog=!0,this.schedule=t}}},u=l,d=(n("81f2"),n("2877")),h=n("6544"),f=n.n(h),p=n("8336"),v=n("cc20"),b=n("62ad"),g=n("169a"),m=n("132d"),y=n("0fd9"),S=n("2fa4"),w=Object(d["a"])(u,o,i,!1,null,"44d58c7a",null);e["a"]=w.exports;f()(w,{VBtn:p["a"],VChip:v["a"],VCol:b["a"],VDialog:g["a"],VIcon:m["a"],VRow:y["a"],VSpacer:S["a"]})}}]);
//# sourceMappingURL=chunk-5d5502e2.d1333b8d.js.map