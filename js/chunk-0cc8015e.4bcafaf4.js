(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cc8015e"],{"0234":function(t,e,r){},"1bf7":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{id:"topo","clipped-left":"",app:"",color:"primary",dark:""}},[r("v-btn",{staticClass:"d-md-none pl-0",attrs:{text:""},on:{click:function(e){return t.toggleMenu()}}},[r("v-icon",[t._v(" menu ")])],1),r("v-toolbar-title",{staticClass:"ml-sm-4"},[t._v(" "+t._s(t.title)+" "),t.subtitle?r("small",{staticClass:"d-none d-md-inline barbershopname ml-2"},[t._v(" "+t._s(t.subtitle)+" ")]):t._e()]),r("v-spacer"),r("v-menu",{staticClass:"btn-avatar",attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("div",t._g({staticClass:"btn-avatar",attrs:{dark:""}},a),[r("span",{staticClass:"mr-2 d-none d-md-inline"},[t._v(" "+t._s(t.name)+" ")]),r("div",{staticClass:"d-none d-md-inline"},[r("v-avatar",{staticClass:"gray2",attrs:{size:"48px",item:""}},[t.avatar?r("v-img",{attrs:{src:t.avatarComputed}}):t._e()],1)],1),r("v-icon",{staticClass:"ml-2 d-none d-md-inline"},[t._v(" keyboard_arrow_down ")]),r("v-icon",{staticClass:"ml-2 d-inline d-sm-inline d-md-none"},[t._v(" more_vert ")])],1)]}}])},[r("v-list",t._l(t.items,(function(e,a){return r("v-list-item",{key:a,on:{click:function(r){return t.clickMenu(e)}}},[r("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1)],1)},i=[],o=(r("99af"),{name:"Topo",props:{avatar:{default:null},items:{default:Array},name:{default:null},title:{default:"Meu Barbeiro"},subtitle:{default:null}},computed:{avatarComputed:function(){return this.avatar?"".concat(this.$url_backend).concat(this.avatar):null}},methods:{toggleMenu:function(){this.$emit("toggleMenu")},clickMenu:function(t){this.$emit("clicked",t)}}}),n=o,s=(r("41ee"),r("2877")),c=r("6544"),l=r.n(c),d=r("40dc"),u=r("8212"),h=r("8336"),p=r("132d"),f=r("adda"),m=r("8860"),b=r("da13"),v=r("5d23"),g=r("e449"),S=r("2fa4"),O=r("2a7f"),B=Object(s["a"])(n,a,i,!1,null,"0afe75e9",null);e["a"]=B.exports;l()(B,{VAppBar:d["a"],VAvatar:u["a"],VBtn:h["a"],VIcon:p["a"],VImg:f["a"],VList:m["a"],VListItem:b["a"],VListItemTitle:v["b"],VMenu:g["a"],VSpacer:S["a"],VToolbarTitle:O["a"]})},"2a7f":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var a=r("71d9"),i=r("80d2"),o=Object(i["j"])("v-toolbar__title"),n=Object(i["j"])("v-toolbar__items");a["a"]},"2ec0":function(t,e,r){"use strict";r("6dd7")},"2fa4":function(t,e,r){"use strict";r("20f6");var a=r("80d2");e["a"]=Object(a["j"])("spacer","div","v-spacer")},"36d9":function(t,e,r){"use strict";r("a7e1")},"40dc":function(t,e,r){"use strict";var a=r("5530"),i=(r("c7cd"),r("a9e3"),r("8b0d"),r("71d9")),o=r("f977"),n=r("3a66"),s=r("277e"),c=r("d10f"),l=r("f2e7"),d=r("80d2"),u=r("58df"),h=Object(u["a"])(i["a"],s["a"],c["a"],l["a"],Object(n["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=h.extend({name:"v-app-bar",directives:{Scroll:o["b"]},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return s["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return i["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=i["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:i["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return i["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.styles.call(this)),{},{fontSize:Object(d["h"])(this.computedFontSize,"rem"),marginTop:Object(d["h"])(this.computedMarginTop),transform:"translateY(".concat(Object(d["h"])(this.computedTransform),")"),left:Object(d["h"])(this.computedLeft),right:Object(d["h"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=i["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=i["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"41ee":function(t,e,r){"use strict";r("56aa")},"4b85":function(t,e,r){},"4e15":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-breadcrumb"},[r("v-breadcrumbs",{staticClass:"px-0 py-0",attrs:{items:t.items,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)},i=[],o=(r("95d4"),{name:"Breadcrumb",props:{items:{default:Array}}}),n=o,s=r("2877"),c=r("6544"),l=r.n(c),d=r("5530"),u=(r("a15b"),r("abd3"),r("ade3")),h=r("1c87"),p=r("58df"),f=Object(p["a"])(h["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(u["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return t("li",[t(r,Object(d["a"])(Object(d["a"])({},a),{},{attrs:Object(d["a"])(Object(d["a"])({},a.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=r("80d2"),b=Object(m["j"])("v-breadcrumbs__divider","li"),v=r("7560"),g=Object(p["a"])(v["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(d["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(b,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],a=0;a<this.items.length;a++){var i=this.items[a];r.push(i.text),e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(f,{key:r.join("."),props:i},[i.text])),a<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),S=r("132d"),O=Object(s["a"])(n,a,i,!1,null,null,null);e["a"]=O.exports;l()(O,{VBreadcrumbs:g,VIcon:S["a"]})},"56aa":function(t,e,r){},"5e23":function(t,e,r){},"6dd7":function(t,e,r){},"71d9":function(t,e,r){"use strict";var a=r("3835"),i=r("5530"),o=(r("a9e3"),r("0481"),r("4069"),r("d3b7"),r("5e23"),r("8dd9")),n=r("adda"),s=r("80d2"),c=r("d9bd");e["a"]=o["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(i["a"])(Object(i["a"])({},this.measurableStyles),{},{height:Object(s["h"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var r=Object(a["a"])(e,2),i=r[0],o=r[1];t.$attrs.hasOwnProperty(i)&&Object(c["a"])(i,o,t)}))},methods:{genBackground:function(){var t={height:Object(s["h"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(s["h"])(this.computedContentHeight)}},Object(s["t"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(s["h"])(this.extensionHeight)}},Object(s["t"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],r=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,r,e)}})},"772a":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"moderators-template"}},[r("navigation-drawer",{ref:"navigationDrawer",attrs:{alias:t.alias,itemsMenu:t.itemsMenu}}),r("topo",{attrs:{name:"Nome do usuário logado",title:t.pageName,items:t.topMenuItems},on:{toggleMenu:t.toggleMenu,clicked:t.onClickedTopMenu}}),r("v-content",{staticClass:"background main"},[r("v-container",{attrs:{fluid:""}},[t.breadcrumbs.length>0?r("breadcrumb",{staticClass:"mb-8 mt-4 py-0 d-none d-md-block",attrs:{items:t.breadcrumbs}}):t._e(),r("div",{staticClass:"conteudo"},[r("router-view")],1)],1)],1)],1)},i=[],o=(r("ac1f"),r("1276"),r("81b2"),r("0eb6"),r("b7ef"),r("8bd4"),r("4e15")),n=r("8bdb"),s=r("1bf7"),c=r("2ce5"),l={name:"Base",components:{Breadcrumb:o["a"],NavigationDrawer:n["a"],Topo:s["a"]},mixins:[c["a"]],data:function(){return{itemsMenu:Array,topMenuItems:[{title:"Sair",alias:"logout"}]}},computed:{alias:function(){return this.$route.meta.alias},breadcrumbs:function(){return this.$route.meta.breadcrumbs||[]},pageName:function(){return this.$route.meta.pageName},cssClass:function(){return"px-4 px-sm-8"}},created:function(){this.setNavigationDrawer()},methods:{getToken:function(){if(localStorage.moderatorToken){var t=localStorage.moderatorToken.split(".");if(3===t.length)try{return JSON.parse(atob(t[1]))}catch(e){return null}}return null},logout:function(){localStorage.moderatorToken=null,this.goTo("moderators-login")},onClickedTopMenu:function(){this.logout()},setNavigationDrawer:function(){this.itemsMenu=[{icon:"dashboard",text:"Dashboard",routeName:"moderators-dashboard",alias:"dashboard"},{icon:"storefront",text:"Barbearias",routeName:"moderators-barbershops",alias:"barbershops"},{icon:"people_alt",text:"Barbeiros",routeName:"moderators-barbers",alias:"barbers"},{icon:"people_alt",text:"Usuários",routeName:"moderators-users",alias:"users"},{icon:"support_agent",text:"Suporte",routeName:"moderators-help",alias:"help"},{icon:"connect_without_contact",text:"Indicações",routeName:"moderators-indications",alias:"indications"}]},toggleMenu:function(){this.$refs.navigationDrawer.toggleNavigationDrawer()}}},d=l,u=(r("36d9"),r("2877")),h=r("6544"),p=r.n(h),f=r("7496"),m=r("a523"),b=r("a75b"),v=Object(u["a"])(d,a,i,!1,null,"2d9448ab",null);e["default"]=v.exports;p()(v,{VApp:f["a"],VContainer:m["a"],VContent:b["a"]})},"8b0d":function(t,e,r){},"8bdb":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{class:t.fullDrawer?"open":"",attrs:{id:"menu-lateral",color:"primaryDark",clipped:"",permanent:t.isPermanent,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:"",dark:""}},[t._l(t.itemsMenu,(function(e){return[r("v-list-item",{key:e.text,staticClass:"btn-lateral my-1",class:t.isActive(e.alias),attrs:{rounded:"",dark:""},on:{click:function(r){return t.goTo(e.routeName)}}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))]),r("span",{staticClass:"mt-2 d-none d-md-block"},[t._v(" "+t._s(e.text)+" ")])],1),r("v-list-item-content",{staticClass:"d-md-none"},[r("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]}))],2)],1)},i=[],o=r("09ba"),n=r("ef49"),s={methods:{setDrawer:function(t){window.console.log("setDrawer: "+t),this.$store.dispatch("MenuStore/setDrawer",t)},getDrawer:function(){var t=this.$store.getters["MenuStore/getDrawer"];return"true"===t}}},c=s,l=r("2ce5"),d={name:"NavigationDrawer",mixins:[o["a"],n["a"],c,l["a"]],props:{alias:{default:""},itemsMenu:{default:Array}},data:function(){return{isPermanent:!0,drawer:!1,fullDrawer:!1}},watch:{drawer:function(t){if(t){var e=this;setTimeout((function(){var t=document.querySelector(".v-overlay__scrim");t&&t.addEventListener("click",(function(){e.toggleNavigationDrawer()}))}),100)}}},mounted:function(){this.fullDrawer=this.getDrawer(),this.isPermanent=window.innerWidth>959},methods:{isActive:function(t){return this.alias===t?"active":""},toggleNavigationDrawer:function(){this.drawer=!this.drawer,this.fullDrawer=!this.fullDrawer,this.setDrawer(this.fullDrawer)}}},u=d,h=(r("9534"),r("2ec0"),r("2877")),p=r("6544"),f=r.n(p),m=r("132d"),b=r("8860"),v=r("da13"),g=r("1800"),S=r("5d23"),O=r("f774"),B=Object(h["a"])(u,a,i,!1,null,"683ff0ef",null);e["a"]=B.exports;f()(B,{VIcon:m["a"],VList:b["a"],VListItem:v["a"],VListItemAction:g["a"],VListItemContent:S["a"],VListItemTitle:S["b"],VNavigationDrawer:O["a"]})},9534:function(t,e,r){"use strict";r("0234")},"95d4":function(t,e,r){},a75b:function(t,e,r){"use strict";r("bd0c");var a=r("d10f"),i=a["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,r=t.top,a=t.right,i=t.footer,o=t.insetFooter,n=t.bottom,s=t.left;return{paddingTop:"".concat(r+e,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(i+o+n,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),o=r("d9bd");e["a"]=i.extend({name:"v-main",created:function(){Object(o["d"])("v-content","v-main",this)},render:function(t){var e=i.options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}})},a7e1:function(t,e,r){},abd3:function(t,e,r){},bd0c:function(t,e,r){},d9f7:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return h}));var a=r("5530"),i=r("3835"),o=r("b85c"),n=(r("ac1f"),r("1276"),r("498a"),r("b64b"),r("99af"),r("80d2")),s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,r={},a=Object(o["a"])(t.split(s.styleList));try{for(a.s();!(e=a.n()).done;){var c=e.value,l=c.split(s.styleProp),d=Object(i["a"])(l,2),u=d[0],h=d[1];u=u.trim(),u&&("string"===typeof h&&(h=h.trim()),r[Object(n["c"])(u)]=h)}}catch(p){a.e(p)}finally{a.f()}return r}function l(){var t,e={},r=arguments.length;while(r--)for(var i=0,o=Object.keys(arguments[r]);i<o.length;i++)switch(t=o[i],t){case"class":case"directives":arguments[r][t]&&(e[t]=u(e[t],arguments[r][t]));break;case"style":arguments[r][t]&&(e[t]=d(e[t],arguments[r][t]));break;case"staticClass":if(!arguments[r][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":arguments[r][t]&&(e[t]=h(e[t],arguments[r][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[r][t])break;e[t]||(e[t]={}),e[t]=Object(a["a"])(Object(a["a"])({},arguments[r][t]),e[t]);break;default:e[t]||(e[t]=arguments[r][t])}return e}function d(t,e){return t?e?(t=Object(n["I"])("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function u(t,e){return e?t&&t?Object(n["I"])(t).concat(e):e:t}function h(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var r=e<0||arguments.length<=e?void 0:arguments[e];for(var a in r)r[a]&&(t[a]?t[a]=[].concat(r[a],t[a]):t[a]=r[a])}return t}},ef49:function(t,e,r){"use strict";var a=r("be3b"),i={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}},barbershopState:function(){return this.$store.getters["BarbershopStore/barbershop"]}},methods:{storeBarbershop:function(t){this.$store.dispatch("BarbershopStore/store",t)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(t){var e=this;a["a"].get("/barbershop/".concat(t)).then((function(t){200===t.data.codigo?e.onGetBarbershopByIdOnServiceSuccess(t.data.corpo):e.onGetBarbershopByIdOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopByIdOnServiceSuccess:function(t){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+t)},onGetBarbershopByIdOnServiceError:function(t){window.console.log("onGetBarbershopByIdOnServiceError: "+t)},getBarbershopAllOnService:function(){var t=this;a["a"].get("/barbershop").then((function(e){200===e.data.codigo?t.onGetBarbershopAllOnServiceSuccess(e.data.corpo):t.onGetBarbershopAllOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopAllOnServiceSuccess:function(t){window.console.log("onGetBarbershopAllOnServiceSuccess: "+t)},onGetBarbershopAllOnServiceError:function(t){window.console.log("onGetBarbershopAllOnServiceError: "+t)},syncBarbershop:function(){var t=this;a["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(e){200===e.data.codigo&&t.storeBarbershop(e.data.corpo)}))},updateBarbershopOnService:function(t,e){var r=this,i="barbershop/".concat(e);a["a"].put(i,t).then((function(t){200===t.data.codigo?r.onUpdateBarbershopOnServiceSuccess(t.data.corpo):r.onUpdateBarbershopOnServiceError(t.data.corpo)})).catch((function(t){window.console.log(t),r.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(t){window.console.log("onUpdateBarbershopOnServiceSuccess: "+t)},onUpdateBarbershopOnServiceError:function(t){window.console.log("onUpdateBarbershopOnServiceError: "+t)}}};e["a"]=i}}]);
//# sourceMappingURL=chunk-0cc8015e.4bcafaf4.js.map