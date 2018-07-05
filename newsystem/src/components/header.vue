<template>
	<div style="position: relative; z-index: 333333;">
		<div class="header cleaner">
		<div class="logo left">
		<!--<img src="../../static/assets/back_logo.png"/>-->
		</div>
		<div class="right nav-wrap">
		<ul class="nav left">
			<li v-for="(nav,index) in nav1" class="navson left" @click="nav1click(index) "><span class="navlist" :class='{"true":nav.img}[clas]'></span>{{nav.name}}</li>
			<div class="left"><span class="left">{{username}}</span><img :src=userpic /></div>
		</ul>
		
		<!--<div class="left" style="font:100 12px/50px '微软雅黑';width: 20px;height: 20px;">{{username}}</div>-->
		
		</div>
		</div>
		<ul class="nav2 cleaner" style="background: blue;">
			<li v-for="(item,index) in nav2" @click="change(index)" @mouseover="allert(index)"><div class="sjup"></div><div class="sjdw"></div><span class="nav2list" :class="{'true':item.img}[cla]"></span>{{item.name}}</li>
		</ul>
		<div class="main-more cleaner" v-show="usershow">
			<ul>
				<li v-for="(x,index) in nav4[index]" @click="showpath(index)">{{x.name}}</li>
			</ul>
		</div>
		<updatapwd  v-show="updatashow" ref="upshow" ></updatapwd>
	</div>
	
</template>

<script>
	import Axios from "axios";
	import updatapwd from "./updatapwd"
	import store from "../../vuex/store"
	export default{
		name:"headerView",
//		props:["addusershow"],
		data(){
			return{
				nav1:[
				{name:"卓新思创",img:"icon icon-globe"},
				{name:"在线客服",img:"icon icon-comment"},
				{name:"常见问题",img:"icon icon-book"},
				{name:"安全中心",img:"icon icon-lock"},
				{name:"退出",img:"icon icon-signout"}
				],
				clas:true,
				userpic:"../../static/assets/touxiang.jpg",
				nav2:[
				{name:"用户管理",img:"icon icon-user"},
				{name:"课程管理",img:"icon icon-lock"},
				{name:"系统报表",img:"icon icon-lock"},
				{name:"其他管理",img:"icon icon-user"},
				{name:"数据字典",img:"icon icon-lock"},
				{name:"系统维护",img:"icon icon-user"}
				],
				cla:true,
				index:0,
				usershow:false,
				nav4:[
				[{name:"系统管理"},{name:"学员管理"},{name:"权限管理"}],
				[{name:"系统管理2"},{name:"学员管理2"},{name:"权限管理2"}]
				],
//				addusershow:false
				updatashow:false,
				username:""
			}
		},methods:{
			nav1click(lll){
//				alert(a)
				if(lll==0){
					
				}else if(lll==1){
				
				}else if(lll==2){
					
				}else if(lll==3){
//					document.getElementsByClassName("navson")[3].setAttribute("ref","upshow")
//					alert("success")
					var showvalue=this.$refs.upshow.$el;
 						 showvalue.style.display="block";
  						store.state.updateElement.safeAlertContent=showvalue.style;
  						console.log( store.state.updateElement.safeAlertContent)
				}else if(lll==4){
//				exit(fn){
					var that=this;
				Axios({
					url:store.state.url.BASEURL+store.state.url.EXITSYS,
					method:"get",
					
				}).then(function(res){
					if(res.data.success){
//						console.log(res.data);
						window.location="/"
					}else{
						console.log(res.err)
					}
				})
//				}

				}
			},
			change(index){
				console.log(index)
			},
			allert(index){
				if(index<2){
				this.index=index,
				this.usershow=!this.usershow}
			},
			usershow(){
			},
			showpath(ind){
			if(this.index==0){
				if(ind==0){
					window.location="#/addminlist"
				}else if(ind==1){
					window.location="#/studentList"
				}
			}
			},
			changelist(v){
//				console.log(v)
//				this.addusershow=!this.addusershow
			},
			getinfo(){
				var that=this;
				Axios({
					url:store.state.url.BASEURL+store.state.url.RETURNADMIN,
					method:"post",					
				}).then(function(result){
					that.username=result.data.userName
//				console.log(that.username)
				})
				},
				
			
		},
		mounted(){
			store.state.updateElement.safeAlertContent=this.addshow
				this.getinfo()
				
		},components:{updatapwd}
	}
</script>

<style scoped>
	
	.logo img{
		float: left;
		margin: 5px;
	}
	
	.nav>li{
		padding-right: 20px;
		color: #9d9d9d;
		line-height: 40px;
		font-size: 12px;
		line-height: 50px;
	}
	.nav>li>span{
		text-align: left;
		display: inline-block;
		padding-right: 10px;
		width: 20px;
		height: 20px;
	}
	.nav-wrap>div{
		color: #9d9d9d;
		line-height: 40px;
		margin-right: 20px;
	}
	.nav-wrap>div>img{
		float: left;
	}
	
	.nav2{
		background: rgba(255,255,255,0.2);
		width: 85%;
		padding-left: 15%;
	}
	.nav2>li{
		float: left;
		color: #ffffff;
		font-size: 13px;
		line-height: 40px;
		margin-right: 7%;
		position: relative;
		padding: 4px 10px;
	}
	.nav2list{
		padding-right: 5px;
	}
	.sjup,.sjdw{
		opacity: 0;
		width: 15px;
		height: 30%;
		position: absolute;
		transition: all 1s;
	}
	.sjup{
		top: 2px;
		left: 2px;
		border-top:2px solid white ;
		border-left:2px solid white ;
	}
	.sjdw{
		bottom: 2px;
		right: 2px;
		border-bottom:2px solid white ;
		border-right:2px solid white ;
	}
	.nav2>li:hover .sjup{
		opacity: 1;
		transform: translate(-2px,-2px);
	}
	.nav2>li:hover .sjdw{
		opacity: 1;
			transform: translate(2px,2px);
	}
	.main-more{
		width: 100%;
		height: 100px;
		background: white;
	}
	.main-more li{
		text-align: center;
		color: #666666;
		float: left;
		width: 100px;
		height: 30px;
		line-height: 30px;
		border: 1px solid #666666;
		margin: 30px 10px;
	}
	.main-more li:hover{
		background: skyblue;
	}
</style>