(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dc753ee"],{1681:function(e,t,a){},"5f08":function(e,t,a){"use strict";a("99af"),a("0d03"),a("a9e3"),a("ac1f"),a("466d"),a("1276");var n=a("e587"),r={filters:{dayOfWeek:function(e){var t=new Date(e),a=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return a[t.getUTCDay()]},time:function(e){if(!e)return"";var t=e.split(":"),a=Object(n["a"])(t,2),r=a[0],o=a[1];return"".concat(r,":").concat(o)}},methods:{formatDateStringToDatePtBr:function(e){if(!e)return e;e=e.split(" ");var t=e[0].split("-"),a=Object(n["a"])(t,3),r=a[0],o=a[1],i=a[2];return"".concat(i,"/").concat(o,"/").concat(r)},formatDateToDatePtBr:function(e){if(!e)return e;var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(a)<10&&(a="0".concat(a)),"".concat(t,"/").concat(a,"/").concat(n)},formatDateToDateEn:function(e){if(!e)return e;var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return Number(t)<10&&(t="0".concat(t)),Number(a)<10&&(a="0".concat(a)),"".concat(n,"-").concat(a,"-").concat(t)},formatDateTimeToStringPtBr:function(e){if(!e)return e;var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear(),r=e.getHours(),o=e.getMinutes();return Number(t)<10&&(t="0".concat(t)),Number(a)<10&&(a="0".concat(a)),Number(r)<10&&(r="0".concat(r)),Number(o)<10&&(o="0".concat(o)),"".concat(t,"/").concat(a,"/").concat(n," ").concat(r,":").concat(o)},parseDate:function(e){var t=e.match(/(\d+)/g);return new Date(t[0],t[1]-1,t[2])}}};t["a"]=r},"90a2":function(e,t,a){"use strict";a("7db0");var n=a("bf2d");function r(e,t){var a=t.modifiers||{},r=t.value,i="object"===Object(n["a"])(r),s=i?r.handler:r,c=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(e._observe){if(s&&(!a.quiet||e._observe.init)){var r=Boolean(t.find((function(e){return e.isIntersecting})));s(t,n,r)}e._observe.init&&a.once?o(e):e._observe.init=!0}}),r.options||{});e._observe={init:!1,observer:c},c.observe(e)}function o(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var i={inserted:r,unbind:o};t["a"]=i},"998a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{cols:"12",md:"7"}},[a("div",{staticClass:"grey lighten-1 pa-4 step-cart app-border-radius-small"},[e.services.length>0?a("p",[e._v(" Serviço(s): "),a("ul",e._l(e.services,(function(t){return a("li",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)]):e._e(),e.barber?a("p",[e._v(" Barbeiro: "),a("br"),e._v(" "+e._s(e.barber.name)+" ")]):e._e(),e.dateTime?a("p",[e._v(" Horário: "),a("br"),e._v(" "+e._s(e.formatDateTimeToStringPtBr(e.dateTime))+" ")]):e._e(),e.observation?a("p",[e._v(" Observação: "),a("br"),e._v(" "+e._s(e.observation)+" ")]):e._e(),a("p",{staticClass:"mb-0"},[a("strong",[e._v("Total: R$ "+e._s(e.setMoneyMask(e.price)))])])])]),a("v-col",{staticClass:"mt-0",attrs:{cols:"12",md:"5"}},[a("label",{staticClass:"ma-0"},[e._v("Informação adicional:")]),a("textarea-field",{staticClass:"ma-0 pt-1",attrs:{label:null,placeholder:"Ex: Sou alérgico a navalha;"},on:{onKeyUp:e.setObservationText}})],1)],1)},r=[],o=(a("13d5"),a("a9e3"),a("b680"),a("d2a0")),i=a("5f08"),s=a("5ff8"),c={name:"RegisterScheduleStepCart",components:{TextareaField:o["a"]},mixins:[i["a"],s["a"]],props:{services:{default:Array},barber:{default:null},dateTime:{default:null}},data:function(){return{observation:null}},computed:{price:function(){var e=this.services.reduce((function(e,t){return Number(e)+Number(t.price)}),0);return e.toFixed(2)}},methods:{setObservationText:function(e){this.observation=e,this.$emit("changeObservationText",e)}}},u=c,l=a("2877"),d=a("6544"),f=a.n(d),v=a("62ad"),p=a("0fd9"),b=Object(l["a"])(u,n,r,!1,null,null,null);t["default"]=b.exports;f()(b,{VCol:v["a"],VRow:p["a"]})},d2a0:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{"auto-grow":!0,rows:e.rows,solo:e.solo,label:e.label,placeholder:e.placeholder,outlined:e.outlined,color:"success",dark:e.dark,maxLength:e.maxLength,success:e.success,"hide-details":e.hideDetails,"validate-on-blur":""},on:{keyup:e.onKeyUp},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[e.icon?a("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v(e._s(e.icon))]):e._e()]},proxy:!0}]),model:{value:e.valueModel,callback:function(t){e.valueModel=t},expression:"valueModel"}})},r=[],o={name:"TextareaField",props:{outlined:{default:!1},label:{required:!0},placeholder:{default:null},value:{default:""},id:{default:null},success:{default:null},icon:{default:null},maxLength:{default:null},rows:{default:1},hideDetails:{default:!1},solo:{default:!1},dark:{default:!1}},data:function(){return{valueModel:""}},watch:{value:function(e){this.valueModel=e}},methods:{onKeyUp:function(){this.$emit("onKeyUp",this.valueModel,this.id)}}},i=o,s=a("2877"),c=a("6544"),u=a.n(c),l=a("132d"),d=(a("a4d3"),a("4de4"),a("4160"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("acd8"),a("e25e"),a("159b"),a("2fa7")),f=(a("1681"),a("8654")),v=a("58df");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(d["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=Object(v["a"])(f["a"]),m=h.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return b({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},f["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=f["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){f["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),g=Object(s["a"])(i,n,r,!1,null,null,null);t["a"]=g.exports;u()(g,{VIcon:l["a"],VTextarea:m})}}]);
//# sourceMappingURL=chunk-3dc753ee.636dfbe5.js.map