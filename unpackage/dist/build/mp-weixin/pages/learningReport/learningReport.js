(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/learningReport/learningReport"],{"0078":function(t,e,a){"use strict";(function(t){a("2274");n(a("66fd"));var e=n(a("123b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"0f72":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(a("4b95"));var n,i=o(a("da4b"));function o(t){return t&&t.__esModule?t:{default:t}}var u=null,s={data:function(){return{update:!0,pieData:[],cWidth:t.upx2px(750),cHeight:t.upx2px(500),pixelRatio:1,serverData:"",token:"",exercises_list:[],subject_list:[],subject_id:1,error_count:0,key:1,class_name:"",time:"",time2:"",dateList:[{time:"近一周",dateStaus:!0},{time:"近一个月",dateStaus:!1},{time:"近一年",dateStaus:!1}],it:"day",msg:"该科目暂无错题!",Pie:{series:[]}}},onLoad:function(){n=this,this.class_name=t.getStorageSync("userInfo").school.grade_name+t.getStorageSync("userInfo").true_name,this.selectDate(0)},onShow:function(){t.getStorageSync("token")&&(this.token=t.getStorageSync("token")),this.subject_fenlei()},methods:{changeStyle:function(t){return t=t.replace(new RegExp("<p","gi"),'<p style="color: #000;position:relative"'),t=t.replace(new RegExp("<img","gi"),'<img style="max-width:95%;vertical-align: middle;width:auto;"'),t},subject_fenlei:function(){var t=this;this.$api.subject().then((function(e){console.log(e);var a=e.data;a.forEach((function(t,e,a){t.status=!1})),t.subject_list=a,t.selection(0),console.log(t.subject_list)}))},get_baogao:function(){var t=this,e={token:t.token,subject_id:t.subject_id,start_time:t.time,end_time:t.time2};t.$api.my_study_analysis(e).then((function(e){console.log(e),t.pieData=e.data,200==e.code?(null!=e.data?t.Pie.series=e.data:t.Pie.series=[],n.showPie("canvasPie",t.Pie)):(t.pieData=[],t.Pie.series=[],n.showPie("canvasPie",t.Pie))}))},getDateRange:function(t,e,a){var n,i=864e5,o=[];return 1==a?(n=new Date(t.getTime()-e*i),o.push(this.formateDate(n)),o.push(this.formateDate(t))):(n=new Date(t.getTime()+e*i),o.push(this.formateDate(t)),o.push(this.formateDate(n))),o},formateDate:function(t){var e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return a<10&&(a="0"+a),n<10&&(n="0"+n),e+"-"+a+"-"+n},selectDate:function(t){var e=this,a=new Date;this.dateList.forEach((function(n,i,o){if(t==i)if(n.dateStaus=!0,0==t){e.it="day";var u=e.getDateRange(a,6,!0);e.time=u[0],e.time2=u[1]}else if(1==t){e.it="day";var s=e.getDateRange(a,30,!0);e.time=s[0],e.time2=s[1]}else{e.it="day";var c=e.getDateRange(a,365,!0);e.time=c[0],e.time2=c[1]}else n.dateStaus=!1})),this.get_baogao()},selection:function(t){var e=this;e.subject_id=e.subject_list[t].id,e.subject_list.forEach((function(e,a,n){e.status=t==a})),e.get_baogao()},showPie:function(e,a){u=new i.default({$this:n,canvasId:e,type:"pie",fontSize:11,legend:{show:!0},background:"#FFFFFF",pixelRatio:n.pixelRatio,series:a.series,animation:!0,width:n.cWidth*n.pixelRatio-t.upx2px(200)*n.pixelRatio,height:n.cHeight*n.pixelRatio,dataLabel:!0,extra:{pie:{lableWidth:15}}})},touchPie:function(t){u.showToolTip(t,{format:function(t){return t.name+":"+t.data}})},bindMultiPickerChange:function(t){console.log("show",t),this.time=t.detail.value,this.get_baogao()},bindMultiPickerChange2:function(t){console.log("show2",t),this.time2=t.detail.value,this.get_baogao()}}};e.default=s}).call(this,a("543d")["default"])},"123b":function(t,e,a){"use strict";a.r(e);var n=a("71a5"),i=a("8df4");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("e4df");var u,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=c.exports},"4b95":function(t,e,a){"use strict";a.r(e);var n=a("d29e"),i=a("78f6");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);var u,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=c.exports},"71a5":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"78f6":function(t,e,a){"use strict";a.r(e);var n=a("f0a1"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"8df4":function(t,e,a){"use strict";a.r(e);var n=a("0f72"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c4e6:function(t,e,a){},d29e:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},e4df:function(t,e,a){"use strict";var n=a("c4e6"),i=a.n(n);i.a},f0a1:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("aef9"));function i(t){return t&&t.__esModule?t:{default:t}}var o={},u={},s={name:"PieChart",props:{dataAs:{type:Object,default:function(){return{}}},basicAs:{type:Object,default:function(){return{}}},legendAs:{type:Object,default:function(){return{}}},extraAs:{type:Object,default:function(){return{}}},width:{type:Number,default:750},height:{type:Number,default:500},valueKey:{type:String,default:"series"},canvasId:{type:String,default:"pie_canvas_".concat(Math.ceil(1e4*Math.random(5)))}},data:function(){return{}},computed:{cWidth:function(){return t.upx2px(this.width)},cHeight:function(){return t.upx2px(this.height)}},mounted:function(){var t={$this:this,canvasId:this.canvasId,type:"pie",padding:[15,15,0,15],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],rotate:!1,rotateLock:!0,animation:!0,dataLabel:!0,duration:1e3,fontSize:12,background:"#ffffff",pixelRatio:1,width:this.cWidth,height:this.cHeight,series:this.dataAs[this.valueKey],legend:{show:!0,position:"top",float:"left",padding:10,margin:0},extra:{pie:{lableWidth:15}}};u[this.canvasId]=Object.assign(t,this.basicAs,this.legendAs,this.extraAs),o[this.canvasId]=new n.default(u[this.canvasId])},methods:{touchstart:function(t){o[this.canvasId].touchLegend(t,{animation:!1}),o[this.canvasId].showToolTip(t,{format:function(t){return"object"===typeof t.data?"".concat(t.name,":").concat(t.data.value):"".concat(t.name,":").concat(t.data)}})}}};e.default=s}).call(this,a("543d")["default"])}},[["0078","common/runtime","common/vendor"]]]);