(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44f3304a"],{"26e9":function(e,t,o){"use strict";var n=o("23e7"),r=o("e8b5"),i=[].reverse,s=[1,2];n({target:"Array",proto:!0,forced:String(s)===String(s.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),i.call(this)}})},"2ce5":function(e,t,o){"use strict";o("b0c0");var n={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=this.$route.name;e!=o&&(t?this.$router.push({name:e,params:t}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};t["a"]=n},"5ff8":function(e,t,o){"use strict";o("a15b"),o("13d5"),o("26e9"),o("0d03"),o("d3b7"),o("ac1f"),o("25f0"),o("466d"),o("5319"),o("1276");var n={methods:{removeMask:function(e){return e?e.match(/\d+/g).join(""):""},removeMoneyMask:function(e){return e?(e=e.replace("R$ ",""),e=e.split(".").join(""),e=e.split(",").join("."),e):e},setCepMask:function(e){return e?e.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):e},setPhoneMask:function(e){return e?e.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(e){if(!e)return e;e=e.toString(),e=e.split(" ").join(""),e=e.split("R$").join(""),e=e.split(".").join("");var t=e.split("").reverse(),o=0,n=t.reduce((function(e,t){return o++,3==o?e=","+e:o%3===0&&(e="."+e),String(t)+String(e)}),"");return n},formatTextToUrl:function(e){return e?(e=e.toLowerCase(),e=e.split(" ").join("-"),this.removeAccents(e)):e},removeAccents:function(e){return e?(e=e.split("á").join("a"),e=e.split("à").join("a"),e=e.split("ã").join("a"),e=e.split("â").join("a"),e=e.split("é").join("e"),e=e.split("è").join("e"),e=e.split("ê").join("e"),e=e.split("í").join("i"),e=e.split("ì").join("i"),e=e.split("î").join("i"),e=e.split("ó").join("o"),e=e.split("ò").join("o"),e=e.split("õ").join("o"),e=e.split("ô").join("o"),e=e.split("ú").join("u"),e=e.split("ù").join("u"),e=e.split("û").join("u"),e=e.split("ç").join("c"),e):e},removeSimbols:function(e){return e?e.match(/\d+/g).join(""):e}}};t["a"]=n},"615b":function(e,t,o){},"6cd4":function(e,t,o){"use strict";o("b0c0");var n=o("2ce5"),r={mixins:[n["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(e){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",e)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"home"==this.$route.name?window.location=window.location.origin+"/":this.goTo("home")}}};t["a"]=r},"8adc":function(e,t,o){},9355:function(e,t,o){"use strict";var n=o("ae39"),r=o.n(n);r.a},"9d26":function(e,t,o){"use strict";var n=o("132d");t["a"]=n["a"]},ae39:function(e,t,o){},b0af:function(e,t,o){"use strict";o("a4d3"),o("4de4"),o("0481"),o("4160"),o("4069"),o("a9e3"),o("e439"),o("dbb4"),o("b64b"),o("159b");var n=o("2fa7"),r=(o("615b"),o("10d2")),i=o("297c"),s=o("1c87"),a=o("58df");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(o,!0).forEach((function(t){Object(n["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t["a"]=Object(a["a"])(i["a"],s["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},r["a"].options.computed.classes.call(this))},styles:function(){var e=l({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),o=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(o,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},cc20:function(e,t,o){"use strict";o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b");var n=o("e587"),r=o("2fa7"),i=(o("8adc"),o("58df")),s=o("0789"),a=o("9d26"),c=o("a9ad"),l=o("4e82"),u=o("7560"),d=o("f2e7"),h=o("1c87"),p=o("af2b"),f=o("d9bd");function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?g(o,!0).forEach((function(t){Object(r["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t["a"]=Object(i["a"])(c["a"],p["a"],h["a"],u["a"],Object(l["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return b({"v-chip":!0},h["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this,t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((function(t){var o=Object(n["a"])(t,2),r=o[0],i=o[1];e.$attrs.hasOwnProperty(r)&&Object(f["a"])(r,i,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(a["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],e)},genClose:function(){var e=this;return this.$createElement(a["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],o=this.generateRouteLink(),n=o.tag,r=o.data;r.attrs=b({},r.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:r.attrs.tabindex}),r.directives.push({name:"show",value:this.active}),r=this.setBackgroundColor(this.color,r);var i=this.textColor||this.outlined&&this.color;return e(n,this.setTextColor(i,r),t)}})},d035:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",[e.title?o("p",{staticClass:"title card-title pa-2 pb-0 mb-0"},[e.icon?o("v-icon",{staticClass:"mb-1",attrs:{color:e.iconClass}},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.title)+" ")],1):e._e(),o("div",{staticClass:"pa-4",class:e.cssClass},[e._t("default")],2)])},r=[],i={name:"Card",props:{title:{default:null},icon:{default:null},iconClass:{default:"secondary"},cssClass:{default:""}}},s=i,a=o("2877"),c=o("6544"),l=o.n(c),u=o("b0af"),d=o("132d"),h=Object(a["a"])(s,n,r,!1,null,null,null);t["a"]=h.exports;l()(h,{VCard:u["a"],VIcon:d["a"]})},e7e3:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-btn",{staticClass:"success text-capitalize btn py-4 px-8 elevation-0",class:e.cssClass,attrs:{height:"auto",block:e.block,disabled:e.disabled},on:{click:e.clicked}},[e.loading?[o("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[e.icon?o("v-icon",{staticClass:"mr-1"},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" ")]],2)},r=[],i={name:"BtnSecondary",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:"py-3"},loading:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},s=i,a=(o("9355"),o("2877")),c=o("6544"),l=o.n(c),u=o("8336"),d=o("132d"),h=o("490a"),p=Object(a["a"])(s,n,r,!1,null,"3107b916",null);t["a"]=p.exports;l()(p,{VBtn:u["a"],VIcon:d["a"],VProgressCircular:h["a"]})},f035:function(e,t,o){"use strict";o("a9e3");var n=o("be3b"),r={methods:{getStatusText:function(e){return Number(e)===Number(this.$SCHEDULE_STATUS.APROVADO)?"Agendado":Number(e)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"Cancelado":Number(e)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"Cancelado pelo barbeiro":"Aguardando aprovação do barbeiro"},getScheduleById:function(e){var t=this;n["a"].get("/schedule/".concat(e)).then((function(e){200===e.data.codigo?t.onGetScheduleByIdSuccess(e.data.corpo):t.onGetScheduleByIdError(e.data.corpo)})).catch((function(e){t.onGetScheduleByIdError("Não foi possível recuperar o agendamento!"),window.console.log(e)}))},onGetScheduleByIdSuccess:function(e){window.console.log("onGetScheduleByIdSuccess: ".concat(e))},onGetScheduleByIdError:function(e){window.console.log("onGetScheduleByIdError: ".concat(e))},getScheduleByUserId:function(e){var t=this;n["a"].get("/schedule/user/".concat(e)).then((function(e){200===e.data.codigo?t.onGetScheduleByUserIdSuccess(e.data.corpo):t.onGetScheduleByUserIdError(e.data.corpo)})).catch((function(e){t.onGetScheduleByUserIdError("Não foi possível recuperar os agendamentos!"),window.console.log(e)}))},onGetScheduleByUserIdSuccess:function(e){window.console.log("onGetScheduleByUserIdSuccess: ".concat(e))},onGetScheduleByUserIdError:function(e){window.console.log("onGetScheduleByUserIdError: ".concat(e))},storeSchedule:function(e){var t=this;n["a"].post("/schedule",e).then((function(e){200===e.data.codigo?t.onStoreScheduleSuccess(e.data.corpo):t.onStoreScheduleError(e.data.corpo)})).catch((function(e){t.onStoreScheduleError("Não foi possível fazer o agendamento!"),window.console.log(e)}))},onStoreScheduleSuccess:function(e){window.console.log("onStoreScheduleSuccess: ".concat(e))},onStoreScheduleError:function(e){window.console.log("onStoreScheduleError: ".concat(e))}}};t["a"]=r}}]);
//# sourceMappingURL=chunk-44f3304a.3e0fcc5e.js.map