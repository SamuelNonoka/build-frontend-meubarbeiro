(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-faff9a4c"],{"00f1":function(e,t,i){"use strict";var n=i("8a26"),r=i.n(n);r.a},"169a":function(e,t,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("caad"),i("45fc"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("2532"),i("498a"),i("159b");var n=i("2fa7"),r=(i("368e"),i("480e")),a=i("4ad4"),s=i("b848"),o=i("75eb"),c=i("e707"),l=i("e4d3"),d=i("21be"),u=i("f2e7"),h=i("a293"),v=i("58df"),f=i("d9bd"),p=i("80d2");function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(i,!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var b=Object(v["a"])(a["a"],s["a"],o["a"],c["a"],l["a"],d["a"],u["a"]);t["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(n["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(n["a"])(e,"v-dialog--active",this.isActive),Object(n["a"])(e,"v-dialog--persistent",this.persistent),Object(n["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(n["a"])(e,"v-dialog--scrollable",this.scrollable),Object(n["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===p["v"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');i.length&&i[0].focus()}}},genTransition:function(){var e=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin}},this.showLazyContent((function(){return[e]}))):e},genContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};return this.fullscreen||(e.style={maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)}),this.$createElement("div",{class:this.contentClasses,attrs:m({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement("div",e,[this.$createElement(r["a"],{props:{root:!0,light:this.light,dark:this.dark}},this.getContentSlot())])])}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genTransition()])}})},"20f6":function(e,t,i){},"297c":function(e,t,i){"use strict";i("a9e3");var n=i("2b0e"),r=i("37c6");t["a"]=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(r["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2ce5":function(e,t,i){"use strict";i("b0c0");var n={methods:{goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.$route.name;e!=i&&(t?this.$router.push({name:e,params:t}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};t["a"]=n},"2fa4":function(e,t,i){"use strict";i("20f6");var n=i("80d2");t["a"]=Object(n["i"])("spacer","div","v-spacer")},"368e":function(e,t,i){},"37c6":function(e,t,i){"use strict";var n=i("8e36");t["a"]=n["a"]},"3c93":function(e,t,i){},"3f4f":function(e,t,i){},5865:function(e,t,i){},5988:function(e,t,i){"use strict";var n={data:function(){return{snackbarConfig:{text:"",type:"success"}}},methods:{closeSnackbar:function(){this.snackbar=null},showSnackbar:function(e){this.snackbarConfig.type="successDark",this.snackbarConfig.text=e,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))},showSnackbarErro:function(e){this.snackbarConfig.type="error",this.snackbarConfig.text=e,this.$store.dispatch("SnackbarStore/showSnackbar",{config:this.snackbarConfig}).then((function(){}))}}};t["a"]=n},"615b":function(e,t,i){},"6ece":function(e,t,i){},7126:function(e,t,i){"use strict";var n=i("3f4f"),r=i.n(n);r.a},"8a26":function(e,t,i){},"8c08":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.overlay?i("div",{staticClass:"overlay",class:e.overlayVisible},[i("div",{staticClass:"overlay-content text-center"},[i("div",[i("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error&&e.icon&&!e.textLoaderSuccess,expression:"!loading && !error && icon && !textLoaderSuccess"}],attrs:{size:"80",color:"success"}},[e._v(" check_circle_outline ")]),i("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],attrs:{size:"80",color:"danger"}},[e._v(" error_outline ")]),i("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:"",size:"50",color:"primaryLight"}})],1),i("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"overlay-text"},[e._v(" "+e._s(e.textLoader)+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.error,expression:"!loading && !error"}],staticClass:"overlay-text overlay-text-success successDark text-left"},[i("div",{staticClass:"icone"},[i("v-icon",[e._v("check")])],1),i("span",{staticClass:"ml-4 white--text",domProps:{innerHTML:e._s(e.textLoaderSuccess)}})]),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.error,expression:"!loading && error"}],staticClass:"overlay-text overlay-text-success",domProps:{innerHTML:e._s(e.textLoaderError)}})])]):e._e()},r=[],a={name:"Overlay",data:function(){return{overlay:!1,loading:!1,overlayVisible:"",textLoader:"",textLoaderSuccess:"",textLoaderError:"",error:!1,icon:!1}},methods:{showOverlay:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.textLoader=t||"Aguarde...",this.overlay=!0,this.loading=!0,setTimeout((function(){e.overlayVisible="visible"}),300)},hideOverlayError:function(e){this.error=!0,this.textLoaderError=e,this.hideOverlay(!0,!1)},hideOverlaySuccess:function(e){this.error=!1,this.textLoaderSuccess=e,this.hideOverlay(!0,!0)},hideOverlay:function(e,t){var i=this;this.icon=t,this.loading=!1,e?(setTimeout((function(){i.overlayVisible=""}),3e3),setTimeout((function(){i.error=!1,i.overlay=!1,i.loading=!1}),4e3)):(this.overlayVisible="",this.error=!1,this.overlay=!1,this.loading=!1)}}},s=a,o=(i("7126"),i("2877")),c=i("6544"),l=i.n(c),d=i("132d"),u=i("490a"),h=Object(o["a"])(s,n,r,!1,null,"4643eefb",null);t["a"]=h.exports;l()(h,{VIcon:d["a"],VProgressCircular:u["a"]})},"8e36":function(e,t,i){"use strict";i("a4d3"),i("4de4"),i("4160"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("acd8"),i("c7cd"),i("159b");var n=i("2fa7"),r=(i("6ece"),i("0789")),a=i("a9ad"),s=i("fe6c"),o=i("a452"),c=i("7560"),l=i("80d2"),d=i("58df");function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(i,!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var v=Object(d["a"])(a["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]);t["a"]=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.$vuetify.rtl?"right":"left",Object(l["g"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(l["g"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return h({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?r["c"]:r["e"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(l["q"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),i=t.width;this.internalValue=e.offsetX/i*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return c}));var n=i("b0af"),r=i("80d2"),a=Object(r["i"])("v-card__actions"),s=Object(r["i"])("v-card__subtitle"),o=Object(r["i"])("v-card__text"),c=Object(r["i"])("v-card__title");n["a"]},a5e3:function(e,t,i){"use strict";var n=i("5865"),r=i.n(n);r.a},a7b9:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",{staticClass:"confirm-dialog pa-4",attrs:{dark:""}},[i("v-card-title",{staticClass:"headline pa-0"},[e._v(" "+e._s(e.title)+" ")]),e.description?i("v-card-text",{staticClass:"mt-4 pa-0"},[e._v(" "+e._s(e.description)+" ")]):e._e(),i("v-card-actions",{staticClass:"mt-4"},[i("v-spacer"),i("v-btn",{staticClass:"text-none primary--text px-4",attrs:{color:"success",rounded:""},on:{click:function(t){return e.send("confirm")}}},[e._v(" Confirmar ")]),i("v-btn",{staticClass:"text-none",attrs:{color:"light",text:""},on:{click:function(t){return e.send("cancel")}}},[e._v(" Cancelar ")])],1)],1)],1)],1)},r=[],a=(i("da5b"),{name:"Confirm",props:{title:{required:!0},description:{required:!1},danger:{default:!1}},data:function(){return{dialog:!1}},methods:{send:function(e){this.dialog=!1,this.$emit(e)},showDialog:function(){this.dialog=!0},cardClass:function(){return this.danger?"muted":"primary"}}}),s=a,o=i("2877"),c=i("6544"),l=i.n(c),d=i("8336"),u=i("b0af"),h=i("99d9"),v=i("169a"),f=i("0fd9"),p=i("2fa4"),g=Object(o["a"])(s,n,r,!1,null,null,null);t["a"]=g.exports;l()(g,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:v["a"],VRow:f["a"],VSpacer:p["a"]})},adcb:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.barber?i("div",{staticClass:"plans"},[i("v-row",[i("v-col",{staticClass:"mt-0"},[i("h1",{staticClass:"text-center plans-title"},[e._v(" Escolha o plano ideal para a sua "),i("span",[e._v("Barbearia")]),e._v(". ")])])],1),i("v-row",{staticClass:"text-center"},[i("v-col",{attrs:{cols:"12"}},e._l(e.items,(function(t,n){return i("div",{key:n,staticClass:"plan-item"},[i("header",{staticClass:"text-center"},[i("h2",{staticClass:"font-weight-regular"},[e._v(" "+e._s(t.name)+" ")]),i("span",{staticClass:"plan-item-price font-weight-bold"},[e._v(" "+e._s(t.value)+" "),i("small",{staticClass:"font-weight-light"},[e._v("/mês")])]),i("span",{staticClass:"plan-description font-weight-light"},[e._v(" "+e._s(t.description)+" ")])]),i("content",[i("table",e._l(t.list,(function(t,n){return i("tr",{key:n,staticClass:"plan-list-item"},[i("td",{staticClass:"text-right"},[e.isBoolean(t.value)?i("v-icon",{staticClass:"plan-list-value font-weight-bold"},[e._v(" check ")]):i("span",{staticClass:"plan-list-value font-weight-bold"},[e._v(" "+e._s(t.value)+" ")])],1),i("td",{staticClass:"text-left pl-2"},[i("span",{staticClass:"plan-list-key"},[e._v(" "+e._s(t.key)+" ")])])])})),0),e.showBtn(t.id)?i("btn-confirm",{staticClass:"mt-8",attrs:{disabled:1!=t.id,text:"Escolher Plano"},on:{clicked:function(i){return e.choosed(t.id)}}}):i("btn-confirm",{staticClass:"mt-8 danger",attrs:{disabled:1!=t.id,text:"Cancelar Plano"},on:{clicked:function(t){return e.choosed(null)}}})],1)])})),0)],1)],1):e._e(),i("confirm-dialog",{ref:"dialog",attrs:{title:e.confirmDialogTitle,danger:e.danger},on:{confirm:e.confirm}}),i("overlay",{ref:"overlay"})],1)},r=[],a=i("be3b"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-btn",{staticClass:"btn-confirm py-3 text-capitalize font-weight-bold",class:e.cssClass,attrs:{color:"secondary",height:"auto",block:e.block,disabled:e.disabled},on:{click:e.clicked}},[e.loading?[i("v-progress-circular",{attrs:{indeterminate:"",width:"2",color:"primaryDark",small:""}})]:[e.icon?i("v-icon",{staticClass:"mr-1"},[e._v(" "+e._s(e.icon)+" ")]):e._e(),e._v(" "+e._s(e.text)+" ")]],2)},o=[],c={name:"BtnConfirm",props:{block:{default:!0},disabled:{default:!1},text:{default:"Confirmar"},icon:{default:""},cssClass:{default:""},loading:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},l=c,d=(i("00f1"),i("2877")),u=i("6544"),h=i.n(u),v=i("8336"),f=i("132d"),p=i("490a"),g=Object(d["a"])(l,s,o,!1,null,"5a9f045d",null),m=g.exports;h()(g,{VBtn:v["a"],VIcon:f["a"],VProgressCircular:p["a"]});var b=i("a7b9"),y=i("8c08"),O=i("09ba"),w=i("5988"),_=i("d97b"),C={name:"Plans",components:{BtnConfirm:m,ConfirmDialog:b["a"],Overlay:y["a"]},mixins:[O["a"],_["a"],w["a"]],data:function(){return{items:[{id:1,name:"Basic",value:"R$ 10,00",description:"Ideal para quem trabalha sozinho",list:[{key:"Usuários",value:1},{key:"Agendamentos",value:!0}]}],confirmDialogTitle:"",choosedPlanId:null,barber:null,danger:!1}},mounted:function(){this.setBarber()},methods:{cancelPlan:function(){var e=this;this.showOverlay("Processando..."),a["a"].delete("/barber/plan/".concat(this.barber.id)).then((function(t){if(200===t.data.codigo){var i=t.data.corpo.token;e.storeBarber(i),e.setBarber();var n="Seu plano foi cancelado com sucesso!";e.hideOverlaySuccess(n),e.showSnackbar(n)}else e.setError(t.data.corpo)})).catch((function(){return e.setError("Não foi possível cancelar o seu plano!")}))},choosed:function(e){this.choosedPlanId=e,this.choosedPlanId?(this.confirmDialogTitle="Confirma a adesão deste plano?",this.danger=!1):(this.confirmDialogTitle="Confirma o cancelamento deste plano?",this.danger=!0),this.$refs.dialog.showDialog()},confirm:function(){this.choosedPlanId?this.setPlan(this.choosedPlanId):this.cancelPlan()},isBoolean:function(e){return"boolean"===typeof e},setBarber:function(){this.barber=this.getBarber()},setError:function(e){this.showSnackbarErro(e),this.hideOverlayError(e)},setPlan:function(e){var t=this;this.showOverlay("Processando..."),a["a"].put("/barber/plan/".concat(this.barber.id),{plan_id:e}).then((function(e){if(200===e.data.codigo){var i=e.data.corpo.token;t.storeBarber(i),t.setBarber();var n="Seu plano foi alterado com sucesso!";t.hideOverlaySuccess(n),t.showSnackbar(n)}else t.setError(e.data.corpo)})).catch((function(){return t.setError("Não foi possível alterar o seu plano!")}))},showBtn:function(e){return!this.barber.plan_id||this.barber.plan_id!=e}}},k=C,x=(i("a5e3"),i("62ad")),S=i("0fd9"),j=Object(d["a"])(k,n,r,!1,null,"08a2c018",null);t["default"]=j.exports;h()(j,{VCol:x["a"],VIcon:f["a"],VRow:S["a"]})},b0af:function(e,t,i){"use strict";i("a4d3"),i("4de4"),i("0481"),i("4160"),i("4069"),i("a9e3"),i("e439"),i("dbb4"),i("b64b"),i("159b");var n=i("2fa7"),r=(i("615b"),i("10d2")),a=i("297c"),s=i("1c87"),o=i("58df");function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(i,!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}t["a"]=Object(o["a"])(a["a"],s["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return l({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},r["a"].options.computed.classes.call(this))},styles:function(){var e=l({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=a["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},d97b:function(e,t,i){"use strict";var n={methods:{showOverlay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this;setTimeout((function(){t.$refs.overlay.showOverlay(e)}),1)},hideOverlaySuccess:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";setTimeout((function(){e.$refs.overlay.hideOverlaySuccess(t)}),1),t?setTimeout((function(){e.onOverlaySuccess(t)}),1e3):this.onOverlaySuccess()},hideOverlayError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$refs.overlay.hideOverlayError(e)},hideOverlay:function(){this.$refs.overlay.hideOverlay()},onOverlaySuccess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&window.console.log("onOverlaySuccess: "+e)}}};t["a"]=n},da5b:function(e,t,i){},e707:function(e,t,i){"use strict";i("caad"),i("a9e3"),i("2532"),i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");var n=i("2fa7"),r=(i("3c93"),i("a9ad")),a=i("7560"),s=i("f2e7"),o=i("58df");function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(i,!0).forEach((function(t){Object(n["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d=Object(o["a"])(r["a"],a["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return l({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),u=d,h=i("80d2"),v=i("2b0e");t["a"]=v["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new u({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(h["s"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[h["v"].up,h["v"].pageup],i=[h["v"].down,h["v"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!i.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),i=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var n=this.$refs.dialog,r=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(r,n))||this.shouldScroll(n,i)}for(var a=0;a<t.length;a++){var s=t[a];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,i)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],i=e.target;while(i){if(t.push(i),"HTML"===i.tagName)return t.push(document),t.push(window),t;i=i.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=chunk-faff9a4c.059bdba1.js.map