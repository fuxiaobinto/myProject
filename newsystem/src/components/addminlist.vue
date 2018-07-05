<template>
	<div>
		<header-view></header-view>
		<adduser v-show="addshow" ref="winshow" style="position: relative;z-index: 3333333333;" @recive="getshuju"></adduser>
		<div class="Administrators-list">
			<ul class="power-nav cleaner">
				<li class="col">首页</li>
				<li>/</li>
				<li>用户管理</li>
				<li>/</li>
				<li>系统人员</li>
			</ul>
			
			<div class="search-wrap" >
				<input type="text" class="search-text" id="" placeholder="模糊查找：姓名" />
				<button class="search-button">查找</button>
				<button class="add-button" @click="add">添加</button>
			</div>
			<div class="people">
    <el-table
      :data="tableData"
      style="width: 100%;
      position: relative;
      z-index: 1;">
      <el-table-column
        prop="userName"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="turename"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="power"
        label="后台权限">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机">
      </el-table-column>
      <el-table-column
        prop="createAt"
        label="编辑日期">
      </el-table-column>
      <el-table-column
      	prop="tokenId"
      	 label="操作">
      	<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
      </el-table-column>
    </el-table>
    <div>
    	<el-pagination     @current-change="nowChange" layout="prev,pager,next" :total="count" :page-size="3">
    	</el-pagination>
    </div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import Vue from "vue"
	import Element from "element-ui"
	import "element-ui/lib/theme-default/index.css"
	import headerView from "./header"
	import adduser from "./adduser"
	import store from "../../vuex/store"
	import axios from "axios"
	Vue.use(Element)
	export default{
		
		data(){
			return{
				addshow:false,
				updatashow:false,
				tableData:[],
				pageSize:0,
				count:0,
				pageStart:1
			}
		}
		,methods:{
			add(){
  				var showvalue=this.$refs.winshow.$el;
 					 showvalue.style.display="block";
  						store.state.updateElement.safeAlertContent=showvalue.style;
  					console.log( store.state.updateElement.safeAlertContent)
  			},
			getshuju(pageStart,pageSize){
				var that=this
				axios({
					url:store.state.url.BASEURL+store.state.url.GETADMINLIST,
					method:"get",
					params:{
//						pagesize:3,
						searchText:"",
						pageStart:that.pageStart
					}
				}).then(function(res){
					console.log(res)
					that.tableData=res.data.data.list
					that.count=res.data.count
					that.pageSize=res.data.pageSize
//					console.log(that.tableData)
				})
			},
			nowChange(val){
				this.pageStart=val;
				this.getshuju(this.pageStart,this.pageSize)
			},
			handleDel(index,row){
				var that=this;
//				console.log(id)
				axios({
					url:store.state.url.BASEURL+store.state.url.DELETEADMINSTOR,//后边可以用&符号代替params
					method:"get",
					params:{
						tokenId:row.tokenId
					}
				}).then(function(res){
					console.log(res.data);
//					getshuju()
					that.tableData=res.data.data.list;
					that.tableData=Math.ceil(res.data.data.count/res.data.data.pageSize)
				})
				
				
			},
			//编辑
			handleEdit(index,row){
				var that=this
				var showvalue=this.$refs.winshow.$el;
 					 showvalue.style.display="block";
  						store.state.updateElement.safeAlertContent=showvalue.style;
						that.$refs.winshow.$refs.userName.value=row.userName;
						that.$refs.winshow.$refs.turename.value=row.turename;
						that.$refs.winshow.$refs.power.value=row.power;
						that.$refs.winshow.$refs.phone.value=row.phone;
						that.$refs.winshow.$refs.token.value=row.tokenId
						
						
//				that.$refs.window.$refs.username.value,
//				axios({
//					url:store.state.url.BASEURL+store.state.url.UPDATAADMINSTOR,
//					method:"post",
//					data:{
//						userName:that.$refs.window.$refs.username.value,
//						turename:that.$refs.window.$refs.turename.value,
//						phone:that.$refs.window.$refs.phone.value,
//						power:that.$refs.window.$refs.power.value,
//						upDateAt:that.$refs.window.$refs.phone.value
//					},
////					console.log(that.$refs.window.$refs.phone.value=row.phone)
//				})
			}
		},
		mounted(){
			store.state.updateElement.safeAlertContent=this.addshow
			document.body.setAttribute("style","background: #0d1953;");
			this.getshuju()
		},components:{ headerView, adduser}
	}
</script>

<style scoped="scoped">
	body{
		/*background: blue;*/
	}
	
	.Administrators-list{
		width: 100%;
		box-sizing: border-box;
		padding: 0 0.5%;
		background: #EEEEEE;
	}
	.power-nav li{
		color: #666666;
		float: left;
		padding-right: 3px;
		line-height: 50px;
	}
	.power-nav .col{
		color: #0000FF;
	}
	.search-wrap{
		border: 1px solid #666666;
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
	}
	.search-text{
		width: 40%;
		border: 1px solid #666666;
		background: #FFFFFF;
		line-height: 30px;
		padding-left: 10px;
	}
	.search-button{
		width: 100px;
		height: 30px;
		background: #6EC130;
		color: white;
		
	}
	.add-button{
		float: right;
		width: 100px;
		height: 30px;
		background: #0000FF;
		color: white;
	}
	.people{
		margin-top: 20px;
		width: 100%;
		position: relative;
		z-index: 0;
	}
</style>