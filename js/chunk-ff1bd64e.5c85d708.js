(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff1bd64e"],{"0789":function(t,e,n){"use strict";n.d(e,"g",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return v}));n("99af");var a=n("d9f7");function i(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return(t=Array()).concat.apply(t,[e].concat(a))}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var r="transition".concat(n.props.group?"-group":""),s={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,a=t.offsetWidth,i=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=a+"px",t.style.height=i+"px"})),s.on.afterLeave=i(s.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,a=e.top,i=e.left,r=e.width,s=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=a||"",t.style.left=i||"",t.style.width=r||"",t.style.height=s||""}}))),n.props.hideOnLeave&&(s.on.leave=i(s.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(r,Object(a["a"])(n.data,s),n.children)}}}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,i){return n("transition",Object(a["a"])(i.data,{props:{name:t},on:e}),i.children)}}}var o=n("ade3"),c=n("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",a="offset".concat(Object(c["H"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var i=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var r="".concat(e[a],"px");e.style[n]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[a],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:i,leaveCancelled:i};function i(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},u=(r("carousel-transition"),r("carousel-reverse-transition"),r("tab-transition")),d=r("tab-reverse-transition"),h=(r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("dialog-top-transition"),r("fade-transition")),p=r("scale-transition"),f=(r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),b=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),s("expand-transition",l())),v=s("expand-x-transition",l("",!0))},"17b3":function(t,e,n){},"232d":function(t,e,n){"use strict";e["a"]={methods:{getBarberStatusTextByStatusId:function(t){window.console.log("getBarberStatusTextByStatusId");var e=this.$BARBER_STATUS,n="";switch(t){case e.AGUARDANDO_CADASTRO:n="Aguardando cadastro";break;case e.ATIVO:n="Ativo";break;case e.BLOQUEADO:n="Bloqueado";break;default:break}return n}}}},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("6b75");function i(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=n("06c5");n("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||r(t)||Object(s["a"])(t)||o()}},"2a82":function(t,e,n){},"2ce5":function(t,e,n){"use strict";n("b0c0");var a={methods:{goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.$route.name;t!=n&&(e?this.$router.push({name:t,params:e}):this.$router.push({name:t}))},goToPath:function(t){this.$router.push({path:t})},goToBack:function(){this.$router.go(-1)}}};e["a"]=a},"2d8d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container px-0"},[n("div",{staticClass:"px-4"},[n("dashboard-revenues-painel")],1),n("dashboard-barber-ranking",{staticClass:"mt-8"})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dashboard-table",{attrs:{headers:t.headers,items:t.items,loading:t.loading,noPagination:!0,page:t.currentPage,qtdPages:t.pages,title:"Ranking de barbeiros"}})},s=[],o=(n("d81d"),n("b0c0"),n("b680"),n("a9e3"),n("dd16")),c=n("ef49"),l=n("232d"),u=n("4054"),d=n("5ff8"),h={name:"BarbershopBarberRanking",components:{DashboardTable:o["a"]},mixins:[c["a"],l["a"],u["a"],d["a"]],data:function(){return{currentPage:null,headers:[{text:"",value:"image",class:"text-center",type:"image"},{text:"Barbeiro",value:"barber",class:"text-left"},{text:"Atendimentos",value:"schedules",class:"text-center"},{text:"Valor",value:"revenues",class:"text-center"},{text:"Status",value:"status",class:"text-center"}],items:[],loading:!0,pages:1}},watch:{periodState:function(){this.getBarberRanking()}},mounted:function(){this.getBarberRanking()},methods:{getBarberRanking:function(){var t=this,e="/barbershop/".concat(this.barbershop.id,"/barber-ranking");this.periodState&&(this.periodState.startDate&&(e+="startDate=".concat(this.periodState.startDate,"&")),this.periodState.endDate&&(e+="endDate=".concat(this.periodState.endDate))),this.$axios(e).then((function(e){t.loading=!1,200===e.status&&200===e.data.codigo?t.items=e.data.corpo.map((function(e){return{image:e.image_url,barber:e.name,schedules:e.qtd_schedules,revenues:"R$ ".concat(t.setMoneyMask(Number(e.revenues).toFixed(2))),status:t.getBarberStatusTextByStatusId(e.barber_status_id)}})):t.onGetBarberRankingError()})).catch((function(){return t.onGetBarberRankingError()}))},onGetBarberRankingError:function(){this.loading=!1}}},p=h,f=n("2877"),b=Object(f["a"])(p,r,s,!1,null,null,null),v=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"dashboard-painel elevation-1"},[n("v-col",{staticClass:"px-0 px-md-4",attrs:{cols:"12",sm:"4"}},[n("dashboard-revenues-painel-item",{attrs:{title:"Faturamento Total",icon:"monetization_on",text:t.revenues}})],1),n("v-col",{staticClass:"px-0 px-md-4",attrs:{cols:"12",sm:"4"}},[n("dashboard-revenues-painel-item",{attrs:{title:"Atendimentos",icon:"today",text:t.qtdSchedules}})],1),n("v-col",{staticClass:"px-0 px-md-4",attrs:{cols:"12",sm:"4"}},[n("dashboard-revenues-painel-item",{attrs:{title:"Barbeiros",icon:"people_alt",text:t.qtdBarbers}})],1)],1)},m=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-painel-item"},[n("h1",{staticClass:"title gray3--text"},[t._v(t._s(t.title))]),n("div",{staticClass:"mt-2 d-flex align-center justify-center"},[n("v-icon",{staticClass:"success--text icon"},[t._v(t._s(t.icon))]),n("span",{staticClass:"text primaryLight--text ml-2"},[t._v(t._s(t.text))])],1)])},_=[],S={name:"DashboardRevenuesPainelItem",props:{title:{required:!0},text:{required:!0},icon:{default:""}}},B=S,x=(n("f471"),n("6544")),k=n.n(x),$=n("132d"),w=Object(f["a"])(B,y,_,!1,null,"43409263",null),O=w.exports;k()(w,{VIcon:$["a"]});var C=n("5988"),j={name:"DashboardRevenuesPainel",components:{DashboardRevenuesPainelItem:O},mixins:[c["a"],u["a"],C["a"],d["a"]],data:function(){return{qtdBarbers:0,qtdSchedules:0,revenues:0}},watch:{periodState:function(){this.getTotalByBarbershop()}},mounted:function(){this.getTotalByBarbershop()},methods:{getTotalByBarbershop:function(){var t=this,e="Não foi possível buscar os dados da barbearia!",n="barbershop/".concat(this.barbershop.id,"/total?");this.periodState&&(this.periodState.startDate&&(n+="startDate=".concat(this.periodState.startDate,"&")),this.periodState.endDate&&(n+="endDate=".concat(this.periodState.endDate))),this.$axios(n).then((function(n){if(200===n.status)if(200===n.data.codigo){t.qtdBarbers=n.data.corpo.barbers,t.qtdSchedules=n.data.corpo.schedules;var a=Number(n.data.corpo.revenues).toFixed(2);t.revenues=t.setMoneyMask(a)}else t.showSnackbarErro(n.data.corpo);else t.showSnackbarErro(e)})).catch((function(){return t.showSnackbarErro(e)}))}}},A=j,E=(n("6926"),n("62ad")),I=n("0fd9"),L=Object(f["a"])(A,g,m,!1,null,"624c9e3e",null),R=L.exports;k()(L,{VCol:E["a"],VRow:I["a"]});var z=n("09ba"),V=n("7137"),D={name:"DashboardRevenues",components:{DashboardBarberRanking:v,DashboardRevenuesPainel:R},mixins:[z["a"],V["a"]]},T=D,P=Object(f["a"])(T,a,i,!1,null,null,null);e["default"]=P.exports},3385:function(t,e,n){},4054:function(t,e,n){"use strict";var a={computed:{barberState:function(){return this.$store.getters["DashboardStore/barber"]},periodState:function(){return this.$store.getters["DashboardStore/period"]}},methods:{setBarberState:function(t){this.$store.dispatch("DashboardStore/setBarber",t)},setPeriodState:function(t){this.$store.dispatch("DashboardStore/setPeriod",t)}}};e["a"]=a},5988:function(t,e,n){"use strict";var a={data:function(){return{snackbarConfig:{text:"",type:"success"}}},methods:{closeSnackbar:function(){this.snackbar=null},showSnackbar:function(t){this.snackbarConfig.type="successDark",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))},showSnackbarErro:function(t){this.snackbarConfig.type="error",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))}}};e["a"]=a},"5ff8":function(t,e,n){"use strict";n("ac1f"),n("5319"),n("a15b"),n("466d"),n("d3b7"),n("25f0"),n("99af"),n("1276");var a={filters:{numeric:function(t){return t?(t=t.replace(".",","),t.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1.")):t}},methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.replace("R$ ",""),t=t.replace(".",""),t=t.replace(",","");var e=t.substr(0,t.length-2),n=t.substr(t.length-2);return"".concat(e,".").concat(n)},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?10==t.length?t.replace(/(\d{2})(\d{4})(\d{4})/g,"($1) $2-$3"):t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),n=0,a=e.reduce((function(t,e){return n++,3==n?t=","+t:n%3===0&&(t="."+t),String(e)+String(t)}),"");return a},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),this.removeAccents(t)):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?t.match(/\d+/g).join(""):t}}};e["a"]=a},6926:function(t,e,n){"use strict";n("3385")},"6ece":function(t,e,n){},7137:function(t,e,n){"use strict";var a=n("09ba"),i=n("ef49"),r={mixins:[a["a"],i["a"]],computed:{isAdmin:function(){var t=this.getBarber();return!(!t||!this.barbershop||t.id!==this.barbershop.admin_id)}}};e["a"]=r},"891e":function(t,e,n){"use strict";var a=n("2909"),i=n("5530"),r=(n("a9e3"),n("99af"),n("d3b7"),n("25f0"),n("d81d"),n("17b3"),n("9d26")),s=n("dc22"),o=n("a9ad"),c=n("de2c"),l=n("7560"),u=n("58df");e["a"]=Object(u["a"])(o["a"],Object(c["a"])({onVisible:["init"]}),l["a"]).extend({name:"v-pagination",directives:{Resize:s["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(i["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2===0?1:0,i=Math.floor(e/2),r=this.length-i+1+n;if(this.value>i&&this.value<r){var s=1,o=this.length,c=this.value-i+2,l=this.value+i-2-n,u=c-1===s+1?2:"...",d=l+1===o-1?l+1:"...";return[1,u].concat(Object(a["a"])(this.range(c,l)),[d,this.length])}if(this.value===i){var h=this.value+i-1-n;return[].concat(Object(a["a"])(this.range(1,h)),["...",this.length])}if(this.value===r){var p=this.value-i+1;return[1,"..."].concat(Object(a["a"])(this.range(p,this.length)))}return[].concat(Object(a["a"])(this.range(1,i)),["..."],Object(a["a"])(this.range(r,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var a=t;a<=e;a++)n.push(a);return n},genIcon:function(t,e,n,a,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":i},on:n?{}:{click:a}},[t(r["a"],[e])])])},genItem:function(t,e){var n=this,a=e===this.value&&(this.color||"primary"),i=e===this.value,r=i?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":i,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(n,a){return t("li",{key:a},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},"8e36":function(t,e,n){"use strict";var a=n("5530"),i=n("ade3"),r=(n("a9e3"),n("c7cd"),n("6ece"),n("0789")),s=n("90a2"),o=n("a9ad"),c=n("fe6c"),l=n("a452"),u=n("7560"),d=n("80d2"),h=n("58df"),p=Object(h["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],u["a"]);e["a"]=p.extend({name:"v-progress-linear",directives:{intersect:s["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["h"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["h"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.isReversed?"right":"left",Object(d["h"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(d["h"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(a["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?r["c"]:r["e"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["h"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["t"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},onObserve:function(t,e,n){this.isVisible=n},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["h"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"9d26":function(t,e,n){"use strict";var a=n("132d");e["a"]=a["a"]},a452:function(t,e,n){"use strict";var a=n("ade3"),i=n("2b0e");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return i["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(a["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(a["a"])({},t,(function(t){this.internalLazyValue=t}))})}var s=r();e["a"]=s},b67e:function(t,e,n){},dc22:function(t,e,n){"use strict";function a(t,e,n){var a=e.value,i=e.options||{passive:!0};window.addEventListener("resize",a,i),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:a,options:i},e.modifiers&&e.modifiers.quiet||a()}function i(t,e,n){var a;if(null!=(a=t._onResize)&&a[n.context._uid]){var i=t._onResize[n.context._uid],r=i.callback,s=i.options;window.removeEventListener("resize",r,s),delete t._onResize[n.context._uid]}}var r={inserted:a,unbind:i};e["a"]=r},dd16:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-table"},[n("div",{staticClass:"table-container"},[t.title?n("h1",{staticClass:"title py-2 px-4"},[t._v(" "+t._s(t.title)+" ")]):t._e(),n("table",{staticClass:"table"},[n("thead",[n("tr",t._l(t.headers,(function(e,a){return n("th",{key:a,staticClass:"py-4 px-2 font-weight-normal",class:e.class,attrs:{width:e.width}},[t._v(" "+t._s(e.text)+" ")])})),0),t.loading?n("tr",[n("th",{staticClass:"progress",attrs:{colspan:t.headers.length}},[n("v-progress-linear",{attrs:{indeterminate:""}})],1)]):t._e()]),n("tbody",[t._l(t.items,(function(e,a){return[n("tr",{key:a},t._l(t.headers,(function(a,i){return n("td",{key:i,staticClass:"py-2 px-4",class:a.class},["image"===a.type?[n("div",{staticClass:"image",style:{background:"url("+t.getImage(e[a.value])+")",backgroundSize:"contain"}})]:"list"===a.type?[n("ul",t._l(e[a.value],(function(e,a){return n("li",{attrs:{Key:a}},[t._v(" "+t._s(e)+" ")])})),0)]:"money"===a.type?[t._v(" R$ "+t._s(t.setMoneyMask(e[a.value]))+" ")]:"action"===a.type?t._l(e[a.value],(function(a,i){return n("v-btn",{key:i,staticClass:"actionButton my-3 my-sm-2 mx-1 elevation-xs-0 elevation-sm-1",class:a.class,attrs:{disabled:a.disabled},on:{click:function(n){return t.callAction(a.action,e)}}},[a.icon?n("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v(t._s(a.icon))]):t._e(),t._v(t._s(a.text)+" ")],1)})):[t._v(" "+t._s(e[a.value])+" ")]],2)})),0),e.observation?n("tr",{key:e.id,staticClass:"d-none d-sm-table-row"},[n("td",{staticClass:"py-2 px-4 sem-borda",attrs:{colspan:t.headers.length}},[n("label",{staticClass:"font-weight-bold"},[t._v("Obs:")]),t._v(" "+t._s(e.observation)+" ")])]):t._e()]})),0===t.items.length?n("tr",[n("td",{staticClass:"pa-4 text-center",attrs:{colspan:t.headers.length}},[t.loading?t._e():n("span",[t._v(t._s(t.noResultText))])])]):t._e()],2)])]),t.noPagination?t._e():n("v-pagination",{staticClass:"mt-8",attrs:{length:t.qtdPages,"total-visible":8,color:"primary"},on:{input:t.changePage},model:{value:t.pageModel,callback:function(e){t.pageModel=e},expression:"pageModel"}})],1)},i=[],r=(n("99af"),n("5ff8")),s={name:"DashboardTable",mixins:[r["a"]],props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},loading:{default:!1},loadingText:{default:"Aguarde... carregando"},noPagination:{default:!1},noResultText:{default:"Nenhum registro encontrado"},page:{default:null},qtdPages:{default:null},title:{default:null}},data:function(){return{pageModel:null}},watch:{page:function(t){this.pageModel=t}},mounted:function(){this.pageModel=this.page},methods:{callAction:function(t,e){this.$emit("callAction",t,e),this.$emit(t,e)},changePage:function(t){this.$emit("changePage",t)},getImage:function(t){return"".concat(this.$url_backend).concat(t)}}},o=s,c=(n("e4d0"),n("2877")),l=n("6544"),u=n.n(l),d=n("8336"),h=n("132d"),p=n("891e"),f=n("8e36"),b=Object(c["a"])(o,a,i,!1,null,"26dbb4d8",null);e["a"]=b.exports;u()(b,{VBtn:d["a"],VIcon:h["a"],VPagination:p["a"],VProgressLinear:f["a"]})},de2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("90a2"),i=n("d9bd"),r=n("2b0e");function s(t){return r["a"].extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){a["a"].inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){a["a"].unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(e,n,a){if(this.isIntersecting=a,a)for(var r=0,s=t.onVisible.length;r<s;r++){var o=this[t.onVisible[r]];"function"!==typeof o?Object(i["c"])(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})}},e4d0:function(t,e,n){"use strict";n("b67e")},ef49:function(t,e,n){"use strict";var a=n("be3b"),i={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}},barbershopState:function(){return this.$store.getters["BarbershopStore/barbershop"]}},methods:{storeBarbershop:function(t){this.$store.dispatch("BarbershopStore/store",t)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(t){var e=this;a["a"].get("/barbershop/".concat(t)).then((function(t){200===t.data.codigo?e.onGetBarbershopByIdOnServiceSuccess(t.data.corpo):e.onGetBarbershopByIdOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopByIdOnServiceSuccess:function(t){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+t)},onGetBarbershopByIdOnServiceError:function(t){window.console.log("onGetBarbershopByIdOnServiceError: "+t)},getBarbershopAllOnService:function(){var t=this;a["a"].get("/barbershop").then((function(e){200===e.data.codigo?t.onGetBarbershopAllOnServiceSuccess(e.data.corpo):t.onGetBarbershopAllOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopAllOnServiceSuccess:function(t){window.console.log("onGetBarbershopAllOnServiceSuccess: "+t)},onGetBarbershopAllOnServiceError:function(t){window.console.log("onGetBarbershopAllOnServiceError: "+t)},syncBarbershop:function(){var t=this;a["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(e){200===e.data.codigo&&t.storeBarbershop(e.data.corpo)}))},updateBarbershopOnService:function(t,e){var n=this,i="barbershop/".concat(e);a["a"].put(i,t).then((function(t){200===t.data.codigo?n.onUpdateBarbershopOnServiceSuccess(t.data.corpo):n.onUpdateBarbershopOnServiceError(t.data.corpo)})).catch((function(t){window.console.log(t),n.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(t){window.console.log("onUpdateBarbershopOnServiceSuccess: "+t)},onUpdateBarbershopOnServiceError:function(t){window.console.log("onUpdateBarbershopOnServiceError: "+t)}}};e["a"]=i},f471:function(t,e,n){"use strict";n("2a82")}}]);
//# sourceMappingURL=chunk-ff1bd64e.5c85d708.js.map