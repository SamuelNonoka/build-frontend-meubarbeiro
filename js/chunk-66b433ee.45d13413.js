(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66b433ee"],{"0789":function(e,n,t){"use strict";t("99af");var r=t("d9f7");function a(){for(var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return(e=Array()).concat.apply(e,[n].concat(r))}function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",t=arguments.length>2?arguments[2]:void 0;return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:t},origin:{type:String,default:n}},render:function(n,t){var o="transition".concat(t.props.group?"-group":""),i={props:{name:e,mode:t.props.mode},on:{beforeEnter:function(e){e.style.transformOrigin=t.props.origin,e.style.webkitTransformOrigin=t.props.origin}}};return t.props.leaveAbsolute&&(i.on.leave=a(i.on.leave,(function(e){return e.style.position="absolute"}))),t.props.hideOnLeave&&(i.on.leave=a(i.on.leave,(function(e){return e.style.display="none"}))),n(o,Object(r["a"])(t.data,i),t.children)}}}function i(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:e,functional:!0,props:{mode:{type:String,default:t}},render:function(t,a){return t("transition",Object(r["a"])(a.data,{props:{name:e},on:n}),a.children)}}}var s=t("2fa7"),l=t("80d2"),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=n?"width":"height",r="offset".concat(Object(l["w"])(t));return{beforeEnter:function(e){e._parent=e.parentNode,e._initialStyle=Object(s["a"])({transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow},t,e.style[t])},enter:function(n){var a=n._initialStyle,o="".concat(n[r],"px");n.style.setProperty("transition","none","important"),n.style.visibility="hidden",n.style.visibility=a.visibility,n.style.overflow="hidden",n.style[t]="0",n.offsetHeight,n.style.transition=a.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame((function(){n.style[t]=o}))},afterEnter:o,enterCancelled:o,leave:function(e){e._initialStyle=Object(s["a"])({transition:"",visibility:"",overflow:e.style.overflow},t,e.style[t]),e.style.overflow="hidden",e.style[t]="".concat(e[r],"px"),e.offsetHeight,requestAnimationFrame((function(){return e.style[t]="0"}))},afterLeave:a,leaveCancelled:a};function a(n){e&&n._parent&&n._parent.classList.remove(e),o(n)}function o(e){var n=e._initialStyle[t];e.style.overflow=e._initialStyle.overflow,null!=n&&(e.style[t]=n),delete e._initialStyle}};t.d(n,"f",(function(){return d})),t.d(n,"e",(function(){return u})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return p})),t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return v}));o("carousel-transition"),o("carousel-reverse-transition");var d=o("tab-transition"),u=o("tab-reverse-transition"),f=(o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-transition"),o("dialog-bottom-transition"),o("fade-transition")),p=(o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition")),h=(o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition"),i("expand-transition",c())),v=i("expand-x-transition",c("",!0))},2864:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("auth-template",{attrs:{title:"Alterar senha"}},[t("form",{on:{submit:function(n){return n.preventDefault(),e.cadastrar(n)}}},[t("v-text-field",{ref:"senha",attrs:{id:"password",type:e.exibirSenha?"text":"password",label:"Informe sua nova senha",rules:e.passwordRules,"append-icon":e.exibirSenha?"visibility_off":"remove_red_eye",dark:"",success:e.isPasswordValid(e.senha),clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(n){e.exibirSenha=!e.exibirSenha},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.focusToNext("confimaSenha")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.senha,callback:function(n){e.senha=n},expression:"senha"}}),t("v-text-field",{ref:"confimarSenha",attrs:{id:"confirmaSenha",type:e.exibirSenha2?"text":"password",label:"Confirmar Senha",rules:e.passwordRules,"append-icon":e.exibirSenha2?"visibility_off":"remove_red_eye",dark:"","prepend-inner-icon":"vpn_key",success:e.isPasswordValid(e.confirmaSenha),clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(n){e.exibirSenha2=!e.exibirSenha2},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.focusToNext("code")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[t("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.confirmaSenha,callback:function(n){e.confirmaSenha=n},expression:"confirmaSenha"}}),t("v-text-field",{ref:"code",attrs:{id:"code",label:"Informe o código de confirmação",maxLength:"4","append-icon":"lock",success:e.isCodeValid,dark:"",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.enterClick(n)}},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}}),t("div",{staticClass:"text-center mt-8"},[t("btn-primary",{attrs:{text:"Alterar Senha",disabled:e.btnDisabled,loading:e.progressLoader},on:{clicked:e.cadastrar}})],1)],1)])},a=[],o=t("94bb"),i=t("a30b"),s=t("2c3c"),l=t("2ce5"),c=t("be1f"),d=t("5988"),u={name:"ChangePassword",components:{AuthTemplate:o["a"],BtnPrimary:i["a"]},mixins:[s["a"],l["a"],d["a"],c["a"]],props:{progressLoader:{default:!1}},data:function(){return{exibirSenha:!1,exibirSenha2:!1,senha:"",confirmaSenha:"",code:null}},computed:{btnDisabled:function(){return!this.isPasswordValid(this.senha)||(!this.isPasswordValid(this.confirmaSenha)||this.senha!==this.confirmaSenha)},isCodeValid:function(){return this.code&&4===this.code.length}},mounted:function(){document.querySelector("#password").focus()},methods:{enterClick:function(){this.btnDisabled?this.showSnackbarErro("Preencha todos os dados corretamente!"):this.cadastrar()},cadastrar:function(){var e={token:this.$route.params.token,password:this.senha,code:this.code};this.$emit("onChangePassword",e)}}},f=u,p=t("2877"),h=t("6544"),v=t.n(h),y=t("132d"),b=t("8654"),m=Object(p["a"])(f,r,a,!1,null,null,null);n["a"]=m.exports;v()(m,{VIcon:y["a"],VTextField:b["a"]})},"2c3c":function(e,n,t){"use strict";var r={methods:{focusToNext:function(e){this.$refs[e].focus()}}};n["a"]=r},"2ce5":function(e,n,t){"use strict";t("b0c0");var r={methods:{goTo:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=this.$route.name;e!=t&&(n?this.$router.push({name:e,params:n}):this.$router.push({name:e}))},goToPath:function(e){this.$router.push({path:e})},goToBack:function(){this.$router.go(-1)}}};n["a"]=r},f445:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("app-change-password",{attrs:{progressLoader:e.progressLoader},on:{onChangePassword:e.onChangePassword}})},a=[],o=t("be3b"),i=t("2864"),s=t("5988"),l=t("2ce5"),c={name:"ChangePassword",components:{AppChangePassword:i["a"]},mixins:[s["a"],l["a"]],data:function(){return{progressLoader:!1}},methods:{onChangePassword:function(e){var n=this;this.progressLoader=!0,o["a"].post("/auth/barber/change-password",e).then((function(e){200===e.data.codigo?(n.progressLoader=!1,n.showSnackbar("Senha alterada com sucesso!"),n.goTo("login-barber")):n.setErro(e.data.corpo)})).catch((function(){n.setErro("Não foi possível alterar a senha!")}))},setErro:function(e){this.progressLoader=!1,this.showSnackbarErro(e)}}},d=c,u=t("2877"),f=Object(u["a"])(d,r,a,!1,null,null,null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-66b433ee.45d13413.js.map