(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-501d86c9"],{"0481":function(t,e,n){"use strict";var a=n("23e7"),i=n("a2bf"),r=n("7b0b"),s=n("50c4"),o=n("a691"),c=n("65f0");a({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=r(this),n=s(e.length),a=c(e,0);return a.length=i(a,e,e,n,0,void 0===t?1:o(t)),a}})},"0789":function(t,e,n){"use strict";n("99af");var a=n("d9f7");function i(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return(t=Array()).concat.apply(t,[e].concat(a))}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var r="transition".concat(n.props.group?"-group":""),s={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(s.on.leave=i(s.on.leave,(function(t){return t.style.display="none"}))),e(r,Object(a["a"])(n.data,s),n.children)}}}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,i){return n("transition",Object(a["a"])(i.data,{props:{name:t},on:e}),i.children)}}}var o=n("2fa7"),c=n("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",a="offset".concat(Object(c["C"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var i=e._initialStyle,r="".concat(e[a],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=i.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",visibility:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[a],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:i,leaveCancelled:i};function i(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}};n.d(e,"f",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return v}));r("carousel-transition"),r("carousel-reverse-transition");var u=r("tab-transition"),d=r("tab-reverse-transition"),f=(r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("fade-transition")),h=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),p=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),s("expand-transition",l())),v=s("expand-x-transition",l("",!0))},4069:function(t,e,n){var a=n("44d2");a("flat")},"5f08":function(t,e,n){"use strict";n("99af"),n("0d03"),n("a9e3"),n("ac1f"),n("466d"),n("1276");var a=n("e587"),i={filters:{dayOfWeek:function(t){var e=new Date(t),n=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return n[e.getUTCDay()]}},methods:{formatDateStringToDatePtBr:function(t){if(!t)return t;t=t.split(" ");var e=t[0].split("-"),n=Object(a["a"])(e,3),i=n[0],r=n[1],s=n[2];return"".concat(s,"/").concat(r,"/").concat(i)},formatDateToDatePtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,a=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(e,"/").concat(n,"/").concat(a)},formatDateToDateEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,a=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(a,"-").concat(n,"-").concat(e)},formatDateTimeToStringPtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,a=t.getFullYear(),i=t.getHours(),r=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(i)<10&&(i="0".concat(i)),Number(r)<10&&(r="0".concat(r)),"".concat(e,"/").concat(n,"/").concat(a," ").concat(i,":").concat(r)},parseDate:function(t){var e=t.match(/(\d+)/g);return new Date(e[0],e[1]-1,e[2])}}};e["a"]=i},"5ff8":function(t,e,n){"use strict";n("a15b"),n("13d5"),n("26e9"),n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276");var a={methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){return t?(t=t.replace("R$ ",""),t=t.split(".").join(""),t=t.split(",").join("."),t):t},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),n=0,a=e.reduce((function(t,e){return n++,3==n?t=","+t:n%3===0&&(t="."+t),String(e)+String(t)}),"");return a},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),this.removeAccents(t)):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?t.match(/\d+/g).join(""):t}}};e["a"]=a},"6cd4":function(t,e,n){"use strict";n("b0c0");var a=n("2ce5"),i={mixins:[a["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}},userState:function(){return this.$store.getters["UserStore/user"]}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(t){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",t)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"barbershops"==this.$route.name?window.location=window.location.origin+"/":this.goTo("barbershops")}}};e["a"]=i},a2bf:function(t,e,n){"use strict";var a=n("e8b5"),i=n("50c4"),r=n("f8c2"),s=function(t,e,n,o,c,l,u,d){var f,h=c,p=0,v=!!u&&r(u,d,3);while(p<o){if(p in n){if(f=v?v(n[p],p,e):n[p],l>0&&a(f))h=s(t,e,f,i(f.length),h,l-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=f}h++}p++}return h};t.exports=s},a452:function(t,e,n){"use strict";var a=n("2fa7"),i=n("2b0e");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return i["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(a["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(a["a"])({},t,(function(t){this.internalLazyValue=t}))})}var s=r();e["a"]=s},b4af:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.schedule?n("card",{staticClass:"primaryDark schedule-description"},[n("v-row",{staticClass:"topo flex-row-reverse"},[n("v-col",{staticClass:"text-right py-0 mb-2",attrs:{cols:"12",sm:"auto"}},[n("v-chip",{staticClass:"status",class:t.getStatus(),attrs:{small:""}},[t._v(" "+t._s(t.getStatusText(t.schedule.schedule_status_id))+" ")])],1),n("v-col",{staticClass:"py-0 pb-md-0"},[n("strong",{staticClass:"codigo"},[t._v(" Nº atendimento: "+t._s(t.schedule.id)+" ")])])],1),n("p",[n("span",{staticClass:"d-block"},[t._v(" "+t._s(t.formatDateTimeToStringPtBr(new Date(t.schedule.start_date)))+" ")]),n("span",{staticClass:"primaryLight px-2 py-1 d-inline-block"},[t._v(" R$ "+t._s(t.setMoneyMask(t.schedule.price.toFixed(2)))+" ")])]),t.schedule.cancellation_reason?n("div",{staticClass:"mt-4 cancellation-reason"},[n("h2",[t._v(" Motivo do cancelamento ")]),t._v(" "+t._s(t.schedule.cancellation_reason)+" ")]):t._e(),n("div",{staticClass:"mt-4"},[n("h2",[t._v(" Serviços: ")]),n("ul",t._l(t.schedule.services,(function(e,a){return n("li",{key:a},[t._v(" "+t._s(e.name)+" ")])})),0)]),t.schedule.observation?n("div",{staticClass:"mt-4"},[n("h2",[t._v(" Observação ")]),t._v(" "+t._s(t.schedule.observation)+" ")]):t._e(),n("div",{staticClass:"mt-4"},[n("h2",[t._v(" Barbeiro: ")]),n("p",[t._v(" "+t._s(t.schedule.barber.name)+" ")]),t.schedule.barber.phone?n("p",[t._v(" "+t._s(t.schedule.barber.phone)+" ")]):t._e()]),n("div",{staticClass:"mt-4"},[n("h2",[t._v(" "+t._s(t.schedule.barbershop.name)+" ")]),t.schedule.barbershop.phone_number?n("p",{staticClass:"mb-0"},[t._v(" "+t._s(t.setPhoneMask(t.schedule.barbershop.phone_number))+" ")]):t._e(),n("p",{staticClass:"ma-0"},[t._v(" "+t._s(t.description)+" ")])]),t.showBtn?n("div",{staticClass:"text-center mt-8 mb-4"},[n("btn",{staticClass:"danger",attrs:{text:"Cancelar agendamento",block:!1},on:{clicked:t.cancel}})],1):t._e()],1):t._e()},i=[],r=(n("99af"),n("0d03"),n("b0c0"),n("a9e3"),n("be3b")),s=n("e7e3"),o=n("d035"),c=n("5f08"),l=n("f035"),u=n("5988"),d=n("5ff8"),f=n("6cd4"),h={name:"Description",components:{Btn:s["a"],Card:o["a"]},mixins:[c["a"],l["a"],u["a"],d["a"],f["a"]],props:{scheduleId:{default:null}},data:function(){return{schedule:null}},watch:{scheduleId:function(t){this.getScheduleById(t)}},computed:{showBtn:function(){return this.schedule.status.id===this.$SCHEDULE_STATUS.AGUARDANDO&&(new Date).getTime()<new Date(this.schedule.start_date).getTime()},description:function(){var t=this.schedule.barbershop.address,e=t.public_place;return t.number&&(e+=", ".concat(t.number)),e+=", ".concat(t.neighborhood,", ").concat(t.city," - ").concat(t.uf),t.complement&&(e+="\n ".concat(t.complement)),e},exibirLabelFinalizado:function(){return(new Date).getTime()>new Date(this.schedule.start_date).getTime()}},mounted:function(){this.getScheduleById(this.scheduleId)},methods:{cancel:function(){var t=this;r["a"].put("schedule/".concat(this.schedule.id,"/user/cancel"),{user_id:this.getUser().id}).then((function(e){200===e.data.codigo?t.onCancelSucess(e.data.corpo):t.onCancelError(e.data.corpo)})).catch((function(e){t.onCancelError("Não foi possível cancelar o agendamento!"),window.console.log(e)}))},getStatus:function(){return Number(this.schedule.status.id)===Number(this.$SCHEDULE_STATUS.APROVADO)?"success":Number(this.schedule.status.id)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"danger":Number(this.schedule.status.id)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"danger":""},onGetScheduleByIdSuccess:function(t){this.schedule=t},onGetScheduleByIdError:function(t){this.showSnackbarErro(t)},onCancelError:function(t){this.showSnackbarErro(t)},onCancelSucess:function(t){this.schedule.status={id:this.$SCHEDULE_STATUS.CANCELADO,name:this.schedule.status.name="Cancelado"},this.showSnackbar(t)}}},p=h,v=(n("c016"),n("2877")),m=n("6544"),b=n.n(m),g=n("cc20"),_=n("62ad"),y=n("0fd9"),S=Object(v["a"])(p,a,i,!1,null,null,null);e["a"]=S.exports;b()(S,{VChip:g["a"],VCol:_["a"],VRow:y["a"]})},bcc6:function(t,e,n){},c016:function(t,e,n){"use strict";var a=n("bcc6"),i=n.n(a);i.a},d035:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[t.title?n("p",{staticClass:"title card-title pa-2 pb-0 mb-0"},[t.icon?n("v-icon",{staticClass:"mb-1",attrs:{color:t.iconClass}},[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._v(" "+t._s(t.title)+" ")],1):t._e(),n("div",{staticClass:"pa-4",class:t.cssClass},[t._t("default")],2)])},i=[],r={name:"Card",props:{title:{default:null},icon:{default:null},iconClass:{default:"success"},cssClass:{default:""}}},s=r,o=n("2877"),c=n("6544"),l=n.n(c),u=n("b0af"),d=n("132d"),f=Object(o["a"])(s,a,i,!1,null,null,null);e["a"]=f.exports;l()(f,{VCard:u["a"],VIcon:d["a"]})}}]);
//# sourceMappingURL=chunk-501d86c9.0ca5c24c.js.map