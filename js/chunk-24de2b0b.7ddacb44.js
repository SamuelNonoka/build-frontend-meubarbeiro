(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24de2b0b"],{"2ddf":function(t,e,i){},3003:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.dialog?i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{staticClass:"confirm-dialog py-2",attrs:{light:""}},[i("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.title)+" ")]),t.description?i("v-card-text",[t._v(" "+t._s(t.description)+" ")]):t._e(),i("v-card-text",[t._t("default")],2),i("v-card-actions",{staticClass:"px-4 mt-4"},[i("v-spacer"),i("v-btn",{staticClass:"primary",attrs:{text:"",dark:"",disabled:t.btnDisabled},on:{click:function(e){return t.send("confirm")}}},[t._v(" Confirmar ")]),i("v-btn",{attrs:{text:""},on:{click:function(e){return t.send("cancel")}}},[t._v(" Cancelar ")])],1)],1)],1)],1):t._e()},a=[],n={name:"Default",props:{btnDisabled:{default:!1},title:{required:!0},description:{required:!1},danger:{default:!1}},data:function(){return{dialog:!1}},methods:{send:function(t){this.dialog=!1,this.$emit(t)},showDialog:function(){this.dialog=!0}}},o=n,s=i("2877"),l=i("6544"),c=i.n(l),d=i("8336"),u=i("b0af"),h=i("99d9"),p=i("169a"),f=i("0fd9"),b=i("2fa4"),m=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=m.exports;c()(m,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:p["a"],VRow:f["a"],VSpacer:b["a"]})},3694:function(t,e,i){},"3b11":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-text-field",{ref:t.id,attrs:{id:t.id,value:t.valueModel,label:t.label,disabled:t.disabled,rules:t.rules,counter:t.counter,hint:t.placeholder,type:t.type,"validate-on-blur":"","aria-autocomplete":"false",required:""},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onKeyUpEnter(e)},t.onKeyUp]},model:{value:t.valueModel,callback:function(e){t.valueModel=e},expression:"valueModel"}})},a=[],n={name:"InputField",props:{label:{required:!0},value:{default:""},disabled:{default:!1},counter:{default:null},rules:{default:Array},id:{default:null},placeholder:{default:""},type:{default:null}},data:function(){return{valueModel:""}},mounted:function(){this.valueModel=this.value},watch:{value:function(t){this.valueModel=t}},methods:{onKeyUp:function(){this.$emit("onKeyUp",this.valueModel,this.id)},onKeyUpEnter:function(){this.$emit("onKeyUpEnter",this.valueModel,this.id)}}},o=n,s=i("2877"),l=i("6544"),c=i.n(l),d=i("8654"),u=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=u.exports;c()(u,{VTextField:d["a"]})},"586c":function(t,e,i){},"5e23":function(t,e,i){},"8b0d":function(t,e,i){},"95d4":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return l}));var r=i("b0af"),a=i("80d2"),n=Object(a["h"])("v-card__actions"),o=Object(a["h"])("v-card__subtitle"),s=Object(a["h"])("v-card__text"),l=Object(a["h"])("v-card__title");r["a"]},a63c:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("admin-template",{attrs:{pageName:"Funcionários",alias:"employee",breadcrumbs:t.breadcrumbConfig}},[i("p",[t._v("Funcionários")])])},a=[],n=i("be0c"),o={name:"Employee",components:{AdminTemplate:n["a"]},data:function(){return{breadcrumbConfig:[{text:"Dashboard",disabled:!1,href:"/admin"},{text:"Funcionários",disabled:!0,href:"/admin/funcionarios"}]}}},s=o,l=i("2877"),c=Object(l["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},aada:function(t,e,i){},abd3:function(t,e,i){},be0c:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"admin-template"}},[i("navigation-drawer",{ref:"navigationDrawer",attrs:{alias:t.alias}}),i("topo",{attrs:{title:t.pageName},on:{toggleMenu:t.toggleMenu}}),i("v-content",{staticClass:"background main"},[i("v-container",{staticClass:"container",class:t.cssClass,attrs:{fluid:""}},[i("div",{staticClass:"conteudo"},[t.breadcrumbs.length>0?i("breadcrumb",{staticClass:"mb-4 mt-0 py-0 d-none d-md-block",attrs:{items:t.breadcrumbs}}):t._e(),t.btnRegister?i("v-row",{staticClass:"admin-register-content d-flex-center"},[i("v-spacer"),i("v-col",{staticClass:"align-self-center",attrs:{cols:"auto"}},[i("btn-secondary",{staticClass:"btn-register",attrs:{text:"cadastrar barbearia",icon:"add"},on:{clicked:t.registerBarbershop}})],1),i("v-spacer")],1):t._e(),t.content?t._t("default"):t._e()],2)])],1),i("register-barber-dialog",{ref:"registerBarberDialog"}),i("app-footer",{staticClass:"app-footer",attrs:{items:t.footerItems,bottomNav:t.alias},on:{clicked:t.changePage}})],1)},a=[],n=(i("2ddf"),i("be3b")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"text-center pa-1 footer d-none d-md-block"},[t._v(" Copyright © "+t._s(new Date(Date.now()).getFullYear())+" | Meu Barbeiro ")]),i("v-bottom-navigation",{staticClass:"primary d-md-none",attrs:{padless:"",inset:!1,fixed:"",grow:"",shift:"",dark:""},model:{value:t.bottomNavModel,callback:function(e){t.bottomNavModel=e},expression:"bottomNavModel"}},t._l(t.items,(function(e,r){return i("v-btn",{key:r,attrs:{value:e.value},on:{click:function(i){return t.goTo(e)}}},[i("span",[t._v(t._s(e.title))]),i("v-icon",[t._v(t._s(e.icon))])],1)})),1)],1)},s=[],l=(i("586c"),{name:"Footer",props:{items:{default:Array},bottomNav:{default:""}},computed:{bottomNavModel:{set:function(){},get:function(){return this.bottomNav}}},methods:{goTo:function(t){this.$emit("clicked",t)}}}),c=l,d=i("2877"),u=i("6544"),h=i.n(u),p=i("b81c"),f=i("8336"),b=i("132d"),m=Object(d["a"])(c,o,s,!1,null,null,null),v=m.exports;h()(m,{VBottomNavigation:p["a"],VBtn:f["a"],VIcon:b["a"]});var g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-breadcrumb"},[i("v-breadcrumbs",{staticClass:"px-0 py-0",attrs:{items:t.items,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)},O=[],y=(i("95d4"),{name:"Breadcrumb",props:{items:{default:Array}}}),S=y,_=(i("a4d3"),i("4de4"),i("4160"),i("a15b"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("2fa7")),w=(i("abd3"),i("1c87")),x=i("58df");function j(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?j(i,!0).forEach((function(e){Object(_["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):j(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var B=Object(x["a"])(w["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(_["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),i=e.tag,r=e.data;return t("li",[t(i,C({},r,{attrs:C({},r.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),D=i("80d2"),k=Object(D["h"])("v-breadcrumbs__divider","li"),P=i("7560");function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(i,!0).forEach((function(e){Object(_["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var T=Object(x["a"])(P["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return E({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(k,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,i=[],r=0;r<this.items.length;r++){var a=this.items[r];i.push(a.text),e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement(B,{key:i.join("."),props:a},[a.text])),r<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),V=Object(d["a"])(S,g,O,!1,null,null,null),N=V.exports;h()(V,{VBreadcrumbs:T,VIcon:b["a"]});var M=i("e7e3"),A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{class:t.fullDrawer?"open":"",attrs:{id:"menu-lateral",color:"primaryDark",clipped:"",permanent:t.isPermanent,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[i("v-list-item",{key:e.text,staticClass:"btn-lateral my-1",class:t.isActive(e.alias),attrs:{rounded:"",dark:""},on:{click:function(i){return t.goTo(e.routeName)}}},[i("v-list-item-action",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]}))],2)],1)},I=[],H=(i("e3d5"),{methods:{setDrawer:function(t){window.console.log("setDrawer: "+t),this.$store.dispatch("MenuStore/setDrawer",t)},getDrawer:function(){var t=this.$store.getters["MenuStore/getDrawer"];return"true"===t}}}),L=H,R=i("2ce5"),F={name:"NavigationDrawer",mixins:[L,R["a"]],props:{alias:{default:""}},data:function(){return{isPermanent:!0,drawer:!1,fullDrawer:!1,items:[{icon:"today",text:"Agenda",routeName:"admin-schedule",alias:"schedule"},{icon:"pending_actions",text:"Aguardando",routeName:"admin-approval",alias:"approval"},{icon:"build",text:"Preços e Serviços",routeName:"admin-service",alias:"service"},{icon:"miscellaneous_services",text:"Configurações",routeName:"admin-barbershop",alias:"dashboard"},{icon:"attach_money",text:"Planos",routeName:"admin-plans",alias:"plans"},{icon:"help",text:"Ajuda",routeName:"admin-help",alias:"help"}]}},mounted:function(){this.fullDrawer=this.getDrawer(),this.isPermanent=window.innerWidth>959},methods:{isActive:function(t){return this.alias===t?"active":""},toggleNavigationDrawer:function(){this.drawer=!this.drawer,this.fullDrawer=!this.fullDrawer,this.setDrawer(this.fullDrawer)}}},U=F,K=(i("d23f"),i("8860")),X=i("da13"),Y=i("1800"),q=i("5d23"),z=i("f774"),W=Object(d["a"])(U,A,I,!1,null,"246b3078",null),J=W.exports;h()(W,{VIcon:b["a"],VList:K["a"],VListItem:X["a"],VListItemAction:Y["a"],VListItemContent:q["a"],VListItemTitle:q["b"],VNavigationDrawer:z["a"]});var G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("default-dialog",{ref:"dialog",attrs:{title:"Cadastrar Barbearia",btnDisabled:t.btnDisabled},on:{confirm:t.register}},[i("input-field",{attrs:{id:"barber-name",label:"Nome da barbearia"},on:{onKeyUp:t.setText}})],1),i("overlay",{ref:"overlay"})],1)},Q=[],Z=i("3003"),tt=i("3b11"),et=i("8c08"),it=i("09ba"),rt=i("5988"),at=i("d97b"),nt={name:"RegisterBarberDialog",components:{DefaultDialog:Z["a"],InputField:tt["a"],Overlay:et["a"]},mixins:[it["a"],rt["a"],at["a"]],data:function(){return{text:null}},computed:{btnDisabled:function(){return!this.text||this.text.length<2}},methods:{register:function(){var t=this;this.showOverlay("Cadastrando barbearia..."),n["a"].post("/barbershop",{name:this.text,barber_id:this.barber.id}).then((function(e){if(200===e.data.codigo){var i=e.data.corpo.token;t.storeBarber(i);var r="Barbearia cadastrada!";t.hideOverlaySuccess(r),t.showSnackbar(r)}else t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError("Não foi possível cadastrar a barbearia!")}))},showDialog:function(){this.text=null,this.$refs.dialog.showDialog()},setError:function(t){this.showSnackbarErro(t),this.hideOverlayError(t)},setText:function(t){this.text=t}}},ot=nt,st=Object(d["a"])(ot,G,Q,!1,null,null,null),lt=st.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{id:"topo","clipped-left":"",app:"",color:"primary",dark:""}},[i("v-btn",{attrs:{text:""},on:{click:function(e){return t.toggleMenu()}}},[i("v-icon",[t._v(" menu ")])],1),i("v-toolbar-title",{staticClass:"ml-4"},[t._v(" "+t._s(t.title)+" "),i("small",{staticClass:"d-none d-md-inline barbershopname ml-2"},[t._v(" "+t._s(t.barberName())+" ")])]),i("v-spacer"),i("v-badge",{attrs:{color:"primaryLight",content:t.notificationItems,value:t.notificationItems>0,overlap:""}},[i("div",{staticClass:"notification-icon",on:{click:function(e){return t.goTo("admin-approval")}}},[i("v-icon",{staticClass:"d-inline"},[t._v(" notifications ")])],1)]),i("v-divider",{staticClass:"mt-2 mr-6 ml-6 mb-4 d-none d-md-inline",attrs:{inset:"",vertical:""}}),i("v-menu",{staticClass:"btn-avatar",attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[i("div",t._g({staticClass:"btn-avatar",attrs:{dark:""}},r),[t.avatar?i("v-avatar",{attrs:{size:"32px",item:""}},[i("v-img",{attrs:{src:t.avatar,alt:"Vuetify"}})],1):t._e(),t.avatar?t._e():i("v-icon",{staticClass:"d-none d-md-inline"},[t._v(" account_circle ")]),i("span",{staticClass:"ml-2 d-none d-md-inline"},[t._v(" "+t._s(t.getBarber().name)+" ")]),i("v-icon",{staticClass:"ml-2 d-none d-md-inline"},[t._v(" keyboard_arrow_down ")]),i("v-icon",{staticClass:"ml-2 d-inline d-sm-inline d-md-none"},[t._v(" more_vert ")])],1)]}}])},[i("v-list",t._l(t.items,(function(e,r){return i("v-list-item",{key:r,on:{click:function(i){return t.clickMenu(e)}}},[i("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1)],1)},dt=[],ut=(i("b0c0"),i("aada"),i("ef49")),ht={name:"Topo",mixins:[it["a"],ut["a"],R["a"]],props:{title:{default:"Meu Barbeiro"}},data:function(){return{items:[{title:"Meus Dados",alias:"admin-profile"},{title:"Sair",alias:"logout"}],avatar:null}},computed:{notificationItems:{set:function(){},get:function(){return this.$store.getters["NotificationStore/getNotification"]}}},mounted:function(){var t=this;this.barbershop=this.getBarbershop(),this.avatar=this.getBarber().avatar,this.getSchedules(),setTimeout((function(){t.getSchedules()}),6e4)},methods:{barberName:function(){return this.barbershop?this.barbershop.name:""},getSchedules:function(){var t=this;n["a"].get("/schedule/barbershop/".concat(this.barber.barbershop_id,"/pending")).then((function(e){if(200===e.data.codigo){var i=e.data.corpo.length;t.$store.dispatch("NotificationStore/setNotification",i)}else window.console.log(e.data.corpo)})).catch((function(t){window.console.log(t)}))},toggleMenu:function(){this.$emit("toggleMenu")},clickMenu:function(t){"logout"===t.alias?this.logout():this.goTo(t.alias)}}},pt=ht,ft=(i("a9e3"),i("b680"),i("acd8"),i("e25e"),i("c7cd"),i("8b0d"),i("0481"),i("4069"),i("e587")),bt=(i("5e23"),i("8dd9")),mt=i("adda"),vt=i("d9bd");function gt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function Ot(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?gt(i,!0).forEach((function(e){Object(_["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):gt(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var yt=bt["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Ot({},bt["a"].options.computed.classes.call(this),{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Ot({},this.measurableStyles,{height:Object(D["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(ft["a"])(e,2),r=i[0],a=i[1];t.$attrs.hasOwnProperty(r)&&Object(vt["a"])(r,a,t)}))},methods:{genBackground:function(){var t={height:Object(D["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(mt["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(D["f"])(this.computedContentHeight)}},Object(D["n"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(D["f"])(this.extensionHeight)}},Object(D["n"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),St=i("f977"),_t=i("3a66"),wt=i("277e"),xt=i("d10f"),jt=i("f2e7");function Ct(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function Bt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Ct(i,!0).forEach((function(e){Object(_["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ct(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var Dt=Object(x["a"])(yt,wt["a"],xt["a"],jt["a"],Object(_t["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),kt=Dt.extend({name:"v-app-bar",directives:{Scroll:St["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return wt["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Bt({},yt.options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return yt.options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,r=i-e,a=r/this.computedScrollThreshold,n=this.currentScroll*a;return Math.max(e,i-n)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=yt.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:yt.options.computed.isCollapsed.call(this)},isProminent:function(){return yt.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Bt({},yt.options.computed.styles.call(this),{fontSize:Object(D["f"])(this.computedFontSize,"rem"),marginTop:Object(D["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(D["f"])(this.computedTransform),")"),left:Object(D["f"])(this.computedLeft),right:Object(D["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=yt.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render:function(t){var e=yt.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),Pt=i("8212"),$t=i("dfdf"),Et=(i("ff44"),i("a9ad")),Tt=i("f40d"),Vt=i("fe6c");function Nt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function Mt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Nt(i,!0).forEach((function(e){Object(_["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Nt(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var At=Object(x["a"])(Et["a"],Object(Vt["b"])(["left","bottom"]),P["a"],jt["a"],Tt["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Mt({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(D["f"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),r=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r},genBadgeContent:function(){if(!this.dot){var t=Object(D["n"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(b["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],i=[Object(D["n"])(this)],r=this.$attrs,a=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object($t["a"])(r,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:a,class:this.classes},i)}}),It=i("ce7e"),Ht=i("e449"),Lt=i("2fa4"),Rt=Object(D["h"])("v-toolbar__title"),Ft=(Object(D["h"])("v-toolbar__items"),Object(d["a"])(pt,ct,dt,!1,null,null,null)),Ut=Ft.exports;h()(Ft,{VAppBar:kt,VAvatar:Pt["a"],VBadge:At,VBtn:f["a"],VDivider:It["a"],VIcon:b["a"],VImg:mt["a"],VList:K["a"],VListItem:X["a"],VListItemTitle:q["b"],VMenu:Ht["a"],VSpacer:Lt["a"],VToolbarTitle:Rt});var Kt={name:"Template",mixins:[it["a"],ut["a"],R["a"],rt["a"]],components:{AppFooter:v,Breadcrumb:N,BtnSecondary:M["a"],NavigationDrawer:J,RegisterBarberDialog:lt,Topo:Ut},props:{alias:{default:""},breadcrumbs:{default:Array},btnRegister:{default:!1},cssClass:{default:"px-4 px-sm-8"},pageName:{default:"Meu Barbeiro"},content:{default:!0}},data:function(){return{footerItems:[{title:"Dashboard",icon:"home",value:"dashboard",route:"admin-dashboard"},{title:"Minha Agenda",icon:"calendar_today",value:"schedule",route:"admin-schedule"},{title:"Perfil",icon:"person",value:"profile",route:"admin-profile"}]}},computed:{menuOpen:function(){return this.getDrawer()}},mounted:function(){var t=this.getBarber();this.isAutenticated()?t.barbershop_id&&!t.plan_id&&this.goTo("admin-plans"):(this.showSnackbarErro("Usuário não autenticado!"),this.logout()),t.barbershop_id&&this.getBarberShopService()},methods:{getBarberShopService:function(){var t=this;n["a"].get("/barbershop/"+this.barber.barbershop_id).then((function(e){if(200===e.data.codigo){var i=e.data.corpo;t.storeBarbershop(i)}else t.setError(e.data.corpo)})).catch((function(e){window.console.log(e),t.setError("Não foi possível recuperar os dados da barbearia!")}))},toggleMenu:function(){this.$refs.navigationDrawer.toggleNavigationDrawer()},changePage:function(t){this.goTo(t.route)},registerBarbershop:function(){this.$refs.registerBarberDialog.showDialog()},setError:function(t){this.showSnackbarErro(t)}}},Xt=Kt,Yt=i("7496"),qt=i("62ad"),zt=i("a523"),Wt=(i("daaf"),xt["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,r=t.right,a=t.footer,n=t.insetFooter,o=t.bottom,s=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(r,"px"),paddingBottom:"".concat(a+n+o,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})),Jt=i("0fd9"),Gt=Object(d["a"])(Xt,r,a,!1,null,null,null);e["a"]=Gt.exports;h()(Gt,{VApp:Yt["a"],VCol:qt["a"],VContainer:zt["a"],VContent:Wt,VRow:Jt["a"],VSpacer:Lt["a"]})},d23f:function(t,e,i){"use strict";var r=i("3694"),a=i.n(r);a.a},daaf:function(t,e,i){},e3d5:function(t,e,i){},f40d:function(t,e,i){"use strict";var r=i("2b0e");e["a"]=r["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-24de2b0b.7ddacb44.js.map