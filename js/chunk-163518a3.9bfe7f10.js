(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-163518a3"],{"1f49":function(t,e,i){},"36a7":function(t,e,i){},"8a79":function(t,e,i){"use strict";var s=i("23e7"),r=i("e330"),a=i("06cf").f,n=i("50c4"),c=i("577e"),o=i("5a34"),h=i("1d80"),l=i("ab13"),d=i("c430"),u=r("".endsWith),m=r("".slice),g=Math.min,b=l("endsWith"),p=!d&&!b&&!!function(){var t=a(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!p&&!b},{endsWith:function(t){var e=c(h(this));o(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,r=void 0===i?s:g(n(i),s),a=c(t);return u?u(e,a,r):m(e,r-a.length,r)===a}})},"8efc":function(t,e,i){},"9cea":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"step-content-barber grey lighten-1 pa-4 app-border-radius-small"},[i("v-card",{staticClass:"mt-4 elevation-1 pa-2"},t._l(t.barbers,(function(e,s){return i("div",{key:e.id},[s>0?i("v-divider"):t._e(),i("barber-item",{attrs:{barber:e},on:{toggle:t.setBarber}})],1)})),0)],1)},r=[],a=(i("c740"),i("4de4"),i("d3b7"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",[i("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[i("div",{staticClass:"barber-item-image"},[t.barber.image_url?i("v-img",{staticClass:"grey lighten-2",attrs:{src:""+t.$url_backend+t.barber.image_url,"lazy-src":""+t.$url_backend+t.barber.image_url,"aspect-ratio":"1"}}):t._e()],1)]),i("v-col",{staticClass:"py-0 d-flex align-center"},[i("span",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.barber.name)+" ")]),i("v-checkbox",{staticClass:"mt-2 d-sm-none",model:{value:t.choosed,callback:function(e){t.choosed=e},expression:"choosed"}})],1),i("v-col",{staticClass:"d-none d-sm-flex",attrs:{cols:"auto"}},[i("v-checkbox",{staticClass:"mt-2",model:{value:t.choosed,callback:function(e){t.choosed=e},expression:"choosed"}})],1)],1)}),n=[],c={name:"RegisterScheduleStepBarberItem",props:{barber:{required:!0}},computed:{choosed:{set:function(t){this.barber.choosed=t,this.$emit("toggle",this.barber)},get:function(){return this.barber.choosed}}}},o=c,h=(i("b43a"),i("2877")),l=i("6544"),d=i.n(l),u=i("ac7c"),m=i("62ad"),g=i("adda"),b=i("0fd9"),p=Object(h["a"])(o,a,n,!1,null,"4538a516",null),v=p.exports;d()(p,{VCheckbox:u["a"],VCol:m["a"],VImg:g["a"],VRow:b["a"]});var f=i("09ba"),S=i("5988"),_={name:"RegisterScheduleStepBarber",components:{BarberItem:v},mixins:[f["a"],S["a"]],props:{barbershopId:{default:null}},data:function(){return{barbers:[]}},methods:{getBarbers:function(){this.getBarberByBarbershopIdOnService(this.barbershopId)},onGetBarberByBarbershopIdOnServiceError:function(t){this.showSnackbarErro(t)},onGetBarberByBarbershopIdOnServiceSuccess:function(t){this.barbers=t,this.$emit("loadedBarbers",this.barbers)},setBarber:function(t){var e=this.barbers.findIndex((function(e){return e.id==t.id}));this.barbers[e]=t;var i=this.barbers.filter((function(t){return 1==t.choosed}));this.$emit("choosedBarbers",i)}}},y=_,C=i("b0af"),z=i("ce7e"),w=Object(h["a"])(y,s,r,!1,null,null,null);e["default"]=w.exports;d()(w,{VCard:C["a"],VDivider:z["a"]})},adda:function(t,e,i){"use strict";var s=i("53ca"),r=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),a=(i("36a7"),i("24b2")),n=i("58df"),c=Object(n["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=c,h=i("7560"),l=i("d9f7"),d=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(o,h["a"]).extend({name:"v-img",directives:{intersect:r["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var r=t.naturalHeight,a=t.naturalWidth;r||a?(e.naturalWidth=a,e.calculatedAspectRatio=a/r):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t),i=Object(l["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b43a:function(t,e,i){"use strict";i("1f49")}}]);
//# sourceMappingURL=chunk-163518a3.9bfe7f10.js.map