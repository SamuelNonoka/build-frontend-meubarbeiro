(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9158ce20"],{"0789":function(t,e,n){"use strict";n("99af");var r=n("d9f7");function a(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return(t=Array()).concat.apply(t,[e].concat(r))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var i="transition".concat(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=a(o.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(o.on.leave=a(o.on.leave,(function(t){return t.style.display="none"}))),e(i,Object(r["a"])(n.data,o),n.children)}}}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,a){return n("transition",Object(r["a"])(a.data,{props:{name:t},on:e}),a.children)}}}var s=n("2fa7"),c=n("80d2"),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",r="offset".concat(Object(c["C"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(s["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var a=e._initialStyle,i="".concat(e[r],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=a.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=i}))},afterEnter:i,enterCancelled:i,leave:function(t){t._initialStyle=Object(s["a"])({transition:"",visibility:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[r],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),i(e)}function i(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}};n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return h}));i("carousel-transition"),i("carousel-reverse-transition");var l=i("tab-transition"),f=i("tab-reverse-transition"),d=(i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("fade-transition")),p=(i("scale-transition"),i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),v=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),o("expand-transition",u())),h=o("expand-x-transition",u("",!0))},"0c02":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scheduling-requests"},[n("dashboard-table",{attrs:{headers:t.headers,items:t.items,loading:t.loading,page:t.currentPage,qtdPages:t.pages,noResultText:"Nenhum solicitação pendente"},on:{changePage:t.changePage,callAction:t.callAction}})],1)},a=[],i=(n("c740"),n("d81d"),n("a434"),n("0d03"),n("b0c0"),n("a9e3"),n("b680"),n("dd16")),o=n("09ba"),s=n("5f08"),c=n("4054"),u=n("5988"),l=n("5ff8"),f={name:"DashboardSchedulingRequests",components:{DashboardTable:i["a"]},mixins:[o["a"],c["a"],s["a"],u["a"],l["a"]],data:function(){return{currentPage:null,headers:[{text:"",value:"image",class:"text-center",type:"image"},{text:"Nome do cliente",value:"client",class:"text-center",type:null},{text:"Data",value:"date",class:"text-center",type:null},{text:"Serviços",value:"services",class:"text-center",type:"list"},{text:"Valor",value:"value",class:"text-center",type:null},{text:"#",value:"actions",class:"text-center",type:"action",width:"280px"}],items:[],loading:!0,pages:1,interval:null}},watch:{periodState:function(){this.getSchedules()}},mounted:function(){var t=this,e=3e5;this.interval=setTimeout((function(){t.getSchedules()}),e),this.getSchedules()},beforeDestroy:function(){this.interval=null},methods:{acept:function(t){var e=this,n="Não foi possível aprovar o agendamento!";this.$axios.put("/schedule/".concat(t.id,"/approve")).then((function(r){if(200===r.status)if(200===r.data.codigo){e.showSnackbar(r.data.corpo);var a=e.items.findIndex((function(e){return e.id===t.id}));a>-1&&e.items.splice(a,1)}else e.setError(r.data.corpo);else e.setError(n)})).catch((function(){return e.setError(n)}))},callAction:function(t,e){switch(t){case"acept":this.acept(e);break;case"refuse":this.refuse(e);break}},changePage:function(t){this.currentPage=t},getSchedules:function(){var t=this;this.loading=!0;var e="/schedule/barbershop/".concat(this.barber.barbershop_id,"/pending?");this.periodState&&(this.periodState.startDate&&(e+="start_date=".concat(this.periodState.startDate,"&")),this.periodState.endDate&&(e+="end_date=".concat(this.periodState.endDate,"&"))),this.currentPage&&(e+="page=".concat(this.currentPage)),this.$axios.get(e).then((function(e){t.loading=!1,200===e.data.codigo?(t.currentPage=e.data.corpo.current_page,t.pages=e.data.corpo.last_page,t.items=e.data.corpo.data.map((function(e){var n=e.services.map((function(t){return"".concat(t.name)})),r=new Date>new Date(e.start_date),a=[{text:"Aceitar",action:"acept",class:"success",disabled:r},{text:"Recusar",action:"refuse",class:"default",disabled:r}];return{id:e.id,date:t.formatDateTimeToStringPtBr(new Date(e.start_date)),image:e.user.image_url,client:e.user.name,value:"R$ ".concat(t.setMoneyMask(Number(e.price).toFixed(2))),services:n,actions:a}}))):t.setError(e.data.corpo)})).catch((function(){return t.setError("Não foi possível recuperar os agendamentos!")}))},refuse:function(t){var e=this,n="Não foi possível reprovar o agendamento!";this.$axios.put("/schedule/".concat(t.id,"/repprove")).then((function(r){if(200===r.status)if(200===r.data.codigo){e.showSnackbar(r.data.corpo);var a=e.items.findIndex((function(e){return e.id===t.id}));a>-1&&e.items.splice(a,1)}else e.setError(r.data.corpo);else e.setError(n)})).catch((function(){return e.setError(n)}))},setError:function(t){this.loading=!1,this.showSnackbarErro(t)}}},d=f,p=n("2877"),v=Object(p["a"])(d,r,a,!1,null,null,null);e["default"]=v.exports},2616:function(t,e,n){var r=n("0363"),a=n("7463"),i=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||o[i]===t)}},"284c":function(t,e,n){"use strict";var r=n("1316"),a=n.n(r);function i(t){if(a()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var o=n("a06f"),s=n.n(o),c=n("2dc0"),u=n.n(c);function l(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return i(t)||l(t)||f()}n.d(e,"a",(function(){return d}))},4054:function(t,e,n){"use strict";var r={computed:{barberState:function(){return this.$store.getters["DashboardStore/barber"]},periodState:function(){return this.$store.getters["DashboardStore/period"]}},methods:{setBarberState:function(t){this.$store.dispatch("DashboardStore/setBarber",t)},setPeriodState:function(t){this.$store.dispatch("DashboardStore/setPeriod",t)}}};e["a"]=r},"471b":function(t,e,n){"use strict";var r=n("194a"),a=n("4fff"),i=n("faaa"),o=n("2616"),s=n("6725"),c=n("6c15"),u=n("0b7b");t.exports=function(t){var e,n,l,f,d,p=a(t),v="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,g=void 0!==b,y=0,m=u(p);if(g&&(b=r(b,h>2?arguments[2]:void 0,2)),void 0==m||v==Array&&o(m))for(e=s(p.length),n=new v(e);e>y;y++)c(n,y,g?b(p[y],y):p[y]);else for(f=m.call(p),d=f.next,n=new v;!(l=d.call(f)).done;y++)c(n,y,g?i(f,b,[l.value,y],!0):l.value);return n.length=y,n}},"484e":function(t,e,n){var r=n("a5eb"),a=n("471b"),i=n("7de7"),o=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:a})},"5f08":function(t,e,n){"use strict";n("99af"),n("0d03"),n("a9e3"),n("ac1f"),n("466d"),n("1276");var r=n("e587"),a={filters:{dayOfWeek:function(t){var e=new Date(t),n=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return n[e.getUTCDay()]}},methods:{formatDateStringToDatePtBr:function(t){if(!t)return t;t=t.split(" ");var e=t[0].split("-"),n=Object(r["a"])(e,3),a=n[0],i=n[1],o=n[2];return"".concat(o,"/").concat(i,"/").concat(a)},formatDateToDatePtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(e,"/").concat(n,"/").concat(r)},formatDateToDateEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(r,"-").concat(n,"-").concat(e)},formatDateTimeToStringPtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),a=t.getHours(),i=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(a)<10&&(a="0".concat(a)),Number(i)<10&&(i="0".concat(i)),"".concat(e,"/").concat(n,"/").concat(r," ").concat(a,":").concat(i)},parseDate:function(t){var e=t.match(/(\d+)/g);return new Date(e[0],e[1]-1,e[2])}}};e["a"]=a},"74e7":function(t,e,n){t.exports=n("bc59")},"7de7":function(t,e,n){var r=n("0363"),a=r("iterator"),i=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){i=!0}};s[a]=function(){return this},Array.from(s,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[a]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},a06f:function(t,e,n){t.exports=n("74e7")},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),o=n("50c4"),s=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),f=Math.max,d=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l("splice")},{splice:function(t,e){var n,r,l,h,b,g,y=s(this),m=o(y.length),x=a(t,m),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=m-x):(n=w-2,r=d(f(i(e),0),m-x)),m+n-r>p)throw TypeError(v);for(l=c(y,r),h=0;h<r;h++)b=x+h,b in y&&u(l,h,y[b]);if(l.length=r,n<r){for(h=x;h<m-r;h++)b=h+r,g=h+n,b in y?y[g]=y[b]:delete y[g];for(h=m;h>m-r+n;h--)delete y[h-1]}else if(n>r)for(h=m-r;h>x;h--)b=h+r-1,g=h+n-1,b in y?y[g]=y[b]:delete y[g];for(h=0;h<n;h++)y[h+x]=arguments[h+2];return y.length=m-r+n,l}})},a452:function(t,e,n){"use strict";var r=n("2fa7"),a=n("2b0e");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(r["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r["a"])({},t,(function(t){this.internalLazyValue=t}))})}var o=i();e["a"]=o},bc59:function(t,e,n){n("3e47"),n("484e");var r=n("764b");t.exports=r.Array.from},c740:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").findIndex,i=n("44d2"),o="findIndex",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},d28b:function(t,e,n){var r=n("746f");r("iterator")},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("498a"),n("159b"),n("ddb0");var r=n("2fa7"),a=n("e587"),i=n("80d2");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function u(t){var e={},n=!0,r=!1,o=void 0;try{for(var s,u=t.split(c.styleList)[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var l=s.value,f=l.split(c.styleProp),d=Object(a["a"])(f,2),p=d[0],v=d[1];p=p.trim(),p&&("string"===typeof v&&(v=v.trim()),e[Object(i["c"])(p)]=v)}}catch(h){r=!0,o=h}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}return e}function l(){var t,e,n={},r=arguments.length;while(r--)for(var a=0,i=Object.keys(arguments[r]);a<i.length;a++)switch(t=i[a],t){case"class":case"style":case"directives":if(!arguments[r][t])break;if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var o=void 0;o=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style];for(var c=0;c<o.length;c++){var l=o[c];"string"===typeof l&&(o[c]=u(l))}arguments[r].style=o}n[t]=n[t].concat(arguments[r][t]);break;case"staticClass":if(!arguments[r][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":if(!arguments[r][t])break;n[t]||(n[t]={});for(var f=n[t],d=0,p=Object.keys(arguments[r][t]||{});d<p.length;d++)e=p[d],f[e]?f[e]=Array().concat(f[e],arguments[r][t][e]):f[e]=arguments[r][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[r][t])break;n[t]||(n[t]={}),n[t]=s({},arguments[r][t],{},n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[r][t])}return n}},dc22:function(t,e,n){"use strict";function r(t,e){var n=e.value,r=e.options||{passive:!0};window.addEventListener("resize",n,r),t._onResize={callback:n,options:r},e.modifiers&&e.modifiers.quiet||n()}function a(t){if(t._onResize){var e=t._onResize,n=e.callback,r=e.options;window.removeEventListener("resize",n,r),delete t._onResize}}var i={inserted:r,unbind:a};e["a"]=i},faaa:function(t,e,n){var r=n("6f8d");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(o){var i=t["return"];throw void 0!==i&&r(i.call(t)),o}}}}]);
//# sourceMappingURL=chunk-9158ce20.7f5bcf11.js.map