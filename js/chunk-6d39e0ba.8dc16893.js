(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d39e0ba"],{"0789":function(t,e,r){"use strict";r("99af");var n=r("d9f7");function a(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return(t=Array()).concat.apply(t,[e].concat(n))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",r=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:e}},render:function(e,r){var i="transition".concat(r.props.group?"-group":""),o={props:{name:t,mode:r.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=r.props.origin,t.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(o.on.leave=a(o.on.leave,(function(t){return t.style.position="absolute"}))),r.props.hideOnLeave&&(o.on.leave=a(o.on.leave,(function(t){return t.style.display="none"}))),e(i,Object(n["a"])(r.data,o),r.children)}}}function o(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:r}},render:function(r,a){return r("transition",Object(n["a"])(a.data,{props:{name:t},on:e}),a.children)}}}var s=r("2fa7"),c=r("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e?"width":"height",n="offset".concat(Object(c["C"])(r));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(s["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},r,t.style[r])},enter:function(e){var a=e._initialStyle,i="".concat(e[n],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=a.visibility,e.style.overflow="hidden",e.style[r]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[r]=i}))},afterEnter:i,enterCancelled:i,leave:function(t){t._initialStyle=Object(s["a"])({transition:"",visibility:"",overflow:t.style.overflow},r,t.style[r]),t.style.overflow="hidden",t.style[r]="".concat(t[n],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[r]="0"}))},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),i(e)}function i(t){var e=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[r]=e),delete t._initialStyle}};r.d(e,"f",(function(){return u})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return f})),r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));i("carousel-transition"),i("carousel-reverse-transition");var u=i("tab-transition"),d=i("tab-reverse-transition"),h=(i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("fade-transition")),f=(i("scale-transition"),i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),p=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),o("expand-transition",l())),b=o("expand-x-transition",l("",!0))},"09ba":function(t,e,r){"use strict";var n=r("be3b"),a=r("2ce5"),i={mixins:[a["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]},barberState:function(){return this.$store.getters["BarberStore/barber"]}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(t){var e=this;n["a"].get("/barbershop/".concat(t,"/barber?status=ativo")).then((function(t){200===t.data.codigo?e.onGetBarberByBarbershopIdOnServiceSuccess(t.data.corpo):e.onGetBarberByBarbershopIdOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarberByBarbershopIdOnServiceError:function(t){window.console.log(t)},onGetBarberByBarbershopIdOnServiceSuccess:function(t){window.console.log(JSON.stringify(t))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(t){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",t)}}};e["a"]=i},"17b3":function(t,e,r){},"232d":function(t,e,r){"use strict";e["a"]={methods:{getBarberStatusTextByStatusId:function(t){window.console.log("getBarberStatusTextByStatusId");var e=this.$BARBER_STATUS,r="";switch(t){case e.AGUARDANDO_CADASTRO:r="Aguardando cadastro";break;case e.ATIVO:r="Ativo";break;case e.BLOQUEADO:r="Bloqueado";break;default:break}return r}}}},2616:function(t,e,r){var n=r("0363"),a=r("7463"),i=n("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||o[i]===t)}},"26e9":function(t,e,r){"use strict";var n=r("23e7"),a=r("e8b5"),i=[].reverse,o=[1,2];n({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),i.call(this)}})},"284c":function(t,e,r){"use strict";var n=r("1316"),a=r.n(n);function i(t){if(a()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var o=r("a06f"),s=r.n(o),c=r("2dc0"),l=r.n(c);function u(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return i(t)||u(t)||d()}r.d(e,"a",(function(){return h}))},"2a9f":function(t,e,r){},"2ce5":function(t,e,r){"use strict";r("b0c0");var n={methods:{goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.$route.name;t!=r&&(e?this.$router.push({name:t,params:e}):this.$router.push({name:t}))},goToPath:function(t){this.$router.push({path:t})},goToBack:function(){this.$router.go(-1)}}};e["a"]=n},"2d8d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container px-0"},[r("div",{staticClass:"px-4"},[r("dashboard-revenues-painel")],1),r("dashboard-barber-ranking",{staticClass:"mt-8"})],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dashboard-table",{attrs:{headers:t.headers,items:t.items,loading:t.loading,noPagination:!0,page:t.currentPage,qtdPages:t.pages,title:"Ranking de barbeiros"}})},o=[],s=(r("d81d"),r("b0c0"),r("a9e3"),r("b680"),r("dd16")),c=r("ef49"),l=r("232d"),u=r("4054"),d=r("5ff8"),h={name:"BarbershopBarberRanking",components:{DashboardTable:s["a"]},mixins:[c["a"],l["a"],u["a"],d["a"]],data:function(){return{currentPage:null,headers:[{text:"",value:"image",class:"text-center",type:"image"},{text:"Barbeiro",value:"barber",class:"text-left"},{text:"Atendimentos",value:"schedules",class:"text-center"},{text:"Valor",value:"revenues",class:"text-center"},{text:"Status",value:"status",class:"text-center"}],items:[],loading:!0,pages:1}},watch:{periodState:function(){this.getBarberRanking()}},mounted:function(){this.getBarberRanking()},methods:{getBarberRanking:function(){var t=this,e="/barbershop/".concat(this.barbershop.id,"/barber-ranking");this.periodState.startDate&&(e+="startDate=".concat(this.periodState.startDate,"&")),this.periodState.endDate&&(e+="endDate=".concat(this.periodState.endDate)),this.$axios(e).then((function(e){t.loading=!1,200===e.status&&200===e.data.codigo?t.items=e.data.corpo.map((function(e){return{image:e.image_url,barber:e.name,schedules:e.qtd_schedules,revenues:"R$ ".concat(t.setMoneyMask(Number(e.revenues).toFixed(2))),status:t.getBarberStatusTextByStatusId(e.barber_status_id)}})):t.onGetBarberRankingError()})).catch((function(){return t.onGetBarberRankingError()}))},onGetBarberRankingError:function(){this.loading=!1}}},f=h,p=r("2877"),b=Object(p["a"])(f,i,o,!1,null,null,null),v=b.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"dashboard-painel elevation-1"},[r("v-col",{staticClass:"px-0 px-md-4",attrs:{cols:"12",sm:"4"}},[r("dashboard-revenues-painel-item",{attrs:{title:"Faturamento Total",icon:"monetization_on",text:t.revenues}})],1),r("v-col",{staticClass:"px-0 px-md-4",attrs:{cols:"12",sm:"4"}},[r("dashboard-revenues-painel-item",{attrs:{title:"Atendimentos",icon:"today",text:t.qtdSchedules}})],1),r("v-col",{staticClass:"px-0 px-md-4",attrs:{cols:"12",sm:"4"}},[r("dashboard-revenues-painel-item",{attrs:{title:"Barbeiros",icon:"people_alt",text:t.qtdBarbers}})],1)],1)},m=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard-painel-item"},[r("h1",{staticClass:"title gray3--text"},[t._v(t._s(t.title))]),r("div",{staticClass:"mt-2 d-flex align-center justify-center"},[r("v-icon",{staticClass:"success--text icon"},[t._v(t._s(t.icon))]),r("span",{staticClass:"text primaryLight--text ml-2"},[t._v(t._s(t.text))])],1)])},S=[],B={name:"DashboardRevenuesPainelItem",props:{title:{required:!0},text:{required:!0},icon:{default:""}}},O=B,_=(r("563c"),r("6544")),w=r.n(_),x=r("132d"),k=Object(p["a"])(O,y,S,!1,null,"5700e0a1",null),j=k.exports;w()(k,{VIcon:x["a"]});var $=r("5988"),C={name:"DashboardRevenuesPainel",components:{DashboardRevenuesPainelItem:j},mixins:[c["a"],u["a"],$["a"],d["a"]],data:function(){return{qtdBarbers:0,qtdSchedules:0,revenues:0}},watch:{periodState:function(){this.getTotalByBarbershop()}},mounted:function(){this.getTotalByBarbershop()},methods:{getTotalByBarbershop:function(){var t=this,e="Não foi possível buscar os dados da barbearia!",r="barbershop/".concat(this.barbershop.id,"/total?");this.periodState.startDate&&(r+="startDate=".concat(this.periodState.startDate,"&")),this.periodState.endDate&&(r+="endDate=".concat(this.periodState.endDate)),this.$axios(r).then((function(r){if(200===r.status)if(200===r.data.codigo){t.qtdBarbers=r.data.corpo.barbers,t.qtdSchedules=r.data.corpo.schedules;var n=Number(r.data.corpo.revenues).toFixed(2);t.revenues=t.setMoneyMask(n)}else t.showSnackbarErro(r.data.corpo);else t.showSnackbarErro(e)})).catch((function(){return t.showSnackbarErro(e)}))}}},A=C,P=(r("bf07"),r("62ad")),E=r("0fd9"),D=Object(p["a"])(A,g,m,!1,null,"4b3db9dc",null),I=D.exports;w()(D,{VCol:P["a"],VRow:E["a"]});var z=r("09ba"),R=r("7137"),T={name:"DashboardRevenues",components:{DashboardBarberRanking:v,DashboardRevenuesPainel:I},mixins:[z["a"],R["a"]]},V=T,M=Object(p["a"])(V,n,a,!1,null,null,null);e["default"]=M.exports},4054:function(t,e,r){"use strict";var n={computed:{barberState:function(){return this.$store.getters["DashboardStore/barber"]},periodState:function(){return this.$store.getters["DashboardStore/period"]}},methods:{setBarberState:function(t){this.$store.dispatch("DashboardStore/setBarber",t)},setPeriodState:function(t){this.$store.dispatch("DashboardStore/setPeriod",t)}}};e["a"]=n},"471b":function(t,e,r){"use strict";var n=r("194a"),a=r("4fff"),i=r("faaa"),o=r("2616"),s=r("6725"),c=r("6c15"),l=r("0b7b");t.exports=function(t){var e,r,u,d,h,f=a(t),p="function"==typeof this?this:Array,b=arguments.length,v=b>1?arguments[1]:void 0,g=void 0!==v,m=0,y=l(f);if(g&&(v=n(v,b>2?arguments[2]:void 0,2)),void 0==y||p==Array&&o(y))for(e=s(f.length),r=new p(e);e>m;m++)c(r,m,g?v(f[m],m):f[m]);else for(d=y.call(f),h=d.next,r=new p;!(u=h.call(d)).done;m++)c(r,m,g?i(d,v,[u.value,m],!0):u.value);return r.length=m,r}},"484e":function(t,e,r){var n=r("a5eb"),a=r("471b"),i=r("7de7"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},"563c":function(t,e,r){"use strict";var n=r("b589"),a=r.n(n);a.a},5988:function(t,e,r){"use strict";var n={data:function(){return{snackbarConfig:{text:"",type:"success"}}},methods:{closeSnackbar:function(){this.snackbar=null},showSnackbar:function(t){this.snackbarConfig.type="accent",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))},showSnackbarErro:function(t){this.snackbarConfig.type="error",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))}}};e["a"]=n},"5ff8":function(t,e,r){"use strict";r("a15b"),r("13d5"),r("26e9"),r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("466d"),r("5319"),r("1276");var n={methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){return t?(t=t.replace("R$ ",""),t=t.split(".").join(""),t=t.split(",").join("."),t):t},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),r=0,n=e.reduce((function(t,e){return r++,3==r?t=","+t:r%3===0&&(t="."+t),String(e)+String(t)}),"");return n},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),this.removeAccents(t)):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?t.match(/\d+/g).join(""):t}}};e["a"]=n},"6ece":function(t,e,r){},7137:function(t,e,r){"use strict";var n=r("09ba"),a=r("ef49"),i={mixins:[n["a"],a["a"]],computed:{isAdmin:function(){var t=this.getBarber();return!(!t||!this.barbershop||t.id!==this.barbershop.admin_id)}}};e["a"]=i},"74e7":function(t,e,r){t.exports=r("bc59")},"7de7":function(t,e,r){var n=r("0363"),a=n("iterator"),i=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){i=!0}};s[a]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var n={};n[a]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(c){}return r}},"891e":function(t,e,r){"use strict";r("a4d3"),r("99af"),r("4de4"),r("4160"),r("d81d"),r("0d03"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("e25e"),r("25f0"),r("159b");var n=r("284c"),a=r("2fa7"),i=(r("17b3"),r("9d26")),o=r("dc22"),s=r("58df"),c=r("a9ad"),l=r("7560");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(s["a"])(c["a"],l["a"]).extend({name:"v-pagination",directives:{Resize:o["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return d({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var r=e%2===0?1:0,a=Math.floor(e/2),i=this.length-a+1+r;if(this.value>a&&this.value<i){var o=this.value-a+2,s=this.value+a-2-r;return[1,"..."].concat(Object(n["a"])(this.range(o,s)),["...",this.length])}if(this.value===a){var c=this.value+a-1-r;return[].concat(Object(n["a"])(this.range(1,c)),["...",this.length])}if(this.value===i){var l=this.value-a+1;return[1,"..."].concat(Object(n["a"])(this.range(l,this.length)))}return[].concat(Object(n["a"])(this.range(1,a)),["..."],Object(n["a"])(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var r=[];t=t>0?t:1;for(var n=t;n<=e;n++)r.push(n);return r},genIcon:function(t,e,r,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":r},attrs:{type:"button"},on:r?{}:{click:n}},[t(i["a"],[e])])])},genItem:function(t,e){var r=this,n=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return r.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(r,n){return t("li",{key:n},[isNaN(Number(r))?t("span",{class:"v-pagination__more"},[r.toString()]):e.genItem(t,r)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},"8e36":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("c7cd"),r("159b");var n=r("2fa7"),a=(r("6ece"),r("0789")),i=r("a9ad"),o=r("fe6c"),s=r("a452"),c=r("7560"),l=r("80d2"),u=r("58df");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=Object(u["a"])(i["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),s["a"],c["a"]);e["a"]=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(n["a"])(t,this.$vuetify.rtl?"right":"left",Object(l["g"])(this.normalizedValue,"%")),Object(n["a"])(t,"width",Object(l["g"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["c"]:a["d"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(l["q"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"9d26":function(t,e,r){"use strict";var n=r("132d");e["a"]=n["a"]},a06f:function(t,e,r){t.exports=r("74e7")},a452:function(t,e,r){"use strict";var n=r("2fa7"),a=r("2b0e");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(n["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n["a"])({},t,(function(t){this.internalLazyValue=t}))})}var o=i();e["a"]=o},b589:function(t,e,r){},bc59:function(t,e,r){r("3e47"),r("484e");var n=r("764b");t.exports=n.Array.from},bf07:function(t,e,r){"use strict";var n=r("de31"),a=r.n(n);a.a},d28b:function(t,e,r){var n=r("746f");n("iterator")},d9f7:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("498a"),r("159b"),r("ddb0");var n=r("2fa7"),a=r("e587"),i=r("80d2");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){var e={},r=!0,n=!1,o=void 0;try{for(var s,l=t.split(c.styleList)[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var u=s.value,d=u.split(c.styleProp),h=Object(a["a"])(d,2),f=h[0],p=h[1];f=f.trim(),f&&("string"===typeof p&&(p=p.trim()),e[Object(i["c"])(f)]=p)}}catch(b){n=!0,o=b}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return e}function u(){var t,e,r={},n=arguments.length;while(n--)for(var a=0,i=Object.keys(arguments[n]);a<i.length;a++)switch(t=i[a],t){case"class":case"style":case"directives":if(!arguments[n][t])break;if(Array.isArray(r[t])||(r[t]=[]),"style"===t){var o=void 0;o=Array.isArray(arguments[n].style)?arguments[n].style:[arguments[n].style];for(var c=0;c<o.length;c++){var u=o[c];"string"===typeof u&&(o[c]=l(u))}arguments[n].style=o}r[t]=r[t].concat(arguments[n][t]);break;case"staticClass":if(!arguments[n][t])break;void 0===r[t]&&(r[t]=""),r[t]&&(r[t]+=" "),r[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":if(!arguments[n][t])break;r[t]||(r[t]={});for(var d=r[t],h=0,f=Object.keys(arguments[n][t]||{});h<f.length;h++)e=f[h],d[e]?d[e]=Array().concat(d[e],arguments[n][t][e]):d[e]=arguments[n][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;r[t]||(r[t]={}),r[t]=s({},arguments[n][t],{},r[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:r[t]||(r[t]=arguments[n][t])}return r}},dc22:function(t,e,r){"use strict";function n(t,e){var r=e.value,n=e.options||{passive:!0};window.addEventListener("resize",r,n),t._onResize={callback:r,options:n},e.modifiers&&e.modifiers.quiet||r()}function a(t){if(t._onResize){var e=t._onResize,r=e.callback,n=e.options;window.removeEventListener("resize",r,n),delete t._onResize}}var i={inserted:n,unbind:a};e["a"]=i},dd16:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboard-table"},[r("div",{staticClass:"table-container"},[t.title?r("h1",{staticClass:"title py-2 px-4"},[t._v(" "+t._s(t.title)+" ")]):t._e(),r("table",{staticClass:"table"},[r("thead",[r("tr",t._l(t.headers,(function(e,n){return r("th",{key:n,staticClass:"py-4 px-2 font-weight-normal",class:e.class,attrs:{width:e.width}},[t._v(" "+t._s(e.text)+" ")])})),0),t.loading?r("tr",[r("th",{staticClass:"progress",attrs:{colspan:t.headers.length}},[r("v-progress-linear",{attrs:{indeterminate:""}})],1)]):t._e()]),r("tbody",[t._l(t.items,(function(e,n){return[r("tr",{key:n},t._l(t.headers,(function(n,a){return r("td",{key:a,staticClass:"py-2 px-4",class:n.class},["image"===n.type?[r("div",{staticClass:"image",style:{background:"url("+t.getImage(e[n.value])+")",backgroundSize:"contain"}})]:"list"===n.type?[r("ul",t._l(e[n.value],(function(e,n){return r("li",{attrs:{Key:n}},[t._v(" "+t._s(e)+" ")])})),0)]:"money"===n.type?[t._v(" R$ "+t._s(t.setMoneyMask(e[n.value]))+" ")]:"action"===n.type?t._l(e[n.value],(function(n,a){return r("v-btn",{key:a,staticClass:"actionButton my-3 my-sm-2 mx-1 elevation-xs-0 elevation-sm-1",class:n.class,attrs:{disabled:n.disabled},on:{click:function(r){return t.callAction(n.action,e)}}},[n.icon?r("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(t._s(n.icon))]):t._e(),t._v(t._s(n.text)+" ")],1)})):[t._v(" "+t._s(e[n.value])+" ")]],2)})),0),e.observation?r("tr",{key:e.id,staticClass:"d-none d-sm-table-row"},[r("td",{staticClass:"py-2 px-4 sem-borda",attrs:{colspan:t.headers.length}},[r("label",{staticClass:"font-weight-bold"},[t._v("Obs:")]),t._v(" "+t._s(e.observation)+" ")])]):t._e()]})),0===t.items.length?r("tr",[r("td",{staticClass:"pa-4 text-center",attrs:{colspan:t.headers.length}},[t.loading?t._e():r("span",[t._v(t._s(t.noResultText))])])]):t._e()],2)])]),t.noPagination?t._e():r("v-pagination",{staticClass:"mt-8",attrs:{length:t.qtdPages,"total-visible":8,color:"primary"},on:{input:t.changePage},model:{value:t.pageModel,callback:function(e){t.pageModel=e},expression:"pageModel"}})],1)},a=[],i=(r("99af"),r("5ff8")),o={name:"DashboardTable",mixins:[i["a"]],props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},loading:{default:!1},loadingText:{default:"Aguarde... carregando"},noPagination:{default:!1},noResultText:{default:"Nenhum registro encontrado"},page:{default:null},qtdPages:{default:null},title:{default:null}},data:function(){return{pageModel:null}},watch:{page:function(t){this.pageModel=t}},mounted:function(){this.pageModel=this.page},methods:{callAction:function(t,e){this.$emit("callAction",t,e),this.$emit(t,e)},changePage:function(t){this.$emit("changePage",t)},getImage:function(t){return"".concat(this.$url_backend).concat(t)}}},s=o,c=(r("ea24"),r("2877")),l=r("6544"),u=r.n(l),d=r("8336"),h=r("132d"),f=r("891e"),p=r("8e36"),b=Object(c["a"])(s,n,a,!1,null,"b07837a4",null);e["a"]=b.exports;u()(b,{VBtn:d["a"],VIcon:h["a"],VPagination:f["a"],VProgressLinear:p["a"]})},de31:function(t,e,r){},ea24:function(t,e,r){"use strict";var n=r("2a9f"),a=r.n(n);a.a},ef49:function(t,e,r){"use strict";var n=r("be3b"),a={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}},barbershopState:function(){return this.$store.getters["BarbershopStore/barbershop"]}},methods:{storeBarbershop:function(t){this.$store.dispatch("BarbershopStore/store",t)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(t){var e=this;n["a"].get("/barbershop/".concat(t)).then((function(t){200===t.data.codigo?e.onGetBarbershopByIdOnServiceSuccess(t.data.corpo):e.onGetBarbershopByIdOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopByIdOnServiceSuccess:function(t){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+t)},onGetBarbershopByIdOnServiceError:function(t){window.console.log("onGetBarbershopByIdOnServiceError: "+t)},getBarbershopAllOnService:function(){var t=this;n["a"].get("/barbershop").then((function(e){200===e.data.codigo?t.onGetBarbershopAllOnServiceSuccess(e.data.corpo):t.onGetBarbershopAllOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopAllOnServiceSuccess:function(t){window.console.log("onGetBarbershopAllOnServiceSuccess: "+t)},onGetBarbershopAllOnServiceError:function(t){window.console.log("onGetBarbershopAllOnServiceError: "+t)},syncBarbershop:function(){var t=this;n["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(e){200===e.data.codigo&&t.storeBarbershop(e.data.corpo)}))},updateBarbershopOnService:function(t,e){var r=this,a="barbershop/".concat(e);n["a"].put(a,t).then((function(t){200===t.data.codigo?r.onUpdateBarbershopOnServiceSuccess(t.data.corpo):r.onUpdateBarbershopOnServiceError(t.data.corpo)})).catch((function(t){window.console.log(t),r.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(t){window.console.log("onUpdateBarbershopOnServiceSuccess: "+t)},onUpdateBarbershopOnServiceError:function(t){window.console.log("onUpdateBarbershopOnServiceError: "+t)}}};e["a"]=a},faaa:function(t,e,r){var n=r("6f8d");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(o){var i=t["return"];throw void 0!==i&&n(i.call(t)),o}}}}]);
//# sourceMappingURL=chunk-6d39e0ba.8dc16893.js.map