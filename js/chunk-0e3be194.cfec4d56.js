(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e3be194"],{"64e5":function(e,t,r){"use strict";var o=r("d039"),a=r("0ccb").start,s=Math.abs,n=Date.prototype,i=n.getTime,c=n.toISOString;e.exports=o((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-5e13-1))}))||!o((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),o=t<0?"-":t>9999?"+":"";return o+a(s(t),o?6:4,0)+"-"+a(e.getUTCMonth()+1,2,0)+"-"+a(e.getUTCDate(),2,0)+"T"+a(e.getUTCHours(),2,0)+":"+a(e.getUTCMinutes(),2,0)+":"+a(e.getUTCSeconds(),2,0)+"."+a(r,3,0)+"Z"}:c},8936:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"step-time"},[r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[r("date-picker",{attrs:{label:"Data do agendamento",max:e.maxDate,min:e.minDate},on:{change:e.dateChanged}})],1)],1),e._l(e.barbers,(function(t){return r("v-row",{key:t.id},[r("v-col",{staticClass:"barber-info py-0",attrs:{cols:"12"}},[r("div",{staticClass:"imagem"},[t.image_url?r("img",{staticClass:"grey lighten-2",attrs:{src:""+e.$url_backend+t.image_url,"lazy-src":""+e.$url_backend+t.image_url,"aspect-ratio":"1"}}):e._e()]),r("h1",{staticClass:"nome"},[e._v(" "+e._s(t.name)+" ")])]),r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[t.times.length>0?r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("p",{staticClass:"ma-0 mt-3"},[r("strong",[e._v("Horários disponíveis:")])])]),e._l(t.times,(function(o,a){return r("v-col",{key:a,attrs:{cols:"auto"},on:{click:function(r){return e.chooseTime(o.time,t.id)}}},[r("div",{staticClass:"grey lighten-1 pa-2 text-center app-border-radius-small step-time-item",class:{active:o.time===e.time}},[e._v(" "+e._s(e.formatResponseToTime(o.time))+" ")])])}))],2):r("p",{staticClass:"text-center ma-0"},[e._v(" Nenhum horário disponível ")])],1),r("v-col",{staticClass:"px-4",attrs:{cols:"12"}},[r("v-divider",{staticClass:"mb-0"})],1)],1)}))],2)},a=[],s=(r("99af"),r("d81d"),r("accc"),r("0d03"),r("ac1f"),r("1276"),r("e587")),n=r("be3b"),i=r("b7c5"),c=r("5f08"),d=r("974c"),l=r("ef49"),h={name:"RegisterScheduleStepTime",mixins:[l["a"],c["a"],d["a"]],components:{DatePicker:i["a"]},props:{barbershop_id:{required:!0},choosedBarbers:{default:Array},duration:{default:"0:00"}},data:function(){return{barbershopObj:null,time:null,barbers:[],loading:!0,date:null}},computed:{maxDate:function(){var e=new Date;return e.setDate(e.getDate()+6),e.toISOString().substr(0,10)},minDate:function(){var e=new Date;return e.setDate(e.getDate()-1),e.toISOString().substr(0,10)}},methods:{chooseTime:function(e,t){this.time=e;var r=this.time.split(":"),o=Object(s["a"])(r,2),a=o[0],n=o[1];this.date.setHours(a,n,0),this.$emit("choosed",this.date,t)},dateChanged:function(e){var t=this.date,r=new Date(e);r.setDate(r.getDate()+1),this.date=r,t&&this.getTimesOnService(this.date)},getTimes:function(){this.date=new Date,this.getTimesOnService(this.date)},getTimesOnService:function(e){var t=this;e=this.formatDateToDateEn(e),this.barbers=[];var r="/barbershop/".concat(this.barbershop_id,"/time/available/").concat(e);if(window.console.log("choosedBarbers",this.choosedBarbers,this.choosedBarbers.length),this.choosedBarbers.length>0){window.console.log("entrou");var o=this.choosedBarbers.map((function(e){return e.id}));r+="?barbers=".concat(o)}n["a"].get(r).then((function(e){200===e.data.codigo?t.barbers=e.data.corpo:t.barbers=[]})).catch((function(e){t.barbers=[],window.console.log(e)}))}}},b=h,u=(r("b5b6"),r("2877")),p=r("6544"),v=r.n(p),g=r("62ad"),f=r("ce7e"),m=r("0fd9"),S=Object(u["a"])(b,o,a,!1,null,"a6bb7184",null);t["default"]=S.exports;v()(S,{VCol:g["a"],VDivider:f["a"],VRow:m["a"]})},accc:function(e,t,r){var o=r("23e7"),a=r("64e5");o({target:"Date",proto:!0,forced:Date.prototype.toISOString!==a},{toISOString:a})},b5b6:function(e,t,r){"use strict";var o=r("cede"),a=r.n(o);a.a},cede:function(e,t,r){},ef49:function(e,t,r){"use strict";var o=r("be3b"),a={computed:{barbershop:{set:function(){},get:function(){return this.$store.getters["BarbershopStore/barbershop"]}},barbershopState:function(){return this.$store.getters["BarbershopStore/barbershop"]}},methods:{storeBarbershop:function(e){this.$store.dispatch("BarbershopStore/store",e)},getBarbershop:function(){return this.$store.getters["BarbershopStore/barbershop"]},getBarbershopByIdOnService:function(e){var t=this;o["a"].get("/barbershop/".concat(e)).then((function(e){200===e.data.codigo?t.onGetBarbershopByIdOnServiceSuccess(e.data.corpo):t.onGetBarbershopByIdOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarbershopByIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarbershopByIdOnServiceSuccess:function(e){window.console.log("onGetBarbershopByIdOnServiceSuccess: "+e)},onGetBarbershopByIdOnServiceError:function(e){window.console.log("onGetBarbershopByIdOnServiceError: "+e)},getBarbershopAllOnService:function(){var e=this;o["a"].get("/barbershop").then((function(t){200===t.data.codigo?e.onGetBarbershopAllOnServiceSuccess(t.data.corpo):e.onGetBarbershopAllOnServiceError(t.data.corpo)})).catch((function(t){e.onGetBarbershopAllOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(t)}))},onGetBarbershopAllOnServiceSuccess:function(e){window.console.log("onGetBarbershopAllOnServiceSuccess: "+e)},onGetBarbershopAllOnServiceError:function(e){window.console.log("onGetBarbershopAllOnServiceError: "+e)},syncBarbershop:function(){var e=this;o["a"].get("/barbershop/".concat(this.barbershop.id)).then((function(t){200===t.data.codigo&&e.storeBarbershop(t.data.corpo)}))},updateBarbershopOnService:function(e,t){var r=this,a="barbershop/".concat(t);o["a"].put(a,e).then((function(e){200===e.data.codigo?r.onUpdateBarbershopOnServiceSuccess(e.data.corpo):r.onUpdateBarbershopOnServiceError(e.data.corpo)})).catch((function(e){window.console.log(e),r.onUpdateBarbershopOnServiceError("Não foi possível atualizar os dados da barbearia!")}))},onUpdateBarbershopOnServiceSuccess:function(e){window.console.log("onUpdateBarbershopOnServiceSuccess: "+e)},onUpdateBarbershopOnServiceError:function(e){window.console.log("onUpdateBarbershopOnServiceError: "+e)}}};t["a"]=a}}]);
//# sourceMappingURL=chunk-0e3be194.cfec4d56.js.map