(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbc9fa2c"],{"0798":function(t,e,o){"use strict";o("a4d3"),o("4de4"),o("4160"),o("caad"),o("e439"),o("dbb4"),o("b64b"),o("159b");var n=o("2fa7"),i=(o("0c18"),o("10d2")),r=o("afdd"),s=o("9d26"),a=o("f2e7"),c=o("7560"),l=o("f40d"),u=o("58df"),d=o("d9bd");function h(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function f(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?h(o,!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):h(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}e["a"]=Object(u["a"])(i["a"],a["a"],l["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(n["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(r["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(s["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(s["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=f({},i["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||c["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"09ba":function(t,e,o){"use strict";var n=o("be3b"),i=o("2ce5"),r={mixins:[i["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(t){var e=this;n["a"].get("/barbershop/".concat(t,"/barber")).then((function(t){200===t.data.codigo?e.onGetBarberByBarbershopIdOnServiceSuccess(t.data.corpo):e.onGetBarberByBarbershopIdOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarberByBarbershopIdOnServiceError:function(t){window.console.log(t)},onGetBarberByBarbershopIdOnServiceSuccess:function(t){window.console.log(JSON.stringify(t))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(t){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",t)}}};e["a"]=r},"0c18":function(t,e,o){},"169a":function(t,e,o){"use strict";o("a4d3"),o("4de4"),o("4160"),o("caad"),o("45fc"),o("a9e3"),o("e439"),o("dbb4"),o("b64b"),o("2532"),o("498a"),o("159b");var n=o("2fa7"),i=(o("368e"),o("480e")),r=o("4ad4"),s=o("b848"),a=o("75eb"),c=o("e707"),l=o("e4d3"),u=o("21be"),d=o("f2e7"),h=o("a293"),f=o("58df"),p=o("d9bd"),v=o("80d2");function b(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?b(o,!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):b(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m=Object(f["a"])(r["a"],s["a"],a["a"],c["a"],l["a"],u["a"],d["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(n["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(n["a"])(t,"v-dialog--active",this.isActive),Object(n["a"])(t,"v-dialog--persistent",this.persistent),Object(n["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(n["a"])(t,"v-dialog--scrollable",this.scrollable),Object(n["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===v["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var o=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');o.length&&o[0].focus()}}},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin}},this.showLazyContent((function(){return[t]}))):t},genContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(t.style={maxWidth:"none"===this.maxWidth?void 0:Object(v["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["f"])(this.width)}),this.$createElement("div",{class:this.contentClasses,attrs:g({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement("div",t,[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},this.getContentSlot())])])}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genTransition()])}})},"20f6":function(t,e,o){},"26e9":function(t,e,o){"use strict";var n=o("23e7"),i=o("e8b5"),r=[].reverse,s=[1,2];n({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),r.call(this)}})},"2fa4":function(t,e,o){"use strict";o("20f6");var n=o("80d2");e["a"]=Object(n["h"])("spacer","div","v-spacer")},"368e":function(t,e,o){},"3c93":function(t,e,o){},"4cd0":function(t,e,o){"use strict";var n=o("b78f"),i=o.n(n);i.a},5988:function(t,e,o){"use strict";var n={data:function(){return{snackbarConfig:{text:"",type:"success"}}},methods:{closeSnackbar:function(){this.snackbar=null},showSnackbar:function(t){this.snackbarConfig.type="accent",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))},showSnackbarErro:function(t){this.snackbarConfig.type="error",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))}}};e["a"]=n},"5f08":function(t,e,o){"use strict";o("99af"),o("a9e3");var n={methods:{formatDateToDatePtBr:function(t){if(!t)return t;var e=t.getDate(),o=t.getMonth()+1,n=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(o)<10&&(o="0".concat(o)),"".concat(e,"/").concat(o,"/").concat(n)},formatDateToDateEn:function(t){if(!t)return t;var e=t.getDate(),o=t.getMonth()+1,n=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(o)<10&&(o="0".concat(o)),"".concat(n,"-").concat(o,"-").concat(e)},formatDateTimeToStringPtBr:function(t){if(!t)return t;var e=t.getDate(),o=t.getMonth()+1,n=t.getFullYear(),i=t.getHours(),r=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(o)<10&&(o="0".concat(o)),Number(i)<10&&(i="0".concat(i)),Number(r)<10&&(r="0".concat(r)),"".concat(e,"/").concat(o,"/").concat(n," ").concat(i,":").concat(r)}}};e["a"]=n},"5ff8":function(t,e,o){"use strict";o("a15b"),o("13d5"),o("26e9"),o("0d03"),o("d3b7"),o("ac1f"),o("25f0"),o("466d"),o("5319"),o("1276");var n={methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){return t?(t=t.replace("R$ ",""),t=t.split(".").join(""),t=t.split(",").join("."),t):t},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),o=0,n=e.reduce((function(t,e){return o++,3==o?t=","+t:o%3===0&&(t="."+t),String(e)+String(t)}),"");return n},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),this.removeAccents(t)):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?t.match(/\d+/g).join(""):t}}};e["a"]=n},"81f2":function(t,e,o){"use strict";var n=o("a924"),i=o.n(n);i.a},"8adc":function(t,e,o){},"9d26":function(t,e,o){"use strict";var n=o("132d");e["a"]=n["a"]},a434:function(t,e,o){"use strict";var n=o("23e7"),i=o("23cb"),r=o("a691"),s=o("50c4"),a=o("7b0b"),c=o("65f0"),l=o("8418"),u=o("1dde"),d=Math.max,h=Math.min,f=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var o,n,u,v,b,g,m=a(this),y=s(m.length),S=i(t,y),w=arguments.length;if(0===w?o=n=0:1===w?(o=0,n=y-S):(o=w-2,n=h(d(r(e),0),y-S)),y+o-n>f)throw TypeError(p);for(u=c(m,n),v=0;v<n;v++)b=S+v,b in m&&l(u,v,m[b]);if(u.length=n,o<n){for(v=S;v<y-n;v++)b=v+n,g=v+o,b in m?m[g]=m[b]:delete m[g];for(v=y;v>y-n+o;v--)delete m[v-1]}else if(o>n)for(v=y-n;v>S;v--)b=v+n-1,g=v+o-1,b in m?m[g]=m[b]:delete m[g];for(v=0;v<o;v++)m[v+S]=arguments[v+2];return m.length=y-n+o,u}})},a924:function(t,e,o){},afdd:function(t,e,o){"use strict";var n=o("8336");e["a"]=n["a"]},b305:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"approval"},[0===t.schedules.length?o("div",{staticClass:"d-flex align-center justify-center",staticStyle:{height:"calc(100vh - 100px)"}},[o("v-alert",{staticClass:"py-4 px-8",attrs:{type:"info",color:"primary"}},[t._v(" Não há agendamentos para serem aprovados ")])],1):o("v-row",{staticClass:"pending"},t._l(t.schedules,(function(e,n){return o("v-col",{key:n,staticClass:"text-center",attrs:{cols:"6",sm:"4",md:"3",lg:"auto"}},[o("div",{staticClass:"list-item primaryLight py-4 px-6",class:{ativo:e.ativo},on:{click:function(o){return t.chooseSchedule(e)}}},[o("strong",{staticClass:"d-block"},[t._v(" "+t._s(t.formatDateTimeToStringPtBr(new Date(e.start_date)))+" ")]),o("span",{staticClass:"d-block"},[t._v(" "+t._s(e.user.name)+" ")])])])})),1),o("schedule-dialog",{ref:"scheduleDialog",on:{onApproved:t.onApproved,onRepproved:t.onRepproved}})],1)},i=[],r=(o("c740"),o("a434"),o("be3b")),s=o("09ba"),a=o("5f08"),c=o("fd3b"),l=o("5988"),u=o("5ff8"),d={name:"Approval",components:{ScheduleDialog:c["a"]},mixins:[s["a"],a["a"],l["a"],u["a"]],data:function(){return{schedules:[]}},mounted:function(){this.getSchedules()},methods:{chooseSchedule:function(t){this.$refs.scheduleDialog.show(t)},getSchedules:function(){var t=this;r["a"].get("/schedule/barbershop/".concat(this.barber.barbershop_id,"/pending")).then((function(e){200===e.data.codigo?t.schedules=e.data.corpo:t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError(e)}))},setError:function(t){this.showSnackbarErro(t)},onApproved:function(t){var e=this.schedules.findIndex((function(e){return e.id===t.id}));this.schedules.splice(e,1)},onRepproved:function(t){var e=this.schedules.findIndex((function(e){return e.id===t.id}));this.schedules.splice(e,1)}}},h=d,f=(o("4cd0"),o("2877")),p=o("6544"),v=o.n(p),b=o("0798"),g=o("62ad"),m=o("0fd9"),y=Object(f["a"])(h,n,i,!1,null,"4037b88c",null);e["default"]=y.exports;v()(y,{VAlert:b["a"],VCol:g["a"],VRow:m["a"]})},b78f:function(t,e,o){},c740:function(t,e,o){"use strict";var n=o("23e7"),i=o("b727").findIndex,r=o("44d2"),s="findIndex",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),n({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},cc20:function(t,e,o){"use strict";o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");var n=o("e587"),i=o("2fa7"),r=(o("8adc"),o("58df")),s=o("0789"),a=o("9d26"),c=o("a9ad"),l=o("4e82"),u=o("7560"),d=o("f2e7"),h=o("1c87"),f=o("af2b"),p=o("d9bd");function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(o,!0).forEach((function(e){Object(i["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}e["a"]=Object(r["a"])(c["a"],f["a"],h["a"],u["a"],Object(l["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return b({"v-chip":!0},h["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var o=Object(n["a"])(e,2),i=o[0],r=o[1];t.$attrs.hasOwnProperty(i)&&Object(p["a"])(i,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(a["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose:function(){var t=this;return this.$createElement(a["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],o=this.generateRouteLink(),n=o.tag,i=o.data;i.attrs=b({},i.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex}),i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);var r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,i),e)}})},e707:function(t,e,o){"use strict";o("caad"),o("a9e3"),o("2532"),o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");var n=o("2fa7"),i=(o("3c93"),o("a9ad")),r=o("7560"),s=o("f2e7"),a=o("58df");function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(o,!0).forEach((function(e){Object(n["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u=Object(a["a"])(i["a"],r["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return l({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),d=u,h=o("80d2"),f=o("2b0e");e["a"]=f["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(h["p"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[h["r"].up,h["r"].pageup],o=[h["r"].down,h["r"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!o.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),o=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,i=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(i,n))||this.shouldScroll(n,o)}for(var r=0;r<e.length;r++){var s=e[r];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,o)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],o=t.target;while(o){if(e.push(o),"HTML"===o.tagName)return e.push(document),e.push(window),e;o=o.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},f035:function(t,e,o){"use strict";o("a9e3");var n=o("be3b"),i={methods:{getStatusText:function(t){return Number(t)===Number(this.$SCHEDULE_STATUS.APROVADO)?"Agendado":Number(t)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"Cancelado":Number(t)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"Cancelado pelo barbeiro":"Aguardando aprovação do barbeiro"},getScheduleById:function(t){var e=this;n["a"].get("/schedule/".concat(t)).then((function(t){200===t.data.codigo?e.onGetScheduleByIdSuccess(t.data.corpo):e.onGetScheduleByIdError(t.data.corpo)})).catch((function(t){e.onGetScheduleByIdError("Não foi possível recuperar o agendamento!"),window.console.log(t)}))},onGetScheduleByIdSuccess:function(t){window.console.log("onGetScheduleByIdSuccess: ".concat(t))},onGetScheduleByIdError:function(t){window.console.log("onGetScheduleByIdError: ".concat(t))},getScheduleByUserId:function(t){var e=this;n["a"].get("/schedule/user/".concat(t)).then((function(t){200===t.data.codigo?e.onGetScheduleByUserIdSuccess(t.data.corpo):e.onGetScheduleByUserIdError(t.data.corpo)})).catch((function(t){e.onGetScheduleByUserIdError("Não foi possível recuperar os agendamentos!"),window.console.log(t)}))},onGetScheduleByUserIdSuccess:function(t){window.console.log("onGetScheduleByUserIdSuccess: ".concat(t))},onGetScheduleByUserIdError:function(t){window.console.log("onGetScheduleByUserIdError: ".concat(t))},storeSchedule:function(t){var e=this;n["a"].post("/schedule",t).then((function(t){200===t.data.codigo?e.onStoreScheduleSuccess(t.data.corpo):e.onStoreScheduleError(t.data.corpo)})).catch((function(t){e.onStoreScheduleError("Não foi possível fazer o agendamento!"),window.console.log(t)}))},onStoreScheduleSuccess:function(t){window.console.log("onStoreScheduleSuccess: ".concat(t))},onStoreScheduleError:function(t){window.console.log("onStoreScheduleError: ".concat(t))}}};e["a"]=i},f40d:function(t,e,o){"use strict";var n=o("2b0e");e["a"]=n["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},fd3b:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.schedule?o("div",{staticClass:"schedule-dialog pa-4"},[o("div",{staticClass:"d-flex"},[o("h1",{staticClass:"titulo text-center"},[t._v(" Detalhes do Agendamento ")]),o("v-spacer"),o("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("close")])],1)],1),o("div",{staticClass:"schedule"},[o("v-row",{staticClass:"mt-2 flex-row flex-sm-row-reverse"},[o("v-col",{staticClass:"text-right",attrs:{cols:"12",sm:"auto"}},[o("v-chip",{staticClass:"status",class:t.getStatus(),attrs:{small:""}},[t._v(" "+t._s(t.getStatusText(t.schedule.schedule_status_id))+" ")])],1),o("v-col",[o("div",[t._v(" Cód: "),o("strong",[t._v(t._s(t.schedule.id))])])])],1),t.schedule.user?o("section",{staticClass:"mt-2"},[o("h2",{staticClass:"subtitulo"},[t._v(" Cliente: ")]),o("strong",{staticClass:"nome-cliente d-block"},[t._v(t._s(t.schedule.user.name))]),o("span",{staticClass:"telefone d-block"},[t._v(" "+t._s(this.setPhoneMask(t.schedule.user.phone_number))+" ")])]):t._e(),o("section",{staticClass:"mt-4"},[o("h2",{staticClass:"subtitulo"},[t._v("Servicos:")]),o("ul",{staticClass:"ma-0"},t._l(t.schedule.services,(function(e){return o("li",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),0)]),o("section",{staticClass:"mt-6"},[o("strong",{staticClass:"valor"},[t._v(" R$ "+t._s(this.setMoneyMask(t.schedule.price.toFixed(2)))+" ")])])],1),t.showButtons?o("div",{staticClass:"text-center mt-8"},[o("v-btn",{staticClass:"mx-4 py-2 px-6 primary",attrs:{height:"auto"},on:{click:t.approve}},[o("v-icon",{staticClass:"mr-2"},[t._v("check")]),t._v(" Aprovar ")],1),o("v-btn",{staticClass:"mx-4 py-2 px-6 danger",attrs:{height:"auto"},on:{click:t.repprove}},[o("v-icon",{staticClass:"mr-2"},[t._v("unpublished")]),t._v(" Reprovar ")],1)],1):t._e()]):t._e()])},i=[],r=(o("a9e3"),o("be3b")),s=o("5ff8"),a=o("f035"),c=o("5988"),l={name:"ScheduleDialog",mixins:[a["a"],c["a"],s["a"]],data:function(){return{dialog:!1,schedule:!1}},computed:{showButtons:function(){return this.schedule.schedule_status_id===this.$SCHEDULE_STATUS.AGUARDANDO}},methods:{approve:function(){var t=this;r["a"].put("/schedule/".concat(this.schedule.id,"/approve")).then((function(e){200===e.data.codigo?(t.showSnackbar(e.data.corpo),t.$emit("onApproved",t.schedule),t.dialog=!1):t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError("Não foi possível aprovar o agendamento!")}))},getStatus:function(){return Number(this.schedule.schedule_status_id)===Number(this.$SCHEDULE_STATUS.APROVADO)?"success":Number(this.schedule.schedule_status_id)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"danger":Number(this.schedule.schedule_status_id)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"danger":""},repprove:function(){var t=this;r["a"].put("/schedule/".concat(this.schedule.id,"/repprove")).then((function(e){200===e.data.codigo?(t.showSnackbar(e.data.corpo),t.$emit("onApproved",t.schedule),t.dialog=!1):t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError("Não foi possível reprovar o agendamento!")}))},setError:function(t){this.showSnackbarErro(t),this.dialog=!1},show:function(t){this.dialog=!0,this.schedule=t}}},u=l,d=(o("81f2"),o("2877")),h=o("6544"),f=o.n(h),p=o("8336"),v=o("cc20"),b=o("62ad"),g=o("169a"),m=o("132d"),y=o("0fd9"),S=o("2fa4"),w=Object(d["a"])(u,n,i,!1,null,"44d58c7a",null);e["a"]=w.exports;f()(w,{VBtn:p["a"],VChip:v["a"],VCol:b["a"],VDialog:g["a"],VIcon:m["a"],VRow:y["a"],VSpacer:S["a"]})}}]);
//# sourceMappingURL=chunk-dbc9fa2c.fbfc0e0b.js.map