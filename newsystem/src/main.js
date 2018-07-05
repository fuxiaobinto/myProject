// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import login from './components/login'
//import home from './components/home'
//import addminlist from './components/addminlist'
//import studentList from './components/studentList'
//import adminlist from './router/adminlist'
import router from './router/index' 
import Axios from "axios";
Axios.defaults.withCredentials=true;//允许跨域访问
	Vue.prototype.$reqs =Axios
//import axios from "axios";
//Vue prototype.$reqs from axios

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app' 
})
