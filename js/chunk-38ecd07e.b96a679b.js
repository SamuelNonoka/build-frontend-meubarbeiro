(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38ecd07e"],{"0789":function(t,e,n){"use strict";n("99af");var r=n("d9f7");function a(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return(t=Array()).concat.apply(t,[e].concat(r))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var i="transition".concat(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=a(o.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(o.on.leave=a(o.on.leave,(function(t){return t.style.display="none"}))),e(i,Object(r["a"])(n.data,o),n.children)}}}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,a){return n("transition",Object(r["a"])(a.data,{props:{name:t},on:e}),a.children)}}}var s=n("2fa7"),c=n("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",r="offset".concat(Object(c["C"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(s["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var a=e._initialStyle,i="".concat(e[r],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=a.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=i}))},afterEnter:i,enterCancelled:i,leave:function(t){t._initialStyle=Object(s["a"])({transition:"",visibility:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[r],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),i(e)}function i(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}};n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return g}));i("carousel-transition"),i("carousel-reverse-transition");var u=i("tab-transition"),d=i("tab-reverse-transition"),f=(i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("fade-transition")),h=(i("scale-transition"),i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),p=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),o("expand-transition",l())),g=o("expand-x-transition",l("",!0))},"09ba":function(t,e,n){"use strict";var r=n("be3b"),a=n("2ce5"),i={mixins:[a["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(t){var e=this;r["a"].get("/barbershop/".concat(t,"/barber")).then((function(t){200===t.data.codigo?e.onGetBarberByBarbershopIdOnServiceSuccess(t.data.corpo):e.onGetBarberByBarbershopIdOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarberByBarbershopIdOnServiceError:function(t){window.console.log(t)},onGetBarberByBarbershopIdOnServiceSuccess:function(t){window.console.log(JSON.stringify(t))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(t){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",t)}}};e["a"]=i},"0c02":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scheduling-requests"},[n("dashboard-table",{attrs:{headers:t.headers,items:t.items,loading:t.loading,page:t.currentPage,qtdPages:t.pages,noResultText:"Nenhum solicitação pendente"},on:{changePage:t.changePage,callAction:t.callAction}})],1)},a=[],i=(n("c740"),n("d81d"),n("a434"),n("0d03"),n("b0c0"),n("a9e3"),n("b680"),n("dd16")),o=n("09ba"),s=n("5f08"),c=n("5988"),l=n("5ff8"),u={name:"DashboardSchedulingRequests",components:{DashboardTable:i["a"]},mixins:[o["a"],s["a"],c["a"],l["a"]],data:function(){return{currentPage:null,headers:[{text:"",value:"image",class:"text-center",type:"image"},{text:"Nome do cliente",value:"client",class:"text-center",type:null},{text:"Data",value:"date",class:"text-center",type:null},{text:"Serviços",value:"services",class:"text-center",type:"list"},{text:"Valor",value:"value",class:"text-center",type:null},{text:"#",value:"actions",class:"text-center",type:"action",width:"280px"}],items:[],loading:!0,pages:1,interval:null}},mounted:function(){var t=this,e=3e5;this.interval=setTimeout((function(){t.getSchedules()}),e),this.getSchedules()},beforeDestroy:function(){this.interval=null},methods:{acept:function(t){var e=this,n="Não foi possível aprovar o agendamento!";this.$axios.put("/schedule/".concat(t.id,"/approve")).then((function(r){if(200===r.status)if(200===r.data.codigo){e.showSnackbar(r.data.corpo);var a=e.items.findIndex((function(e){return e.id===t.id}));a>-1&&e.items.splice(a,1)}else e.setError(r.data.corpo);else e.setError(n)})).catch((function(){return e.setError(n)}))},callAction:function(t,e){switch(t){case"acept":this.acept(e);break;case"refuse":this.refuse(e);break}},changePage:function(t){this.currentPage=t},getSchedules:function(){var t=this;this.loading=!0;var e="/schedule/barbershop/".concat(this.barber.barbershop_id,"/pending");this.currentPage&&(e+="?page=".concat(this.currentPage)),this.$axios.get(e).then((function(e){t.loading=!1,200===e.data.codigo?(t.currentPage=e.data.corpo.current_page,t.pages=e.data.corpo.last_page,t.items=e.data.corpo.data.map((function(e){var n=e.services.map((function(t){return"".concat(t.name)})),r=[{text:"Aceitar",action:"acept",class:"success"},{text:"Recusar",action:"refuse",class:"default"}];return{id:e.id,date:t.formatDateTimeToStringPtBr(new Date(e.start_date)),image:e.user.image_url,client:e.user.name,value:"R$ ".concat(t.setMoneyMask(Number(e.price).toFixed(2))),services:n,actions:r}}))):t.setError(e.data.corpo)})).catch((function(){return t.setError("Não foi possível recuperar os agendamentos!")}))},refuse:function(t){var e=this,n="Não foi possível reprovar o agendamento!";this.$axios.put("/schedule/".concat(t.id,"/repprove")).then((function(r){if(200===r.status)if(200===r.data.codigo){e.showSnackbar(r.data.corpo);var a=e.items.findIndex((function(e){return e.id===t.id}));a>-1&&e.items.splice(a,1)}else e.setError(r.data.corpo);else e.setError(n)})).catch((function(){return e.setError(n)}))},setError:function(t){this.loading=!1,this.showSnackbarErro(t)}}},d=u,f=n("2877"),h=Object(f["a"])(d,r,a,!1,null,null,null);e["default"]=h.exports},"17b3":function(t,e,n){},2616:function(t,e,n){var r=n("0363"),a=n("7463"),i=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||o[i]===t)}},"26e9":function(t,e,n){"use strict";var r=n("23e7"),a=n("e8b5"),i=[].reverse,o=[1,2];r({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),i.call(this)}})},"284c":function(t,e,n){"use strict";var r=n("1316"),a=n.n(r);function i(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var o=n("a06f"),s=n.n(o),c=n("2dc0"),l=n.n(c);function u(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return i(t)||u(t)||d()}n.d(e,"a",(function(){return f}))},"2ce5":function(t,e,n){"use strict";n("b0c0");var r={methods:{goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.$route.name;t!=n&&(e?this.$router.push({name:t,params:e}):this.$router.push({name:t}))},goToPath:function(t){this.$router.push({path:t})},goToBack:function(){this.$router.go(-1)}}};e["a"]=r},"471b":function(t,e,n){"use strict";var r=n("194a"),a=n("4fff"),i=n("faaa"),o=n("2616"),s=n("6725"),c=n("6c15"),l=n("0b7b");t.exports=function(t){var e,n,u,d,f,h=a(t),p="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,b=void 0!==v,m=0,y=l(h);if(b&&(v=r(v,g>2?arguments[2]:void 0,2)),void 0==y||p==Array&&o(y))for(e=s(h.length),n=new p(e);e>m;m++)c(n,m,b?v(h[m],m):h[m]);else for(d=y.call(h),f=d.next,n=new p;!(u=f.call(d)).done;m++)c(n,m,b?i(d,v,[u.value,m],!0):u.value);return n.length=m,n}},"484e":function(t,e,n){var r=n("a5eb"),a=n("471b"),i=n("7de7"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},5988:function(t,e,n){"use strict";var r={data:function(){return{snackbarConfig:{text:"",type:"success"}}},methods:{closeSnackbar:function(){this.snackbar=null},showSnackbar:function(t){this.snackbarConfig.type="accent",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))},showSnackbarErro:function(t){this.snackbarConfig.type="error",this.snackbarConfig.text=t,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))}}};e["a"]=r},"5f08":function(t,e,n){"use strict";n("99af"),n("0d03"),n("a9e3"),n("ac1f"),n("466d"),n("1276");var r=n("e587"),a={filters:{dayOfWeek:function(t){var e=new Date(t),n=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return n[e.getUTCDay()]}},methods:{formatDateStringToDatePtBr:function(t){if(!t)return t;t=t.split(" ");var e=t[0].split("-"),n=Object(r["a"])(e,3),a=n[0],i=n[1],o=n[2];return"".concat(o,"/").concat(i,"/").concat(a)},formatDateToDatePtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(e,"/").concat(n,"/").concat(r)},formatDateToDateEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(r,"-").concat(n,"-").concat(e)},formatDateTimeToStringPtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),a=t.getHours(),i=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(a)<10&&(a="0".concat(a)),Number(i)<10&&(i="0".concat(i)),"".concat(e,"/").concat(n,"/").concat(r," ").concat(a,":").concat(i)},parseDate:function(t){var e=t.match(/(\d+)/g);return new Date(e[0],e[1]-1,e[2])}}};e["a"]=a},"5ff8":function(t,e,n){"use strict";n("a15b"),n("13d5"),n("26e9"),n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276");var r={methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){return t?(t=t.replace("R$ ",""),t=t.split(".").join(""),t=t.split(",").join("."),t):t},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),n=0,r=e.reduce((function(t,e){return n++,3==n?t=","+t:n%3===0&&(t="."+t),String(e)+String(t)}),"");return r},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),this.removeAccents(t)):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?t.match(/\d+/g).join(""):t}}};e["a"]=r},"6ece":function(t,e,n){},"74e7":function(t,e,n){t.exports=n("bc59")},"7de7":function(t,e,n){var r=n("0363"),a=r("iterator"),i=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){i=!0}};s[a]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[a]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"891e":function(t,e,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("4160"),n("d81d"),n("0d03"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("e25e"),n("25f0"),n("159b");var r=n("284c"),a=n("2fa7"),i=(n("17b3"),n("9d26")),o=n("dc22"),s=n("58df"),c=n("a9ad"),l=n("7560");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(s["a"])(c["a"],l["a"]).extend({name:"v-pagination",directives:{Resize:o["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return d({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2===0?1:0,a=Math.floor(e/2),i=this.length-a+1+n;if(this.value>a&&this.value<i){var o=this.value-a+2,s=this.value+a-2-n;return[1,"..."].concat(Object(r["a"])(this.range(o,s)),["...",this.length])}if(this.value===a){var c=this.value+a-1-n;return[].concat(Object(r["a"])(this.range(1,c)),["...",this.length])}if(this.value===i){var l=this.value-a+1;return[1,"..."].concat(Object(r["a"])(this.range(l,this.length)))}return[].concat(Object(r["a"])(this.range(1,a)),["..."],Object(r["a"])(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var r=t;r<=e;r++)n.push(r);return n},genIcon:function(t,e,n,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:r}},[t(i["a"],[e])])])},genItem:function(t,e){var n=this,r=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(r,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(n,r){return t("li",{key:r},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},"8e36":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("acd8"),n("c7cd"),n("159b");var r=n("2fa7"),a=(n("6ece"),n("0789")),i=n("a9ad"),o=n("fe6c"),s=n("a452"),c=n("7560"),l=n("80d2"),u=n("58df");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=Object(u["a"])(i["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),s["a"],c["a"]);e["a"]=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(r["a"])(t,this.$vuetify.rtl?"right":"left",Object(l["g"])(this.normalizedValue,"%")),Object(r["a"])(t,"width",Object(l["g"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return f({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["c"]:a["d"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(l["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(l["q"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(r["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"9d26":function(t,e,n){"use strict";var r=n("132d");e["a"]=r["a"]},a06f:function(t,e,n){t.exports=n("74e7")},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),o=n("50c4"),s=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var n,r,u,g,v,b,m=s(this),y=o(m.length),O=a(t,y),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=y-O):(n=_-2,r=f(d(i(e),0),y-O)),y+n-r>h)throw TypeError(p);for(u=c(m,r),g=0;g<r;g++)v=O+g,v in m&&l(u,g,m[v]);if(u.length=r,n<r){for(g=O;g<y-r;g++)v=g+r,b=g+n,v in m?m[b]=m[v]:delete m[b];for(g=y;g>y-r+n;g--)delete m[g-1]}else if(n>r)for(g=y-r;g>O;g--)v=g+r-1,b=g+n-1,v in m?m[b]=m[v]:delete m[b];for(g=0;g<n;g++)m[g+O]=arguments[g+2];return m.length=y-r+n,u}})},a452:function(t,e,n){"use strict";var r=n("2fa7"),a=n("2b0e");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(r["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r["a"])({},t,(function(t){this.internalLazyValue=t}))})}var o=i();e["a"]=o},a4f5:function(t,e,n){},bc59:function(t,e,n){n("3e47"),n("484e");var r=n("764b");t.exports=r.Array.from},c740:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").findIndex,i=n("44d2"),o="findIndex",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},d28b:function(t,e,n){var r=n("746f");r("iterator")},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("498a"),n("159b"),n("ddb0");var r=n("2fa7"),a=n("e587"),i=n("80d2");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){var e={},n=!0,r=!1,o=void 0;try{for(var s,l=t.split(c.styleList)[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var u=s.value,d=u.split(c.styleProp),f=Object(a["a"])(d,2),h=f[0],p=f[1];h=h.trim(),h&&("string"===typeof p&&(p=p.trim()),e[Object(i["c"])(h)]=p)}}catch(g){r=!0,o=g}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return e}function u(){var t,e,n={},r=arguments.length;while(r--)for(var a=0,i=Object.keys(arguments[r]);a<i.length;a++)switch(t=i[a],t){case"class":case"style":case"directives":if(!arguments[r][t])break;if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var o=void 0;o=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style];for(var c=0;c<o.length;c++){var u=o[c];"string"===typeof u&&(o[c]=l(u))}arguments[r].style=o}n[t]=n[t].concat(arguments[r][t]);break;case"staticClass":if(!arguments[r][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":if(!arguments[r][t])break;n[t]||(n[t]={});for(var d=n[t],f=0,h=Object.keys(arguments[r][t]||{});f<h.length;f++)e=h[f],d[e]?d[e]=Array().concat(d[e],arguments[r][t][e]):d[e]=arguments[r][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[r][t])break;n[t]||(n[t]={}),n[t]=s({},arguments[r][t],{},n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[r][t])}return n}},dc22:function(t,e,n){"use strict";function r(t,e){var n=e.value,r=e.options||{passive:!0};window.addEventListener("resize",n,r),t._onResize={callback:n,options:r},e.modifiers&&e.modifiers.quiet||n()}function a(t){if(t._onResize){var e=t._onResize,n=e.callback,r=e.options;window.removeEventListener("resize",n,r),delete t._onResize}}var i={inserted:r,unbind:a};e["a"]=i},dd16:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-table"},[n("div",{staticClass:"table-container"},[n("table",{staticClass:"table"},[n("thead",{staticClass:"d-none d-sm-inline-table"},[n("tr",t._l(t.headers,(function(e,r){return n("th",{key:r,staticClass:"py-4 px-2 font-weight-normal",class:e.class,attrs:{width:e.width}},[t._v(" "+t._s(e.text)+" ")])})),0),t.loading?n("tr",[n("th",{staticClass:"progress",attrs:{colspan:t.headers.length}},[n("v-progress-linear",{attrs:{indeterminate:""}})],1)]):t._e()]),n("tbody",[t._l(t.items,(function(e,r){return n("tr",{key:r},t._l(t.headers,(function(r,a){return n("td",{key:a,staticClass:"py-2 px-4",class:r.class},["image"===r.type?[n("div",{staticClass:"image",style:{background:"url("+t.getImage(e[r.value])+")",backgroundSize:"contain"}})]:"list"===r.type?[n("ul",t._l(e[r.value],(function(e,r){return n("li",{attrs:{Key:r}},[t._v(" "+t._s(e)+" ")])})),0)]:"action"===r.type?t._l(e[r.value],(function(r,a){return n("v-btn",{key:a,staticClass:"actionButton my-3 my-sm-2 mx-1 elevation-xs-0 elevation-sm-1",class:r.class,on:{click:function(n){return t.callAction(r.action,e)}}},[t._v(" "+t._s(r.text)+" ")])})):[t._v(" "+t._s(e[r.value])+" ")]],2)})),0)})),0===t.items.length?n("tr",[n("td",{staticClass:"pa-4 text-center",attrs:{colspan:t.headers.length}},[t.loading?t._e():n("span",[t._v(t._s(t.noResultText))])])]):t._e()],2)])]),n("v-pagination",{staticClass:"mt-8",attrs:{length:t.qtdPages,"total-visible":8,color:"primary"},on:{input:t.changePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)},a=[],i=(n("99af"),{name:"DashboardTable",props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},loading:{default:!1},loadingText:{default:"Aguarde... carregando"},noResultText:{default:"Nenhum registro encontrado"},page:{default:null},qtdPages:{default:null}},methods:{callAction:function(t,e){this.$emit("callAction",t,e)},changePage:function(t){this.page=t,this.$emit("changePage",t)},getImage:function(t){return"".concat(this.$url_backend).concat(t)}}}),o=i,s=(n("fb9d"),n("2877")),c=n("6544"),l=n.n(c),u=n("8336"),d=n("891e"),f=n("8e36"),h=Object(s["a"])(o,r,a,!1,null,"5dc1ea76",null);e["a"]=h.exports;l()(h,{VBtn:u["a"],VPagination:d["a"],VProgressLinear:f["a"]})},faaa:function(t,e,n){var r=n("6f8d");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(o){var i=t["return"];throw void 0!==i&&r(i.call(t)),o}}},fb9d:function(t,e,n){"use strict";var r=n("a4f5"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-38ecd07e.b96a679b.js.map