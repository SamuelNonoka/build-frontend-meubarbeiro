(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e8b529e"],{"0481":function(e,n,a){"use strict";var r=a("23e7"),t=a("a2bf"),s=a("7b0b"),o=a("50c4"),i=a("a691"),c=a("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,n=s(this),a=o(n.length),r=c(n,0);return r.length=t(r,n,n,a,0,void 0===e?1:i(e)),r}})},"26e9":function(e,n,a){"use strict";var r=a("23e7"),t=a("e8b5"),s=[].reverse,o=[1,2];r({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return t(this)&&(this.length=this.length),s.call(this)}})},2864:function(e,n,a){"use strict";var r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("auth-template",{attrs:{title:"Alterar senha"}},[a("form",{on:{submit:function(n){return n.preventDefault(),e.cadastrar(n)}}},[a("v-text-field",{ref:"senha",attrs:{id:"password",type:e.exibirSenha?"text":"password",label:"Informe sua nova senha",rules:e.passwordRules,"append-icon":e.exibirSenha?"visibility_off":"remove_red_eye",dark:"",success:e.isPasswordValid(e.senha),clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(n){e.exibirSenha=!e.exibirSenha},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.focusToNext("confimaSenha")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.senha,callback:function(n){e.senha=n},expression:"senha"}}),a("v-text-field",{ref:"confimarSenha",attrs:{id:"confirmaSenha",type:e.exibirSenha2?"text":"password",label:"Confirmar Senha",rules:e.passwordRules,"append-icon":e.exibirSenha2?"visibility_off":"remove_red_eye",dark:"","prepend-inner-icon":"vpn_key",success:e.isPasswordValid(e.confirmaSenha),clearable:"",required:"","validate-on-blur":""},on:{"click:append":function(n){e.exibirSenha2=!e.exibirSenha2},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.focusToNext("code")}},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons-outlined mr-2",attrs:{dense:""}},[e._v("vpn_key")])]},proxy:!0}]),model:{value:e.confirmaSenha,callback:function(n){e.confirmaSenha=n},expression:"confirmaSenha"}}),a("v-text-field",{ref:"code",attrs:{id:"code",label:"Informe o código de confirmação",maxLength:"4","append-icon":"lock",success:e.isCodeValid,dark:"",clearable:"",required:"","validate-on-blur":""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.enterClick(n)}},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}}),a("div",{staticClass:"text-center mt-8"},[a("btn-primary",{attrs:{text:"Alterar Senha",disabled:e.btnDisabled,loading:e.progressLoader},on:{clicked:e.cadastrar}})],1)],1)])},t=[],s=a("94bb"),o=a("a30b"),i=a("2c3c"),c=a("2ce5"),d=a("be1f"),l=a("5988"),u={name:"ChangePassword",components:{AuthTemplate:s["a"],BtnPrimary:o["a"]},mixins:[i["a"],c["a"],l["a"],d["a"]],props:{progressLoader:{default:!1}},data:function(){return{exibirSenha:!1,exibirSenha2:!1,senha:"",confirmaSenha:"",code:null}},computed:{btnDisabled:function(){return!this.isPasswordValid(this.senha)||(!this.isPasswordValid(this.confirmaSenha)||this.senha!==this.confirmaSenha)},isCodeValid:function(){return this.code&&4===this.code.length}},mounted:function(){document.querySelector("#password").focus()},methods:{enterClick:function(){this.btnDisabled?this.showSnackbarErro("Preencha todos os dados corretamente!"):this.cadastrar()},cadastrar:function(){var e={token:this.$route.params.token,password:this.senha,code:this.code};this.$emit("onChangePassword",e)}}},h=u,f=a("2877"),p=a("6544"),b=a.n(p),m=a("132d"),v=a("8654"),k=Object(f["a"])(h,r,t,!1,null,null,null);n["a"]=k.exports;b()(k,{VIcon:m["a"],VTextField:v["a"]})},"2c3c":function(e,n,a){"use strict";var r={methods:{focusToNext:function(e){this.$refs[e].focus()},setData:function(e,n){return this.$data[n]=e}}};n["a"]=r},4069:function(e,n,a){var r=a("44d2");r("flat")},"9d26":function(e,n,a){"use strict";var r=a("132d");n["a"]=r["a"]},a2bf:function(e,n,a){"use strict";var r=a("e8b5"),t=a("50c4"),s=a("f8c2"),o=function(e,n,a,i,c,d,l,u){var h,f=c,p=0,b=!!l&&s(l,u,3);while(p<i){if(p in a){if(h=b?b(a[p],p,n):a[p],d>0&&r(h))f=o(e,n,h,t(h.length),f,d-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=h}f++}p++}return f};e.exports=o},f445:function(e,n,a){"use strict";a.r(n);var r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("app-change-password",{attrs:{progressLoader:e.progressLoader},on:{onChangePassword:e.onChangePassword}})},t=[],s=a("be3b"),o=a("2864"),i=a("5988"),c=a("2ce5"),d={name:"ChangePassword",components:{AppChangePassword:o["a"]},mixins:[i["a"],c["a"]],data:function(){return{progressLoader:!1}},methods:{onChangePassword:function(e){var n=this;this.progressLoader=!0,s["a"].post("/auth/barber/change-password",e).then((function(e){200===e.data.codigo?(n.progressLoader=!1,n.showSnackbar("Senha alterada com sucesso!"),n.goTo("barber-auth")):n.setErro(e.data.corpo)})).catch((function(){n.setErro("Não foi possível alterar a senha!")}))},setErro:function(e){this.progressLoader=!1,this.showSnackbarErro(e)}}},l=d,u=a("2877"),h=Object(u["a"])(l,r,t,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-5e8b529e.66086b80.js.map