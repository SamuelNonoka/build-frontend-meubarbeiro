(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41f69b69"],{"06aa":function(t,e,a){"use strict";e["a"]={computed:{isLoading:function(){return this.$store.getters["LoaderStore/isLoading"]}},methods:{showLoader:function(){this.$store.dispatch("LoaderStore/setLoader",!0)},hideLoader:function(){this.$store.dispatch("LoaderStore/setLoader",!1)}}}},"1d0a":function(t,e,a){"use strict";var i=a("1fbc"),n=a.n(i);n.a},"1fbc":function(t,e,a){},"6bf8":function(t,e,a){},"6cd4":function(t,e,a){"use strict";a("b0c0");var i=a("2ce5"),n={mixins:[i["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(t){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",t)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"home"==this.$route.name?window.location=window.location.origin+"/":this.goTo("home")}}};e["a"]=n},"892d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("site-template",[a("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navigation-drawer",{ref:"navigationDrawer"}),a("topo",{attrs:{title:t.pageTitle,backButton:t.backButton,backButtonRouteName:t.backButtonRouteName,menuButton:t.menuButton},on:{navigationDrawerClicked:function(e){return t.toggleNavigationDrawer()}}}),a("main",{staticClass:"site-main",class:"site-main-"+t.pageClass},[a("v-container",{class:{"container--fluid":t.fluid,"pa-0":t.noPadding}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[t._t("default")],2)]),a("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{indeterminate:"",size:"50",color:"secondaryDark"}})],1),a("rodape",{staticClass:"primaryDark",attrs:{items:t.footerItems,bottomNav:t.alias}})],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"fullDrawer open",attrs:{id:"menu-lateral",color:"primaryDark",absolute:"",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[a("v-list-item",{key:e.text,staticClass:"btn-lateral my-1",class:t.isActive(e.alias),attrs:{rounded:"",dark:""},on:{click:function(a){return t.goTo(e.routeName)}}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]})),a("v-divider",{staticClass:"my-1 mx-2",attrs:{color:"white"}}),a("v-list-item",{key:"barberiros",staticClass:"btn-lateral",class:t.isActive("dashboard"),attrs:{rounded:"",dark:""},on:{click:function(e){return t.goTo("admin")}}},[a("v-list-item-action",[a("v-icon",[t._v("east")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Para barbeiros ")])],1)],1)],2)],1)},c=[],l=a("2ce5"),u={name:"NavigationDrawer",mixins:[l["a"]],props:{alias:{default:""}},data:function(){return{drawer:!1,items:[{icon:"home",text:"Página Inicial",routeName:"home",alias:"dashboard"},{icon:"calendar_today",text:"Meus Agendamentos",routeName:"site-schedule",alias:"schedule"}]}},methods:{isActive:function(t){return this.alias===t?"active":""},toggleNavigationDrawer:function(){this.drawer=!this.drawer}}},d=u,h=a("2877"),m=a("6544"),v=a.n(m),f=a("ce7e"),p=a("132d"),g=a("8860"),b=a("da13"),w=a("1800"),k=a("5d23"),y=a("f774"),_=Object(h["a"])(d,s,c,!1,null,null,null),C=_.exports;v()(_,{VDivider:f["a"],VIcon:p["a"],VList:g["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemContent:k["a"],VListItemTitle:k["b"],VNavigationDrawer:y["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-navigation",{staticClass:"primary",attrs:{padless:"",inset:!1,fixed:"",grow:"",shift:"",dark:""},model:{value:t.bottomNavModel,callback:function(e){t.bottomNavModel=e},expression:"bottomNavModel"}},t._l(t.items,(function(e,i){return a("v-btn",{key:i,attrs:{value:e.value,height:"100%"},on:{click:function(a){return t.goTo(e.routeName)}}},[a("span",[t._v(t._s(e.title))]),a("v-icon",[t._v(t._s(e.icon))])],1)})),1)},B=[],x={name:"Footer",mixins:[l["a"]],props:{items:{default:Array},bottomNav:{default:""}},computed:{bottomNavModel:{set:function(){},get:function(){return this.bottomNav}}}},$=x,N=(a("1d0a"),a("b81c")),P=a("8336"),V=Object(h["a"])($,O,B,!1,null,"8f5354a8",null),S=V.exports;v()(V,{VBottomNavigation:N["a"],VBtn:P["a"],VIcon:p["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"primaryDark",attrs:{id:"header-site"}},[a("v-container",{staticClass:"container py-0"},[a("v-row",[a("v-col",{staticClass:"py-0 pr-0"},[a("h1",{staticClass:"header-site-titulo font-weight-regular"},[t.menuButton?a("v-btn",{staticClass:"px-0",attrs:{text:""},on:{click:function(e){return t.openMenu()}}},[a("v-icon",[t._v(" menu ")])],1):t._e(),t.backButton?a("v-btn",{staticClass:"px-0",attrs:{text:""},on:{click:function(e){return t.goToBackLocal()}}},[a("v-icon",[t._v(" arrow_back_ios ")])],1):a("img",{staticClass:"icone",attrs:{src:"/icone-180x180.png"}}),a("span",[t._v(t._s(t.title))])],1)]),a("v-col",{staticClass:"py-0 px-0 text-right",attrs:{cols:"auto"}},[t.isUserAutenticated()?a("v-menu",{attrs:{right:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"btn-profile mr-4",attrs:{dark:"",text:"",small:""}},"v-btn",n,!1),i),[t.imageUrl?[a("img",{staticClass:"d-none d-md-inline image-topo",attrs:{src:t.imageUrl}})]:[a("v-icon",{staticClass:"d-none d-md-inline"},[t._v(" account_circle ")])],a("v-icon",{staticClass:"d-inline d-md-none"},[t._v(" more_vert ")])],2)]}}],null,!1,1091926667)},[a("v-list",t._l(t.menuItems,(function(e,i){return a("v-list-item",{key:i,on:{click:function(a){return t.menuClicked(e.action)}}},[a("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1):a("v-btn",{staticClass:"px-0",attrs:{text:"",dark:""},on:{click:function(e){return t.goTo("login")}}},[a("v-icon",[t._v(" account_circle ")])],1)],1)],1)],1),a("change-password-dialog",{ref:"changePasswordDialog"})],1)},D=[],T=(a("99af"),a("d3b7"),a("6cd4")),L=function(){return Promise.all([a.e("chunk-579e1ea3"),a.e("chunk-68d1e26b")]).then(a.bind(null,"8f8d"))},U={name:"Header",components:{ChangePasswordDialog:L},mixins:[l["a"],T["a"]],props:{title:{default:"Meu Barbeiro"},backButton:{default:!1},backButtonRouteName:{default:null},menuButton:{default:!1}},data:function(){return{menuItems:[{title:"Meu Perfil",action:"site-profile"},{title:"Alterar Senha",action:"site-change-password"},{title:"Sair",action:"logout"}]}},computed:{imageUrl:function(){return this.user&&this.user.image_url?"".concat(this.$url_backend).concat(this.user.image_url):null}},methods:{goToBackLocal:function(){this.backButtonRouteName?this.goTo(this.backButtonRouteName):this.goToBack()},menuClicked:function(t){"logout"===t?this.logoutUser():"site-change-password"===t?this.goTo("site-change-password"):"site-profile"===t&&this.goTo("site-profile")},openMenu:function(){this.$emit("navigationDrawerClicked")}}},A=U,I=(a("c554"),a("62ad")),M=a("a523"),R=a("e449"),E=a("0fd9"),z=Object(h["a"])(A,j,D,!1,null,"7d82e807",null),H=z.exports;v()(z,{VBtn:P["a"],VCol:I["a"],VContainer:M["a"],VIcon:p["a"],VList:g["a"],VListItem:b["a"],VListItemTitle:k["b"],VMenu:R["a"],VRow:E["a"]});var J=a("06aa"),F={components:{NavigationDrawer:C,Rodape:S,Topo:H},mixins:[J["a"]],props:{alias:{default:""},menuButton:{default:!1}},data:function(){return{backButton:null,backButtonRouteName:null,fluid:null,footerItems:[{title:"Barbearias",icon:"home",value:"dashboard",routeName:"home"},{title:"Agendamentos",icon:"calendar_today",value:"schedule",routeName:"site-schedule"}],noPadding:null,pageTitle:null,pageClass:null}},mounted:function(){this.setPage()},updated:function(){this.setPage()},methods:{setPage:function(){this.fluid=this.$route.meta.fluid||!1,this.noPadding=this.$route.meta.noPadding||!1,this.backButton=this.$route.meta.backButton||null,this.backButtonRouteName=this.$route.meta.backButtonRouteName||null,this.pageTitle=this.$route.meta.pageTitle||"Meu Barbeiro",this.pageClass=this.$route.meta.pageCssClass||null},toggleNavigationDrawer:function(){this.$refs.navigationDrawer.toggleNavigationDrawer()}}},Y=F,q=(a("ca9d"),a("490a")),G=Object(h["a"])(Y,o,r,!1,null,"46ad57c4",null),K=G.exports;v()(G,{VContainer:M["a"],VProgressCircular:q["a"]});var Q={name:"home",components:{SiteTemplate:K}},W=Q,X=Object(h["a"])(W,i,n,!1,null,null,null);e["default"]=X.exports},"8ce9":function(t,e,a){},b262:function(t,e,a){},b81c:function(t,e,a){"use strict";a("a4d3"),a("4de4"),a("4160"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("c7cd"),a("159b");var i=a("2fa7"),n=(a("dd43"),a("3a66")),o=a("604c"),r=o["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o["a"].options.computed.classes.call(this)}},methods:{genData:o["a"].options.methods.genData}}),s=a("a9ad"),c=a("24b2"),l=a("a452"),u=a("277e"),d=a("7560"),h=a("f2e7"),m=a("58df"),v=a("d9bd");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(m["a"])(Object(n["a"])("bottom",["height","inputValue"]),s["a"],c["a"],Object(h["b"])("inputValue"),l["a"],u["a"],d["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return u["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return p({},this.measurableStyles,{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(v["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(r,this.setTextColor(this.color,e),this.$slots.default)}})},c554:function(t,e,a){"use strict";var i=a("b262"),n=a.n(i);n.a},ca9d:function(t,e,a){"use strict";var i=a("6bf8"),n=a.n(i);n.a},ce7e:function(t,e,a){"use strict";a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");var i=a("2fa7"),n=(a("8ce9"),a("7560"));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:r({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:r({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},dd43:function(t,e,a){}}]);
//# sourceMappingURL=chunk-41f69b69.7b63d287.js.map