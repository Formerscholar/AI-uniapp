(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/person/ListStudents"],{"11bd":function(t,e,n){"use strict";n.r(e);var o=n("3a1a"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"3a1a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{student:[],teacher:[],team_id:"",team_name:"",update:!0}},onLoad:function(e){console.log(e),this.team_id=e.team_id,this.team_name=e.team_name,t.getStorageSync("token")&&(this.token=t.getStorageSync("token")),this.get_student_list()},computed:{},methods:{get_student_list:function(){var t=this;this.$api.team_student_list({token:this.token,team_id:this.team_id}).then((function(e){console.log(e),200==e.code&&(console.log(e.data),t.student=e.data.student,t.teacher=e.data.teacher)}))},deItem:function(e){var n=this;t.showModal({title:"确定删除吗？",success:function(o){if(o.confirm){var a={token:n.token,user_id:e};console.log(a),n.$api.remove_student(a).then((function(e){200==e.code?(t.showToast({title:"删除成功"}),n.get_student_list()):t.showToast({title:e.msg,icon:"none"})}))}}})},delClass:function(){var e=this;t.showModal({title:"确定删除吗？",success:function(n){n.confirm&&e.$api.remove_team({token:e.token,team_id:e.team_id}).then((function(n){if(console.log(n),200==n.code){t.showToast({title:"删除成功"}),e.get_student_list();var o=getCurrentPages(),a=o[o.length-2];t.navigateBack({success:function(){a.onLoad()}})}else t.showToast({title:n.msg,icon:"none"})}))}})},report_detail:function(e,n,o){t.navigateTo({url:"/pages/learningReport/learningReport_detail?team_name=".concat(e,"&student_name=").concat(n,"&user_id=").concat(o)})}}};e.default=n}).call(this,n("543d")["default"])},"6b78":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"6d96":function(t,e,n){"use strict";(function(t){n("2274");o(n("66fd"));var e=o(n("a0fd"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8f1b":function(t,e,n){"use strict";var o=n("92d3"),a=n.n(o);a.a},"92d3":function(t,e,n){},a0fd:function(t,e,n){"use strict";n.r(e);var o=n("6b78"),a=n("11bd");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("8f1b");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports}},[["6d96","common/runtime","common/vendor"]]]);