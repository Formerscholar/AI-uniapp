(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/share"],{7595:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},r=[]},d35c:function(e,t,n){"use strict";var o=n("e48d"),i=n.n(o);i.a},d6e3:function(e,t,n){"use strict";(function(e){n("a371");o(n("66fd"));var t=o(n("ea92"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e48d:function(e,t,n){},ea92:function(e,t,n){"use strict";n.r(t);var o=n("7595"),i=n("f945");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("d35c");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=s.exports},f945:function(e,t,n){"use strict";n.r(t);var o=n("fcf2"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},fcf2:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{user_info:{true_name:"",school_list:{school_name:""}},id:"",true_name:"",name:"",school:"",class_id:"",teacher_name:"",disable:!1,token:"",code:""}},onLoad:function(t){console.log("options",t),e.getStorageSync("userInfo").token&&(this.token=e.getStorageSync("userInfo").token),this.id=t.id,this.name=t.name,this.school=t.school,this.class_id=t.class_id,this.teacher_name=t.teacher_name},methods:r(r({},(0,o.mapMutations)(["login","set_type"])),{},{bindgetuserinfo:function(t,n){var o=this;this.true_name?e.login({success:function(i){var r=o;r.code=i.code,i.code&&e.getSetting({success:function(o){console.log("res.authSetting",o.authSetting),o.authSetting["scope.userInfo"]&&e.getUserInfo({success:function(o){console.log(o);var i={code:r.code,token:r.token};r.$api.share_login(i).then((function(o){r.openid_tmp=o.data.openid,console.log(r.openid_tmp),200==o.code?(e.setStorage({key:"userinfo_tmp",data:o.data.userinfo}),r.true_name=o.data.userinfo.true_name,r.disable=!0,r.joinTeam(t,n)):r.disable=!1}))},fail:function(e){}})}})}}):e.showToast({title:"请输入真实姓名",icon:"none"})},joinTeam:function(t,n){var o=this,i={code:this.code,user_name:t.detail.userInfo.nickName,avatar:t.detail.userInfo.avatarUrl,gender:t.detail.userInfo.gender,user_type:n,classid:this.class_id,openid:this.openid_tmp,true_name:this.true_name};console.log(i),this.$api.join_team(i).then((function(t){200==t.code?(o.login(t.data),e.showToast({title:t.msg,icon:"none"}),setTimeout((function(){e.switchTab({url:"/pages/index/index"})}),1e3)):e.showToast({title:t.msg,icon:"none"})}))}})};t.default=c}).call(this,n("543d")["default"])}},[["d6e3","common/runtime","common/vendor"]]]);