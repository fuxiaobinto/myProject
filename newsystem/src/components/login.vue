<template>
	<div>
		<div class="wrap">
		<bird style="position: fixed; top: 0px; left: 0px; z-index: -99999; width: 100%;height: 100vh;"></bird>	
			<div class="logo">
				<!--<img src="../../static/assets/back_logo.png"/>-->
			</div>
			<div class="form">
				<div><span class="icon icon-user"></span><input type="text" placeholder="用户名" ref="username"/></div>
				<div><span class="icon icon-lock"></span><input type="text" placeholder="密码" ref="pass"/></div>
				<div><span class="icon icon-lock"></span><input type="text" placeholder="验证码" ref="code"/>
				<div class="textnum">
					<verCode></verCode>
				</div></div>
			</div>
			<div class="buttons">
				<input type="button" class="fogot left" value="忘记密码"/>
				<input type="button"  class="login right" value="登录" @click="login"/>
			</div>
		</div>
		
	</div>
</template>

<script>
	import verCode from "./vercode";
	import bird from "./bird"
	export default {
		name:"login",
		data(){
			return{
				
			}
		},
		methods:{
			login(){
				var that=this
				that.$reqs({
					url:"http://127.0.0.1:3000/Handler/AdminLoginAndRegHandler?action=checkVerification",
					method:"get",
					params:{
						veri:this.$refs.code.value
					}
				}).then(function(res){
					console.log(res)
					if(res.data.success){
						that.$reqs({					
							url:"http://127.0.0.1:3000/Handler/AdminLoginAndRegHandler?action=login",
							method:"post",
							data:{
								userName:that.$refs.username.value,
								password:that.$refs.pass.value
							}
						}).then(function(res){
							
							if(res.data.success){
//								window.location.hash="/home";
								window.location="#/home"
							}
							console.log(res)
						})
					}
				})
			}
		},
		mounted(){
			document.body.setAttribute("style","background: #0d1953;");
		},
		components:{verCode,bird}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	input{
		padding-left: 10px;
		height: 100%;
		vertical-align: top;
		border: 0 none;
		outline: 0 none;
		background: #0d1953;
	}
	
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.form>div>span{
		text-align: center;
		line-height: 40px;
		color: #dddddd;
		display: inline-block;
		width: 40px;
		height: 40px;
		background: #0d1953;
		border-right:1px solid #999999;
	}
	.form>div{
		text-align: left;
		width: 415px;
		height: 40px;
		border: 1px solid #999999;
		margin:25px 50px 0px;
		background:  #0d1953;
		
	}
	.form>div:nth-of-type(3){
		width: 300px;
		position: relative;
		/*margin-left: -50px;*/
	}
	.textnum{
		position: absolute;
		right: -100px;
		top: 3px;
		width: 80px;
		height: 35px;
		background: yellow;
	}
	.wrap{
		text-align: center;
		width: 500px;
		height: 270px;
		margin: 0 auto;
		/*transform: translateY(13rem);*/
		position: absolute; top:30%;left: 50%;
		margin-left: -250px;
	}
	.buttons{
		padding-top: 40px;
	}
	.buttons>input{
		color: whitesmoke;
		text-align: center;
		line-height: 34px;
		padding-left: 0px !important;
	}
	.fogot{
		width: 100px;height: 34px;
		background: #3cadcf;
	}
	.login{
		width: 100px;height: 34px;
		background: #5cd85c;
	}
</style>