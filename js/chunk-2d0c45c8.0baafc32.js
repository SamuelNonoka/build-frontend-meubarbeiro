(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c45c8"],{"3b03":function(o,a,s){"use strict";s.r(a);var r=function(){var o=this,a=o.$createElement,s=o._self._c||a;return s("app-change-password",{attrs:{progressLoader:o.progressLoader},on:{onChangePassword:o.onChangePassword}})},e=[],n=s("be3b"),t=s("2864"),c=s("5988"),d=s("2ce5"),h={name:"ChangePassword",components:{AppChangePassword:t["a"]},mixins:[c["a"],d["a"]],data:function(){return{progressLoader:!1}},methods:{onChangePassword:function(o){var a=this;this.progressLoader=!0,n["a"].patch("/client/change-password",o).then((function(o){200===o.data.codigo?(a.progressLoader=!1,a.showSnackbar("Senha alterada com sucesso!"),a.goTo("login")):a.setErro(o.data.corpo)})).catch((function(){a.setErro("Não foi possível alterar a senha!")}))},setErro:function(o){this.progressLoader=!1,this.showSnackbarErro(o)}}},p=h,i=s("2877"),u=Object(i["a"])(p,r,e,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c45c8.0baafc32.js.map