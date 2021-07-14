(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46aa21d2"],{"09ba":function(e,t,n){"use strict";var r=n("be3b"),a=n("2ce5"),o={mixins:[a["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]},barberState:function(){return this.$store.getters["BarberStore/barber"]}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(e){var t=this;r["a"].get("/barbershop/".concat(e,"/barber?status=ativo")).then((function(e){200===e.data.codigo?t.onGetBarberByBarbershopIdOnServiceSuccess(e.data.corpo):t.onGetBarberByBarbershopIdOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarberByBarbershopIdOnServiceError:function(e){window.console.log(e)},onGetBarberByBarbershopIdOnServiceSuccess:function(e){window.console.log(JSON.stringify(e))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(e){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",e)}}};t["a"]=o},"0c02":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scheduling-requests"},[n("dashboard-table",{attrs:{headers:e.headers,items:e.items,loading:e.loading,page:e.currentPage,qtdPages:e.pages,noResultText:"Nenhum solicitação pendente"},on:{changePage:e.changePage,callAction:e.callAction}}),n("dashboard-refuse-schedule-dialog",{ref:"dashboardRefuseScheduleDialog",on:{onConfirmRefuse:e.confirmRefuse}}),n("overlay",{ref:"overlay"})],1)},a=[],o=(n("c740"),n("d81d"),n("a434"),n("0d03"),n("b0c0"),n("a9e3"),n("b680"),n("dd16")),i=n("761d"),s=n("8c08"),c=n("09ba"),l=n("ef49"),u=n("5f08"),d=n("f035"),h=n("5988"),f=n("5ff8"),v={name:"DashboardSchedulingRequests",components:{DashboardTable:o["a"],DashboardRefuseScheduleDialog:i["a"],Overlay:s["a"]},mixins:[c["a"],l["a"],u["a"],d["a"],h["a"],f["a"]],data:function(){return{currentPage:null,headers:[{text:"",value:"image",class:"text-center",type:"image"},{text:"Cliente",value:"client",class:"text-center",type:null},{text:"Data",value:"date",class:"text-center",type:null},{text:"Serviços",value:"services",class:"text-center",type:"list"},{text:"Obs:",value:"observation",class:"d-flex d-sm-none"},{text:"Valor",value:"value",class:"text-center",type:null},{text:"#",value:"actions",class:"text-center",type:"action",width:"280px"}],items:[],loading:!0,pages:1,interval:null}},computed:{hasBarberAndBarbershop:function(){return!(!this.barberState||!this.barbershopState)}},watch:{hasBarberAndBarbershop:function(e){e&&this.getSchedules()},qtdRequestsPendingState:function(){this.getSchedules()}},mounted:function(){var e=this,t=18e4;this.interval=setTimeout((function(){e.hasBarberAndBarbershop&&e.getSchedules()}),t),this.hasBarberAndBarbershop&&this.getSchedules()},beforeDestroy:function(){this.interval=null},methods:{acept:function(e){var t=this;this.$refs.overlay.showOverlay("Salvando...");var n="Não foi possível aprovar o agendamento!";this.$axios.put("/schedule/".concat(e.id,"/approve")).then((function(r){if(200===r.status)if(200===r.data.codigo){var a=t.items.findIndex((function(t){return t.id===e.id}));if(a>-1){t.items.splice(a,1);var o=t.items.length;t.setQtdRequestsPendingState(o),t.$refs.overlay.hideOverlaySuccess("Agendado aprovado!")}}else t.setError(r.data.corpo);else t.setError(n)})).catch((function(){return t.setError(n)}))},callAction:function(e,t){switch(e){case"acept":this.acept(t);break;case"refuse":this.$refs.dashboardRefuseScheduleDialog.show(t);break}},changePage:function(e){this.currentPage=e},getSchedules:function(){var e=this;this.loading=!0;var t="/schedule/barbershop/".concat(this.barber.barbershop_id,"/pending?");this.barberState.id===this.barbershopState.admin_id&&(t+="all_requests=true&"),this.currentPage&&(t+="page=".concat(this.currentPage)),this.$axios.get(t).then((function(t){e.loading=!1,200===t.data.codigo?(e.currentPage=t.data.corpo.current_page,e.pages=t.data.corpo.last_page,e.items=t.data.corpo.data.map((function(t){var n=t.services.map((function(e){return"".concat(e.name)})),r=new Date>new Date(t.start_date),a=[{text:"Aceitar",action:"acept",class:"success",disabled:r},{text:"Recusar",action:"refuse",class:"default",disabled:r}];return{id:t.id,date:e.formatDateTimeToStringPtBr(new Date(t.start_date)),image:t.user.image_url,client:t.user.name,value:"R$ ".concat(e.setMoneyMask(Number(t.price).toFixed(2))),services:n,observation:t.observation,actions:a}}))):e.setError(t.data.corpo)})).catch((function(){return e.setError("Não foi possível recuperar os agendamentos!")}))},confirmRefuse:function(e,t){var n=this,r="Não foi possível reprovar o agendamento!";this.$axios.put("/schedule/".concat(e.id,"/repprove"),{message:t}).then((function(t){if(200===t.status)if(200===t.data.codigo){n.showSnackbar(t.data.corpo);var a=n.items.findIndex((function(t){return t.id===e.id}));a>-1&&n.items.splice(a,1);var o=n.items.length;n.setQtdRequestsPendingState(o)}else n.setError(t.data.corpo);else n.setError(r)})).catch((function(){return n.setError(r)}))},setError:function(e){this.loading=!1,this.$refs.overlay.hideOverlay(),this.showSnackbarErro(e)}}},p=v,b=n("2877"),g=Object(b["a"])(p,r,a,!1,null,null,null);t["default"]=g.exports},1681:function(e,t,n){},"17b3":function(e,t,n){},"20f6":function(e,t,n){},"26e9":function(e,t,n){"use strict";var r=n("23e7"),a=n("e8b5"),o=[].reverse,i=[1,2];r({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),o.call(this)}})},"2a9f":function(e,t,n){},"2ce5":function(e,t,n){"use strict";n("b0c0");var r={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.$route.name;e!=n&&(t?this.$router.push({name:e,params:t}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};t["a"]=r},"2fa4":function(e,t,n){"use strict";n("20f6");var r=n("80d2");t["a"]=Object(r["i"])("spacer","div","v-spacer")},3003:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.dialog?n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{staticClass:"confirm-dialog",attrs:{light:""}},[n("div",{staticClass:"px-4 pt-2"},[n("v-row",[n("v-col",{staticClass:"py-0"},[n("v-card-title",{staticClass:"headline pa-0"},[e._v(" "+e._s(e.title)+" ")])],1),n("v-col",{staticClass:"text-right py-0",attrs:{cols:"auto"}},[n("v-btn",{staticClass:"px-0",attrs:{"min-width":20,text:""},on:{click:function(t){return e.send("cancel")}}},[n("v-icon",[e._v("close")])],1)],1)],1)],1),e.description?n("v-card-text",[e._v(" "+e._s(e.description)+" ")]):e._e(),n("v-card-text",{staticClass:"pt-2 pb-0"},[e._t("default")],2),n("v-card-actions",{staticClass:"px-4 pb-4"},[n("v-row",[n("v-spacer"),n("v-col",{staticClass:"text-center pa-0",attrs:{cols:"12",sm:"auto"}},[n("btn",{staticClass:"btn-confirm",attrs:{block:!1,disabled:e.btnDisabled,text:"Confirmar"},on:{clicked:function(t){return e.send("confirm")}}})],1),n("v-col",{staticClass:"text-center py-0 pt-2 pt-sm-0",attrs:{cols:"12",sm:"auto"}},[n("btn-text",{staticClass:"btn-cancel",attrs:{block:!1,text:"Cancelar"},on:{clicked:function(t){return e.send("cancel")}}})],1)],1)],1)],1)],1)],1):e._e()},a=[],o=n("e7e3"),i=n("39db"),s={name:"Default",components:{Btn:o["a"],BtnText:i["a"]},props:{btnDisabled:{default:!1},title:{required:!0},description:{required:!1},danger:{default:!1}},data:function(){return{dialog:!1}},methods:{send:function(e){this.dialog=!1,this.$emit(e)},showDialog:function(){this.dialog=!0}}},c=s,l=n("2877"),u=n("6544"),d=n.n(u),h=n("8336"),f=n("b0af"),v=n("99d9"),p=n("62ad"),b=n("169a"),g=n("132d"),m=n("0fd9"),y=n("2fa4"),S=Object(l["a"])(c,r,a,!1,null,null,null);t["a"]=S.exports;d()(S,{VBtn:h["a"],VCard:f["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:p["a"],VDialog:b["a"],VIcon:g["a"],VRow:m["a"],VSpacer:y["a"]})},"39db":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"font-weight-medium text-none py-3",attrs:{height:"auto",block:e.block,disabled:e.disabled,dark:e.dark,text:""},on:{click:e.clicked}},[e.icon?n("v-icon",[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" "),e.appendIcon?n("v-icon",[e._v(" "+e._s(e.appendIcon)+" ")]):e._e()],1)},a=[],o={name:"BtnText",props:{block:{default:!0},dark:{default:!1},disabled:{default:!1},text:{required:!0},icon:{default:null},appendIcon:{default:""}},methods:{clicked:function(){this.$emit("clicked")}}},i=o,s=n("2877"),c=n("6544"),l=n.n(c),u=n("8336"),d=n("132d"),h=Object(s["a"])(i,r,a,!1,null,null,null);t["a"]=h.exports;l()(h,{VBtn:u["a"],VIcon:d["a"]})},"3c93":function(e,t,n){},"5f08":function(e,t,n){"use strict";n("99af"),n("0d03"),n("a9e3"),n("ac1f"),n("466d"),n("1276");var r=n("e587"),a={filters:{dayOfWeek:function(e){var t=new Date(e),n=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return n[t.getUTCDay()]}},methods:{formatDateStringToDatePtBr:function(e){if(!e)return e;e=e.split(" ");var t=e[0].split("-"),n=Object(r["a"])(t,3),a=n[0],o=n[1],i=n[2];return"".concat(i,"/").concat(o,"/").concat(a)},formatDateToDatePtBr:function(e){if(!e)return e;var t=e.getDate(),n=e.getMonth()+1,r=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(n)<10&&(n="0".concat(n)),"".concat(t,"/").concat(n,"/").concat(r)},formatDateToDateEn:function(e){if(!e)return e;var t=e.getDate(),n=e.getMonth()+1,r=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(n)<10&&(n="0".concat(n)),"".concat(r,"-").concat(n,"-").concat(t)},formatDateTimeToStringPtBr:function(e){if(!e)return e;var t=e.getDate(),n=e.getMonth()+1,r=e.getFullYear(),a=e.getHours(),o=e.getMinutes();return Number(t)<10&&(t="0".concat(t)),Number(n)<10&&(n="0".concat(n)),Number(a)<10&&(a="0".concat(a)),Number(o)<10&&(o="0".concat(o)),"".concat(t,"/").concat(n,"/").concat(r," ").concat(a,":").concat(o)},parseDate:function(e){var t=e.match(/(\d+)/g);return new Date(t[0],t[1]-1,t[2])}}};t["a"]=a},"5ff8":function(e,t,n){"use strict";n("a15b"),n("13d5"),n("26e9"),n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276");var r={methods:{removeMask:function(e){return e?e.match(/\d+/g).join(""):""},removeMoneyMask:function(e){return e?(e=e.replace("R$ ",""),e=e.split(".").join(""),e=e.split(",").join("."),e):e},setCepMask:function(e){return e?e.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):e},setPhoneMask:function(e){return e?e.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(e){if(!e)return e;e=e.toString(),e=e.split(" ").join(""),e=e.split("R$").join(""),e=e.split(".").join("");var t=e.split("").reverse(),n=0,r=t.reduce((function(e,t){return n++,3==n?e=","+e:n%3===0&&(e="."+e),String(t)+String(e)}),"");return r},formatTextToUrl:function(e){return e?(e=e.toLowerCase(),e=e.split(" ").join("-"),this.removeAccents(e)):e},removeAccents:function(e){return e?(e=e.split("á").join("a"),e=e.split("à").join("a"),e=e.split("ã").join("a"),e=e.split("â").join("a"),e=e.split("é").join("e"),e=e.split("è").join("e"),e=e.split("ê").join("e"),e=e.split("í").join("i"),e=e.split("ì").join("i"),e=e.split("î").join("i"),e=e.split("ó").join("o"),e=e.split("ò").join("o"),e=e.split("õ").join("o"),e=e.split("ô").join("o"),e=e.split("ú").join("u"),e=e.split("ù").join("u"),e=e.split("û").join("u"),e=e.split("ç").join("c"),e):e},removeSimbols:function(e){return e?e.match(/\d+/g).join(""):e}}};t["a"]=r},"761d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("default-dialog",{ref:"dialog",attrs:{title:"Recusar agendamento?",btnDisabled:e.disabled},on:{confirm:e.confirm}},[n("textarea-field",{attrs:{label:"Informe o motivo do cancelamento"},on:{onKeyUp:e.changeData}})],1)},a=[],o=n("3003"),i=n("d2a0"),s={components:{DefaultDialog:o["a"],TextareaField:i["a"]},data:function(){return{cancellationReason:null,schedule:null}},computed:{disabled:function(){return!this.cancellationReason||this.cancellationReason.length<2||this.cancellationReason.length>250}},methods:{changeData:function(e){this.cancellationReason=e},confirm:function(){this.$emit("onConfirmRefuse",this.schedule,this.cancellationReason)},show:function(e){this.cancellationReason="",this.schedule=e,this.$refs.dialog.showDialog()}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,null,null);t["a"]=u.exports},"891e":function(e,t,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("4160"),n("d81d"),n("0d03"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("e25e"),n("25f0"),n("159b");var r=n("284c"),a=n("2fa7"),o=(n("17b3"),n("9d26")),i=n("dc22"),s=n("58df"),c=n("a9ad"),l=n("7560");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]=Object(s["a"])(c["a"],l["a"]).extend({name:"v-pagination",directives:{Resize:i["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(e){return e%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return d({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10),t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var n=t%2===0?1:0,a=Math.floor(t/2),o=this.length-a+1+n;if(this.value>a&&this.value<o){var i=this.value-a+2,s=this.value+a-2-n;return[1,"..."].concat(Object(r["a"])(this.range(i,s)),["...",this.length])}if(this.value===a){var c=this.value+a-1-n;return[].concat(Object(r["a"])(this.range(1,c)),["...",this.length])}if(this.value===o){var l=this.value-a+1;return[1,"..."].concat(Object(r["a"])(this.range(l,this.length)))}return[].concat(Object(r["a"])(this.range(1,a)),["..."],Object(r["a"])(this.range(o,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){var n=[];e=e>0?e:1;for(var r=e;r<=t;r++)n.push(r);return n},genIcon:function(e,t,n,r){return e("li",[e("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:r}},[e(o["a"],[t])])])},genItem:function(e,t){var n=this,r=t===this.value&&(this.color||"primary");return e("button",this.setBackgroundColor(r,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":t===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",t)}}}),[t.toString()])},genItems:function(e){var t=this;return this.items.map((function(n,r){return e("li",{key:r},[isNaN(Number(n))?e("span",{class:"v-pagination__more"},[n.toString()]):t.genItem(e,n)])}))}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}})},"8c08":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.overlay?n("div",{staticClass:"overlay",class:e.overlayVisible},[n("div",{staticClass:"overlay-content text-center"},[n("div",[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error&&e.icon&&!e.textLoaderSuccess,expression:"!loading && !error && icon && !textLoaderSuccess"}],attrs:{size:"80",color:"success"}},[e._v(" check_circle_outline ")]),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],attrs:{size:"80",color:"danger"}},[e._v(" error_outline ")]),n("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:"",size:"50",color:"primaryLight"}})],1),n("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"overlay-text"},[e._v(" "+e._s(e.textLoader)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error,expression:"!loading && !error"}],staticClass:"overlay-text overlay-text-success successDark text-left"},[n("div",{staticClass:"icone"},[n("v-icon",[e._v("check")])],1),n("span",{staticClass:"ml-4 white--text"},[e._v(e._s(e.textLoaderSuccess))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],staticClass:"overlay-text overlay-text-success",domProps:{innerHTML:e._s(e.textLoaderError)}})])]):e._e()},a=[],o={name:"Overlay",data:function(){return{overlay:!1,loading:!1,overlayVisible:"",textLoader:"",textLoaderSuccess:"",textLoaderError:"",error:!1,icon:!1}},methods:{showOverlay:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.textLoader=t||"Aguarde...",this.overlay=!0,this.loading=!0,setTimeout((function(){e.overlayVisible="visible"}),300)},hideOverlayError:function(e){this.error=!0,this.textLoaderError=e,this.hideOverlay(!0,!1)},hideOverlaySuccess:function(e){this.error=!1,this.textLoaderSuccess=e,this.hideOverlay(!0,!0)},hideOverlay:function(e,t){var n=this;this.icon=t,this.loading=!1,e?(setTimeout((function(){n.overlayVisible=""}),3e3),setTimeout((function(){n.error=!1,n.overlay=!1,n.loading=!1}),4e3)):(this.overlayVisible="",this.error=!1,this.overlay=!1,this.loading=!1)}}},i=o,s=(n("d588"),n("2877")),c=n("6544"),l=n.n(c),u=n("132d"),d=n("490a"),h=Object(s["a"])(i,r,a,!1,null,"c6454eae",null);t["a"]=h.exports;l()(h,{VIcon:u["a"],VProgressCircular:d["a"]})},"90a2":function(e,t,n){"use strict";n("7db0");var r=n("bf2d");function a(e,t){var n=t.modifiers||{},a=t.value,i="object"===Object(r["a"])(a),s=i?a.handler:a,c=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(e._observe){if(s&&(!n.quiet||e._observe.init)){var a=Boolean(t.find((function(e){return e.isIntersecting})));s(t,r,a)}e._observe.init&&n.once?o(e):e._observe.init=!0}}),a.options||{});e._observe={init:!1,observer:c},c.observe(e)}function o(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var i={inserted:a,unbind:o};t["a"]=i},9355:function(e,t,n){"use strict";var r=n("ae39"),a=n.n(r);a.a},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var r=n("b0af"),a=n("80d2"),o=Object(a["i"])("v-card__actions"),i=Object(a["i"])("v-card__subtitle"),s=Object(a["i"])("v-card__text"),c=Object(a["i"])("v-card__title");r["a"]},"9d26":function(e,t,n){"use strict";var r=n("132d");t["a"]=r["a"]},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),o=n("a691"),i=n("50c4"),s=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=Math.max,h=Math.min,f=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!u("splice")},{splice:function(e,t){var n,r,u,p,b,g,m=s(this),y=i(m.length),S=a(e,y),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=y-S):(n=w-2,r=h(d(o(t),0),y-S)),y+n-r>f)throw TypeError(v);for(u=c(m,r),p=0;p<r;p++)b=S+p,b in m&&l(u,p,m[b]);if(u.length=r,n<r){for(p=S;p<y-r;p++)b=p+r,g=p+n,b in m?m[g]=m[b]:delete m[g];for(p=y;p>y-r+n;p--)delete m[p-1]}else if(n>r)for(p=y-r;p>S;p--)b=p+r-1,g=p+n-1,b in m?m[g]=m[b]:delete m[g];for(p=0;p<n;p++)m[p+S]=arguments[p+2];return m.length=y-r+n,u}})},ae39:function(e,t,n){},af07:function(e,t,n){},c740:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").findIndex,o=n("44d2"),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},d2a0:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-textarea",{attrs:{"auto-grow":!0,rows:"1",label:e.label,placeholder:e.placeholder,outlined:e.outlined,color:"success",maxLength:e.maxLength,success:e.success,"validate-on-blur":""},on:{keyup:e.onKeyUp},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[n("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v(e._s(e.icon))])]},proxy:!0}]),model:{value:e.valueModel,callback:function(t){e.valueModel=t},expression:"valueModel"}})},a=[],o={name:"TextareaField",props:{outlined:{default:!1},label:{required:!0},placeholder:{default:null},value:{default:""},id:{default:null},success:{default:null},icon:{default:null},maxLength:{default:null}},data:function(){return{valueModel:""}},watch:{value:function(e){this.valueModel=e}},methods:{onKeyUp:function(){this.$emit("onKeyUp",this.valueModel,this.id)}}},i=o,s=n("2877"),c=n("6544"),l=n.n(c),u=n("132d"),d=(n("a4d3"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("acd8"),n("e25e"),n("159b"),n("2fa7")),h=(n("1681"),n("8654")),f=n("58df");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(d["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(f["a"])(h["a"]),g=b.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return p({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},h["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(n,t)+"px"}},genInput:function(){var e=h["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){h["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),m=Object(s["a"])(i,r,a,!1,null,null,null);t["a"]=m.exports;l()(m,{VIcon:u["a"],VTextarea:g})},d588:function(e,t,n){"use strict";var r=n("af07"),a=n.n(r);a.a},dc22:function(e,t,n){"use strict";function r(e,t){var n=t.value,r=t.options||{passive:!0};window.addEventListener("resize",n,r),e._onResize={callback:n,options:r},t.modifiers&&t.modifiers.quiet||n()}function a(e){if(e._onResize){var t=e._onResize,n=t.callback,r=t.options;window.removeEventListener("resize",n,r),delete e._onResize}}var o={inserted:r,unbind:a};t["a"]=o},dd16:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-table"},[n("div",{staticClass:"table-container"},[e.title?n("h1",{staticClass:"title py-2 px-4"},[e._v(" "+e._s(e.title)+" ")]):e._e(),n("table",{staticClass:"table"},[n("thead",[n("tr",e._l(e.headers,(function(t,r){return n("th",{key:r,staticClass:"py-4 px-2 font-weight-normal",class:t.class,attrs:{width:t.width}},[e._v(" "+e._s(t.text)+" ")])})),0),e.loading?n("tr",[n("th",{staticClass:"progress",attrs:{colspan:e.headers.length}},[n("v-progress-linear",{attrs:{indeterminate:""}})],1)]):e._e()]),n("tbody",[e._l(e.items,(function(t,r){return[n("tr",{key:r},e._l(e.headers,(function(r,a){return n("td",{key:a,staticClass:"py-2 px-4",class:r.class},["image"===r.type?[n("div",{staticClass:"image",style:{background:"url("+e.getImage(t[r.value])+")",backgroundSize:"contain"}})]:"list"===r.type?[n("ul",e._l(t[r.value],(function(t,r){return n("li",{attrs:{Key:r}},[e._v(" "+e._s(t)+" ")])})),0)]:"money"===r.type?[e._v(" R$ "+e._s(e.setMoneyMask(t[r.value]))+" ")]:"action"===r.type?e._l(t[r.value],(function(r,a){return n("v-btn",{key:a,staticClass:"actionButton my-3 my-sm-2 mx-1 elevation-xs-0 elevation-sm-1",class:r.class,attrs:{disabled:r.disabled},on:{click:function(n){return e.callAction(r.action,t)}}},[r.icon?n("v-icon",{staticClass:"mr-1",attrs:{small:""}},[e._v(e._s(r.icon))]):e._e(),e._v(e._s(r.text)+" ")],1)})):[e._v(" "+e._s(t[r.value])+" ")]],2)})),0),t.observation?n("tr",{key:t.id,staticClass:"d-none d-sm-table-row"},[n("td",{staticClass:"py-2 px-4 sem-borda",attrs:{colspan:e.headers.length}},[n("label",{staticClass:"font-weight-bold"},[e._v("Obs:")]),e._v(" "+e._s(t.observation)+" ")])]):e._e()]})),0===e.items.length?n("tr",[n("td",{staticClass:"pa-4 text-center",attrs:{colspan:e.headers.length}},[e.loading?e._e():n("span",[e._v(e._s(e.noResultText))])])]):e._e()],2)])]),e.noPagination?e._e():n("v-pagination",{staticClass:"mt-8",attrs:{length:e.qtdPages,"total-visible":8,color:"primary"},on:{input:e.changePage},model:{value:e.pageModel,callback:function(t){e.pageModel=t},expression:"pageModel"}})],1)},a=[],o=(n("99af"),n("5ff8")),i={name:"DashboardTable",mixins:[o["a"]],props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},loading:{default:!1},loadingText:{default:"Aguarde... carregando"},noPagination:{default:!1},noResultText:{default:"Nenhum registro encontrado"},page:{default:null},qtdPages:{default:null},title:{default:null}},data:function(){return{pageModel:null}},watch:{page:function(e){this.pageModel=e}},mounted:function(){this.pageModel=this.page},methods:{callAction:function(e,t){this.$emit("callAction",e,t),this.$emit(e,t)},changePage:function(e){this.$emit("changePage",e)},getImage:function(e){return"".concat(this.$url_backend).concat(e)}}},s=i,c=(n("ea24"),n("2877")),l=n("6544"),u=n.n(l),d=n("8336"),h=n("132d"),f=n("891e"),v=n("8e36"),p=Object(c["a"])(s,r,a,!1,null,"b07837a4",null);t["a"]=p.exports;u()(p,{VBtn:d["a"],VIcon:h["a"],VPagination:f["a"],VProgressLinear:v["a"]})},e707:function(e,t,n){"use strict";n("caad"),n("a9e3"),n("2532"),n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("2fa7"),a=(n("3c93"),n("a9ad")),o=n("7560"),i=n("f2e7"),s=n("58df");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(s["a"])(a["a"],o["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return l({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),d=u,h=n("80d2"),f=n("2b0e");t["a"]=f["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(h["s"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[h["v"].up,h["v"].pageup],n=[h["v"].down,h["v"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),n=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var r=this.$refs.dialog,a=window.getSelection().anchorNode;return!(r&&this.hasScrollbar(r)&&this.isInside(a,r))||this.shouldScroll(r,n)}for(var o=0;o<t.length;o++){var i=t[o];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return this.shouldScroll(i,n)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},e7e3:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"success text-capitalize btn py-4 px-8 elevation-0",class:e.cssClass,attrs:{height:"auto",block:e.block,disabled:e.disabled},on:{click:e.clicked}},[e.loading?[n("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[e.icon?n("v-icon",{staticClass:"mr-1"},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" ")]],2)},a=[],o={name:"BtnSecondary",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:"py-3"},loading:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},i=o,s=(n("9355"),n("2877")),c=n("6544"),l=n.n(c),u=n("8336"),d=n("132d"),h=n("490a"),f=Object(s["a"])(i,r,a,!1,null,"3107b916",null);t["a"]=f.exports;l()(f,{VBtn:u["a"],VIcon:d["a"],VProgressCircular:h["a"]})},ea24:function(e,t,n){"use strict";var r=n("2a9f"),a=n.n(r);a.a},ef49:function(e,t,n){"use strict";var r=n("be3b"),a={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}},barbershopState:function(){return this.$store.getters["BarbershopStore/barbershop"]}},methods:{storeBarbershop:function(e){this.$store.dispatch("BarbershopStore/store",e)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(e){var t=this;r["a"].get("/barbershop/".concat(e)).then((function(e){200===e.data.codigo?t.onGetBarbershopByIdOnServiceSuccess(e.data.corpo):t.onGetBarbershopByIdOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopByIdOnServiceSuccess:function(e){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+e)},onGetBarbershopByIdOnServiceError:function(e){window.console.log("onGetBarbershopByIdOnServiceError: "+e)},getBarbershopAllOnService:function(){var e=this;r["a"].get("/barbershop").then((function(t){200===t.data.codigo?e.onGetBarbershopAllOnServiceSuccess(t.data.corpo):e.onGetBarbershopAllOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopAllOnServiceSuccess:function(e){window.console.log("onGetBarbershopAllOnServiceSuccess: "+e)},onGetBarbershopAllOnServiceError:function(e){window.console.log("onGetBarbershopAllOnServiceError: "+e)},syncBarbershop:function(){var e=this;r["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(t){200===t.data.codigo&&e.storeBarbershop(t.data.corpo)}))},updateBarbershopOnService:function(e,t){var n=this,a="barbershop/".concat(t);r["a"].put(a,e).then((function(e){200===e.data.codigo?n.onUpdateBarbershopOnServiceSuccess(e.data.corpo):n.onUpdateBarbershopOnServiceError(e.data.corpo)})).catch((function(e){window.console.log(e),n.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(e){window.console.log("onUpdateBarbershopOnServiceSuccess: "+e)},onUpdateBarbershopOnServiceError:function(e){window.console.log("onUpdateBarbershopOnServiceError: "+e)}}};t["a"]=a},f035:function(e,t,n){"use strict";n("a9e3");var r=n("be3b"),a={computed:{qtdRequestsPendingState:function(){return this.$store.getters["AdminSchedulesStore/qtdRequestsPending"]}},methods:{getStatusText:function(e){return Number(e)===Number(this.$SCHEDULE_STATUS.APROVADO)?"Agendado":Number(e)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"Cancelado":Number(e)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"Cancelado pelo barbeiro":"Aguardando aprovação do barbeiro"},getScheduleById:function(e){var t=this;r["a"].get("/schedule/".concat(e)).then((function(e){200===e.data.codigo?t.onGetScheduleByIdSuccess(e.data.corpo):t.onGetScheduleByIdError(e.data.corpo)})).catch((function(e){t.onGetScheduleByIdError("Não foi possível recuperar o agendamento!"),window.console.log(e)}))},onGetScheduleByIdSuccess:function(e){window.console.log("onGetScheduleByIdSuccess: ".concat(e))},onGetScheduleByIdError:function(e){window.console.log("onGetScheduleByIdError: ".concat(e))},getScheduleByUserId:function(e){var t=this;r["a"].get("/schedule/user/".concat(e)).then((function(e){200===e.data.codigo?t.onGetScheduleByUserIdSuccess(e.data.corpo):t.onGetScheduleByUserIdError(e.data.corpo)})).catch((function(e){t.onGetScheduleByUserIdError("Não foi possível recuperar os agendamentos!"),window.console.log(e)}))},setQtdRequestsPendingState:function(e){this.$store.dispatch("AdminSchedulesStore/setQtdRequestsPending",e)},onGetScheduleByUserIdSuccess:function(e){window.console.log("onGetScheduleByUserIdSuccess: ".concat(e))},onGetScheduleByUserIdError:function(e){window.console.log("onGetScheduleByUserIdError: ".concat(e))},storeSchedule:function(e){var t=this;r["a"].post("/schedule",e).then((function(e){200===e.data.codigo?t.onStoreScheduleSuccess(e.data.corpo):t.onStoreScheduleError(e.data.corpo)})).catch((function(e){t.onStoreScheduleError("Não foi possível fazer o agendamento!"),window.console.log(e)}))},onStoreScheduleSuccess:function(e){window.console.log("onStoreScheduleSuccess: ".concat(e))},onStoreScheduleError:function(e){window.console.log("onStoreScheduleError: ".concat(e))}}};t["a"]=a}}]);
//# sourceMappingURL=chunk-46aa21d2.e8f399a0.js.map