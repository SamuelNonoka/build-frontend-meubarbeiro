(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-040b62f9"],{"5f08":function(e,t,r){"use strict";r("99af"),r("a9e3");var a={methods:{formatDateToDatePtBr:function(e){if(!e)return e;var t=e.getDate(),r=e.getMonth()+1,a=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(r)<10&&(r="0".concat(r)),"".concat(t,"/").concat(r,"/").concat(a)},formatDateToDateEn:function(e){if(!e)return e;var t=e.getDate(),r=e.getMonth()+1,a=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(r)<10&&(r="0".concat(r)),"".concat(a,"-").concat(r,"-").concat(t)},formatDateTimeToStringPtBr:function(e){if(!e)return e;var t=e.getDate(),r=e.getMonth()+1,a=e.getFullYear(),n=e.getHours(),c=e.getMinutes();return Number(t)<10&&(t="0".concat(t)),Number(r)<10&&(r="0".concat(r)),Number(n)<10&&(n="0".concat(n)),Number(c)<10&&(c="0".concat(c)),"".concat(t,"/").concat(r,"/").concat(a," ").concat(n,":").concat(c)}}};t["a"]=a},"998a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"grey lighten-1 pa-4 step-cart app-border-radius-small"},[e.services.length>0?r("p",[e._v(" Serviço(s): "),r("ul",e._l(e.services,(function(t){return r("li",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)]):e._e(),e.barber?r("p",[e._v(" Barbeiro: "),r("br"),e._v(" "+e._s(e.barber.name)+" ")]):e._e(),e.dateTime?r("p",[e._v(" Horário: "),r("br"),e._v(" "+e._s(e.formatDateTimeToStringPtBr(e.dateTime))+" ")]):e._e(),r("p",{staticClass:"mb-0"},[r("strong",[e._v("Total: R$ "+e._s(e.setMoneyMask(e.price)))])])])])],1)},n=[],c=(r("13d5"),r("a9e3"),r("b680"),r("5f08")),o=r("5ff8"),u={name:"RegisterScheduleStepCart",mixins:[c["a"],o["a"]],props:{services:{default:Array},barber:{default:null},dateTime:{default:null}},computed:{price:function(){var e=this.services.reduce((function(e,t){return Number(e)+Number(t.price)}),0);return e.toFixed(2)}}},i=u,s=r("2877"),l=r("6544"),f=r.n(l),m=r("62ad"),b=r("0fd9"),v=Object(s["a"])(i,a,n,!1,null,null,null);t["default"]=v.exports;f()(v,{VCol:m["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-040b62f9.efa8ce12.js.map