(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-497e224f"],{"0789":function(t,e,n){"use strict";n("99af");var i=n("d9f7");function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(i))}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var a="transition".concat(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(function(t){return t.style.display="none"}))),e(a,Object(i["a"])(n.data,o),n.children)}}}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",Object(i["a"])(r.data,{props:{name:t},on:e}),r.children)}}}var s=n("2fa7"),c=n("80d2"),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat(Object(c["D"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(s["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle,a="".concat(e[i],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=r.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=a}))},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=Object(s["a"])({transition:"",visibility:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}};n.d(e,"g",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return m})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return v}));a("carousel-transition"),a("carousel-reverse-transition");var l=a("tab-transition"),d=a("tab-reverse-transition"),f=(a("menu-transition"),a("fab-transition","center center","out-in"),a("dialog-transition"),a("dialog-bottom-transition"),a("fade-transition")),h=a("scale-transition"),m=(a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition"),a("slide-x-transition")),p=(a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition"),o("expand-transition",u())),v=o("expand-x-transition",u("",!0))},"17a1":function(t,e,n){"use strict";var i=n("d980"),r=n.n(i);r.a},"2c3c":function(t,e,n){"use strict";var i={methods:{focusToNext:function(t){this.$refs[t].focus()},setData:function(t,e){return this.$data[e]=t}}};e["a"]=i},"578e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile gray2"},[n("div",{staticClass:"container"},[n("div",{staticClass:"elevation-1 card"},[t._m(0),t._t("default")],2)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/logo_preto_branco.png"}})])}],a={name:"ProfileTemplate"},o=a,s=(n("e20e"),n("2877")),c=Object(s["a"])(o,i,r,!1,null,"5808c111",null);e["a"]=c.exports},"58da":function(t,e,n){},"5f08":function(t,e,n){"use strict";n("99af"),n("0d03"),n("a9e3"),n("ac1f"),n("466d"),n("1276");var i=n("e587"),r={filters:{dayOfWeek:function(t){var e=new Date(t),n=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];return n[e.getUTCDay()]},time:function(t){if(!t)return"";var e=t.split(":"),n=Object(i["a"])(e,2),r=n[0],a=n[1];return"".concat(r,":").concat(a)}},methods:{formatDateStringToDatePtBr:function(t){if(!t)return t;t=t.split(" ");var e=t[0].split("-"),n=Object(i["a"])(e,3),r=n[0],a=n[1],o=n[2];return"".concat(o,"/").concat(a,"/").concat(r)},formatDateToDatePtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,i=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(e,"/").concat(n,"/").concat(i)},formatDateToDateEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,i=t.getFullYear();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),"".concat(i,"-").concat(n,"-").concat(e)},formatDateTimeToStringPtBr:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,i=t.getFullYear(),r=t.getHours(),a=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(r)<10&&(r="0".concat(r)),Number(a)<10&&(a="0".concat(a)),"".concat(e,"/").concat(n,"/").concat(i," ").concat(r,":").concat(a)},formatDateTimeToStringEn:function(t){if(!t)return t;var e=t.getDate(),n=t.getMonth()+1,i=t.getFullYear(),r=t.getHours(),a=t.getMinutes();return Number(e)<10&&(e="0".concat(e)),Number(n)<10&&(n="0".concat(n)),Number(r)<10&&(r="0".concat(r)),Number(a)<10&&(a="0".concat(a)),"".concat(i,"-").concat(n,"-").concat(e," ").concat(r,":").concat(a)},parseDate:function(t){var e=t.match(/(\d+)/g);return new Date(e[0],e[1]-1,e[2])}}};e["a"]=r},"615b":function(t,e,n){},"6cd4":function(t,e,n){"use strict";var i=n("2ce5"),r={mixins:[i["a"]],computed:{user:function(){return this.getUser?this.getUser():{id:null,uuid:null,name:null,email:null,enabled:null,phone_number:null,image_url:null,create_at:null}},userState:function(){return this.$store.getters["UserStore/user"]}},methods:{isUserAutenticated:function(){return this.$store.getters["UserStore/tokenValido"]},storeUser:function(t){this.$store.dispatch("BarberStore/logout"),this.$store.dispatch("UserStore/autenticar",t)},getUser:function(){return this.$store.getters["UserStore/user"]},getUserToken:function(){return this.$store.getters["UserStore/payloadToken"]},logoutUser:function(){this.$store.dispatch("UserStore/logout")}}};e["a"]=r},a452:function(t,e,n){"use strict";var i=n("2fa7"),r=n("2b0e");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(i["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(i["a"])({},t,(function(t){this.internalLazyValue=t}))})}var o=a();e["a"]=o},afdd:function(t,e,n){"use strict";var i=n("8336");e["a"]=i["a"]},b3f7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("profile-template",{staticClass:"profile gray2"},[n("div",{staticClass:"image-box profile-imagem-main gray1 mt-8 elevation-1"},[t.user.image_url?n("img",{staticClass:"profile-image",attrs:{src:t.userImageUrl}}):t._e(),n("btn-icon",{staticClass:"success btn-upload elevation-1",attrs:{icon:"photo_camera",small:!1},on:{clicked:t.uploadProfileImage}}),n("upload-image",{ref:"profileImage",attrs:{uploadUrl:t.uploadImageUrl,cropUploadFail:t.onUploadProfileImageFail},on:{onCropUploadSuccess:t.onUploadProfileImageSuccess}})],1),t.user?n("div",{staticClass:"mt-8"},[n("input-field",{attrs:{id:"name",label:"Nome",rules:t.nameRules,value:t.user.name,icon:"person",success:t.isNameValid(t.name)},on:{onKeyUp:t.onKeyUp,onKeyUpEnter:function(e){return t.focusToNext("phoneNumber")}}}),n("phone-field",{attrs:{id:"phoneNumber",label:"Telefone",icon:"phone",success:t.isPhoneNumberValid(t.phoneNumber),value:this.setPhoneMask(t.phoneNumber),required:!0},on:{onKeyUp:t.onKeyUp}}),n("date-picker",{attrs:{id:"bornDate",label:"Data de Nascimento",success:!0,value:t.user.born_date,max:t.maxDate},on:{change:t.onKeyUp}})],1):t._e(),n("div",{staticClass:"mt-8 mb-4 mx-sm-12 text-center"},[n("btn-secondary",{attrs:{text:"Salvar",dark:"",disabled:t.btnDisabled,loading:t.loading},on:{clicked:t.save}}),n("btn-text",{staticClass:"mt-4",attrs:{text:"Cancelar"},on:{clicked:t.goToBack}})],1)])},r=[],a=(n("99af"),n("0d03"),n("b0c0"),n("e7e3")),o=n("ba78"),s=n("39db"),c=n("b7c5"),u=n("3b11"),l=n("93bc"),d=n("578e"),f=n("eb97"),h=n("5f08"),m=n("2c3c"),p=n("5988"),v=n("5ff8"),g=n("6cd4"),y=n("be1f"),b={name:"Profile",components:{BtnSecondary:a["a"],BtnIcon:o["a"],BtnText:s["a"],DatePicker:c["a"],InputField:u["a"],PhoneField:l["a"],ProfileTemplate:d["a"],UploadImage:f["a"]},mixins:[h["a"],m["a"],p["a"],v["a"],g["a"],y["a"]],data:function(t){return{bornDate:null,name:null,phoneNumber:null,nameRules:[function(t){return!!t||"Informe o nome"}],loading:!1,uploadImageUrl:"".concat(t.$url_api,"/user/image")}},computed:{btnDisabled:function(){var t=this.removeMask(this.phoneNumber);return!this.name||t.length<10},maxDate:function(){return this.formatDateToDateEn(new Date)},userToken:function(){return localStorage.userToken},userImageUrl:function(){return"".concat(this.$url_backend).concat(this.user.image_url)}},mounted:function(){this.name=this.user.name,this.phoneNumber=this.user.phone_number,this.bornDate=this.user.born_date||this.formatDateToDateEn(new Date)},methods:{save:function(){var t=this;this.loading=!0;var e=new Date;e.setFullYear(e.getFullYear()-18),e<new Date(this.parseDate(this.bornDate))?this.setErro("O Meu Barbeiro só é permitido para maiores de idade!"):this.$axios.put("user/".concat(this.user.id),{born_date:this.bornDate,name:this.name,phone_number:this.removeMask(this.phoneNumber)}).then((function(e){200===e.data.codigo?(t.showSnackbar("Perfil salvar com sucesso!"),t.storeUser(e.data.corpo),t.goToBack()):t.setErro(e.data.corpo)})).catch((function(){return t.setErro("Não foi possível alterar o perfil!")}))},onKeyUp:function(t,e){this.$data[e]=t},onUploadProfileImageFail:function(){this.showSnackbarErro("Não foi possível salvar a imagem!")},onUploadProfileImageSuccess:function(t){this.storeUser(t),this.$refs.profileImage.hideDialog(),this.showSnackbar("Imagem atualizada com sucesso!")},setErro:function(t){this.loading=!1,this.showSnackbarErro(t)},uploadProfileImage:function(){this.$refs.profileImage.showDialog(this.userToken)}}},w=b,k=(n("17a1"),n("2877")),x=Object(k["a"])(w,i,r,!1,null,"be2be394",null);e["default"]=x.exports},ba78:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{fab:"",dark:"",small:t.small,color:t.color},on:{click:t.clicked}},[n("v-icon",{attrs:{dark:""}},[t._v(t._s(t.icon))])],1)},r=[],a={name:"BtnIcon",props:{icon:{required:!0},color:{default:"primary"},small:{default:!1}},methods:{clicked:function(){this.$emit("clicked")}}},o=a,s=n("2877"),c=n("6544"),u=n.n(c),l=n("8336"),d=n("132d"),f=Object(s["a"])(o,i,r,!1,null,null,null);e["a"]=f.exports;u()(f,{VBtn:l["a"],VIcon:d["a"]})},ba86:function(t,e,n){},be1f:function(t,e,n){"use strict";var i={data:function(){return{nameRules:[function(t){return!!t||"Preencha o campo"},function(t){return!t||t.length<=50||"Este campo deve ter no máximo 50 dígitos"}],emailRules:[function(t){return!!t||"Informe o e-mail"},function(t){return!t||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"Informe um e-mail válido"}],passwordRules:[function(t){return!!t||"Informe a senha"},function(t){return!t||t.length>=6||"A senha precisa ter pelo meno 6 dígitos"},function(t){return!t||t.length<=10||"A senha deve ter no máximo 10 dígitos"}]}},methods:{isEmailValid:function(t){if(!t)return!1;var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!e.test(t)},isPhoneNumberValid:function(t){return t&&(15===t.length||16==t.length)},isPasswordValid:function(t){return!!t&&!(t.length<6||t.length>10)},isNameValid:function(t){return!(!t||t.length>50)}}};e["a"]=i},d28b:function(t,e,n){var i=n("746f");i("iterator")},d980:function(t,e,n){},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("498a"),n("159b"),n("ddb0");var i=n("2fa7"),r=n("e587"),a=n("80d2");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function u(t){var e={},n=!0,i=!1,o=void 0;try{for(var s,u=t.split(c.styleList)[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var l=s.value,d=l.split(c.styleProp),f=Object(r["a"])(d,2),h=f[0],m=f[1];h=h.trim(),h&&("string"===typeof m&&(m=m.trim()),e[Object(a["c"])(h)]=m)}}catch(p){i=!0,o=p}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return e}function l(){var t,e,n={},i=arguments.length;while(i--)for(var r=0,a=Object.keys(arguments[i]);r<a.length;r++)switch(t=a[r],t){case"class":case"style":case"directives":if(!arguments[i][t])break;if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var o=void 0;o=Array.isArray(arguments[i].style)?arguments[i].style:[arguments[i].style];for(var c=0;c<o.length;c++){var l=o[c];"string"===typeof l&&(o[c]=u(l))}arguments[i].style=o}n[t]=n[t].concat(arguments[i][t]);break;case"staticClass":if(!arguments[i][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":if(!arguments[i][t])break;n[t]||(n[t]={});for(var d=n[t],f=0,h=Object.keys(arguments[i][t]||{});f<h.length;f++)e=h[f],d[e]?d[e]=Array().concat(d[e],arguments[i][t][e]):d[e]=arguments[i][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;n[t]||(n[t]={}),n[t]=s({},arguments[i][t],{},n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[i][t])}return n}},dfda:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"localable",props:{locale:String},computed:{currentLocale:function(){return this.locale||this.$vuetify.lang.current}}})},e20e:function(t,e,n){"use strict";var i=n("ba86"),r=n.n(i);r.a},e449:function(t,e,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("7db0"),n("4160"),n("a630"),n("caad"),n("c975"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("acd8"),n("e25e"),n("2532"),n("3ca3"),n("498a"),n("159b");var i=n("284c"),r=n("2fa7"),a=(n("ee6f"),n("480e")),o=n("4ad4"),s=n("16b7"),c=n("b848"),u=n("75eb"),l=n("f573"),d=n("e4d3"),f=n("f2e7"),h=n("7560"),m=n("a293"),p=n("dc22"),v=n("58df"),g=n("d9bd"),y=n("80d2");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=Object(v["a"])(c["a"],s["a"],u["a"],l["a"],d["a"],f["a"],h["a"]);e["a"]=k.extend({name:"v-menu",provide:function(){return{isInMenu:!0,theme:this.theme}},directives:{ClickOutside:m["a"],Resize:p["a"]},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(y["g"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(y["g"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(y["g"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(y["g"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(y["g"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(y["g"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var n=this.tiles[t];n.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=n.offsetTop-n.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["d"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var n=e.offsetTop-this.calcScrollPosition(),i=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-i-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==y["v"].tab){if(t.keyCode===y["v"].down)this.nextTile();else if(t.keyCode===y["v"].up)this.prevTile();else{if(t.keyCode!==y["v"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=o["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?w({},t,{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=l["a"].options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},this.showLazyContent((function(){return[t]}))):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:function(){t.isActive=!1},args:{closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(i["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:w({},this.getScopeIdAttrs(),{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:w({},this.rootThemeClasses,Object(r["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var n=e.target;n.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},this.getContentSlot())])},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown:function(t){var e=this;if(t.keyCode===y["v"].esc){setTimeout((function(){e.isActive=!1}));var n=this.getActivator();this.$nextTick((function(){return n&&n.focus()}))}else!this.isActive&&[y["v"].up,y["v"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.genTransition()])}})},ea4a:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"n",(function(){return p})),n.d(e,"l",(function(){return v})),n.d(e,"m",(function(){return g})),n.d(e,"k",(function(){return y})),n.d(e,"s",(function(){return b})),n.d(e,"A",(function(){return w})),n.d(e,"t",(function(){return k})),n.d(e,"r",(function(){return x})),n.d(e,"j",(function(){return O})),n.d(e,"o",(function(){return D})),n.d(e,"y",(function(){return I})),n.d(e,"x",(function(){return S})),n.d(e,"z",(function(){return A})),n.d(e,"w",(function(){return _})),n.d(e,"h",(function(){return U})),n.d(e,"d",(function(){return $})),n.d(e,"q",(function(){return M})),n.d(e,"u",(function(){return L})),n.d(e,"v",(function(){return B})),n.d(e,"i",(function(){return F})),n.d(e,"p",(function(){return z})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return q})),n.d(e,"g",(function(){return W}));n("99af"),n("0d03"),n("e25e"),n("ac1f");var i=n("bf2d"),r=/^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?$/,a=/(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/,o=[0,31,28,31,30,31,30,31,31,30,31,30,31],s=[0,31,29,31,30,31,30,31,31,30,31,30,31],c=28,u=31,l=12,d=1,f=1,h=7,m=60;function p(t,e,n){var i=$(t);return H(i,e[0],L),_(i),n&&I(i,n,i.hasTime),i}function v(t,e,n){var i=$(t);return H(i,e[e.length-1]),_(i),n&&I(i,n,i.hasTime),i}function g(t){var e=$(t);return e.day=f,A(e),_(e),e}function y(t){var e=$(t);return e.day=U(e.year,e.month),A(e),_(e),e}function b(t){if("number"===typeof t)return t;if("string"===typeof t){var e=a.exec(t);return!!e&&60*parseInt(e[1])+parseInt(e[3]||0)}return"object"===Object(i["a"])(t)&&("number"===typeof t.hour&&"number"===typeof t.minute&&60*t.hour+t.minute)}function w(t){return!!r.exec(t)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,i=r.exec(t);if(!i){if(e)throw new Error("".concat(t," is not a valid timestamp. It must be in the format of YYYY-MM-DD or YYYY-MM-DD hh:mm. Zero-padding is optional and seconds are ignored."));return null}var a={date:t,time:"",year:parseInt(i[1]),month:parseInt(i[2]),day:parseInt(i[4])||1,hour:parseInt(i[6])||0,minute:parseInt(i[8])||0,weekday:0,hasDay:!!i[4],hasTime:!(!i[6]||!i[8]),past:!1,present:!1,future:!1};return A(a),_(a),n&&I(a,n,a.hasTime),a}function x(t){return _({date:"",time:"",year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),weekday:t.getDay(),hour:t.getHours(),minute:t.getMinutes(),hasDay:!0,hasTime:!0,past:!1,present:!0,future:!1})}function O(t){return 1e4*t.year+100*t.month+t.day}function T(t){return 100*t.hour+t.minute}function D(t){return 1e4*O(t)+T(t)}function I(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=O(e),r=O(t),a=i===r;return t.hasTime&&n&&a&&(i=T(e),r=T(t),a=i===r),t.past=r<i,t.present=a,t.future=r>i,t}function S(t,e,n){return t.hasTime=!0,t.hour=Math.floor(e/m),t.minute=e%m,t.time=E(t),n&&I(t,n,!0),t}function A(t){return t.weekday=j(t),t}function _(t){return t.time=E(t),t.date=N(t),t}function j(t){if(t.hasDay){var e=Math.floor,n=t.day,i=(t.month+9)%l+1,r=e(t.year/100),a=t.year%100-(t.month<=2?1:0);return((n+e(2.6*i-.2)-2*r+a+e(a/4)+e(r/4))%7+7)%7}return t.weekday}function C(t){return t%4===0&&t%100!==0||t%400===0}function U(t,e){return C(t)?s[e]:o[e]}function $(t){var e=t.date,n=t.time,i=t.year,r=t.month,a=t.day,o=t.weekday,s=t.hour,c=t.minute,u=t.hasDay,l=t.hasTime,d=t.past,f=t.present,h=t.future;return{date:e,time:n,year:i,month:r,day:a,weekday:o,hour:s,minute:c,hasDay:u,hasTime:l,past:d,present:f,future:h}}function P(t,e){var n=String(t);while(n.length<e)n="0"+n;return n}function N(t){var e="".concat(P(t.year,4),"-").concat(P(t.month,2));return t.hasDay&&(e+="-".concat(P(t.day,2))),e}function E(t){return t.hasTime?"".concat(P(t.hour,2),":").concat(P(t.minute,2)):""}function M(t){return t.day++,t.weekday=(t.weekday+1)%h,t.day>c&&t.day>U(t.year,t.month)&&(t.day=f,t.month++,t.month>l&&(t.month=d,t.year++)),t}function L(t){return t.day--,t.weekday=(t.weekday+6)%h,t.day<f&&(t.month--,t.month<d&&(t.year--,t.month=l),t.day=U(t.year,t.month)),t}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;while(--n>=0)e(t);return t}function F(t,e){var n=525600*(e.year-t.year),i=43800*(e.month-t.month),r=1440*(e.day-t.day),a=60*(e.hour-t.hour),o=e.minute-t.minute;return n+i+r+a+o}function H(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6;while(t.weekday!==e&&--i>=0)n(t);return t}function z(t){for(var e=[1,1,1,1,1,1,1],n=[0,0,0,0,0,0,0],i=0;i<t.length;i++)n[t[i]]=1;for(var r=0;r<h;r++){for(var a=1,o=1;o<h;o++){var s=(r+o)%h;if(n[s])break;a++}e[r]=n[r]*a}return e}function Y(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:42,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=O(e),s=[],c=$(t),u=0,l=u===o;if(o<O(t))throw new Error("End date is earlier than start date.");while((!l||s.length<a)&&s.length<r)if(u=O(c),l=l||u===o,0!==i[c.weekday]){var d=$(c);_(d),I(d,n),s.push(d),c=B(c,M,i[c.weekday])}else c=M(c);if(!s.length)throw new Error("No dates found using specified start date, end date, and weekdays.");return s}function q(t,e,n,i,r){for(var a=[],o=0;o<i;o++){var s=(e+o)*n,c=$(t);a.push(S(c,s,r))}return a}function W(t,e){var n=function(t,e){return""};return"undefined"===typeof Intl||"undefined"===typeof Intl.DateTimeFormat?n:function(n,i){try{var r=new Intl.DateTimeFormat(t||void 0,e(n,i)),a="".concat(P(n.hour,2),":").concat(P(n.minute,2)),o=n.date;return r.format(new Date("".concat(o,"T").concat(a,":00+00:00")))}catch(s){return""}}}},eb97:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("upload",{attrs:{field:"img",width:t.width,height:t.height,"lang-type":"pt-br",url:t.uploadUrl,params:t.params,headers:t.headers,noCircle:!t.circle,noSquare:t.square,"img-format":"png"},on:{"crop-success":t.cropSuccess,"crop-upload-success":t.cropUploadSuccess,"crop-upload-fail":t.cropUploadFail},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})},r=[],a=(n("58da"),n("0b4d")),o={name:"UploadImage",components:{Upload:a["a"]},props:{uploadUrl:{required:!0},width:{default:200},height:{default:200},circle:{default:!0},square:{default:!0}},data:function(){return{params:{image:""},headers:{token:""},imgDataUrl:"",imageKey:0,show:!1}},mounted:function(){this.headers.token=this.apiToken||localStorage.token},methods:{cropSuccess:function(t){this.imgDataUrl=t,this.params.image=t},cropUploadSuccess:function(t){this.$emit("onCropUploadSuccess",t.corpo)},cropUploadFail:function(t,e){window.console.log("-------- upload fail --------"),window.console.log(t),window.console.log("field: "+e)},showDialog:function(t){this.show=!0,this.headers.token=t||localStorage.token},hideDialog:function(){this.show=!1}}},s=o,c=n("2877"),u=Object(c["a"])(s,i,r,!1,null,null,null);e["a"]=u.exports},ee6f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-497e224f.4d2f2f84.js.map