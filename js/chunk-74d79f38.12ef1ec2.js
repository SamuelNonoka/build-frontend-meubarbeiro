(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d79f38"],{"17a1":function(t,e,n){"use strict";var r=n("d980"),a=n.n(r);a.a},"26e9":function(t,e,n){"use strict";var r=n("23e7"),a=n("e8b5"),o=[].reverse,i=[1,2];r({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),o.call(this)}})},"2c3c":function(t,e,n){"use strict";var r={methods:{focusToNext:function(t){this.$refs[t].focus()},setData:function(t,e){return this.$data[e]=t}}};e["a"]=r},"578e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile gray2"},[n("div",{staticClass:"container"},[n("div",{staticClass:"elevation-1 card"},[t._m(0),t._t("default")],2)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/logo_preto_branco.png"}})])}],o={name:"ProfileTemplate"},i=o,s=(n("e20e"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"5808c111",null);e["a"]=c.exports},"58da":function(t,e,n){},"5f08":function(t,e,n){"use strict";n("99af"),n("0d03"),n("a9e3"),n("ac1f"),n("466d"),n("1276");var r=n("e587"),a={filters:{dayOfWeek:function(t){var e=new Date(t),n=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return n[e.getUTCDay()]},time:function(t){if(!t)return"";var e=t.split(":"),n=Object(r["a"])(e,2),a=n[0],o=n[1];return"".concat(a,":").concat(o)}},methods:{formatDateStringToDatePtBr:function(t){if(!t)return t;t=t.split(" ");var e=t[0].split("-"),n=Object(r["a"])(e,3),a=n[0],o=n[1],i=n[2];return"".concat(i,"/").concat(o,"/").concat(a)},formatDateToDatePtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(e,"/").concat(n,"/").concat(r)},formatDateToDateEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(r,"-").concat(n,"-").concat(e)},formatDateTimeToStringPtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),a=t.getHours(),o=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(a)<10&&(a="0".concat(a)),Number(o)<10&&(o="0".concat(o)),"".concat(e,"/").concat(n,"/").concat(r," ").concat(a,":").concat(o)},formatDateTimeToStringEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),a=t.getHours(),o=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(a)<10&&(a="0".concat(a)),Number(o)<10&&(o="0".concat(o)),"".concat(r,"-").concat(n,"-").concat(e," ").concat(a,":").concat(o)},parseDate:function(t){var e=t.match(/(\d+)/g);return new Date(e[0],e[1]-1,e[2])}}};e["a"]=a},"615b":function(t,e,n){},"6cd4":function(t,e,n){"use strict";var r=n("2ce5"),a={mixins:[r["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}},userState:function(){return this.$store.getters["UserStore/user"]}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(t){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",t)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout")}}};e["a"]=a},"90a2":function(t,e,n){"use strict";n("7db0");var r=n("bf2d");function a(t,e){var n=e.modifiers||{},a=e.value,i="object"===Object(r["a"])(a),s=i?a.handler:a,c=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){if(s&&(!n.quiet||t._observe.init)){var a=Boolean(e.find((function(t){return t.isIntersecting})));s(e,r,a)}t._observe.init&&n.once?o(t):t._observe.init=!0}}),a.options||{});t._observe={init:!1,observer:c},c.observe(t)}function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var i={inserted:a,unbind:o};e["a"]=i},"9d26":function(t,e,n){"use strict";var r=n("132d");e["a"]=r["a"]},afdd:function(t,e,n){"use strict";var r=n("8336");e["a"]=r["a"]},b3f7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("profile-template",{staticClass:"profile gray2"},[n("div",{staticClass:"image-box profile-imagem-main gray1 mt-8 elevation-1"},[t.user.image_url?n("img",{staticClass:"profile-image",attrs:{src:t.userImageUrl}}):t._e(),n("btn-icon",{staticClass:"success btn-upload elevation-1",attrs:{icon:"photo_camera",small:!1},on:{clicked:t.uploadProfileImage}}),n("upload-image",{ref:"profileImage",attrs:{uploadUrl:t.uploadImageUrl,cropUploadFail:t.onUploadProfileImageFail},on:{onCropUploadSuccess:t.onUploadProfileImageSuccess}})],1),t.user?n("div",{staticClass:"mt-8"},[n("input-field",{attrs:{id:"name",label:"Nome",rules:t.nameRules,value:t.user.name,icon:"person",success:t.isNameValid(t.name)},on:{onKeyUp:t.onKeyUp,onKeyUpEnter:function(e){return t.focusToNext("phoneNumber")}}}),n("phone-field",{attrs:{id:"phoneNumber",label:"Telefone",icon:"phone",success:t.isPhoneNumberValid(t.phoneNumber),value:this.setPhoneMask(t.phoneNumber),required:!0},on:{onKeyUp:t.onKeyUp}}),n("date-picker",{attrs:{id:"bornDate",label:"Data de Nascimento",success:!0,value:t.user.born_date,max:t.maxDate},on:{change:t.onKeyUp}})],1):t._e(),n("div",{staticClass:"mt-8 mb-4 mx-sm-12 text-center"},[n("btn-secondary",{attrs:{text:"Salvar",dark:"",disabled:t.btnDisabled,loading:t.loading},on:{clicked:t.save}}),n("btn-text",{staticClass:"mt-4",attrs:{text:"Cancelar"},on:{clicked:t.goToBack}})],1)])},a=[],o=(n("99af"),n("0d03"),n("b0c0"),n("e7e3")),i=n("ba78"),s=n("39db"),c=n("b7c5"),u=n("3b11"),l=n("93bc"),f=n("578e"),d=n("eb97"),h=n("5f08"),m=n("2c3c"),p=n("5988"),g=n("5ff8"),v=n("6cd4"),b=n("be1f"),y={name:"Profile",components:{BtnSecondary:o["a"],BtnIcon:i["a"],BtnText:s["a"],DatePicker:c["a"],InputField:u["a"],PhoneField:l["a"],ProfileTemplate:f["a"],UploadImage:d["a"]},mixins:[h["a"],m["a"],p["a"],g["a"],v["a"],b["a"]],data:function(t){return{bornDate:null,name:null,phoneNumber:null,nameRules:[function(t){return!!t||"Informe o nome"}],loading:!1,uploadImageUrl:"".concat(t.$url_api,"/user/image")}},computed:{btnDisabled:function(){var t=this.removeMask(this.phoneNumber);return!this.name||t.length<10},maxDate:function(){return this.formatDateToDateEn(new Date)},userToken:function(){return localStorage.userToken},userImageUrl:function(){return"".concat(this.$url_backend).concat(this.user.image_url)}},mounted:function(){this.name=this.user.name,this.phoneNumber=this.user.phone_number,this.bornDate=this.user.born_date||this.formatDateToDateEn(new Date)},methods:{save:function(){var t=this;this.loading=!0;var e=new Date;e.setFullYear(e.getFullYear()-18),e<new Date(this.parseDate(this.bornDate))?this.setErro("O Meu Barbeiro só é permitido para maiores de idade!"):this.$axios.put("user/".concat(this.user.id),{born_date:this.bornDate,name:this.name,phone_number:this.removeMask(this.phoneNumber)}).then((function(e){200===e.data.codigo?(t.showSnackbar("Perfil salvar com sucesso!"),t.storeUser(e.data.corpo),t.goToBack()):t.setErro(e.data.corpo)})).catch((function(){return t.setErro("Não foi possível alterar o perfil!")}))},onKeyUp:function(t,e){this.$data[e]=t},onUploadProfileImageFail:function(){this.showSnackbarErro("Não foi possível salvar a imagem!")},onUploadProfileImageSuccess:function(t){this.storeUser(t),this.$refs.profileImage.hideDialog(),this.showSnackbar("Imagem atualizada com sucesso!")},setErro:function(t){this.loading=!1,this.showSnackbarErro(t)},uploadProfileImage:function(){this.$refs.profileImage.showDialog(this.userToken)}}},w=y,k=(n("17a1"),n("2877")),D=Object(k["a"])(w,r,a,!1,null,"be2be394",null);e["default"]=D.exports},ba78:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{fab:"",dark:"",small:t.small,color:t.color},on:{click:t.clicked}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(t.icon))])],1)},a=[],o={name:"BtnIcon",props:{icon:{required:!0},color:{default:"primary"},small:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},i=o,s=n("2877"),c=n("6544"),u=n.n(c),l=n("8336"),f=n("132d"),d=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=d.exports;u()(d,{VBtn:l["a"],VIcon:f["a"]})},ba86:function(t,e,n){},be1f:function(t,e,n){"use strict";var r={data:function(){return{nameRules:[function(t){return!!t||"Preencha o campo"},function(t){return!t||t.length<=50||"Este campo deve ter no máximo 50 dígitos"}],emailRules:[function(t){return!!t||"Informe o e-mail"},function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"Informe um e-mail válido"}],passwordRules:[function(t){return!!t||"Informe a senha"},function(t){return!t||t.length>=6||"A senha precisa ter pelo meno 6 dígitos"},function(t){return!t||t.length<=10||"A senha deve ter no máximo 10 dígitos"}]}},methods:{isEmailValid:function(t){if(!t)return!1;var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!e.test(t)},isPhoneNumberValid:function(t){return t&&(15===t.length||16==t.length)},isPasswordValid:function(t){return!!t&&!(t.length<6||t.length>10)},isNameValid:function(t){return!(!t||t.length>50)}}};e["a"]=r},d28b:function(t,e,n){var r=n("746f");r("iterator")},d980:function(t,e,n){},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("498a"),n("159b"),n("ddb0");var r=n("2fa7"),a=n("e587"),o=n("80d2");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function u(t){var e={},n=!0,r=!1,i=void 0;try{for(var s,u=t.split(c.styleList)[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var l=s.value,f=l.split(c.styleProp),d=Object(a["a"])(f,2),h=d[0],m=d[1];h=h.trim(),h&&("string"===typeof m&&(m=m.trim()),e[Object(o["c"])(h)]=m)}}catch(p){r=!0,i=p}finally{try{n||null==u.return||u.return()}finally{if(r)throw i}}return e}function l(){var t,e,n={},r=arguments.length;while(r--)for(var a=0,o=Object.keys(arguments[r]);a<o.length;a++)switch(t=o[a],t){case"class":case"style":case"directives":if(!arguments[r][t])break;if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[r].style)?arguments[r].style:[arguments[r].style];for(var c=0;c<i.length;c++){var l=i[c];"string"===typeof l&&(i[c]=u(l))}arguments[r].style=i}n[t]=n[t].concat(arguments[r][t]);break;case"staticClass":if(!arguments[r][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[r][t].trim();break;case"on":case"nativeOn":if(!arguments[r][t])break;n[t]||(n[t]={});for(var f=n[t],d=0,h=Object.keys(arguments[r][t]||{});d<h.length;d++)e=h[d],f[e]?f[e]=Array().concat(f[e],arguments[r][t][e]):f[e]=arguments[r][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[r][t])break;n[t]||(n[t]={}),n[t]=s({},arguments[r][t],{},n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[r][t])}return n}},dc22:function(t,e,n){"use strict";function r(t,e){var n=e.value,r=e.options||{passive:!0};window.addEventListener("resize",n,r),t._onResize={callback:n,options:r},e.modifiers&&e.modifiers.quiet||n()}function a(t){if(t._onResize){var e=t._onResize,n=e.callback,r=e.options;window.removeEventListener("resize",n,r),delete t._onResize}}var o={inserted:r,unbind:a};e["a"]=o},dfda:function(t,e,n){"use strict";var r=n("2b0e");e["a"]=r["a"].extend({name:"localable",props:{locale:String},computed:{currentLocale:function(){return this.locale||this.$vuetify.lang.current}}})},e20e:function(t,e,n){"use strict";var r=n("ba86"),a=n.n(r);a.a},ea4a:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"n",(function(){return p})),n.d(e,"l",(function(){return g})),n.d(e,"m",(function(){return v})),n.d(e,"k",(function(){return b})),n.d(e,"s",(function(){return y})),n.d(e,"A",(function(){return w})),n.d(e,"t",(function(){return k})),n.d(e,"r",(function(){return D})),n.d(e,"j",(function(){return O})),n.d(e,"o",(function(){return S})),n.d(e,"y",(function(){return x})),n.d(e,"x",(function(){return I})),n.d(e,"z",(function(){return U})),n.d(e,"w",(function(){return N})),n.d(e,"h",(function(){return Y})),n.d(e,"d",(function(){return A})),n.d(e,"q",(function(){return j})),n.d(e,"u",(function(){return C})),n.d(e,"v",(function(){return F})),n.d(e,"i",(function(){return B})),n.d(e,"p",(function(){return W})),n.d(e,"e",(function(){return R})),n.d(e,"f",(function(){return X})),n.d(e,"g",(function(){return q}));n("99af"),n("0d03"),n("e25e"),n("ac1f");var r=n("bf2d"),a=/^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/,o=/(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31],s=[0,31,29,31,30,31,30,31,31,30,31,30,31],c=28,u=31,l=12,f=1,d=1,h=7,m=60;function p(t,e,n){var r=A(t);return L(r,e[0],C),N(r),n&&x(r,n,r.hasTime),r}function g(t,e,n){var r=A(t);return L(r,e[e.length-1]),N(r),n&&x(r,n,r.hasTime),r}function v(t){var e=A(t);return e.day=d,U(e),N(e),e}function b(t){var e=A(t);return e.day=Y(e.year,e.month),U(e),N(e),e}function y(t){if("number"===typeof t)return t;if("string"===typeof t){var e=o.exec(t);return!!e&&60*parseInt(e[1])+parseInt(e[3]||0)}return"object"===Object(r["a"])(t)&&("number"===typeof t.hour&&"number"===typeof t.minute&&60*t.hour+t.minute)}function w(t){return!!a.exec(t)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=a.exec(t);if(!r){if(e)throw new Error("".concat(t," is not a valid timestamp. It must be in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored."));return null}var o={date:t,time:"",year:parseInt(r[1]),month:parseInt(r[2]),day:parseInt(r[4])||1,hour:parseInt(r[6])||0,minute:parseInt(r[8])||0,weekday:0,hasDay:!!r[4],hasTime:!(!r[6]||!r[8]),past:!1,present:!1,future:!1};return U(o),N(o),n&&x(o,n,o.hasTime),o}function D(t){return N({date:"",time:"",year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),weekday:t.getDay(),hour:t.getHours(),minute:t.getMinutes(),hasDay:!0,hasTime:!0,past:!1,present:!0,future:!1})}function O(t){return 1e4*t.year+100*t.month+t.day}function T(t){return 100*t.hour+t.minute}function S(t){return 1e4*O(t)+T(t)}function x(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=O(e),a=O(t),o=r===a;return t.hasTime&&n&&o&&(r=T(e),a=T(t),o=r===a),t.past=a<r,t.present=o,t.future=a>r,t}function I(t,e,n){return t.hasTime=!0,t.hour=Math.floor(e/m),t.minute=e%m,t.time=$(t),n&&x(t,n,!0),t}function U(t){return t.weekday=_(t),t}function N(t){return t.time=$(t),t.date=M(t),t}function _(t){if(t.hasDay){var e=Math.floor,n=t.day,r=(t.month+9)%l+1,a=e(t.year/100),o=t.year%100-(t.month<=2?1:0);return((n+e(2.6*r-.2)-2*a+o+e(o/4)+e(a/4))%7+7)%7}return t.weekday}function P(t){return t%4===0&&t%100!==0||t%400===0}function Y(t,e){return P(t)?s[e]:i[e]}function A(t){var e=t.date,n=t.time,r=t.year,a=t.month,o=t.day,i=t.weekday,s=t.hour,c=t.minute,u=t.hasDay,l=t.hasTime,f=t.past,d=t.present,h=t.future;return{date:e,time:n,year:r,month:a,day:o,weekday:i,hour:s,minute:c,hasDay:u,hasTime:l,past:f,present:d,future:h}}function E(t,e){var n=String(t);while(n.length<e)n="0"+n;return n}function M(t){var e="".concat(E(t.year,4),"-").concat(E(t.month,2));return t.hasDay&&(e+="-".concat(E(t.day,2))),e}function $(t){return t.hasTime?"".concat(E(t.hour,2),":").concat(E(t.minute,2)):""}function j(t){return t.day++,t.weekday=(t.weekday+1)%h,t.day>c&&t.day>Y(t.year,t.month)&&(t.day=d,t.month++,t.month>l&&(t.month=f,t.year++)),t}function C(t){return t.day--,t.weekday=(t.weekday+6)%h,t.day<d&&(t.month--,t.month<f&&(t.year--,t.month=l),t.day=Y(t.year,t.month)),t}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;while(--n>=0)e(t);return t}function B(t,e){var n=525600*(e.year-t.year),r=43800*(e.month-t.month),a=1440*(e.day-t.day),o=60*(e.hour-t.hour),i=e.minute-t.minute;return n+r+a+o+i}function L(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6;while(t.weekday!==e&&--r>=0)n(t);return t}function W(t){for(var e=[1,1,1,1,1,1,1],n=[0,0,0,0,0,0,0],r=0;r<t.length;r++)n[t[r]]=1;for(var a=0;a<h;a++){for(var o=1,i=1;i<h;i++){var s=(a+i)%h;if(n[s])break;o++}e[a]=n[a]*o}return e}function R(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=O(e),s=[],c=A(t),u=0,l=u===i;if(i<O(t))throw new Error("End date is earlier than start date.");while((!l||s.length<o)&&s.length<a)if(u=O(c),l=l||u===i,0!==r[c.weekday]){var f=A(c);N(f),x(f,n),s.push(f),c=F(c,j,r[c.weekday])}else c=j(c);if(!s.length)throw new Error("No dates found using specified start date, end date, and weekdays.");return s}function X(t,e,n,r,a){for(var o=[],i=0;i<r;i++){var s=(e+i)*n,c=A(t);o.push(I(c,s,a))}return o}function q(t,e){var n=function(t,e){return""};return"undefined"===typeof Intl||"undefined"===typeof Intl.DateTimeFormat?n:function(n,r){try{var a=new Intl.DateTimeFormat(t||void 0,e(n,r)),o="".concat(E(n.hour,2),":").concat(E(n.minute,2)),i=n.date;return a.format(new Date("".concat(i,"T").concat(o,":00+00:00")))}catch(s){return""}}}},eb97:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("upload",{attrs:{field:"img",width:t.width,height:t.height,"lang-type":"pt-br",url:t.uploadUrl,params:t.params,headers:t.headers,noCircle:!t.circle,noSquare:t.square,"img-format":"png"},on:{"crop-success":t.cropSuccess,"crop-upload-success":t.cropUploadSuccess,"crop-upload-fail":t.cropUploadFail},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})},a=[],o=(n("58da"),n("0b4d")),i={name:"UploadImage",components:{Upload:o["a"]},props:{uploadUrl:{required:!0},width:{default:200},height:{default:200},circle:{default:!0},square:{default:!0}},data:function(){return{params:{image:""},headers:{token:""},imgDataUrl:"",imageKey:0,show:!1}},mounted:function(){this.headers.token=this.apiToken||localStorage.token},methods:{cropSuccess:function(t){this.imgDataUrl=t,this.params.image=t},cropUploadSuccess:function(t){this.$emit("onCropUploadSuccess",t.corpo)},cropUploadFail:function(t,e){window.console.log("-------- upload fail --------"),window.console.log(t),window.console.log("field: "+e)},showDialog:function(t){this.show=!0,this.headers.token=t||localStorage.token},hideDialog:function(){this.show=!1}}},s=i,c=n("2877"),u=Object(c["a"])(s,r,a,!1,null,null,null);e["a"]=u.exports},f573:function(t,e,n){"use strict";n("a9e3"),n("d3b7"),n("e25e");var r=n("fe6c"),a=n("21be"),o=n("4ad4"),i=n("58df"),s=n("80d2"),c=Object(i["a"])(a["a"],r["a"],o["a"]);e["a"]=c.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=(!1!==this.attach?t.offsetLeft:t.left)||0,r=Math.max(t.width,e.width),a=0;if(a+=this.left?n-(r-t.width):n,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-o:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=0;return this.top&&(n+=t.height-e.height),!1!==this.attach?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(s["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(s["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var n=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.pageYOffset+e,r=this.dimensions.activator,a=this.dimensions.content.height,o=t+a,i=n<o;return i&&this.offsetOverflow&&r.top>a?t=this.pageYOffset+(r.top-a):i&&!this.allowOverflow?t=n-a-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=o["a"].options.methods.genActivatorListeners.call(this),n=e.click;return e.click=function(e){t.openOnClick&&n&&n(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var n=window.getComputedStyle(t);e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var n=e.$refs.content;n&&"none"===n.style.display?(n.style.display="inline-block",t(),n.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var n=this.getActivator();if(!n)return;e.activator=this.measure(n),e.activator.offsetLeft=n.offsetLeft,!1!==this.attach?e.activator.offsetTop=n.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){e.content=t.measure(t.$refs.content),t.dimensions=e}))}}})}}]);
//# sourceMappingURL=chunk-74d79f38.12ef1ec2.js.map