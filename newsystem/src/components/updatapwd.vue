<template>
	<div>
	<div class="body-view" >
		
		<div class="form">
			<div class="form-list" style="text-align: left;">更改密码<p class="right" @click="remove"><img src="../../static/assets/images/x.png"/></p></div>
			<div class="form-main">
				<!--
                	需要传密码
                -->
				<p><span>当前密码：</span><input type="text" ref="pass"/></p>
				<p><span>新密码：</span><input type="text" ref="newPwd"/></p>
				<p><span>确认密码：</span><input type="text" ref="phone"/></p>
				<p>
					<button class="sure" @click="updata">确定</button>
					<button class="cancel" @click="remove">取消</button>
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
	
		name:"updatapwd",
		data(){
			return{
				usershow:false
			}
		},methods:{
			remove(){
				store.state.updateElement.safeAlertContent.display="none";
				that.$refs.password.value="";
				that.$refs.newPwd.value="";
			},
			updata(){
				var that=this;
				Axios({
					url:store.state.url.BASEURL+store.state.url.UPDATEPASSWORD,
					method:"post",
					data:{
						userPwd:that.$refs.pass.value,
						newPwd:that.$refs.newPwd.value,
					}
				}).then(function(res){
					if(res.data.success){
//						console.log(res.data);
//						that.remove();
						alert("更改成功")
					}else{
//						console.log(res.err)
					}
				})
				
			}
			
		}
	}
</script>

<style scoped>
	.body-view{
		width: 100vw;
		height: 100vh;
		background: rgba(255,255,255,.2);
		position: fixed;
		z-index: 222222;
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