<template>
	<div>
	<canvas class="vercode" width="100%" height="46"  @click="drawer"></canvas>
	</div>
</template>

<script>
	import Vue from "vue";
	
	
//	Vue.use(Axios)
	export default{
		name:"vercode",
		data(){
			return{
				canvas:"",
				height:"",
				width:"",
				ctx:""
			}
		},mounted(){
			this.canvas=document.getElementsByClassName("vercode")[0];
			this.width=this.canvas.width;
			this.height=this.canvas.height;
			this.ctx=this.canvas.getContext("2d");
			//定义基线
			this.canvas.textBaseline="bottom"
			this.getver(this.drawPic)
		},
		methods:{
			//获取初始验证码
			getver(fn){
				this.$reqs({
//					url:'http://127.0.0.1:3000/VueHandler/AdminLoginAndRegHandler?action=verification',
					url:'http://127.0.0.1:3000/Handler/AdminLoginAndRegHandler?action=verification',
					method:"get"
				}).then(function(result){
					fn(result.data.data)
				})
			},
			//产生随机数
			randomNum(min,max){
				return Math.floor(Math.random()*(max-min)+min)
			},
			randomcolor(min,max){
				var r=this.randomNum(min,max)
				var g=this.randomNum(min,max)
				var b=this.randomNum(min,max)
				return 'rgb('+r+','+g+','+b+')'
			},
			drawPic(txt){
				this.ctx.fillStyle=this.randomcolor(150,180);
				this.ctx.fillRect(0,0,this.width,this.height);
				//绘制文字
				for(var i=0;i<4;i++){
					var returnText=txt[i];
					this.ctx.fillStyle=this.randomcolor(0,130);
					this.ctx.font=this.randomNum(20,30)+'px 宋体';
					var x=20*i+15;
					var y=this.randomNum(15,25);
					var deg=this.randomNum(20,30);
//					this.ctx.rotate(deg/180*Math.PL);//调整画布角度
//					this.ctx.translate(x,y);
//					this.ctx.strokeText(txt,0,0)
					this.ctx.fillText(returnText,x,y)
				}
				//绘制干扰线
				for (var i=0; i<10; i++) {
					this.ctx.strokeStyle=this.randomcolor(0,255)
					this.ctx.beginPath()
					this.ctx.moveTo(this.randomNum(0,this.width),this.randomNum(2,this.height))
					this.ctx.lineTo(this.randomNum(0,this.width),this.randomNum(0,this.height))
					this.ctx.closePath();
					this.ctx.stroke();
				}
				//绘制干扰点
				for (var i=0; i<40;i++) {
					this.ctx.fillStyle=this.randomcolor(0,255);
					this.ctx.beginPath();
					this.ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height),1,0,Math.PI*2)
					this.ctx.closePath();
					this.ctx.fill()
				}
			},
			drawer(){
				this.ctx.clearRect(0,0,100,100);
				this.getver(this.drawPic);
			}
		}
	}
</script>

<style>
</style>