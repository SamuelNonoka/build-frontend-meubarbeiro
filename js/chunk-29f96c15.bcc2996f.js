(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29f96c15","chunk-4fe603f4"],{"09ba":function(e,t,r){"use strict";var a=r("be3b"),n=r("2ce5"),i={mixins:[n["a"]],computed:{barber:function(){return this.$store.getters["BarberStore/barber"]},barberState:function(){return this.$store.getters["BarberStore/barber"]}},methods:{getBarber:function(){return this.$store.getters["BarberStore/barber"]},getBarberByBarbershopIdOnService:function(e){var t=this;a["a"].get("/barbershop/".concat(e,"/barber?status=ativo")).then((function(e){200===e.data.codigo?t.onGetBarberByBarbershopIdOnServiceSuccess(e.data.corpo):t.onGetBarberByBarbershopIdOnServiceError(e.data.corpo)})).catch((function(e){t.onGetBarberByBarbershopIdOnServiceError("Não foi possível recuperar os dados da barbearia!"),window.console.log(e)}))},onGetBarberByBarbershopIdOnServiceError:function(e){window.console.log(e)},onGetBarberByBarbershopIdOnServiceSuccess:function(e){window.console.log(JSON.stringify(e))},getToken:function(){return this.$store.getters["BarberStore/payloadToken"]},isAutenticated:function(){return this.$store.getters["BarberStore/tokenValido"]},logout:function(){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("BarbershopStore/logout"),localStorage.routePathAdmin="",this.goTo("login-barber")},storeBarber:function(e){this.$store.dispatch("UserStore/logout"),this.$store.dispatch("BarberStore/autenticar",e)}}};t["a"]=i},"17b3":function(e,t,r){},"20f6":function(e,t,r){},"232d":function(e,t,r){"use strict";t["a"]={methods:{getBarberStatusTextByStatusId:function(e){window.console.log("getBarberStatusTextByStatusId");var t=this.$BARBER_STATUS,r="";switch(e){case t.AGUARDANDO_CADASTRO:r="Aguardando cadastro";break;case t.ATIVO:r="Ativo";break;case t.BLOQUEADO:r="Bloqueado";break;default:break}return r}}}},"26e9":function(e,t,r){"use strict";var a=r("23e7"),n=r("e8b5"),i=[].reverse,o=[1,2];a({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),i.call(this)}})},"2a9f":function(e,t,r){},"2ce5":function(e,t,r){"use strict";r("b0c0");var a={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.$route.name;e!=r&&(t?this.$router.push({name:e,params:t}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};t["a"]=a},"2fa4":function(e,t,r){"use strict";r("20f6");var a=r("80d2");t["a"]=Object(a["i"])("spacer","div","v-spacer")},3003:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.dialog?r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{staticClass:"confirm-dialog",attrs:{light:""}},[r("div",{staticClass:"px-4 pt-2"},[r("v-row",[r("v-col",{staticClass:"py-0"},[r("v-card-title",{staticClass:"headline pa-0"},[e._v(" "+e._s(e.title)+" ")])],1),r("v-col",{staticClass:"text-right py-0",attrs:{cols:"auto"}},[r("v-btn",{staticClass:"px-0",attrs:{"min-width":20,text:""},on:{click:function(t){return e.send("cancel")}}},[r("v-icon",[e._v("close")])],1)],1)],1)],1),e.description?r("v-card-text",[e._v(" "+e._s(e.description)+" ")]):e._e(),r("v-card-text",{staticClass:"pt-2 pb-0"},[e._t("default")],2),r("v-card-actions",{staticClass:"px-4 pb-4"},[r("v-row",[r("v-spacer"),r("v-col",{staticClass:"text-center pa-0",attrs:{cols:"12",sm:"auto"}},[r("btn",{staticClass:"btn-confirm",attrs:{block:!1,disabled:e.btnDisabled,text:"Confirmar"},on:{clicked:function(t){return e.send("confirm")}}})],1),r("v-col",{staticClass:"text-center py-0 pt-2 pt-sm-0",attrs:{cols:"12",sm:"auto"}},[r("btn-text",{staticClass:"btn-cancel",attrs:{block:!1,text:"Cancelar"},on:{clicked:function(t){return e.send("cancel")}}})],1)],1)],1)],1)],1)],1):e._e()},n=[],i=r("e7e3"),o=r("39db"),s={name:"Default",components:{Btn:i["a"],BtnText:o["a"]},props:{btnDisabled:{default:!1},title:{required:!0},description:{required:!1},danger:{default:!1}},data:function(){return{dialog:!1}},methods:{send:function(e){this.dialog=!1,this.$emit(e)},showDialog:function(){this.dialog=!0}}},l=s,c=r("2877"),u=r("6544"),d=r.n(u),v=r("8336"),h=r("b0af"),f=r("99d9"),b=r("62ad"),p=r("169a"),m=r("132d"),g=r("0fd9"),y=r("2fa4"),x=Object(c["a"])(l,a,n,!1,null,null,null);t["a"]=x.exports;d()(x,{VBtn:v["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:b["a"],VDialog:p["a"],VIcon:m["a"],VRow:g["a"],VSpacer:y["a"]})},"39db":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"font-weight-medium text-none py-3",attrs:{height:"auto",block:e.block,disabled:e.disabled,dark:e.dark,text:""},on:{click:e.clicked}},[e.icon?r("v-icon",[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" "),e.appendIcon?r("v-icon",[e._v(" "+e._s(e.appendIcon)+" ")]):e._e()],1)},n=[],i={name:"BtnText",props:{block:{default:!0},dark:{default:!1},disabled:{default:!1},text:{required:!0},icon:{default:null},appendIcon:{default:""}},methods:{clicked:function(){this.$emit("clicked")}}},o=i,s=r("2877"),l=r("6544"),c=r.n(l),u=r("8336"),d=r("132d"),v=Object(s["a"])(o,a,n,!1,null,null,null);t["a"]=v.exports;c()(v,{VBtn:u["a"],VIcon:d["a"]})},"3b11":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-text-field",{ref:e.id,attrs:{id:e.id,dark:e.dark,value:e.valueModel,label:e.label,disabled:e.disabled,rules:e.rules,"hide-details":e.hideDetails,counter:e.counter,placeholder:e.placeholder,outlined:e.outlined,dense:e.dense,color:e.success?"success":"primary",type:e.type,success:e.success,"validate-on-blur":"","aria-autocomplete":"false",autocomplete:"off",required:""},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyUpEnter(t)},e.onKeyUp,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)}]},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[r("v-icon",{staticClass:"material-icons-outlined",class:e.success?"success--text":"",attrs:{dense:""}},[e._v(" "+e._s(e.icon)+" ")])]},proxy:!0}]),model:{value:e.valueModel,callback:function(t){e.valueModel=t},expression:"valueModel"}})},n=[],i={name:"InputField",props:{label:{required:!0},value:{default:""},disabled:{default:!1},counter:{default:null},dense:{default:!1},rules:{default:Array},id:{default:null},placeholder:{default:""},type:{default:null},icon:{default:null},outlined:{default:!1},dark:{default:!1},success:{default:null},hideDetails:{default:!1}},data:function(){return{valueModel:""}},mounted:function(){this.valueModel=this.value},watch:{value:function(e){this.valueModel=e}},methods:{onEnter:function(){this.$emit("onEnter",this.valueModel,this.id)},onKeyUp:function(){this.$emit("onKeyUp",this.valueModel,this.id)},onKeyUpEnter:function(){this.$emit("onKeyUpEnter",this.valueModel,this.id)}}},o=i,s=r("2877"),l=r("6544"),c=r.n(l),u=r("132d"),d=r("8654"),v=Object(s["a"])(o,a,n,!1,null,null,null);t["a"]=v.exports;c()(v,{VIcon:u["a"],VTextField:d["a"]})},"3c93":function(e,t,r){},"5ff8":function(e,t,r){"use strict";r("a15b"),r("13d5"),r("26e9"),r("0d03"),r("d3b7"),r("ac1f"),r("25f0"),r("466d"),r("5319"),r("1276");var a={methods:{removeMask:function(e){return e?e.match(/\d+/g).join(""):""},removeMoneyMask:function(e){return e?(e=e.replace("R$ ",""),e=e.split(".").join(""),e=e.split(",").join("."),e):e},setCepMask:function(e){return e?e.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):e},setPhoneMask:function(e){return e?e.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4"):""},setMoneyMask:function(e){if(!e)return e;e=e.toString(),e=e.split(" ").join(""),e=e.split("R$").join(""),e=e.split(".").join("");var t=e.split("").reverse(),r=0,a=t.reduce((function(e,t){return r++,3==r?e=","+e:r%3===0&&(e="."+e),String(t)+String(e)}),"");return a},formatTextToUrl:function(e){return e?(e=e.toLowerCase(),e=e.split(" ").join("-"),this.removeAccents(e)):e},removeAccents:function(e){return e?(e=e.split("á").join("a"),e=e.split("à").join("a"),e=e.split("ã").join("a"),e=e.split("â").join("a"),e=e.split("é").join("e"),e=e.split("è").join("e"),e=e.split("ê").join("e"),e=e.split("í").join("i"),e=e.split("ì").join("i"),e=e.split("î").join("i"),e=e.split("ó").join("o"),e=e.split("ò").join("o"),e=e.split("õ").join("o"),e=e.split("ô").join("o"),e=e.split("ú").join("u"),e=e.split("ù").join("u"),e=e.split("û").join("u"),e=e.split("ç").join("c"),e):e},removeSimbols:function(e){return e?e.match(/\d+/g).join(""):e}}};t["a"]=a},6311:function(e,t,r){"use strict";var a=r("bfef"),n=r.n(a);n.a},"891e":function(e,t,r){"use strict";r("a4d3"),r("99af"),r("4de4"),r("4160"),r("d81d"),r("0d03"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("e25e"),r("25f0"),r("159b");var a=r("284c"),n=r("2fa7"),i=(r("17b3"),r("9d26")),o=r("dc22"),s=r("58df"),l=r("a9ad"),c=r("7560");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(s["a"])(l["a"],c["a"]).extend({name:"v-pagination",directives:{Resize:o["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(e){return e%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return d({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10),t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var r=t%2===0?1:0,n=Math.floor(t/2),i=this.length-n+1+r;if(this.value>n&&this.value<i){var o=this.value-n+2,s=this.value+n-2-r;return[1,"..."].concat(Object(a["a"])(this.range(o,s)),["...",this.length])}if(this.value===n){var l=this.value+n-1-r;return[].concat(Object(a["a"])(this.range(1,l)),["...",this.length])}if(this.value===i){var c=this.value-n+1;return[1,"..."].concat(Object(a["a"])(this.range(c,this.length)))}return[].concat(Object(a["a"])(this.range(1,n)),["..."],Object(a["a"])(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){var r=[];e=e>0?e:1;for(var a=e;a<=t;a++)r.push(a);return r},genIcon:function(e,t,r,a){return e("li",[e("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":r},attrs:{type:"button"},on:r?{}:{click:a}},[e(i["a"],[t])])])},genItem:function(e,t){var r=this,a=t===this.value&&(this.color||"primary");return e("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":t===this.value},attrs:{type:"button"},on:{click:function(){return r.$emit("input",t)}}}),[t.toString()])},genItems:function(e){var t=this;return this.items.map((function(r,a){return e("li",{key:a},[isNaN(Number(r))?e("span",{class:"v-pagination__more"},[r.toString()]):t.genItem(e,r)])}))}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}})},"8c08":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.overlay?r("div",{staticClass:"overlay",class:e.overlayVisible},[r("div",{staticClass:"overlay-content text-center"},[r("div",[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error&&e.icon&&!e.textLoaderSuccess,expression:"!loading && !error && icon && !textLoaderSuccess"}],attrs:{size:"80",color:"success"}},[e._v(" check_circle_outline ")]),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],attrs:{size:"80",color:"danger"}},[e._v(" error_outline ")]),r("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:"",size:"50",color:"primaryLight"}})],1),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"overlay-text"},[e._v(" "+e._s(e.textLoader)+" ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error,expression:"!loading && !error"}],staticClass:"overlay-text overlay-text-success successDark text-left"},[r("div",{staticClass:"icone"},[r("v-icon",[e._v("check")])],1),r("span",{staticClass:"ml-4 white--text"},[e._v(e._s(e.textLoaderSuccess))])]),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],staticClass:"overlay-text overlay-text-success",domProps:{innerHTML:e._s(e.textLoaderError)}})])]):e._e()},n=[],i={name:"Overlay",data:function(){return{overlay:!1,loading:!1,overlayVisible:"",textLoader:"",textLoaderSuccess:"",textLoaderError:"",error:!1,icon:!1}},methods:{showOverlay:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.textLoader=t||"Aguarde...",this.overlay=!0,this.loading=!0,setTimeout((function(){e.overlayVisible="visible"}),300)},hideOverlayError:function(e){this.error=!0,this.textLoaderError=e,this.hideOverlay(!0,!1)},hideOverlaySuccess:function(e){this.error=!1,this.textLoaderSuccess=e,this.hideOverlay(!0,!0)},hideOverlay:function(e,t){var r=this;this.icon=t,this.loading=!1,e?(setTimeout((function(){r.overlayVisible=""}),3e3),setTimeout((function(){r.error=!1,r.overlay=!1,r.loading=!1}),4e3)):(this.overlayVisible="",this.error=!1,this.overlay=!1,this.loading=!1)}}},o=i,s=(r("d588"),r("2877")),l=r("6544"),c=r.n(l),u=r("132d"),d=r("490a"),v=Object(s["a"])(o,a,n,!1,null,"c6454eae",null);t["a"]=v.exports;c()(v,{VIcon:u["a"],VProgressCircular:d["a"]})},"90a2":function(e,t,r){"use strict";r("7db0");var a=r("bf2d");function n(e,t){var r=t.modifiers||{},n=t.value,o="object"===Object(a["a"])(n),s=o?n.handler:n,l=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;if(e._observe){if(s&&(!r.quiet||e._observe.init)){var n=Boolean(t.find((function(e){return e.isIntersecting})));s(t,a,n)}e._observe.init&&r.once?i(e):e._observe.init=!0}}),n.options||{});e._observe={init:!1,observer:l},l.observe(e)}function i(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var o={inserted:n,unbind:i};t["a"]=o},9355:function(e,t,r){"use strict";var a=r("ae39"),n=r.n(a);n.a},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l}));var a=r("b0af"),n=r("80d2"),i=Object(n["i"])("v-card__actions"),o=Object(n["i"])("v-card__subtitle"),s=Object(n["i"])("v-card__text"),l=Object(n["i"])("v-card__title");a["a"]},"9d26":function(e,t,r){"use strict";var a=r("132d");t["a"]=a["a"]},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),i=r("a691"),o=r("50c4"),s=r("7b0b"),l=r("65f0"),c=r("8418"),u=r("1dde"),d=Math.max,v=Math.min,h=9007199254740991,f="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u("splice")},{splice:function(e,t){var r,a,u,b,p,m,g=s(this),y=o(g.length),x=n(e,y),_=arguments.length;if(0===_?r=a=0:1===_?(r=0,a=y-x):(r=_-2,a=v(d(i(t),0),y-x)),y+r-a>h)throw TypeError(f);for(u=l(g,a),b=0;b<a;b++)p=x+b,p in g&&c(u,b,g[p]);if(u.length=a,r<a){for(b=x;b<y-a;b++)p=b+a,m=b+r,p in g?g[m]=g[p]:delete g[m];for(b=y;b>y-a+r;b--)delete g[b-1]}else if(r>a)for(b=y-a;b>x;b--)p=b+a-1,m=b+r-1,p in g?g[m]=g[p]:delete g[m];for(b=0;b<r;b++)g[b+x]=arguments[b+2];return g.length=y-a+r,u}})},ae39:function(e,t,r){},af07:function(e,t,r){},be1f:function(e,t,r){"use strict";var a={data:function(){return{nameRules:[function(e){return!!e||"Informe o nome"},function(e){return!e||e.length<=50||"O nome deve ter no máximo 50 dígitos"}],emailRules:[function(e){return!!e||"Informe o e-mail"},function(e){return!e||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Informe um e-mail válido"}],passwordRules:[function(e){return!!e||"Informe a senha"},function(e){return!e||e.length>=6||"A senha precisa ter pelo meno 6 dígitos"},function(e){return!e||e.length<=10||"A senha deve ter no máximp 10 dígitos"}]}},methods:{isEmailValid:function(e){if(!e)return!1;var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!t.test(e)},isPhoneNumberValid:function(e){return e&&(15===e.length||16==e.length)},isPasswordValid:function(e){return!!e&&!(e.length<6||e.length>10)},isNameValid:function(e){return!(!e||e.length>50)}}};t["a"]=a},bfef:function(e,t,r){},c740:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").findIndex,i=r("44d2"),o="findIndex",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(o)},d588:function(e,t,r){"use strict";var a=r("af07"),n=r.n(a);n.a},d7b0:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"barber container pa-0"},[r("v-row",{staticClass:"mt-4"},[r("v-col",{attrs:{cols:"auto"}},[r("btn-secondary",{attrs:{text:"Adicionar",icon:"add"},on:{clicked:e.addBarber}})],1),r("v-spacer")],1),r("barber-requests"),r("dashboard-table",{staticClass:"mt-8",attrs:{headers:e.headers,items:e.items,loading:e.loading,noPagination:!0,title:"Barbeiros"},on:{blockBarber:e.blockBarber,unblockBarber:e.unblockBarber}}),r("register-barber-dialog",{ref:"registerBarberDialog"}),r("overlay",{ref:"overlay"})],1)},n=[],i=(r("c740"),r("d81d"),r("b0c0"),r("a9e3"),r("be3b")),o=r("e7e3"),s=r("dd16"),l=r("8c08"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("default-dialog",{ref:"dialog",attrs:{title:"Cadastrar Barbeiro",btnDisabled:e.btnDisabled},on:{confirm:e.register}},[r("input-field",{attrs:{id:"email",label:"Digite o e-mail do barbeiro","append-inner-icon":"check",rules:e.emailRules,icon:"check",required:""},on:{onKeyUp:e.setDataValue},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("overlay",{ref:"overlay"})],1)},u=[],d=r("3003"),v=r("3b11"),h=r("09ba"),f=r("5988"),b=r("d97b"),p=r("be1f"),m={name:"RegisterBarberDialog",components:{DefaultDialog:d["a"],InputField:v["a"],Overlay:l["a"]},mixins:[h["a"],f["a"],b["a"],p["a"]],data:function(){return{email:null}},computed:{btnDisabled:function(){return!this.isEmailValid(this.email)}},methods:{register:function(){var e=this;this.showOverlay("Enviando convite..."),i["a"].post("/barber/invitation",{email:this.email}).then((function(t){if(200===t.data.codigo){var r=t.data.corpo;e.hideOverlaySuccess(r),e.showSnackbar(r)}else e.setError(t.data.corpo)})).catch((function(t){window.console.log(t),e.setError("Não foi possível enviar o convite!")}))},showDialog:function(){this.text=null,this.$refs.dialog.showDialog()},setError:function(e){this.showSnackbarErro(e),this.hideOverlayError(e)},setDataValue:function(e,t){this.$data[t]=e}}},g=m,y=r("2877"),x=Object(y["a"])(g,c,u,!1,null,null,null),_=x.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.items.length>0?r("dashboard-table",{staticClass:"mt-8",attrs:{headers:e.headers,items:e.items,loading:e.loading,noPagination:!0,title:"Solicitações"},on:{approve:e.approve,reprove:e.reprove}}):e._e(),r("overlay",{ref:"overlay"})],1)},O=[],k=(r("99af"),r("a434"),{name:"BarberRequests",components:{DashboardTable:s["a"],Overlay:l["a"]},mixins:[h["a"],b["a"],f["a"]],data:function(){return{headers:[{text:"",value:"image",class:"text-center",type:"image"},{text:"Barbeiro",value:"name",class:"text-left"},{text:"E-mail",value:"email",class:"text-left"},{text:"Tipo",value:"status",class:"text-center"},{text:"#",value:"actions",type:"action",class:"text-center"}],items:[],loading:!0}},mounted:function(){this.getBarbers()},methods:{approve:function(e){var t=this;this.$refs.overlay.showOverlay("Aprovando..."),i["a"].post("/barbershop-request/".concat(e.id,"/approve")).then((function(r){if(200===r.data.codigo){t.$refs.overlay.hideOverlaySuccess("Barbeiro aprovado!");var a=t.items.findIndex((function(t){return t.id===e.id}));t.items.splice(a,1)}else t.setError(r.data.corpo)})).catch((function(){return t.setError("Não foi possível aprovar a solicitação!")}))},reprove:function(e){var t=this;this.$refs.overlay.showOverlay("Reprovando..."),i["a"].delete("/barbershop-request/".concat(e.id,"/reprove")).then((function(r){if(200===r.data.codigo){t.$refs.overlay.hideOverlaySuccess("Solicitação reprovada!");var a=t.items.findIndex((function(t){return t.id===e.id}));t.items.splice(a,1)}else t.setError(r.data.corpo)})).catch((function(){return t.setError("Não foi possível reprovar a solicitação!")}))},getBarbers:function(){var e=this;i["a"].get("/barbershop-request/barbershop/".concat(this.barber.barbershop_id)).then((function(t){200===t.data.codigo&&(e.items=t.data.corpo.map((function(e){return e.actions=[{icon:"check",text:"Aprovar",class:"success text-none",action:"approve"},{icon:"remove",text:"Reprovar",class:"danger text-none",action:"reprove"}],e.image=e.barber.profile,e.name=e.barber.name,e.email=e.barber.email,e.status="Aguardando aprovação",e}))),e.loading=!1})).catch((function(){return e.loading=!1}))},getUrl:function(e){return"".concat(this.$url_backend).concat(e)},setError:function(e){this.$refs.overlay.hideOverlay(),this.showSnackbarErro(e)}}}),B=k,S=(r("6311"),Object(y["a"])(B,w,O,!1,null,"29b5bf1a",null)),$=S.exports,E=r("232d"),C={name:"Barber",components:{BtnSecondary:o["a"],DashboardTable:s["a"],Overlay:l["a"],RegisterBarberDialog:_,BarberRequests:$},mixins:[h["a"],b["a"],f["a"],E["a"]],data:function(){return{dialogDescription:null,headers:[{text:"",value:"image",type:"image",class:"text-center"},{text:"Barbeiro",value:"name",class:"text-left"},{text:"Tipo",value:"status",class:"text-center"},{text:"#",value:"actions",type:"action",class:"text-center"}],items:[],loading:!1}},mounted:function(){this.getBarbers()},methods:{addBarber:function(){this.$refs.registerBarberDialog.showDialog()},blockBarber:function(e){var t=this,r=e.id;this.$refs.overlay.showOverlay("Aguardando..."),i["a"].post("/barber/block/".concat(r)).then((function(e){if(200===Number(e.data.codigo)){var a=t.items.findIndex((function(e){return Number(e.id)===Number(r)}));a>-1&&(t.items[a].status=t.getBarberStatusTextByStatusId(t.$BARBER_STATUS.BLOQUEADO),t.items[a].actions=[{icon:"lock_open",text:"Desbloquear",class:"gray2 text-none",action:"unblockBarber"}]),t.$refs.overlay.hideOverlaySuccess("Barbeiro bloqueado!")}else t.setError(e.data.corpo)})).catch((function(){return t.setError("Não foi possível bloquear o barbeiro!")}))},getBarbers:function(){var e=this;i["a"].get("/barber/by-barbershop").then((function(t){200===t.data.codigo?e.items=t.data.corpo.map((function(t){var r=[];return Number(t.status.id)===e.$BARBER_STATUS.ATIVO?Number(e.barber.id)!==Number(t.id)&&r.push({icon:"lock",text:"Bloquear",class:"success text-none",action:"blockBarber"}):r.push({icon:"lock_open",text:"Desbloquear",class:"gray2 text-none",action:"unblockBarber"}),t.image=t.image_url,t.actions=r,t.status=t.status.name,t})):e.setError(t.data.corpo)})).catch((function(){return e.setError("Não foi possível cadastrar a barbearia!")}))},setError:function(e){this.$refs.overlay.hideOverlay(),this.showSnackbarErro(e)},unblockBarber:function(e){var t=this,r=e.id;this.$refs.overlay.showOverlay("Aguardando..."),i["a"].post("/barber/unlock/".concat(r)).then((function(e){if(200===Number(e.data.codigo)){var a=t.items.findIndex((function(e){return Number(e.id)===Number(r)}));a>-1&&(t.items[a].status=t.getBarberStatusTextByStatusId(t.$BARBER_STATUS.BLOQUEADO),t.items[a].actions=[{icon:"lock",text:"Bloquear",class:"success text-none",action:"blockBarber"}]),t.$refs.overlay.hideOverlaySuccess("Barbeiro desbloqueado!")}else t.setError(e.data.corpo)})).catch((function(){return t.setError("Não foi possível desbloquear o barbeiro!")}))}}},j=C,I=r("6544"),A=r.n(I),T=r("62ad"),D=r("0fd9"),N=r("2fa4"),V=Object(y["a"])(j,a,n,!1,null,null,null);t["default"]=V.exports;A()(V,{VCol:T["a"],VRow:D["a"],VSpacer:N["a"]})},d97b:function(e,t,r){"use strict";var a={methods:{showOverlay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this;setTimeout((function(){t.$refs.overlay.showOverlay(e)}),1)},hideOverlaySuccess:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";setTimeout((function(){e.$refs.overlay.hideOverlaySuccess(t)}),1),t?setTimeout((function(){e.onOverlaySuccess(t)}),1e3):this.onOverlaySuccess()},hideOverlayError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$refs.overlay.hideOverlayError(e)},hideOverlay:function(){this.$refs.overlay.hideOverlay()},onOverlaySuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&window.console.log("onOverlaySuccess: "+e)}}};t["a"]=a},dc22:function(e,t,r){"use strict";function a(e,t){var r=t.value,a=t.options||{passive:!0};window.addEventListener("resize",r,a),e._onResize={callback:r,options:a},t.modifiers&&t.modifiers.quiet||r()}function n(e){if(e._onResize){var t=e._onResize,r=t.callback,a=t.options;window.removeEventListener("resize",r,a),delete e._onResize}}var i={inserted:a,unbind:n};t["a"]=i},dd16:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-table"},[r("div",{staticClass:"table-container"},[e.title?r("h1",{staticClass:"title py-2 px-4"},[e._v(" "+e._s(e.title)+" ")]):e._e(),r("table",{staticClass:"table"},[r("thead",[r("tr",e._l(e.headers,(function(t,a){return r("th",{key:a,staticClass:"py-4 px-2 font-weight-normal",class:t.class,attrs:{width:t.width}},[e._v(" "+e._s(t.text)+" ")])})),0),e.loading?r("tr",[r("th",{staticClass:"progress",attrs:{colspan:e.headers.length}},[r("v-progress-linear",{attrs:{indeterminate:""}})],1)]):e._e()]),r("tbody",[e._l(e.items,(function(t,a){return[r("tr",{key:a},e._l(e.headers,(function(a,n){return r("td",{key:n,staticClass:"py-2 px-4",class:a.class},["image"===a.type?[r("div",{staticClass:"image",style:{background:"url("+e.getImage(t[a.value])+")",backgroundSize:"contain"}})]:"list"===a.type?[r("ul",e._l(t[a.value],(function(t,a){return r("li",{attrs:{Key:a}},[e._v(" "+e._s(t)+" ")])})),0)]:"money"===a.type?[e._v(" R$ "+e._s(e.setMoneyMask(t[a.value]))+" ")]:"action"===a.type?e._l(t[a.value],(function(a,n){return r("v-btn",{key:n,staticClass:"actionButton my-3 my-sm-2 mx-1 elevation-xs-0 elevation-sm-1",class:a.class,attrs:{disabled:a.disabled},on:{click:function(r){return e.callAction(a.action,t)}}},[a.icon?r("v-icon",{staticClass:"mr-1",attrs:{small:""}},[e._v(e._s(a.icon))]):e._e(),e._v(e._s(a.text)+" ")],1)})):[e._v(" "+e._s(t[a.value])+" ")]],2)})),0),t.observation?r("tr",{key:t.id,staticClass:"d-none d-sm-table-row"},[r("td",{staticClass:"py-2 px-4 sem-borda",attrs:{colspan:e.headers.length}},[r("label",{staticClass:"font-weight-bold"},[e._v("Obs:")]),e._v(" "+e._s(t.observation)+" ")])]):e._e()]})),0===e.items.length?r("tr",[r("td",{staticClass:"pa-4 text-center",attrs:{colspan:e.headers.length}},[e.loading?e._e():r("span",[e._v(e._s(e.noResultText))])])]):e._e()],2)])]),e.noPagination?e._e():r("v-pagination",{staticClass:"mt-8",attrs:{length:e.qtdPages,"total-visible":8,color:"primary"},on:{input:e.changePage},model:{value:e.pageModel,callback:function(t){e.pageModel=t},expression:"pageModel"}})],1)},n=[],i=(r("99af"),r("5ff8")),o={name:"DashboardTable",mixins:[i["a"]],props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},loading:{default:!1},loadingText:{default:"Aguarde... carregando"},noPagination:{default:!1},noResultText:{default:"Nenhum registro encontrado"},page:{default:null},qtdPages:{default:null},title:{default:null}},data:function(){return{pageModel:null}},watch:{page:function(e){this.pageModel=e}},mounted:function(){this.pageModel=this.page},methods:{callAction:function(e,t){this.$emit("callAction",e,t),this.$emit(e,t)},changePage:function(e){this.$emit("changePage",e)},getImage:function(e){return"".concat(this.$url_backend).concat(e)}}},s=o,l=(r("ea24"),r("2877")),c=r("6544"),u=r.n(c),d=r("8336"),v=r("132d"),h=r("891e"),f=r("8e36"),b=Object(l["a"])(s,a,n,!1,null,"b07837a4",null);t["a"]=b.exports;u()(b,{VBtn:d["a"],VIcon:v["a"],VPagination:h["a"],VProgressLinear:f["a"]})},e707:function(e,t,r){"use strict";r("caad"),r("a9e3"),r("2532"),r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("2fa7"),n=(r("3c93"),r("a9ad")),i=r("7560"),o=r("f2e7"),s=r("58df");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=Object(s["a"])(n["a"],i["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return c({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),d=u,v=r("80d2"),h=r("2b0e");t["a"]=h["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new d({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(v["s"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(v["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[v["v"].up,v["v"].pageup],r=[v["v"].down,v["v"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!r.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),r=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var a=this.$refs.dialog,n=window.getSelection().anchorNode;return!(a&&this.hasScrollbar(a)&&this.isInside(n,a))||this.shouldScroll(a,r)}for(var i=0;i<t.length;i++){var o=t[i];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,r)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],r=e.target;while(r){if(t.push(r),"HTML"===r.tagName)return t.push(document),t.push(window),t;r=r.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(v["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},e7e3:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{staticClass:"success text-capitalize btn py-4 px-8 elevation-0",class:e.cssClass,attrs:{height:"auto",block:e.block,disabled:e.disabled},on:{click:e.clicked}},[e.loading?[r("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[e.icon?r("v-icon",{staticClass:"mr-1"},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" ")]],2)},n=[],i={name:"BtnSecondary",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:"py-3"},loading:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},o=i,s=(r("9355"),r("2877")),l=r("6544"),c=r.n(l),u=r("8336"),d=r("132d"),v=r("490a"),h=Object(s["a"])(o,a,n,!1,null,"3107b916",null);t["a"]=h.exports;c()(h,{VBtn:u["a"],VIcon:d["a"],VProgressCircular:v["a"]})},ea24:function(e,t,r){"use strict";var a=r("2a9f"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-29f96c15.bcc2996f.js.map