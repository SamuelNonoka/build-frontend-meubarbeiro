(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-becaaf96"],{"169a":function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("45fc"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("498a"),n("159b");var i=n("2fa7"),o=(n("368e"),n("480e")),a=n("4ad4"),s=n("b848"),r=n("75eb"),l=n("e707"),c=n("e4d3"),u=n("21be"),d=n("f2e7"),h=n("a293"),f=n("58df"),v=n("d9bd"),p=n("80d2");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=Object(f["a"])(a["a"],s["a"],r["a"],l["a"],c["a"],u["a"],d["a"]);t["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(i["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(i["a"])(e,"v-dialog--active",this.isActive),Object(i["a"])(e,"v-dialog--persistent",this.persistent),Object(i["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(i["a"])(e,"v-dialog--scrollable",this.scrollable),Object(i["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(v["d"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===p["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genTransition:function(){var e=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin}},this.showLazyContent((function(){return[e]}))):e},genContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(e.style={maxWidth:"none"===this.maxWidth?void 0:Object(p["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["f"])(this.width)}),this.$createElement("div",{class:this.contentClasses,attrs:b({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement("div",e,[this.$createElement(o["a"],{props:{root:!0,light:this.light,dark:this.dark}},this.getContentSlot())])])}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genTransition()])}})},"2c3c":function(e,t,n){"use strict";var i={methods:{focusToNext:function(e){document.querySelector("#".concat(e)).click()}}};t["a"]=i},"2fa4":function(e,t,n){"use strict";n("20f6");var i=n("80d2");t["a"]=Object(i["h"])("spacer","div","v-spacer")},"368e":function(e,t,n){},"3b11":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",{ref:e.id,attrs:{id:e.id,value:e.valueModel,label:e.label,disabled:e.disabled,rules:e.rules,counter:e.counter,hint:e.placeholder,type:e.type,"validate-on-blur":"","aria-autocomplete":"false",required:""},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onKeyUpEnter(t)},e.onKeyUp]},model:{value:e.valueModel,callback:function(t){e.valueModel=t},expression:"valueModel"}})},o=[],a={name:"InputField",props:{label:{required:!0},value:{default:""},disabled:{default:!1},counter:{default:null},rules:{default:Array},id:{default:null},placeholder:{default:""},type:{default:null}},data:function(){return{valueModel:""}},mounted:function(){this.valueModel=this.value},watch:{value:function(e){this.valueModel=e}},methods:{onKeyUp:function(){this.$emit("onKeyUp",this.valueModel,this.id)},onKeyUpEnter:function(){this.$emit("onKeyUpEnter",this.valueModel,this.id)}}},s=a,r=n("2877"),l=n("6544"),c=n.n(l),u=n("8654"),d=Object(r["a"])(s,i,o,!1,null,null,null);t["a"]=d.exports;c()(d,{VTextField:u["a"]})},"5ff8":function(e,t,n){"use strict";n("a15b"),n("13d5"),n("26e9"),n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276");var i={methods:{removeMask:function(e){return e?e.match(/\d+/g).join(""):""},removeMoneyMask:function(e){return e?(e=e.replace("R$ ",""),e=e.split(".").join(""),e=e.split(",").join("."),e):e},setCepMask:function(e){return e?e.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3"):e},setPhoneMask:function(e){return e.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4")},setMoneyMask:function(e){if(!e)return e;e=e.toString(),e=e.split(" ").join(""),e=e.split("R$").join(""),e=e.split(".").join("");var t=e.split("").reverse(),n=0,i=t.reduce((function(e,t){return n++,3==n?e=","+e:n%3===0&&(e="."+e),String(t)+String(e)}),"");return i},formatTextToUrl:function(e){return e?(e=e.toLowerCase(),e=e.split(" ").join("-"),e=this.removeSimbols(e),e=this.removeAccents(e),e):e},removeAccents:function(e){return e?(e=e.split("á").join("a"),e=e.split("à").join("a"),e=e.split("ã").join("a"),e=e.split("â").join("a"),e=e.split("é").join("e"),e=e.split("è").join("e"),e=e.split("ê").join("e"),e=e.split("í").join("i"),e=e.split("ì").join("i"),e=e.split("î").join("i"),e=e.split("ó").join("o"),e=e.split("ò").join("o"),e=e.split("õ").join("o"),e=e.split("ô").join("o"),e=e.split("ú").join("u"),e=e.split("ù").join("u"),e=e.split("û").join("u"),e=e.split("ç").join("c"),e):e},removeSimbols:function(e){return e?(e=e.replace(/[!@£$%^&*()_+?/*."']+/,""),e):e}}};t["a"]=i},"758a":function(e,t,n){"use strict";var i=n("8d39"),o=n.n(i);o.a},"8d39":function(e,t,n){},"93bc":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"(##) # ####-####",expression:"'(##) # ####-####'"}],attrs:{id:e.id,label:e.label,disabled:e.disabled,rules:e.rules,value:e.valueModel,counter:e.counter,"validate-on-blur":"",required:""},on:{keyup:e.onKeyUp},model:{value:e.valueModel,callback:function(t){e.valueModel=t},expression:"valueModel"}})},o=[],a=n("3a60"),s={name:"PhoneField",directives:{mask:a["mask"]},props:{label:{required:!0},value:{default:""},disabled:{default:!1},counter:{default:null},required:{default:!1},id:{default:null}},data:function(){return{valueModel:null}},computed:{rules:function(){return this.required?[function(e){return e&&e.length>=15||"Informe um número válido"}]:[]}},watch:{value:function(e){this.valueModel=e}},mounted:function(){this.valueModel=this.value},methods:{onKeyUp:function(){this.$emit("onKeyUp",this.valueModel,this.id)}}},r=s,l=n("2877"),c=n("6544"),u=n.n(c),d=n("8654"),h=Object(l["a"])(r,i,o,!1,null,null,null);t["a"]=h.exports;u()(h,{VTextField:d["a"]})},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return l}));var i=n("b0af"),o=n("80d2"),a=Object(o["h"])("v-card__actions"),s=Object(o["h"])("v-card__subtitle"),r=Object(o["h"])("v-card__text"),l=Object(o["h"])("v-card__title");i["a"]},df0c:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"300",dark:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{staticClass:"dialog pa-4"},[n("h1",{staticClass:"dialog-title font-weight-bold mb-4"},[e._v(" Meu Perfil ")]),n("div",{staticClass:"conteudo"},[n("input-field",{attrs:{id:"name",label:"Nome",rules:e.nameRules,value:e.user.name},on:{onKeyUp:e.onKeyUp,onKeyUpEnter:function(t){return e.focusToNext("phoneNumber")}}}),n("phone-field",{attrs:{id:"phoneNumber",label:"Telefone",value:this.setPhoneMask(e.user.phone_number),required:!0},on:{onKeyUp:e.onKeyUp}})],1),n("v-card-actions",{staticClass:"mt-4"},[n("v-spacer"),n("v-btn",{staticClass:"primary",attrs:{text:"",dark:"",disabled:e.btnDisabled},on:{click:e.save}},[e._v(" Salvar ")]),n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")])],1)],1)],1)},o=[],a=(n("b0c0"),n("2c3c")),s=n("3b11"),r=n("93bc"),l=n("5988"),c=n("5ff8"),u=n("6cd4"),d={name:"Profile",components:{InputField:s["a"],PhoneField:r["a"]},mixins:[a["a"],l["a"],c["a"],u["a"]],data:function(){return{dialog:null,name:null,phoneNumber:null,nameRules:[function(e){return!!e||"Informe o nome"}]}},computed:{btnDisabled:function(){var e=this.removeMask(this.phoneNumber);return!this.name||e.length<10}},mounted:function(){this.name=this.user.name,this.phoneNumber=this.user.phone_number},methods:{save:function(){var e=this;this.$axios.put("user/".concat(this.user.id),{name:this.name,phone_number:this.removeMask(this.phoneNumber)}).then((function(t){200===t.data.codigo?(e.showSnackbar("Perfil salvar com sucesso!"),e.storeUser(t.data.corpo),e.name="",e.phoneNumber="",e.dialog=!1):e.setErro(t.data.corpo)})).catch((function(t){e.setErro("Não foi possível alterar o perfil!"),window.console.log(t)}))},onKeyUp:function(e,t){this.$data[t]=e},setErro:function(e){this.showSnackbarErro(e)},showDialog:function(){this.dialog=!0}}},h=d,f=(n("758a"),n("2877")),v=n("6544"),p=n.n(v),m=n("8336"),b=n("b0af"),g=n("99d9"),y=n("169a"),k=n("2fa4"),j=Object(f["a"])(h,i,o,!1,null,"1ff993e5",null);t["default"]=j.exports;p()(j,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VDialog:y["a"],VSpacer:k["a"]})}}]);
//# sourceMappingURL=chunk-becaaf96.b22b90c3.js.map