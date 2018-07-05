<template>
	<div>
		
		<div>
			<header-view></header-view>
		</div>
		<div class="s_wrap">
	<div class="s_bread">
		<span>首页</span>
		<span>用户管理</span>
		<span>学员管理</span>
	</div>
	<!--面包屑导航-->
	<!--搜索框开始-->
	<div class="s_search">
		<input type="text" placeholder="用户名" ref="userName"/>
		<input type="text" placeholder="邮箱" ref="email"/>
		<input type="text" placeholder="手机" ref="phone"/>
		<input type="button"  value="查询"/>
		<input type="button"  value="添加" @click="addStudent"/>
	</div>
	
	<template>
  <el-table
    :data="sData"
    border
    style="width: 100%">
    <el-table-column
      prop="userName"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机">
    </el-table-column>
     <el-table-column
      prop="createAt"
      label="注册日期">
    </el-table-column>
     <el-table-column
      prop="isstate"
     
      label="状态">
      <template scope="scope">
      	<el-button  :class="{col:scope.row.isstate}">{{scope.row.isstate?"已冻结":"正常"}}</el-button>
      </template>
    </el-table-column>
     <el-table-column
      prop="tokenId"
      label="操作">
      
      <template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="freeze(scope.$index, scope.row)">{{scope.row.isstate?"解冻":"冻结"}}</el-button>
		</template>
    </el-table-column>
  </el-table>
</template>
<div>
	 <el-pagination :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="totalPage" @current-change="sPageChange">
	  <!--@current-change
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"-->
     
    </el-pagination>
    	
</div>
	
		</div>
		
	</div>
</template>

<script>
	import Vue from "vue"
	import headerView from "./header"
	import store from "../../vuex/store"
	import Axios from "axios"
	import Element from "element-ui"
	Vue.use(Element)
export default{
	data(){
		return{
			sData:[],
			totalPage:0,
			pageStart:1,
			pageSize:0
		}
	},
	methods:{
		getstudentList(pageStart,pageSize){
			var that=this;
			Axios({
				url:store.state.url.BASEURL+store.state.url.STUDENTLIST,
				method:"post",
				data:{
					pageStart:this.pageStart
				}
				
			}).then(function(res){
//				console.log(res)
				that.sData=res.data.data.list
				that.totalPage=res.data.data.count
				that.pageSize=res.data.data.pageSize
				that.pageStart=that.totalPage/res.data.data.pageSize
			})
		},
		sPageChange(val){
			console.log(arguments)
			this.pageStart=val
			this.getstudentList(this.pageStart,this.pageSize)
		},
		freeze(index,row){
			var that=this
			Axios({
				url:store.state.url.BASEURL+store.state.url.LOCKUSER,
				method:"get",
				params:{
				    tokenId:row.tokenId
				}
			}).then(function(res){
				alert(res.data.success)
				that.getstudentList()
			})
		},
		addStudent(){
			var that=this
			Axios({
				url:store.state.url.BASEURL + store.state.url.ADDUSERS,
				method:"post",
				data:{
					adduserName:that.$refs.userName.value,
					addphone:that.$refs.phone.value,
					addemail:that.$refs.email.value
				}
			}).then(function(res){
				if(res.data.success){
					alert("添加成功")
				}
				
//				that.freeze(index,row)
			})
		}
	},
	mounted(){
		document.body.setAttribute("style","background: blue;");
		this.getstudentList()
	},
	components:{
		headerView
	}
}	
</script>

<style>
	.s_wrap{
		
	}
	.s_bread{
		
	}
	.s_search{
		border: 1px solid #ccc;
		line-height: 50px;
		
	}
	.s_search input{
		width: 180px;
		height: 30px;
		border: 1px solid #CCCCCC;
		margin-left: 10px;
	}
	.s_search button{
		width: 100px;
		height: 34px;
		border: none;
		outline: none;
	}
	.col{
		color: red;
	}
</style>