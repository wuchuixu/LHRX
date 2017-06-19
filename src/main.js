// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './router'
import WEB_LHRX from './assets/js/webconfig.js'
Vue.config.productionTip = false

Vue.use(Router)
var router =  new Router({
	routes,
	mode:'history',
	history:true
});
	

// 全局变量
window.WEB_LHRX = WEB_LHRX;
// 后台请求数据接口
import urls from './globalurl/url.js'
Vue.prototype.globalurl = urls;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);


//默认进入首页
router.beforeEach(function(to,from,next){
	if (to.path === '/' || to.path === '') {
        next({
            path: '/index'
        })
    } else {
        next()
    }
});


router.afterEach(function(){ 
    document.querySelector('body').scrollTop = 0;
});

import util from './globalurl/util.js'
Vue.prototype.util = util;

import vueResource from 'vue-resource'
Vue.use(vueResource);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
