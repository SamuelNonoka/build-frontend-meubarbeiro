(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-568d4aaa"],{3382:function(e,t,s){},"6a51":function(e,t,s){"use strict";var d=s("3382"),c=s.n(d);c.a},a1d2:function(e,t,s){"use strict";var d=s("a7e5"),c=s.n(d);c.a},a7e5:function(e,t,s){},b0f6:function(e,t,s){},b6a8:function(e,t,s){"use strict";var d=s("b0f6"),c=s.n(d);c.a},c740:function(e,t,s){"use strict";var d=s("23e7"),c=s("b727").findIndex,i=s("44d2"),a="findIndex",l=!0;a in[]&&Array(1)[a]((function(){l=!1})),d({target:"Array",proto:!0,forced:l},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},ee2f:function(e,t,s){"use strict";s.r(t);var d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schedules"},[e.schedules.length?s("v-row",[s("v-col",{staticClass:"pr-0 pr-md-3",attrs:{cols:"12",sm:"auto"}},[s("schedules",{attrs:{schedules:e.schedulesModel},on:{scheduleChoosed:e.scheduleChoosed}})],1),s("v-col",{staticClass:"d-none d-sm-block pl-0 pl-md-3"},[e.schedule?s("schedule-description",{attrs:{scheduleId:e.schedule.id}}):e._e()],1)],1):s("div",{staticClass:"d-flex justify-center align-center lista-vazia"},[s("p",{staticClass:"ma-0"},[e._v("Não existem agendamentos")])])],1)},c=[],i=(s("7db0"),s("c740"),s("4160"),s("4e827"),s("0d03"),s("a9e3"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"site-schedule-list-schedules"},e._l(e.schedules,(function(t){return s("schedule-item",{key:t.id,staticClass:"mb-4",attrs:{schedule:t},on:{scheduleChoosed:e.scheduleChoosed}})})),1)}),a=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"site-schedule-list-item elevation-1 d-flex flex-column",class:{actived:e.schedule.actived,finished:e.isFineshed(e.schedule.start_date)},attrs:{dark:""},on:{click:e.choosed}},[s("div",[s("strong",{staticClass:"site-schedule-list-item-number"},[e._v(" "+e._s(e.schedule.id)+" ")]),s("span",{staticClass:"site-schedule-list-item-date"},[e._v(" "+e._s(e.formatDate(e.schedule.start_date))+" ")])]),s("small",{staticClass:"site-schedule-list-item-status d-inline-block mt-2",class:"site-schedule-list-item-status-"+e.schedule.schedule_status_id},[e._v(" "+e._s(e.getStatusText(e.schedule.schedule_status_id))+" ")])])},n=[],u=s("5f08"),h=s("f035"),o={name:"ScheduleItem",mixins:[u["a"],h["a"]],props:{schedule:{type:Object,required:!0}},methods:{choosed:function(){this.$emit("scheduleChoosed",this.schedule)},formatDate:function(e){if(!e)return"";var t=new Date(e);return this.formatDateTimeToStringPtBr(t)},isFineshed:function(e){var t=(new Date).getTime(),s=new Date(e).getTime();return s<t}}},r=o,f=(s("a1d2"),s("2877")),m=s("6544"),v=s.n(m),p=s("b0af"),b=Object(f["a"])(r,l,n,!1,null,"a43b326c",null),S=b.exports;v()(b,{VCard:p["a"]});var _={name:"Schedules",components:{ScheduleItem:S},props:{schedules:{type:Array,default:Array}},methods:{scheduleChoosed:function(e){this.$emit("scheduleChoosed",e)}}},C=_,g=(s("6a51"),Object(f["a"])(C,i,a,!1,null,"3185fdb9",null)),w=g.exports,I=s("b4af"),x=s("2ce5"),y=s("5988"),k=s("6cd4"),D={name:"Schedule",components:{Schedules:w,ScheduleDescription:I["a"]},mixins:[x["a"],h["a"],y["a"],k["a"]],data:function(){return{loading:!0,schedules:[],schedule:null,defaultScheduleSelectedId:null}},computed:{schedulesModel:function(){var e=this.schedules;return e.sort((function(e,t){var s=new Date(e.start_date).getTime(),d=new Date(t.start_date).getTime();return s<d?1:s>d?-1:0}))}},created:function(){this.defaultScheduleSelectedId=this.$route.params.defaultScheduleSelectedId||null},mounted:function(){this.getScheduleByUserId(this.getUser().id)},methods:{scheduleChoosed:function(e){this.schedules.forEach((function(e){e.actived=!1}));var t=this.schedules.findIndex((function(t){return t.id===e.id}));this.schedules[t].actived=!0,window.screen.width>=600?this.schedule=e:this.goTo("site-schedule-detail",{id:e.id})},onGetScheduleByUserIdSuccess:function(e){var t=this,s=e;if(s.forEach((function(e,t){s[t].actived=!1})),this.schedules=s,this.schedules.length>0){var d=null;d=this.defaultScheduleSelectedId?this.schedules.find((function(e){return Number(e.id)===Number(t.defaultScheduleSelectedId)})):this.schedulesModel[0],this.scheduleChoosed(d)}this.loading=!1},onGetScheduleByUserIdError:function(e){this.schedules=[],this.loading=!1,this.showSnackbarErro(e)}}},T=D,E=(s("b6a8"),s("62ad")),$=s("0fd9"),j=Object(f["a"])(T,d,c,!1,null,"27ca15c8",null);t["default"]=j.exports;v()(j,{VCol:E["a"],VRow:$["a"]})}}]);
//# sourceMappingURL=chunk-568d4aaa.b4ff7c57.js.map