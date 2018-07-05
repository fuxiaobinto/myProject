import Vue from 'vue';
import Vuex from 'vuex'
// 告诉 vue “使用” vuex
Vue.use(Vuex);
const state = {
    // 应用启动时，count 置为0
    url:{
        BASEURL:'http://127.0.0.1:3000',//服务器IP和端口
        ADMINLOGIN:'/Handler/AdminLoginAndRegHandler?action=login',//管理员登录接口
        RETURNADMIN:'/Handler/AdminHandler?action=returnuserinfo',//返回当前登录管理员信息接口
        GETVERICOD:'/Handler/AdminLoginAndRegHandler?action=verification',//获取验证码字符接口
        CHECKVERICODE:'/Handler/AdminLoginAndRegHandler?action=checkVerification',//校验验证码接口
        // ADMINLOGIN:'/Handler/AdminLoginAndRegHandler?action=login',//管理员登录接口
        UPDATEPASSWORD:'/Handler/AdminHandler?action=updatepass',//安全中心更改密码接口
        EXITSYS:'/Handler/AdminHandler?action=quit',//退出系统接口
        GETPOWERS:'/Handler/CourseHandler?action=getpower' ,//获取权限
        GETADMINLIST:'/Handler/AdminHandler?action=show',//获取管理员列表数据段
        ADDADMINSTOR:'/Handler/AdminLoginAndRegHandler?action=add',//添加管理员接口
        UPDATAADMINSTOR:'/Handler/AdminHandler?action=update',//更改管理员信息
        DELETEADMINSTOR:'/Handler/AdminHandler?action=delete',//删除管理员
        STUDENTLIST:'/Handler/AdminHandler?action=usershow',//获取学员列表
        LOCKUSER:'/Handler/AdminHandler?action=lockuser',//冻结学员
        ADDUSERS:'/Handler/AdminHandler?action=adduser',//添加学员
        COURSESELECTORLIST:'/Handler/CourseHandler?action=getcategory',//课程分类下拉框数据
        COURSELISTSHOW:'/Handler/CourseHandler?action=show',//获取课程列表
        COURSESTATE:'/Handler/CourseHandler?action=state',//处理课程上下架状态
        COURSEISTOP:'/Handler/CourseHandler?action=top',//处理是否置顶
        VEDIOLISTSHOW:'/Handler/VideoHandler?action=show',//视频列表查询
        VIDEOUPLOAD:'/Handler/UpLoadVideoHandler',//视频上传
        VIDEOADD:'/Handler/VideoHandler?action=add',//视频列表添加
        VIDEOUPDATE:'/Handler/VideoHandler?action=update',//视频列表更新
        IMGUPLOAD:'/Handler/UpLoadPicHandler',//图片上传
        GETDIRECTORYLIST:'/Handler/VideoHandler?action=finddir',//获取课程对应目录
        GETDIRECTORYVIDEOLIST:'/Handler/VideoHandler?action=showdir',//获取课程对应目录的对应视频
        DELETEDROPIMG:'/Handler/UpLoadPicHandler?action=delete',//删除上传和编辑课程过程中产生在数据库的废弃图片
        COURSEADD:'/Handler/CourseHandler?action=add',//课程基础数据添加
        ADDCOURSEDIRECTORY:'/Handler/CourseHandler?action=AddDirectory',//对应课程添加目录
        UPDATECOURSEDIRECTORY:'/Handler/CourseHandler?action=updateDirectory',//目录更新
        DELETECOURSEDIRECTORY:'/Handler/CourseHandler?action=deleteDirectory',//目录删除
        ADDVIDEOCOURSEDIRECTORY:'/Handler/CourseHandler?action=addvideo',//目录编辑过程中给目录添加视频
        DELETEVIDEOCOURSEDIRECTORY:'/Handler/CourseHandler?action=delvideo',//目录编辑过程中将目录某条视频删除
        ADDALLCOURSE:'/Handler/CourseHandler?action=update',//全部保存按钮触发的课程信息更新
        COURSEDELETE:'/Handler/CourseHandler?action=delete'//删除课程
    },
    
    updateElement:{
        safeAlertContent:{},
        safe:{}
    }
}
//更新数据
const mutations = {
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    //为AlertValue添加新的监控对象
    AlertValueAdd:function(state,atr,value){
        state.AlertValue[atr]=value;
    },
    //改变safeAlertValue的值
    safeAlertChangeValue:function (state,atr,value) {
            state.AlertValue[safeAlertValue][atr]=value;
    },
    change:function(state,value){
        console.log(value);
        state.AlertValue.defaultStr=value;
    }
}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    mutations
})