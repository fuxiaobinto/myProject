<template>
	<div>
		<header-view> </header-view>
		<ul class="lisenlist cleaner">
			<li v-for="(list,index) in nav3" @click="lisenlist(index)" class="lisenli left">
				<p class="lisenlist-name">{{list.name}}</p>
				<p class="lisenlist-Ename">{{list.Ename}}</p>
				<p class="lisenlist-pic" :class="{'true':list.img}[cla]"></p>
			</li>
		</ul>
		<!--ecahrt图表-->
		<div class="picEchart cleaner">
			<div style="width: 400px; height: 360px; background: rgba(255,255,255,0.9)!important;" id="main"></div>
			<div style="width: 530px; height: 360px; background: rgba(255,255,255,0.9)!important; " id="main2"></div>
			<div style="width: 580px; height: 350px; background: rgba(255,255,255,0.9)!important;" id="main3"></div>
		</div>
	</div>
</template>

<script>
	import headerView from "./header";
	import echarts from "echarts"
	export default{
		name:"home",
		data(){
			return{
				nav3:[
				{name:"课程列表",img:"icon icon-th-large",Ename:"Course List"},
				{name:"课程添加",img:"icon icon-lock",Ename:"Course Add"},
				{name:"课程顶置",img:"icon icon-arrow-up",Ename:"Course Up"},
				{name:"课程管理",img:"icon icon-facetime-video",Ename:"Video Manage"},
				{name:"用户管理",img:"icon icon-user",Ename:"User Manage"},
				{name:"学员管理",img:"icon icon-file",Ename:"Student Manage"}
				],
			cla:true
				
			}
		},
		methods:{
			lisenlist(index){
				console.log(index)
			},
			
		},
		mounted(){
//			document.body.setAttribute("style","background: #FFFFFF;")
		var myChart01 = echarts.init(document.getElementById('main'));
		var myChart02 = echarts.init(document.getElementById('main2'));
		var myChart03 = echarts.init(document.getElementById('main3'));
		var option01 = {
		//工具提示框
    tooltip : {
    	//显示对应数据
        formatter: "{a} <br/>{b} : {c}%"
    },
    //
    toolbox: {
        feature: {
        	mark:{},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 70, name: '完成率'}]
        }
    ]
}

//setInterval(function () {
//  option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//  myChart01.setOption(option01);
//},2000);
//	饼状图

var option02 = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:110, name:'已通过'},
                {value:100, name:'未通过'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};



//柱状图


//var app.title = '坐标轴刻度与标签对齐';

var option03 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : [ 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[ 390, 330, 220]
        }
    ]
};

	 myChart01.setOption(option01);
	 myChart02.setOption(option02);
	 myChart03.setOption(option03);
		},
		components:{headerView}
	}
	

 
	
	
	
	
	
	
</script>

<style >
	body{
		background-image:url("../../static/assets/images/body_bg.jpg");
	}
	/*body{
		background: blue;
	}*/
	
	.lisenlist{
		margin: 0 auto;
		padding-top: 40px;
		width: 90%;
	}
	.lisenli{
		width: 13.5%;
		background: rgba(255,255,255,.2);
		margin-left: 3.5%;
		text-align: center;
		transition: all .5s;
	}
	.lisenli:nth-of-type(1){
		margin-left: 0px;
	}
	.lisenlist-name{
		padding-top: 30px;
		width: 100%;
		color: white;
		font:800 20px/20px arial;
	}
	.lisenlist-Ename{
		padding-top: 15px;
		width: 100%;
		color: white;
		font:100 12px/12px arial;
	}
	.lisenlist-pic{
		width: 100%;
		height: 40px;
		padding: 20px 0px 60px;
		width: 100%;
		color: white;
		font-size: 40px;
	}
	.lisenlist li:hover{
		background: #3db1e5;
	}
	.lisenlist li:hover .lisenlist-name{
		
		transition: all .5s; 
		transform: translateY(100px);
	}
	.lisenlist li:hover .lisenlist-Ename{
		transition: all .5s; 
		transform: translateY(100px);
		
	}
	.lisenlist li:hover .lisenlist-pic{
		transition: all .5s; 
		transform: translateY(-60px);
	}
	.picEchart{
		padding-top: 60px;
		width: 90%;
		margin: 0 auto;
	}
	.picEchart div{
		margin: 0px 20px 20px 0px;
		float: left;
	}
</style>