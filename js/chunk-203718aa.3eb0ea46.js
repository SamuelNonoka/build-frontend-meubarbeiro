(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-203718aa"],{"06aa":function(t,e,r){"use strict";e["a"]={computed:{isLoading:function(){return this.$store.getters["LoaderStore/isLoading"]}},methods:{showLoader:function(){this.$store.dispatch("LoaderStore/setLoader",!0)},hideLoader:function(){this.$store.dispatch("LoaderStore/setLoader",!1)}}}},"1c5b":function(t,e,r){"use strict";var a=r("284e"),s=r.n(a);s.a},"26e9":function(t,e,r){"use strict";var a=r("23e7"),s=r("e8b5"),o=[].reverse,n=[1,2];a({target:"Array",proto:!0,forced:String(n)===String(n.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),o.call(this)}})},"284e":function(t,e,r){},"2adc":function(t,e,r){"use strict";var a=r("57f2"),s=r.n(a);s.a},"2ce5":function(t,e,r){"use strict";r("b0c0");var a={methods:{goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.$route.name;t!=r&&(e?this.$router.push({name:t,params:e}):this.$router.push({name:t}))},goToPath:function(t){this.$router.push({path:t})},goToBack:function(){this.$router.go(-1)}}};e["a"]=a},"324b":function(t,e,r){},"57f2":function(t,e,r){},"5ff8":function(t,e,r){"use strict";r("a15b"),r("13d5"),r("26e9"),r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("466d"),r("5319"),r("1276");var a={methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){return t?(t=t.replace("R$ ",""),t=t.split(".").join(""),t=t.split(",").join("."),t):t},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),r=0,a=e.reduce((function(t,e){return r++,3==r?t=","+t:r%3===0&&(t="."+t),String(e)+String(t)}),"");return a},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),this.removeAccents(t)):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?t.match(/\d+/g).join(""):t}}};e["a"]=a},7328:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("barbershop")},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.barbershops.length>0?r("v-row",{staticClass:"barbearias"},t._l(t.barbershops,(function(t,e){return r("v-col",{key:e,staticClass:"py-0 barbearia-item",attrs:{cols:"6",md:"4",xl:"3"}},[r("barbershop-item",{staticClass:"d-block my-2 my-sm-4",attrs:{barbershop:t}})],1)})),1):r("div",{staticClass:"d-flex justify-center align-center barbershop-empty"},[r("p",[t._v(" Nenhuma barbearia encontrada. ")])])],1)},n=[],i=r("be3b"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"barbershop-item-box"},[r("div",{staticClass:"barbershop-item app-border-radius-small elevation-1"},[r("header",{staticClass:"primaryLight"},[t.barbershop.image_url?r("img",{staticClass:"absolute-centering",attrs:{src:t.imageUrl}}):r("span",{staticClass:"sem-imagem"},[t._v(" Nenhuma imagem cadastrada ")]),t._e()],1),r("div",{staticClass:"barbershop-item-content primaryDark pa-4"},[r("h1",{staticClass:"barbershop-item-titulo font-weight-bold"},[t._v(" "+t._s(t.barbershop.name)+" ")]),t._m(0),r("p",{staticClass:"barbershop-item-endereco ma-0 mt-2"},[r("v-icon",{staticClass:"mb-1 mr-2"},[t._v("place")]),t.barbershop.address?r("span",[t._v(" "+t._s(t.barbershop.address.neighborhood)+" - "+t._s(t.barbershop.address.city)+" ")]):r("span",[t._v("Nenhum endereço cadastrado")])],1),r("p",{staticClass:"barbershop-item-telefone ma-0 mt-2"},[r("v-icon",{staticClass:"mb-1 mr-2"},[t._v("phone")]),t.barbershop.phone_number?r("span",[t._v(" "+t._s(t.phoneNumber)+" ")]):r("span",[t._v(" Nenhum telefone cadastrado ")])],1),r("btn-confirm",{staticClass:"mt-8 mx-auto",attrs:{text:"Agendar",cssClass:"text-uppercase",icon:"event_available",block:!0},on:{clicked:function(e){return t.goToDetails()}}})],1)])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-2"},[r("hr")])}],u=(r("99af"),r("b0c0"),r("96f9")),b=r("2ce5"),p=r("5ff8"),h={name:"BarbershopItem",components:{BtnConfirm:u["a"]},mixins:[b["a"],p["a"]],props:{barbershop:null},computed:{imageUrl:function(){return this.$url_backend+this.barbershop.image_url},phoneNumber:function(){return this.setPhoneMask(this.barbershop.phone_number)}},methods:{goToDetails:function(){var t=this.formatTextToUrl(this.barbershop.name),e="barbearia/".concat(this.barbershop.id,"/").concat(t);this.goToPath(e)}}},d=h,f=(r("1c5b"),r("2877")),m=r("6544"),v=r.n(m),g=r("132d"),y=Object(f["a"])(d,c,l,!1,null,"6346835a",null),j=y.exports;v()(y,{VIcon:g["a"]});var k=r("06aa"),_={name:"Barbershop",components:{BarbershopItem:j},mixins:[k["a"]],data:function(){return{barbershops:[]}},mounted:function(){this.getBarbershop()},methods:{getBarbershop:function(){var t=this;this.showLoader(),i["a"].get("/barbershop").then((function(e){200===e.data.codigo?t.onGetBarbershopSuccess(e.data.corpo):t.onGetBarbershopError()})).catch((function(e){t.onGetBarbershopError(),window.console.error(e)}))},onGetBarbershopSuccess:function(t){this.barbershops=t,this.hideLoader()},onGetBarbershopError:function(){this.barbershops=[],this.hideLoader()}}},C=_,w=(r("ce90"),r("62ad")),O=r("0fd9"),$=Object(f["a"])(C,o,n,!1,null,"411495b6",null),x=$.exports;v()($,{VCol:w["a"],VRow:O["a"]});var L={name:"home",components:{Barbershop:x}},P=L,S=Object(f["a"])(P,a,s,!1,null,null,null);e["default"]=S.exports},"96f9":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{staticClass:"btn-confirm py-3 text-capitalize font-weight-bold",class:t.cssClass,attrs:{color:"secondary",height:"auto",block:t.block,disabled:t.disabled},on:{click:t.clicked}},[t.loading?[r("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[t.icon?r("v-icon",{staticClass:"mr-1"},[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._v(" "+t._s(t.text)+" ")]],2)},s=[],o={name:"BtnConfirm",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:""},loading:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},n=o,i=(r("2adc"),r("2877")),c=r("6544"),l=r.n(c),u=r("8336"),b=r("132d"),p=r("490a"),h=Object(i["a"])(n,a,s,!1,null,"9c7e9870",null);e["a"]=h.exports;l()(h,{VBtn:u["a"],VIcon:b["a"],VProgressCircular:p["a"]})},ce90:function(t,e,r){"use strict";var a=r("324b"),s=r.n(a);s.a},d28b:function(t,e,r){var a=r("746f");a("iterator")},d9f7:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("498a"),r("159b"),r("ddb0");var a=r("2fa7"),s=r("e587"),o=r("80d2");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function l(t){var e={},r=!0,a=!1,n=void 0;try{for(var i,l=t.split(c.styleList)[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var u=i.value,b=u.split(c.styleProp),p=Object(s["a"])(b,2),h=p[0],d=p[1];h=h.trim(),h&&("string"===typeof d&&(d=d.trim()),e[Object(o["c"])(h)]=d)}}catch(f){a=!0,n=f}finally{try{r||null==l.return||l.return()}finally{if(a)throw n}}return e}function u(){var t,e,r={},a=arguments.length;while(a--)for(var s=0,o=Object.keys(arguments[a]);s<o.length;s++)switch(t=o[s],t){case"class":case"style":case"directives":if(!arguments[a][t])break;if(Array.isArray(r[t])||(r[t]=[]),"style"===t){var n=void 0;n=Array.isArray(arguments[a].style)?arguments[a].style:[arguments[a].style];for(var c=0;c<n.length;c++){var u=n[c];"string"===typeof u&&(n[c]=l(u))}arguments[a].style=n}r[t]=r[t].concat(arguments[a][t]);break;case"staticClass":if(!arguments[a][t])break;void 0===r[t]&&(r[t]=""),r[t]&&(r[t]+=" "),r[t]+=arguments[a][t].trim();break;case"on":case"nativeOn":if(!arguments[a][t])break;r[t]||(r[t]={});for(var b=r[t],p=0,h=Object.keys(arguments[a][t]||{});p<h.length;p++)e=h[p],b[e]?b[e]=Array().concat(b[e],arguments[a][t][e]):b[e]=arguments[a][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[a][t])break;r[t]||(r[t]={}),r[t]=i({},arguments[a][t],{},r[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:r[t]||(r[t]=arguments[a][t])}return r}}}]);
//# sourceMappingURL=chunk-203718aa.3eb0ea46.js.map