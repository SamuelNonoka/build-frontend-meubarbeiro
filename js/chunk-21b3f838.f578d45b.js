(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21b3f838"],{"0481":function(e,t,n){"use strict";var r=n("23e7"),a=n("a2bf"),i=n("7b0b"),o=n("50c4"),s=n("a691"),l=n("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),n=o(t.length),r=l(t,0);return r.length=a(r,t,t,n,0,void 0===e?1:s(e)),r}})},"0789":function(e,t,n){"use strict";n("99af");var r=n("d9f7");function a(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return(e=Array()).concat.apply(e,[t].concat(r))}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render:function(t,n){var i="transition".concat(n.props.group?"-group":""),o={props:{name:e,mode:n.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=a(o.on.leave,(function(e){return e.style.position="absolute"}))),n.props.hideOnLeave&&(o.on.leave=a(o.on.leave,(function(e){return e.style.display="none"}))),t(i,Object(r["a"])(n.data,o),n.children)}}}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:n}},render:function(n,a){return n("transition",Object(r["a"])(a.data,{props:{name:e},on:t}),a.children)}}}var s=n("2fa7"),l=n("80d2"),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"width":"height",r="offset".concat(Object(l["D"])(n));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(s["a"])({transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow},n,e.style[n])},enter:function(t){var a=t._initialStyle,i="".concat(t[r],"px");t.style.setProperty("transition","none","important"),t.style.visibility="hidden",t.style.visibility=a.visibility,t.style.overflow="hidden",t.style[n]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((function(){t.style[n]=i}))},afterEnter:i,enterCancelled:i,leave:function(e){e._initialStyle=Object(s["a"])({transition:"",visibility:"",overflow:e.style.overflow},n,e.style[n]),e.style.overflow="hidden",e.style[n]="".concat(e[r],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[n]="0"}))},afterLeave:a,leaveCancelled:a};function a(t){e&&t._parent&&t._parent.classList.remove(e),i(t)}function i(e){var t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}};n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return v})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));i("carousel-transition"),i("carousel-reverse-transition");var u=i("tab-transition"),d=i("tab-reverse-transition"),f=(i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("fade-transition")),p=i("scale-transition"),v=(i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),h=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),o("expand-transition",c())),b=o("expand-x-transition",c("",!0))},"26e9":function(e,t,n){"use strict";var r=n("23e7"),a=n("e8b5"),i=[].reverse,o=[1,2];r({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),i.call(this)}})},"2c3c":function(e,t,n){"use strict";var r={methods:{focusToNext:function(e){this.$refs[e].focus()},setData:function(e,t){return this.$data[t]=e}}};t["a"]=r},"2ce5":function(e,t,n){"use strict";n("b0c0");var r={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=this.$route.name;e!=n&&(t?this.$router.push({name:e,params:t}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};t["a"]=r},"39db":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"font-weight-medium text-none py-3",attrs:{height:"auto",block:e.block,disabled:e.disabled,dark:e.dark,text:""},on:{click:e.clicked}},[e.icon?n("v-icon",[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" "),e.appendIcon?n("v-icon",[e._v(" "+e._s(e.appendIcon)+" ")]):e._e()],1)},a=[],i={name:"BtnText",props:{block:{default:!0},dark:{default:!1},disabled:{default:!1},text:{required:!0},icon:{default:null},appendIcon:{default:""}},methods:{clicked:function(){this.$emit("clicked")}}},o=i,s=n("2877"),l=n("6544"),c=n.n(l),u=n("8336"),d=n("132d"),f=Object(s["a"])(o,r,a,!1,null,null,null);t["a"]=f.exports;c()(f,{VBtn:u["a"],VIcon:d["a"]})},"3b11":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",{ref:e.id,attrs:{id:e.id,dark:e.dark,value:e.valueModel,label:e.label,disabled:e.disabled,rules:e.rules,"hide-details":e.hideDetails,counter:e.counter,placeholder:e.placeholder,outlined:e.outlined,dense:e.dense,color:e.success?"success":"primary",type:e.type,solo:e.solo,success:e.success,name:e.id,"validate-on-blur":"",required:""},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyUpEnter(t)},e.onKeyUp,function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)}],input:e.onInput},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[n("v-icon",{staticClass:"material-icons-outlined",class:e.success?"success--text":"",attrs:{dense:""}},[e._v(" "+e._s(e.icon)+" ")])]},proxy:!0}]),model:{value:e.valueModel,callback:function(t){e.valueModel=t},expression:"valueModel"}})},a=[],i={name:"InputField",props:{solo:{default:!1},label:{required:!0},value:{default:""},disabled:{default:!1},counter:{default:null},dense:{default:!1},rules:{default:Array},id:{default:null},placeholder:{default:""},type:{default:null},icon:{default:null},outlined:{default:!1},dark:{default:!1},success:{default:null},hideDetails:{default:!1}},data:function(){return{valueModel:""}},mounted:function(){this.valueModel=this.value},watch:{value:function(e){this.valueModel=e}},methods:{onEnter:function(){this.$emit("onEnter",this.valueModel,this.id)},onKeyUp:function(){this.$emit("onKeyUp",this.valueModel,this.id)},onKeyUpEnter:function(){this.$emit("onKeyUpEnter",this.valueModel,this.id)},onInput:function(){var e=this;this.id&&setTimeout((function(){var t=document.querySelector("#".concat(e.id));t.value=e.valueModel}),100)}}},o=i,s=n("2877"),l=n("6544"),c=n.n(l),u=n("132d"),d=n("8654"),f=Object(s["a"])(o,r,a,!1,null,null,null);t["a"]=f.exports;c()(f,{VIcon:u["a"],VTextField:d["a"]})},4069:function(e,t,n){var r=n("44d2");r("flat")},"578e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile gray2"},[n("div",{staticClass:"container"},[n("div",{staticClass:"elevation-1 card"},[e._m(0),e._t("default")],2)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/logo_preto_branco.png"}})])}],i={name:"ProfileTemplate"},o=i,s=(n("e20e"),n("2877")),l=Object(s["a"])(o,r,a,!1,null,"5808c111",null);t["a"]=l.exports},"90a2":function(e,t,n){"use strict";n("7db0");var r=n("bf2d");function a(e,t){var n=t.modifiers||{},a=t.value,o="object"===Object(r["a"])(a),s=o?a.handler:a,l=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(e._observe){if(s&&(!n.quiet||e._observe.init)){var a=Boolean(t.find((function(e){return e.isIntersecting})));s(t,r,a)}e._observe.init&&n.once?i(e):e._observe.init=!0}}),a.options||{});e._observe={init:!1,observer:l},l.observe(e)}function i(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var o={inserted:a,unbind:i};t["a"]=o},"9b58":function(e,t,n){},"9d26":function(e,t,n){"use strict";var r=n("132d");t["a"]=r["a"]},a2bf:function(e,t,n){"use strict";var r=n("e8b5"),a=n("50c4"),i=n("f8c2"),o=function(e,t,n,s,l,c,u,d){var f,p=l,v=0,h=!!u&&i(u,d,3);while(v<s){if(v in n){if(f=h?h(n[v],v,t):n[v],c>0&&r(f))p=o(e,t,f,a(f.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=f}p++}v++}return p};e.exports=o},a452:function(e,t,n){"use strict";var r=n("2fa7"),a=n("2b0e");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:e,event:t},props:Object(r["a"])({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:Object(r["a"])({},e,(function(e){this.internalLazyValue=e}))})}var o=i();t["a"]=o},aab4:function(e,t,n){"use strict";var r=n("9b58"),a=n.n(r);a.a},b3b9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("profile-template",[n("div",{staticClass:"mt-12"},[n("input-field",{ref:"password",attrs:{id:"password",label:"Digite sua nova senha",type:"password",icon:"lock",success:e.isPasswordValid(e.password),rules:e.passwordRules},on:{onKeyUp:e.onKeyUp,onKeyUpEnter:function(t){return e.focusToNext("confirmPassword")}}}),n("input-field",{ref:"confirmPassword",attrs:{id:"confirmPassword",label:"Confirme a senha",type:"password",icon:"lock",success:e.isPasswordValid(e.confirmPassword)&&e.confirmPassword===e.password,rules:e.confirmPasswordRules},on:{onKeyUp:e.onKeyUp}})],1),n("div",{staticClass:"mt-8 mb-4 mx-sm-12 text-center"},[n("btn-secondary",{attrs:{text:"Salvar",dark:"",disabled:e.btnDisabled,loading:e.loading},on:{clicked:e.save}}),n("btn-text",{staticClass:"mt-4",attrs:{text:"Cancelar"},on:{clicked:e.goToBack}})],1)])},a=[],i=n("e7e3"),o=n("39db"),s=n("3b11"),l=n("578e"),c=n("2c3c"),u=n("2ce5"),d=n("5988"),f=n("be1f"),p={name:"ChangePasword",components:{BtnSecondary:i["a"],BtnText:o["a"],InputField:s["a"],ProfileTemplate:l["a"]},mixins:[c["a"],u["a"],d["a"],f["a"]],data:function(e){return{loading:!1,password:null,confirmPassword:null,confirmPasswordRules:[function(t){return t===e.password||"Senha diferente da informada."}]}},computed:{btnDisabled:function(){return!this.password||!this.confirmPassword||this.password!==this.confirmPassword||this.password.length<6}},methods:{onKeyUp:function(e,t){this.$data[t]=e},save:function(){var e=this;this.loading=!0,this.$axios.post("user/change-password",{password:this.password}).then((function(t){200===t.data.codigo?(e.showSnackbar("Senha alterada com sucesso!"),e.goToBack()):e.setErro(t.data.corpo)})).catch((function(){return e.setErro("Não foi possível alterar a senha!")}))},setErro:function(e){this.loading=!1,this.showSnackbarErro(e)}}},v=p,h=n("2877"),b=Object(h["a"])(v,r,a,!1,null,null,null);t["default"]=b.exports},ba86:function(e,t,n){},be1f:function(e,t,n){"use strict";var r={data:function(){return{nameRules:[function(e){return!!e||"Preencha o campo"},function(e){return!e||e.length<=50||"Este campo deve ter no máximo 50 dígitos"}],emailRules:[function(e){return!!e||"Informe o e-mail"},function(e){return!e||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Informe um e-mail válido"}],passwordRules:[function(e){return!!e||"Informe a senha"},function(e){return!e||e.length>=6||"A senha precisa ter pelo meno 6 dígitos"},function(e){return!e||e.length<=10||"A senha deve ter no máximo 10 dígitos"}]}},methods:{isEmailValid:function(e){if(!e)return!1;var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!t.test(e)},isPhoneNumberValid:function(e){return e&&(15===e.length||16==e.length)},isPasswordValid:function(e){return!!e&&!(e.length<6||e.length>10)},isNameValid:function(e){return!(!e||e.length>50)}}};t["a"]=r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d9f7:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("498a"),n("159b"),n("ddb0");var r=n("2fa7"),a=n("e587"),i=n("80d2");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(e){var t={},n=!0,r=!1,o=void 0;try{for(var s,c=e.split(l.styleList)[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var u=s.value,d=u.split(l.styleProp),f=Object(a["a"])(d,2),p=f[0],v=f[1];p=p.trim(),p&&("string"===typeof v&&(v=v.trim()),t[Object(i["c"])(p)]=v)}}catch(h){r=!0,o=h}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return t}function u(){var e,t,n={},r=arguments.length;while(r--)for(var a=0,i=Object.keys(arguments[r]);a<i.length;a++)switch(e=i[a],e){case"class":case"style":case"directives":if(!arguments[r][e])break;if(Array.isArray(n[e])||(n[e]=[]),"style"===e){var o=void 0;o=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style];for(var l=0;l<o.length;l++){var u=o[l];"string"===typeof u&&(o[l]=c(u))}arguments[r].style=o}n[e]=n[e].concat(arguments[r][e]);break;case"staticClass":if(!arguments[r][e])break;void 0===n[e]&&(n[e]=""),n[e]&&(n[e]+=" "),n[e]+=arguments[r][e].trim();break;case"on":case"nativeOn":if(!arguments[r][e])break;n[e]||(n[e]={});for(var d=n[e],f=0,p=Object.keys(arguments[r][e]||{});f<p.length;f++)t=p[f],d[t]?d[t]=Array().concat(d[t],arguments[r][e][t]):d[t]=arguments[r][e][t];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[r][e])break;n[e]||(n[e]={}),n[e]=s({},arguments[r][e],{},n[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[e]||(n[e]=arguments[r][e])}return n}},e20e:function(e,t,n){"use strict";var r=n("ba86"),a=n.n(r);a.a},e7e3:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"success text-capitalize btn py-4 px-8 elevation-0",class:e.cssClass,attrs:{height:"auto",block:e.block,disabled:e.disabled},on:{click:e.clicked}},[e.loading?[n("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[e.icon?n("v-icon",{staticClass:"mr-1"},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" ")]],2)},a=[],i={name:"BtnSecondary",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:"py-3"},loading:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},o=i,s=(n("aab4"),n("2877")),l=n("6544"),c=n.n(l),u=n("8336"),d=n("132d"),f=n("490a"),p=Object(s["a"])(o,r,a,!1,null,"290d650c",null);t["a"]=p.exports;c()(p,{VBtn:u["a"],VIcon:d["a"],VProgressCircular:f["a"]})}}]);
//# sourceMappingURL=chunk-21b3f838.f578d45b.js.map