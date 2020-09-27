<template>
	<view class="content">
		<view class='joinClassBg'>
			<image src='//aictb.oss-cn-shanghai.aliyuncs.com/wx_xcx/bg/joinClass.png'/>
		</view>

		<view class="login">
			<view class='teacherName'>
				<text>{{teacher_name}}老师</text>
			</view>
			<view class="sf">
				邀请您加入{{school}}{{name}}
			</view>
			<view class="input"  >		 
				<input type="text" v-model="true_name" placeholder="请输入你的姓名" placeholder-class="p-c"/>
			</view>
			<button open-type="getUserInfo" @getuserinfo="bindgetuserinfo($event,4)">确认加入</button>
		</view>
		
		<!-- <view class="banquan">扬州骐骥信息科技有限公司</view> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				user_info:{true_name:'',school_list:{school_name:''}},
				id:'',
				true_name:'',
				name:'',
				school:'',
				class_id:'',
				teacher_name:'',
				disable:false,
				token:'',
				code:''
			}
		},
		onLoad(options) {
			// this.getuserinfo()
			console.log('options',options)
			if(uni.getStorageSync('userInfo').token){
				this.token=uni.getStorageSync('userInfo').token
			}
			// this.id=72
			this.id=options.id
			this.name=options.name
			this.school=options.school
			this.class_id=options.class_id
			this.teacher_name=options.teacher_name
			// this.type=options.type
		},
		methods:{ 
			...mapMutations(['login','set_type']),
			/* getuserinfo(){
				uni.login({
					success: (res) => {
						let _this=this
						let code=res.code
						if(res.code){
							uni.getSetting({
								//查看用户是否授权
								success(res) {
									console.log('res.authSetting',res.authSetting)
									if (res.authSetting['scope.userInfo']) {
										//用户已经授权
										uni.getUserInfo({
										  //获取用户信息
											success: (res) => {
												console.log(res)
												let data={
													code:code,
													token:_this.token
												}
												_this.$api.share_login(data)
												.then(res=>{
													_this.openid_tmp=res.data.openid
													console.log(_this.openid_tmp)
													if(res.code==200){ 
														uni.setStorage({
															key:'userinfo_tmp',
															data:res.data.userinfo,
														}) 
														_this.true_name=res.data.userinfo.true_name
														_this.disable=true
													} else{ 
														_this.disable=false
													}
													
												})
											},
											fail(err) {
												// console.log(err)
											}
										})
									}
								}
							})
						}
					}
				})
			
			}, */
			bindgetuserinfo(e,i){
				if(!this.true_name){
					uni.showToast({
						title:'请输入真实姓名',
						icon:'none'
					})
					return
				}
				uni.login({
					success: (res) => {
						let _this=this
						_this.code=res.code
						if(res.code){
							uni.getSetting({
								//查看用户是否授权
								success(res) {
									console.log('res.authSetting',res.authSetting)
									if (res.authSetting['scope.userInfo']) {
										//用户已经授权
										uni.getUserInfo({
										  //获取用户信息
											success: (res) => {
												console.log(res)
												let data={
													code:_this.code,
													token:_this.token
												}
												_this.$api.share_login(data)
												.then(res=>{
													_this.openid_tmp=res.data.openid
													console.log(_this.openid_tmp)
													if(res.code==200){ 
														uni.setStorage({
															key:'userinfo_tmp',
															data:res.data.userinfo,
														}) 
														_this.true_name=res.data.userinfo.true_name
														_this.disable=true
														
														_this.joinTeam(e,i)
													} else{ 
														_this.disable=false
													}
													
												})
											},
											fail(err) {
												// console.log(err)
											}
										})
									}
								}
							})
						}
					}
				})
			},
			joinTeam(e,i){
				var data = {
					code:this.code,
					user_name:e.detail.userInfo.nickName,
					avatar:e.detail.userInfo.avatarUrl,
					gender:e.detail.userInfo.gender,
					user_type:i,
					classid:this.class_id,
					// classid:"C1020379",
					openid:this.openid_tmp,
					true_name:this.true_name
				}
				console.log(data); 
				this.$api.join_team(data)
				.then(res=>{ 
					if(res.code==200){
						this.login(res.data)
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
						setTimeout(()=>{
							uni.switchTab({
								url:'/pages/index/index'
							})
						},1000)
						
					}else{
						uni.showToast({
							title:res.msg,
							icon:'none'
						})
					} 
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		font-family:PingFang SC;
		background: #eee;
	}
	.content{
		width: 100%;
		height: 100%;
	}
	.joinClassBg{
		width:100%;
		height:510rpx;
		background: url(//aictb.oss-cn-shanghai.aliyuncs.com/wx_xcx/bg/mineBg.png) no-repeat center center;
		background-size: 100% 101%;
		display: flex;
		image{
			display:block;
			width:325rpx;
			margin:auto;
			height: 313rpx;
		}
	}
	.login{
		width: 570rpx;
		margin: 0 auto;
		.teacherName{
			display:inline-block;
			font-size:36rpx;
			text-align: left;
			position: relative;
			font-weight: bold;
			margin-top:90rpx;
			text{
				position: relative;
				&::after{
					content: '';
					position:absolute;
					width: 100%;
					height: 15rpx;
					border-radius: 16rpx;
					background: #e50304;
					left:0;
					bottom:-15rpx;
				}
			}
		}
		.sf{
			margin: 50rpx 0rpx 25rpx;
			box-sizing: border-box;
			font-size: 30rpx;
			color: #888;
			width: 100%;
			text-align: left;
		}
		.input{
			margin: 30rpx auto;
			padding:0 30rpx;
			box-sizing: border-box;
			height: 100rpx;
			width:570rpx;
			border: 1rpx solid #e7e7e7;
			border-radius: 20rpx;
			font-size:30rpx;
			background: #fff;
			input{
				height: 100%;
				width: 100%;
			}
		}
		button{
			border: 1rpx solid #fff;
			width: 400rpx;
			font-size:30rpx;
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			color:#fff;
			background-image:linear-gradient(left,#e50304 0%,#f74300 80%);
			margin: 50rpx auto 20rpx;
			border-radius: 20rpx;
		}
		.zhanhao{
			width:540rpx ;
			height: 80rpx;
			margin: 35rpx 0 0 50%;
			transform: translateX(-50%);
			border: 1rpx solid #eee;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
			image{			
				width: 40rpx;
				height: 40rpx;
			}
			input{
				width: 80%;
				height: 100%;
			}
		}
	}
	.text{
		padding:0 50rpx;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		color: rgb(236,119,39);
	}
	.login-btn{
		width: 580rpx;
		height: 80rpx;
		color: #fff;
		border-radius: 10rpx;
		background-image:linear-gradient(left,rgb(222,81,28) 0%,rgb(240,150,50) 100%);
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		margin-top: 50rpx;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	.wx-btn{
		width: 580rpx;
		height: 80rpx;
		border-radius: 50rpx;
		border: 1rpx solid rgb(222,81,28);
		background: #fff;
		color: rgb(222,81,28);
		margin-top: 50rpx;
		line-height: 80rpx
	}
	.banquan{
		font-size: 20rpx;
		color: #dedede;
		text-align: center;
		margin-top: 50rpx;
	}
	.b-b{
		background: #F8601C !important;
		border:1rpx solid transparent !important;
		color: #fff !important;
	}
	.p-c{
		font-family:PingFang SC;
		color:#808080
	}
</style>
