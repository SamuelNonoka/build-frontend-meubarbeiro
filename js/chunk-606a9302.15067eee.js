(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-606a9302"],{"0481":function(e,n,t){"use strict";var r=t("23e7"),a=t("a2bf"),i=t("7b0b"),o=t("50c4"),s=t("a691"),l=t("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,n=i(this),t=o(n.length),r=l(n,0);return r.length=a(r,n,n,t,0,void 0===e?1:s(e)),r}})},"0789":function(e,n,t){"use strict";t("99af");var r=t("d9f7");function a(){for(var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return(e=Array()).concat.apply(e,[n].concat(r))}function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",t=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:t},origin:{type:String,default:n}},render:function(n,t){var i="transition".concat(t.props.group?"-group":""),o={props:{name:e,mode:t.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=t.props.origin,e.style.webkitTransformOrigin=t.props.origin}}};return t.props.leaveAbsolute&&(o.on.leave=a(o.on.leave,(function(e){return e.style.position="absolute"}))),t.props.hideOnLeave&&(o.on.leave=a(o.on.leave,(function(e){return e.style.display="none"}))),n(i,Object(r["a"])(t.data,o),t.children)}}}function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:t}},render:function(t,a){return t("transition",Object(r["a"])(a.data,{props:{name:e},on:n}),a.children)}}}var s=t("2fa7"),l=t("80d2"),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=n?"width":"height",r="offset".concat(Object(l["D"])(t));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(s["a"])({transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow},t,e.style[t])},enter:function(n){var a=n._initialStyle,i="".concat(n[r],"px");n.style.setProperty("transition","none","important"),n.style.visibility="hidden",n.style.visibility=a.visibility,n.style.overflow="hidden",n.style[t]="0",n.offsetHeight,n.style.transition=a.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame((function(){n.style[t]=i}))},afterEnter:i,enterCancelled:i,leave:function(e){e._initialStyle=Object(s["a"])({transition:"",visibility:"",overflow:e.style.overflow},t,e.style[t]),e.style.overflow="hidden",e.style[t]="".concat(e[r],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[t]="0"}))},afterLeave:a,leaveCancelled:a};function a(n){e&&n._parent&&n._parent.classList.remove(e),i(n)}function i(e){var n=e._initialStyle[t];e.style.overflow=e._initialStyle.overflow,null!=n&&(e.style[t]=n),delete e._initialStyle}};t.d(n,"g",(function(){return d})),t.d(n,"f",(function(){return u})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return h})),t.d(n,"a",(function(){return v})),t.d(n,"b",(function(){return y}));i("carousel-transition"),i("carousel-reverse-transition");var d=i("tab-transition"),u=i("tab-reverse-transition"),f=(i("menu-transition"),i("fab-transition","center center","out-in"),i("dialog-transition"),i("dialog-bottom-transition"),i("fade-transition")),p=i("scale-transition"),h=(i("scroll-x-transition"),i("scroll-x-reverse-transition"),i("scroll-y-transition"),i("scroll-y-reverse-transition"),i("slide-x-transition")),v=(i("slide-x-reverse-transition"),i("slide-y-transition"),i("slide-y-reverse-transition"),o("expand-transition",c())),y=o("expand-x-transition",c("",!0))},2864:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("auth-template",{attrs:{title:"Alterar senha"}},[t("form",{on:{submit:function(n){return n.preventDefault(),e.cadastrar(n)}}},[t("v-text-field",{ref:"senha",attrs:{id:"password",type:e.exibirSenha?"text":"password",label:"Informe sua nova senha",rules:e.passwordRules,"append-icon":e.exibirSenha?"visibility_off":"remove_red_eye",dark:"",success:e.isPasswordValid(e.senha),clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(n){e.exibirSenha=!e.exibirSenha},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.focusToNext("confimaSenha")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.senha,callback:function(n){e.senha=n},expression:"senha"}}),t("v-text-field",{ref:"confimarSenha",attrs:{id:"confirmaSenha",type:e.exibirSenha2?"text":"password",label:"Confirmar Senha",rules:e.passwordRules,"append-icon":e.exibirSenha2?"visibility_off":"remove_red_eye",dark:"","prepend-inner-icon":"vpn_key",success:e.isPasswordValid(e.confirmaSenha),clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(n){e.exibirSenha2=!e.exibirSenha2},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.focusToNext("code")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.confirmaSenha,callback:function(n){e.confirmaSenha=n},expression:"confirmaSenha"}}),t("v-text-field",{ref:"code",attrs:{id:"code",label:"Informe o código de confirmação",maxLength:"4","append-icon":"lock",success:e.isCodeValid,dark:"",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.enterClick(n)}},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}}),t("div",{staticClass:"text-center mt-8"},[t("btn-primary",{attrs:{text:"Alterar Senha",disabled:e.btnDisabled,loading:e.progressLoader},on:{clicked:e.cadastrar}})],1)],1)])},a=[],i=t("94bb"),o=t("a30b"),s=t("2c3c"),l=t("2ce5"),c=t("be1f"),d=t("5988"),u={name:"ChangePassword",components:{AuthTemplate:i["a"],BtnPrimary:o["a"]},mixins:[s["a"],l["a"],d["a"],c["a"]],props:{progressLoader:{default:!1}},data:function(){return{exibirSenha:!1,exibirSenha2:!1,senha:"",confirmaSenha:"",code:null}},computed:{btnDisabled:function(){return!this.isPasswordValid(this.senha)||(!this.isPasswordValid(this.confirmaSenha)||this.senha!==this.confirmaSenha)},isCodeValid:function(){return this.code&&4===this.code.length}},mounted:function(){document.querySelector("#password").focus()},methods:{enterClick:function(){this.btnDisabled?this.showSnackbarErro("Preencha todos os dados corretamente!"):this.cadastrar()},cadastrar:function(){var e={token:this.$route.params.token,password:this.senha,code:this.code};this.$emit("onChangePassword",e)}}},f=u,p=t("2877"),h=t("6544"),v=t.n(h),y=t("132d"),b=t("8654"),m=Object(p["a"])(f,r,a,!1,null,null,null);n["a"]=m.exports;v()(m,{VIcon:y["a"],VTextField:b["a"]})},"2c3c":function(e,n,t){"use strict";var r={methods:{focusToNext:function(e){this.$refs[e].focus()},setData:function(e,n){return this.$data[n]=e}}};n["a"]=r},4069:function(e,n,t){var r=t("44d2");r("flat")},a2bf:function(e,n,t){"use strict";var r=t("e8b5"),a=t("50c4"),i=t("f8c2"),o=function(e,n,t,s,l,c,d,u){var f,p=l,h=0,v=!!d&&i(d,u,3);while(h<s){if(h in t){if(f=v?v(t[h],h,n):t[h],c>0&&r(f))p=o(e,n,f,a(f.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=f}p++}h++}return p};e.exports=o},a452:function(e,n,t){"use strict";var r=t("2fa7"),a=t("2b0e");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return a["a"].extend({name:"proxyable",model:{prop:e,event:n},props:Object(r["a"])({},e,{required:!1}),data:function(){return{internalLazyValue:this[e]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(n,e))}}},watch:Object(r["a"])({},e,(function(e){this.internalLazyValue=e}))})}var o=i();n["a"]=o},f445:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("app-change-password",{attrs:{progressLoader:e.progressLoader},on:{onChangePassword:e.onChangePassword}})},a=[],i=t("be3b"),o=t("2864"),s=t("5988"),l=t("2ce5"),c={name:"ChangePassword",components:{AppChangePassword:o["a"]},mixins:[s["a"],l["a"]],data:function(){return{progressLoader:!1}},methods:{onChangePassword:function(e){var n=this;this.progressLoader=!0,i["a"].post("/auth/barber/change-password",e).then((function(e){200===e.data.codigo?(n.progressLoader=!1,n.showSnackbar("Senha alterada com sucesso!"),n.goTo("barber-auth")):n.setErro(e.data.corpo)})).catch((function(){n.setErro("Não foi possível alterar a senha!")}))},setErro:function(e){this.progressLoader=!1,this.showSnackbarErro(e)}}},d=c,u=t("2877"),f=Object(u["a"])(d,r,a,!1,null,null,null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-606a9302.15067eee.js.map