(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myPaper/new_paper"],{"0886":function(t,e,n){},"4eea":function(t,e,n){"use strict";n.r(e);var o=n("dcbe"),i=n("68fe");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("afae");var a,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},5882:function(t,e,n){"use strict";(function(t){function o(t){return r(t)||a(t)||s(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function r(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=getApp(),p=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("768a"))}.bind(null,n)).catch(n.oe)},l={components:{uniPopup:p},data:function(){return{page:1,is_more:1,type:4,token:"",xb_list:[],student_list:[],is_more2:1,subject_list:[],subject_id:"",based_id:"",email:"",tpmid:""}},onReachBottom:function(){this.is_more&&3==t.getStorageSync("type")&&(this.page++,this.school_test_paper()),this.is_more2&&4==t.getStorageSync("type")&&(this.page++,this.get_my_test_paper())},onShow:function(){},onLoad:function(){this.tpmid=u.globalData.settings.tpmid,console.log("this.tpmid",this.tpmid),t.getStorageSync("token")&&(this.token=t.getStorageSync("token")),this.type=t.getStorageSync("type"),3==this.type?this.school_test_paper():this.subject_fenlei()},methods:{generated:function(e){var n=this;n.based_id=e,console.log("_this.tpmid",n.tpmid);var o=[];4==n.type?o=n.tpmid.user_errorbook:(o=n.tpmid.teacher_paper,console.log("arrTpmid",o)),t.requestSubscribeMessage({tmplIds:o,complete:function(t){n.token;n.fasong()},success:function(t){},fail:function(t){}})},fasong:function(){var e=this,n={token:this.token,based_id:this.based_id,flag:2};3==t.getStorageSync("type")&&this.$api.get_download_based(n).then((function(n){console.log(n),200==n.code?(e.email="",e.$refs.popup2.close(),t.showToast({title:n.msg,icon:"none"})):e.$refs.popup2.open()}))},cancelEmial:function(){this.$refs.popup2.close()},fasong2:function(){var e=this;3==t.getStorageSync("type")&&this.$api.get_download_based({token:this.token,based_id:this.based_id,email:this.email,flag:2}).then((function(n){console.log(n),200==n.code&&(e.email="",e.$refs.popup2.close(),t.showToast({title:"下载成功，已发送邮箱！",icon:"none"})),e.$refs.popup2.close()}))},subject_fenlei:function(){var t=this;this.$api.subject().then((function(e){console.log("list",e.data);var n=e.data;n.forEach((function(t,e,n){t.status=!1})),t.subject_list=n,t.selection(0)}))},selection:function(t){var e=this;this.page=1,this.student_list=[],this.subject_list.forEach((function(n,o,i){console.log(t),t==o?(n.status=!0,e.subject_id=n.id,e.get_my_test_paper()):n.status=!1}))},get_my_test_paper:function(){var t=this;this.$api.newest_paper({token:this.token,page:this.page,page_size:10,subject_id:this.subject_id}).then((function(e){console.log(e),e.code,t.is_more2=e.is_more,1==t.page?t.student_list=e.data.paper_list:t.student_list=[].concat(o(t.student_list),o(e.data.paper_list))}))},school_test_paper:function(){var t=this;this.$api.teacher_newest_paper({token:this.token,page:this.page,page_size:10}).then((function(e){console.log(e),t.is_more=e.is_more,e.code,1==t.page?t.xb_list=e.data.school_based_list:t.xb_list=[].concat(o(t.xb_list),o(e.data.school_based_list))}))},chakan:function(e,n,o,i){t.navigateTo({url:"/pages/myPaper/seePapers?based_id="+e+"&title="+n+"&subject="+o+"&subject_name="+i})}}};e.default=l}).call(this,n("543d")["default"])},"68fe":function(t,e,n){"use strict";n.r(e);var o=n("5882"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a},"8aac":function(t,e,n){"use strict";(function(t){n("2274");o(n("66fd"));var e=o(n("4eea"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},afae:function(t,e,n){"use strict";var o=n("0886"),i=n.n(o);i.a},dcbe:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}));var o={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"768a"))}},i=function(){var t=this,e=t.$createElement;t._self._c},s=[]}},[["8aac","common/runtime","common/vendor"]]]);