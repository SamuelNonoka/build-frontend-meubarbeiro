(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e719af2"],{"0481":function(e,t,s){"use strict";var n=s("23e7"),a=s("a2bf"),c=s("7b0b"),i=s("50c4"),r=s("a691"),o=s("65f0");n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=c(this),s=i(t.length),n=o(t,0);return n.length=a(n,t,t,s,0,void 0===e?1:r(e)),n}})},1340:function(e,t,s){},"144f":function(e,t,s){"use strict";var n=s("1340"),a=s.n(n);a.a},"2ce5":function(e,t,s){"use strict";s("b0c0");var n={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=this.$route.name;e!=s&&(t?this.$router.push({name:e,params:t}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};t["a"]=n},3382:function(e,t,s){},4069:function(e,t,s){var n=s("44d2");n("flat")},"5f08":function(e,t,s){"use strict";s("99af"),s("0d03"),s("a9e3"),s("ac1f"),s("466d"),s("1276");var n=s("e587"),a={filters:{dayOfWeek:function(e){var t=new Date(e),s=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return s[t.getUTCDay()]},time:function(e){if(!e)return"";var t=e.split(":"),s=Object(n["a"])(t,2),a=s[0],c=s[1];return"".concat(a,":").concat(c)}},methods:{formatDateStringToDatePtBr:function(e){if(!e)return e;e=e.split(" ");var t=e[0].split("-"),s=Object(n["a"])(t,3),a=s[0],c=s[1],i=s[2];return"".concat(i,"/").concat(c,"/").concat(a)},formatDateToDatePtBr:function(e){if(!e)return e;var t=e.getDate(),s=e.getMonth()+1,n=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(s)<10&&(s="0".concat(s)),"".concat(t,"/").concat(s,"/").concat(n)},formatDateToDateEn:function(e){if(!e)return e;var t=e.getDate(),s=e.getMonth()+1,n=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(s)<10&&(s="0".concat(s)),"".concat(n,"-").concat(s,"-").concat(t)},formatDateTimeToStringPtBr:function(e){if(!e)return e;var t=e.getDate(),s=e.getMonth()+1,n=e.getFullYear(),a=e.getHours(),c=e.getMinutes();return Number(t)<10&&(t="0".concat(t)),Number(s)<10&&(s="0".concat(s)),Number(a)<10&&(a="0".concat(a)),Number(c)<10&&(c="0".concat(c)),"".concat(t,"/").concat(s,"/").concat(n," ").concat(a,":").concat(c)},parseDate:function(e){var t=e.match(/(\d+)/g);return new Date(t[0],t[1]-1,t[2])}}};t["a"]=a},"5ff8":function(e,t,s){"use strict";s("a15b"),s("13d5"),s("26e9"),s("0d03"),s("d3b7"),s("ac1f"),s("25f0"),s("466d"),s("5319"),s("1276");var n={filters:{numeric:function(e){return e?(e=e.replace(".",","),e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1.")):e}},methods:{removeMask:function(e){return e?e.match(/\d+/g).join(""):""},removeMoneyMask:function(e){return e?(e=e.replace("R$ ",""),e=e.split(".").join(""),e=e.split(",").join("."),e):e},setCepMask:function(e){return e?e.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):e},setPhoneMask:function(e){return e?e.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(e){if(!e)return e;e=e.toString(),e=e.split(" ").join(""),e=e.split("R$").join(""),e=e.split(".").join("");var t=e.split("").reverse(),s=0,n=t.reduce((function(e,t){return s++,3==s?e=","+e:s%3===0&&(e="."+e),String(t)+String(e)}),"");return n},formatTextToUrl:function(e){return e?(e=e.toLowerCase(),e=e.split(" ").join("-"),this.removeAccents(e)):e},removeAccents:function(e){return e?(e=e.split("á").join("a"),e=e.split("à").join("a"),e=e.split("ã").join("a"),e=e.split("â").join("a"),e=e.split("é").join("e"),e=e.split("è").join("e"),e=e.split("ê").join("e"),e=e.split("í").join("i"),e=e.split("ì").join("i"),e=e.split("î").join("i"),e=e.split("ó").join("o"),e=e.split("ò").join("o"),e=e.split("õ").join("o"),e=e.split("ô").join("o"),e=e.split("ú").join("u"),e=e.split("ù").join("u"),e=e.split("û").join("u"),e=e.split("ç").join("c"),e):e},removeSimbols:function(e){return e?e.match(/\d+/g).join(""):e}}};t["a"]=n},"6a51":function(e,t,s){"use strict";var n=s("3382"),a=s.n(n);a.a},"6cd4":function(e,t,s){"use strict";s("b0c0");var n=s("2ce5"),a={mixins:[n["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}},userState:function(){return this.$store.getters["UserStore/user"]}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(e){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",e)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout"),localStorage.setItem("routePathSite",""),"search"==this.$route.name?window.location=window.location.origin+"/":this.goTo("search")}}};t["a"]=a},a1d2:function(e,t,s){"use strict";var n=s("a7e5"),a=s.n(n);a.a},a2bf:function(e,t,s){"use strict";var n=s("e8b5"),a=s("50c4"),c=s("f8c2"),i=function(e,t,s,r,o,u,l,d){var h,f=o,m=0,p=!!l&&c(l,d,3);while(m<r){if(m in s){if(h=p?p(s[m],m,t):s[m],u>0&&n(h))f=i(e,t,h,a(h.length),f,u-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=h}f++}m++}return f};e.exports=i},a7e5:function(e,t,s){},b4af:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.schedule?s("card",{staticClass:"primaryDark schedule-description"},[s("v-row",{staticClass:"topo flex-row-reverse"},[s("v-col",{staticClass:"text-right py-0 mb-2",attrs:{cols:"12",sm:"auto"}},[s("v-chip",{staticClass:"status",class:e.getStatus(),attrs:{small:""}},[e._v(" "+e._s(e.getStatusText(e.schedule.schedule_status_id))+" ")])],1),s("v-col",{staticClass:"py-0 pb-md-0"},[s("strong",{staticClass:"codigo"},[e._v(" Nº atendimento: "+e._s(e.schedule.id)+" ")])])],1),s("p",[s("span",{staticClass:"d-block"},[e._v(" "+e._s(e.formatDateTimeToStringPtBr(new Date(e.schedule.start_date)))+" ")]),s("span",{staticClass:"primaryLight px-2 py-1 d-inline-block"},[e._v(" R$ "+e._s(e.setMoneyMask(e.schedule.price.toFixed(2)))+" ")])]),e.schedule.cancellation_reason?s("div",{staticClass:"mt-4 cancellation-reason"},[s("h2",[e._v(" Motivo do cancelamento ")]),e._v(" "+e._s(e.schedule.cancellation_reason)+" ")]):e._e(),s("div",{staticClass:"mt-4"},[s("h2",[e._v(" Serviços: ")]),s("ul",e._l(e.schedule.services,(function(t,n){return s("li",{key:n},[e._v(" "+e._s(t.name)+" ")])})),0)]),e.schedule.observation?s("div",{staticClass:"mt-4"},[s("h2",[e._v(" Observação ")]),e._v(" "+e._s(e.schedule.observation)+" ")]):e._e(),s("div",{staticClass:"mt-4"},[s("h2",[e._v(" Barbeiro: ")]),s("p",[e._v(" "+e._s(e.schedule.barber.name)+" ")]),e.schedule.barber.phone?s("p",[e._v(" "+e._s(e.schedule.barber.phone)+" ")]):e._e()]),s("div",{staticClass:"mt-4"},[s("h2",[e._v(" "+e._s(e.schedule.barbershop.name)+" ")]),e.schedule.barbershop.phone_number?s("p",{staticClass:"mb-0"},[e._v(" "+e._s(e.setPhoneMask(e.schedule.barbershop.phone_number))+" ")]):e._e(),s("p",{staticClass:"ma-0"},[e._v(" "+e._s(e.description)+" ")])]),e.showBtn?s("div",{staticClass:"text-center mt-8 mb-4"},[s("btn",{staticClass:"danger",attrs:{text:"Cancelar agendamento",block:!1},on:{clicked:e.cancel}})],1):e._e()],1):e._e()},a=[],c=(s("99af"),s("0d03"),s("b0c0"),s("a9e3"),s("be3b")),i=s("e7e3"),r=s("d035"),o=s("5f08"),u=s("f035"),l=s("5988"),d=s("5ff8"),h=s("6cd4"),f={name:"Description",components:{Btn:i["a"],Card:r["a"]},mixins:[o["a"],u["a"],l["a"],d["a"],h["a"]],props:{scheduleId:{default:null}},data:function(){return{schedule:null}},watch:{scheduleId:function(e){this.getScheduleById(e)}},computed:{showBtn:function(){return this.schedule.status.id===this.$SCHEDULE_STATUS.AGUARDANDO&&(new Date).getTime()<new Date(this.schedule.start_date).getTime()},description:function(){var e=this.schedule.barbershop.address,t=e.public_place;return e.number&&(t+=", ".concat(e.number)),t+=", ".concat(e.neighborhood,", ").concat(e.city," - ").concat(e.uf),e.complement&&(t+="\n ".concat(e.complement)),t},exibirLabelFinalizado:function(){return(new Date).getTime()>new Date(this.schedule.start_date).getTime()}},mounted:function(){this.getScheduleById(this.scheduleId)},methods:{cancel:function(){var e=this;c["a"].put("schedule/".concat(this.schedule.id,"/user/cancel"),{user_id:this.getUser().id}).then((function(t){200===t.data.codigo?e.onCancelSucess(t.data.corpo):e.onCancelError(t.data.corpo)})).catch((function(t){e.onCancelError("Não foi possível cancelar o agendamento!"),window.console.log(t)}))},getStatus:function(){return Number(this.schedule.status.id)===Number(this.$SCHEDULE_STATUS.APROVADO)?"success":Number(this.schedule.status.id)===Number(this.$SCHEDULE_STATUS.CANCELADO)?"danger":Number(this.schedule.status.id)===Number(this.$SCHEDULE_STATUS.REPROVADO)?"danger":""},onGetScheduleByIdSuccess:function(e){this.schedule=e},onGetScheduleByIdError:function(e){this.showSnackbarErro(e)},onCancelError:function(e){this.showSnackbarErro(e)},onCancelSucess:function(e){this.schedule.status={id:this.$SCHEDULE_STATUS.CANCELADO,name:this.schedule.status.name="Cancelado"},this.showSnackbar(e)}}},m=f,p=(s("c016"),s("2877")),v=s("6544"),b=s.n(v),g=s("cc20"),_=s("62ad"),S=s("0fd9"),C=Object(p["a"])(m,n,a,!1,null,null,null);t["a"]=C.exports;b()(C,{VChip:g["a"],VCol:_["a"],VRow:S["a"]})},bcc6:function(e,t,s){},c016:function(e,t,s){"use strict";var n=s("bcc6"),a=s.n(n);a.a},c740:function(e,t,s){"use strict";var n=s("23e7"),a=s("b727").findIndex,c=s("44d2"),i="findIndex",r=!0;i in[]&&Array(1)[i]((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c(i)},d035:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[e.title?s("p",{staticClass:"title card-title pa-2 pb-0 mb-0"},[e.icon?s("v-icon",{staticClass:"mb-1",attrs:{color:e.iconClass}},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.title)+" ")],1):e._e(),s("div",{staticClass:"pa-4",class:e.cssClass},[e._t("default")],2)])},a=[],c={name:"Card",props:{title:{default:null},icon:{default:null},iconClass:{default:"success"},cssClass:{default:""}}},i=c,r=s("2877"),o=s("6544"),u=s.n(o),l=s("b0af"),d=s("132d"),h=Object(r["a"])(i,n,a,!1,null,null,null);t["a"]=h.exports;u()(h,{VCard:l["a"],VIcon:d["a"]})},ee2f:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schedules"},[e.schedules.length?s("v-row",[s("v-col",{staticClass:"pr-0 pr-md-3",attrs:{cols:"12",sm:"auto"}},[s("schedules",{attrs:{schedules:e.schedulesModel},on:{scheduleChoosed:e.scheduleChoosed}})],1),s("v-col",{staticClass:"d-none d-sm-block pl-0 pl-md-3"},[e.schedule?s("schedule-description",{attrs:{scheduleId:e.schedule.id}}):e._e()],1)],1):s("div",{staticClass:"d-flex justify-center align-center lista-vazia"},[s("p",{staticClass:"ma-0"},[e._v("Não existem agendamentos")])])],1)},a=[],c=(s("7db0"),s("c740"),s("4160"),s("4e827"),s("0d03"),s("a9e3"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"site-schedule-list-schedules"},e._l(e.schedules,(function(t){return s("schedule-item",{key:t.id,staticClass:"mb-4",attrs:{schedule:t},on:{scheduleChoosed:e.scheduleChoosed}})})),1)}),i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"site-schedule-list-item elevation-1 d-flex flex-column",class:{actived:e.schedule.actived,finished:e.isFineshed(e.schedule.start_date)},attrs:{dark:""},on:{click:e.choosed}},[s("div",[s("strong",{staticClass:"site-schedule-list-item-number"},[e._v(" "+e._s(e.schedule.id)+" ")]),s("span",{staticClass:"site-schedule-list-item-date"},[e._v(" "+e._s(e.formatDate(e.schedule.start_date))+" ")])]),s("small",{staticClass:"site-schedule-list-item-status d-inline-block mt-2",class:"site-schedule-list-item-status-"+e.schedule.schedule_status_id},[e._v(" "+e._s(e.getStatusText(e.schedule.schedule_status_id))+" ")])])},o=[],u=s("5f08"),l=s("f035"),d={name:"ScheduleItem",mixins:[u["a"],l["a"]],props:{schedule:{type:Object,required:!0}},methods:{choosed:function(){this.$emit("scheduleChoosed",this.schedule)},formatDate:function(e){if(!e)return"";var t=new Date(e);return this.formatDateTimeToStringPtBr(t)},isFineshed:function(e){var t=(new Date).getTime(),s=new Date(e).getTime();return s<t}}},h=d,f=(s("a1d2"),s("2877")),m=s("6544"),p=s.n(m),v=s("b0af"),b=Object(f["a"])(h,r,o,!1,null,"a43b326c",null),g=b.exports;p()(b,{VCard:v["a"]});var _={name:"Schedules",components:{ScheduleItem:g},props:{schedules:{type:Array,default:Array}},methods:{scheduleChoosed:function(e){this.$emit("scheduleChoosed",e)}}},S=_,C=(s("6a51"),Object(f["a"])(S,c,i,!1,null,"3185fdb9",null)),w=C.exports,D=s("b4af"),T=s("2ce5"),$=s("5988"),j=s("6cd4"),y={name:"Schedule",components:{Schedules:w,ScheduleDescription:D["a"]},mixins:[T["a"],l["a"],$["a"],j["a"]],data:function(){return{loading:!0,schedules:[],schedule:null,defaultScheduleSelectedId:null}},computed:{schedulesModel:function(){var e=this.schedules;return e.sort((function(e,t){var s=new Date(e.start_date).getTime(),n=new Date(t.start_date).getTime();return s<n?1:s>n?-1:0}))}},created:function(){this.defaultScheduleSelectedId=this.$route.params.defaultScheduleSelectedId||null},mounted:function(){this.getScheduleByUserId(this.getUser().id)},methods:{scheduleChoosed:function(e){this.schedules.forEach((function(e){e.actived=!1}));var t=this.schedules.findIndex((function(t){return t.id===e.id}));this.schedules[t].actived=!0,this.schedule=e,window.screen.width>=600?this.schedule=e:this.goTo("site-schedule-detail",{id:e.id})},onGetScheduleByUserIdSuccess:function(e){var t=this,s=e;if(window.console.log(s),s.forEach((function(e,t){s[t].actived=!1})),this.schedules=s,this.schedules.length>0){var n=null;n=this.defaultScheduleSelectedId?this.schedules.find((function(e){return Number(e.id)===Number(t.defaultScheduleSelectedId)})):this.schedulesModel[0],window.screen.width>=600&&this.scheduleChoosed(n)}this.loading=!1},onGetScheduleByUserIdError:function(e){this.schedules=[],this.loading=!1,this.showSnackbarErro(e)}}},E=y,U=(s("144f"),s("62ad")),k=s("0fd9"),x=Object(f["a"])(E,n,a,!1,null,"f22bf004",null);t["default"]=x.exports;p()(x,{VCol:U["a"],VRow:k["a"]})}}]);
//# sourceMappingURL=chunk-6e719af2.2019c1f0.js.map