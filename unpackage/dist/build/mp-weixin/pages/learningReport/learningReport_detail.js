(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/learningReport/learningReport_detail"],{"0a35":function(e,t,i){"use strict";i.r(t);var n=i("ad93"),a=i("7bcc");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("5cf2");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=c.exports},1633:function(e,t,i){"use strict";(function(e){i("a371");n(i("66fd"));var t=n(i("0a35"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"5cf2":function(e,t,i){"use strict";var n=i("f61e"),a=i.n(n);a.a},"7bcc":function(e,t,i){"use strict";i.r(t);var n=i("94ae"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"94ae":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("7c51"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return u(e)||c(e)||r(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"===typeof e)return l(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var p,d=function(){i.e("components/uni-popup/uni-popup").then(function(){return resolve(i("106f"))}.bind(null,i)).catch(i.oe)},h=null,_={components:{uniPopup:d},data:function(){return{type:"",pieData:[],cWidth:e.upx2px(750),cHeight:e.upx2px(500),pixelRatio:1,serverData:"",token:"",error_count:0,count_list:[],team_id:"",time:"2020-06-04",time2:"2020-06-04",dateList:[{time:"近一周",dateStaus:!0},{time:"近一个月",dateStaus:!1},{time:"近一年",dateStaus:!1}],it:"day",msg:"该学生暂无错题!",Pie:{series:[]},student_name:"",team_name:"",user_id:"",exercises_id:"",exercises_list:[],page_change:1,size_change:5,update:!0,page:1,is_more:1,same_type:[]}},onReachBottom:function(){this.is_more&&(this.page++,this.get_hot_title())},onLoad:function(t){p=this,console.log(t),this.student_name=t.student_name,this.team_name=t.team_name,this.user_id=t.user_id,e.getStorageSync("token")&&(this.token=e.getStorageSync("token")),this.type=e.getStorageSync("type"),this.selectDate(0),this.get_baogao(),this.get_hot_title()},methods:{changeStyle:function(e){return e=e.replace(new RegExp("<p","gi"),'<p style="color: #000;position:relative"'),e=e.replace(new RegExp("<img","gi"),'<img style="max-width:95%;vertical-align: middle;width:auto;"'),e},selectDate:function(e){var t=this,i=this,n=new Date,a=n.getFullYear(),o=n.getMonth(),s=n.getMonth()+1,r=n.getDate();o<10&&(o="0"+o),s<10&&(s="0"+s),r<10&&(r="0"+r),this.dateList.forEach((function(n,o,c){e==o?(n.dateStaus=!0,0==e?(i.it="day",t.time="".concat(a,"-").concat(s,"-").concat(r-7),t.time2="".concat(a,"-").concat(s,"-").concat(r)):1==e?(i.it="day",t.time="".concat(a,"-").concat(s-1,"-").concat(r),t.time2="".concat(a,"-").concat(s,"-").concat(r)):(i.it="day",t.time="".concat(a-1,"-").concat(s,"-").concat(r),t.time2="".concat(a,"-").concat(s,"-").concat(r))):n.dateStaus=!1})),this.get_baogao(),this.page=1,this.exercises_list=[],this.get_hot_title()},get_baogao:function(){var e=this;e.$api.analysis_detail({token:e.token,user_id:e.user_id,start_time:e.time,end_time:e.time2}).then((function(t){console.log(t),e.pieData=t.data,200==t.code?(null!=t.data?e.Pie.series=t.data.analysis:e.Pie.series=[],p.showPie("canvasPie",e.Pie)):(e.pieData=[],e.Pie.series=[],p.showPie("canvasPie",e.Pie))}))},showPie:function(t,i){h=new n.default({$this:p,canvasId:t,type:"pie",fontSize:11,legend:{show:!0},background:"#FFFFFF",pixelRatio:p.pixelRatio,series:i.series,animation:!0,width:p.cWidth*p.pixelRatio-e.upx2px(200)*p.pixelRatio,height:p.cHeight*p.pixelRatio,dataLabel:!0,extra:{pie:{lableWidth:15}}})},touchPie:function(e){h.showToolTip(e,{format:function(e){return e.name+":"+e.data}})},bindMultiPickerChange:function(e){console.log(e),this.time=e.detail.value,this.get_baogao(),this.page=1,this.exercises_list=[],this.get_hot_title()},bindMultiPickerChange2:function(e){console.log(e),this.time2=e.detail.value,this.get_baogao(),this.page=1,this.exercises_list=[],this.get_hot_title()},changeData:function(){this.page_change++,this.open()},jiexi:function(t){e.navigateTo({url:"/pages/knowledgeBase/watchExplane?id="+t})},get_hot_title:function(){var e=this;e.$api.hot_error_exercises({token:e.token,user_id:e.user_id,start_time:e.time,end_time:e.time2,page:e.page,page_size:5}).then((function(t){200==t.code&&(console.log("res",t),e.is_more=t.is_more,1==e.page?e.exercises_list=t.data:e.exercises_list=[].concat(o(e.exercises_list),o(t.data)))}))},open:function(t){var i=this;this.exercises_id=t;var n={token:this.token,exercises_id:t,page:this.page_change,size:this.size_change},a=this.$api.teacher_same_type(n);a.then((function(t){console.log(t),200==t.code?(i.same_type=t.data.exercises_list,i.$refs.popup.open()):e.showToast({title:t.msg,icon:"none"})}))},hiddenmodal:function(){this.$refs.popup.close()},join_error:function(e,t){var i=this,n=this.$api.teacher_join_error({token:this.token,exercises_id:t,is_vip:1});n.then((function(t){200==t.code&&(i.exercises_list[e].is_error?i.exercises_list[e].is_error=0:i.exercises_list[e].is_error=1),i.update=!1,i.update=!0}))},join_error2:function(e,t){var i=this,n=this.$api.teacher_join_error({token:this.token,exercises_id:t});n.then((function(t){200==t.code&&(i.same_type[e].is_error?i.same_type[e].is_error=0:i.same_type[e].is_error=1),i.update=!1,i.update=!0}))}}};t.default=_}).call(this,i("543d")["default"])},ad93:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniPopup:function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"106f"))}},a=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.exercises_list,(function(t,i){var n=e.__get_orig(t),a=e.changeStyle(t.content);return{$orig:n,m0:a}}))),n=e.__map(e.same_type,(function(t,i){var n=e.__get_orig(t),a=e.changeStyle(t.content);return{$orig:n,m1:a}}));e.$mp.data=Object.assign({},{$root:{l0:i,l1:n}})},o=[]},f61e:function(e,t,i){}},[["1633","common/runtime","common/vendor"]]]);