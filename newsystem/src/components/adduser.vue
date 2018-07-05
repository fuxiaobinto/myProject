<template>
	<div>
	<div class="body-view" >
		
		<div class="form">
			<div class="form-list" style="text-align: left;">管理员添加<p class="right" @click="remove"><img src="../../static/assets/images/x.png"/></p></div>
			<div class="form-main">
				<!--
                	需要传密码
                -->
				<p><span>用户名：</span><input type="text" ref="userName"/></p>
				<p><span>姓名：</span><input type="text" ref="turename"/></p>
				<p><span>手机号：</span><input type="text" ref="phone"/></p>
				<p><span>选择权限：</span><select name="" ref="power">
					<option >系统管理员</option>
					<option >学员</option>
				</select></p>
				<p style="display: none;">
					<input type="text" ref="token" />
				</p>
				<p>
					<button class="sure" @click="addTo">确定</button>
					<button class="cancel" @click="">取消</button>
				</p>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
//	import Vuex from "ax"
		import store from "../../vuex/store";
		import Axios from "axios";
	export default{
	
		name:"adduser",
		data(){
			return{
				usershow:false
			}
		},methods:{
			remove(){
				store.state.updateElement.safeAlertContent.display="none"
			},
			addTo(){
				var that=this;
				Axios({
//					url:store.state.url.BASEURL+fn?store.state.url.ADDADMINSTOR:store.state.url.UPDATAADMINSTOR,
					url:that.$refs.token.value?store.state.url.BASEURL + store.state.url.UPDATAADMINSTOR:store.state.url.BASEURL+store.state.url.ADDADMINSTOR,
//					console.log(url);
					method:"post",
					data:{
						userName:that.$refs.userName.value,
						turename:that.$refs.turename.value,
						power:that.$refs.power.value,
						phone:that.$refs.phone.value,
						password:"123456",
						tokenId:that.$refs.token.value?that.$refs.token.value:""
					}
				}).then(function(res){
					if(res.data.success){
//						console.log(res.data);
						that.remove();
						alert("添加成功");
						that.$emit("recive");
					}else{
						console.log(res.err)
					}
				})
				
			}
//			adduser(){
//				var md5=Crypto.createHash("md5")
//				var password=this.$refs.password.value
//				var newpwd=md5.update(password).digest("base64")
//				Axios({
//					ul:store.url.BASEURL+store.state.url.UPDATEPASSWORD,
//					method:"post",
//					data:{
//						userPwd:this.$refs.password.value,
//						newPwd:newpwd
//					} 
//				}).then(function(result){
//					console.log(result)
//				})
//			},
			
		}
	}
</script>

<style scoped>
	.body-view{
		width: 100vw;
		height: 100vh;
		background: rgba(255,255,255,.2);
		position: fixed;
		top: 0px;
		left: 0px;
	}
	.form{
		text-align: center;
		width: 485px;
		height: 282px;
		background: #4e66b3;
		position: absolute;
		top: 100px;
		left: 50%;
		margin-left: -242px;
	}
	.form-list{
		color: white;
		font: 500 20px/40px "微软雅黑";
		box-sizing: border-box;
		padding: 0px 10px;
	}
	.form-main input,.form-main select{
		border: 1px solid #999999;
		height: 25px;
		width: 300px;
	}
	.form-main p{
		padding-top: 15px;
	}
	.form-main span{
		text-align: right;
		display: inline-block;
		width: 100px;
	}
	.form-main{
		width: 90%;
		height: 232px;
		margin: 0 auto;
		background: white;
	}
	.sure,.cancel{
		width: 80px;
		height: 30px;
		color: white;
	}
	.sure{
		background: #6ec130;
	}
	.cancel{
		background: #4E66B3;
		margin-left: 30px;
	}
</style>