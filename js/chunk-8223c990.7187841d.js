(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8223c990"],{"06aa":function(t,e,r){"use strict";e["a"]={computed:{isLoading:function(){return this.$store.getters["LoaderStore/isLoading"]}},methods:{showLoader:function(){this.$store.dispatch("LoaderStore/setLoader",!0)},hideLoader:function(){this.$store.dispatch("LoaderStore/setLoader",!1)}}}},"1c5b":function(t,e,r){"use strict";var s=r("284e"),a=r.n(s);a.a},"26e9":function(t,e,r){"use strict";var s=r("23e7"),a=r("e8b5"),o=[].reverse,n=[1,2];s({target:"Array",proto:!0,forced:String(n)===String(n.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),o.call(this)}})},"284e":function(t,e,r){},"2adc":function(t,e,r){"use strict";var s=r("57f2"),a=r.n(s);a.a},"2ce5":function(t,e,r){"use strict";r("b0c0");var s={methods:{goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.$route.name;t!=r&&(e?this.$router.push({name:t,params:e}):this.$router.push({name:t}))},goToPath:function(t){this.$router.push({path:t})},goToBack:function(){this.$router.go(-1)}}};e["a"]=s},"324b":function(t,e,r){},"57f2":function(t,e,r){},"5ff8":function(t,e,r){"use strict";r("a15b"),r("13d5"),r("26e9"),r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("466d"),r("5319"),r("1276");var s={methods:{removeMask:function(t){return t?t.match(/\d+/g).join(""):""},removeMoneyMask:function(t){return t?(t=t.replace("R$ ",""),t=t.split(".").join(""),t=t.split(",").join("."),t):t},setCepMask:function(t){return t?t.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):t},setPhoneMask:function(t){return t?t.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(t){if(!t)return t;t=t.toString(),t=t.split(" ").join(""),t=t.split("R$").join(""),t=t.split(".").join("");var e=t.split("").reverse(),r=0,s=e.reduce((function(t,e){return r++,3==r?t=","+t:r%3===0&&(t="."+t),String(e)+String(t)}),"");return s},formatTextToUrl:function(t){return t?(t=t.toLowerCase(),t=t.split(" ").join("-"),this.removeAccents(t)):t},removeAccents:function(t){return t?(t=t.split("á").join("a"),t=t.split("à").join("a"),t=t.split("ã").join("a"),t=t.split("â").join("a"),t=t.split("é").join("e"),t=t.split("è").join("e"),t=t.split("ê").join("e"),t=t.split("í").join("i"),t=t.split("ì").join("i"),t=t.split("î").join("i"),t=t.split("ó").join("o"),t=t.split("ò").join("o"),t=t.split("õ").join("o"),t=t.split("ô").join("o"),t=t.split("ú").join("u"),t=t.split("ù").join("u"),t=t.split("û").join("u"),t=t.split("ç").join("c"),t):t},removeSimbols:function(t){return t?t.match(/\d+/g).join(""):t}}};e["a"]=s},7328:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("barbershop")},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.barbershops.length>0?r("v-row",{staticClass:"barbearias"},t._l(t.barbershops,(function(t,e){return r("v-col",{key:e,staticClass:"py-0 barbearia-item",attrs:{cols:"6",md:"4",xl:"3"}},[r("barbershop-item",{staticClass:"d-block my-2 my-sm-4",attrs:{barbershop:t}})],1)})),1):r("div",{staticClass:"d-flex justify-center align-center barbershop-empty"},[r("p",[t._v(" Nenhuma barbearia encontrada. ")])])],1)},n=[],i=r("be3b"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"barbershop-item-box"},[r("div",{staticClass:"barbershop-item app-border-radius-small elevation-1"},[r("header",{staticClass:"primaryLight"},[t.barbershop.image_url?r("img",{staticClass:"absolute-centering",attrs:{src:t.imageUrl}}):r("span",{staticClass:"sem-imagem"},[t._v(" Nenhuma imagem cadastrada ")]),t._e()],1),r("div",{staticClass:"barbershop-item-content primaryDark pa-4"},[r("h1",{staticClass:"barbershop-item-titulo font-weight-bold"},[t._v(" "+t._s(t.barbershop.name)+" ")]),t._m(0),r("p",{staticClass:"barbershop-item-endereco ma-0 mt-2"},[r("v-icon",{staticClass:"mb-1 mr-2"},[t._v("place")]),t.barbershop.address?r("span",[t._v(" "+t._s(t.barbershop.address.neighborhood)+" - "+t._s(t.barbershop.address.city)+" ")]):r("span",[t._v("Nenhum endereço cadastrado")])],1),r("p",{staticClass:"barbershop-item-telefone ma-0 mt-2"},[r("v-icon",{staticClass:"mb-1 mr-2"},[t._v("phone")]),t.barbershop.phone_number?r("span",[t._v(" "+t._s(t.phoneNumber)+" ")]):r("span",[t._v(" Nenhum telefone cadastrado ")])],1),r("btn-confirm",{staticClass:"mt-8 mx-auto",attrs:{text:"Agendar",cssClass:"text-uppercase",icon:"event_available",block:!0},on:{clicked:function(e){return t.goToDetails()}}})],1)])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-2"},[r("hr")])}],u=(r("99af"),r("b0c0"),r("96f9")),h=r("2ce5"),p=r("5ff8"),b={name:"BarbershopItem",components:{BtnConfirm:u["a"]},mixins:[h["a"],p["a"]],props:{barbershop:null},computed:{imageUrl:function(){return this.$url_backend+this.barbershop.image_url},phoneNumber:function(){return this.setPhoneMask(this.barbershop.phone_number)}},methods:{goToDetails:function(){var t=this.formatTextToUrl(this.barbershop.name),e="barbearia/".concat(this.barbershop.id,"/").concat(t);this.goToPath(e)}}},d=b,m=(r("1c5b"),r("2877")),f=r("6544"),v=r.n(f),g=r("132d"),_=Object(m["a"])(d,c,l,!1,null,"6346835a",null),j=_.exports;v()(_,{VIcon:g["a"]});var C=r("06aa"),k={name:"Barbershop",components:{BarbershopItem:j},mixins:[C["a"]],data:function(){return{barbershops:[]}},mounted:function(){this.getBarbershop()},methods:{getBarbershop:function(){var t=this;this.showLoader(),i["a"].get("/barbershop").then((function(e){200===e.data.codigo?t.onGetBarbershopSuccess(e.data.corpo):t.onGetBarbershopError()})).catch((function(e){t.onGetBarbershopError(),window.console.error(e)}))},onGetBarbershopSuccess:function(t){this.barbershops=t,this.hideLoader()},onGetBarbershopError:function(){this.barbershops=[],this.hideLoader()}}},$=k,x=(r("ce90"),r("62ad")),w=r("0fd9"),y=Object(m["a"])($,o,n,!1,null,"411495b6",null),B=y.exports;v()(y,{VCol:x["a"],VRow:w["a"]});var L={name:"home",components:{Barbershop:B}},S=L,T=Object(m["a"])(S,s,a,!1,null,null,null);e["default"]=T.exports},"96f9":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{staticClass:"btn-confirm py-3 text-capitalize font-weight-bold",class:t.cssClass,attrs:{color:"secondary",height:"auto",block:t.block,disabled:t.disabled},on:{click:t.clicked}},[t.loading?[r("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[t.icon?r("v-icon",{staticClass:"mr-1"},[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._v(" "+t._s(t.text)+" ")]],2)},a=[],o={name:"BtnConfirm",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:""},loading:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},n=o,i=(r("2adc"),r("2877")),c=r("6544"),l=r.n(c),u=r("8336"),h=r("132d"),p=r("490a"),b=Object(i["a"])(n,s,a,!1,null,"9c7e9870",null);e["a"]=b.exports;l()(b,{VBtn:u["a"],VIcon:h["a"],VProgressCircular:p["a"]})},ce90:function(t,e,r){"use strict";var s=r("324b"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-8223c990.7187841d.js.map