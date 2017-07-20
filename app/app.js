import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
import VueTouch from 'vue-touch'

//vue移动端的touch事件，能避免300MS的延迟
Vue.use(VueTouch, { name: 'v-touch' });

//懒加载
// http://www.8dou5che.com/2017/05/11/vue-lazyload/
Vue.use(VueLazyload, {
   preLoad: 0.6,
   //懒加载图片地址
   loading: '../resourse/img/5-121204193R0-50.gif',
   attempt: 1
})
Vue.use(VueRouter)

const router = new VueRouter({
   routes: [{
      path: '/login',
      component: require("./view/home/login.vue")
   }, {
      path: '/qiqu',
      component: require("./view/qiqu/index.vue"),
      //如果主路由携带children路由那么主路由的页面一定有一个router-view容器
      children: [{
         path: '/qiqu/jingxuan',
         name: "精选",
         component: require("./view/qiqu/jingxuan/index.vue")
      }, {
         path: '/qiqu/shipin',
         name: "视频",
         component: require("./view/qiqu/shipin/index.vue")
      }, {
         path: '/qiqu/duanzi',
         name: "段子",
         component: require("./view/qiqu/duanzi/index.vue")
      }, {
         path: '/qiqu/faxian',
         name: "发现",
         component: require("./view/qiqu/faxian/index.vue")
      }]
   }, {
      //路由重定向
      path: '*',
      redirect: '/qiqu/jingxuan'
   }]
});

new Vue({
   el: "#app",
   router,
   render: h => h(app)
});
// 路由切换的时候 路由是从哪来 到哪去
//一定要执行next()
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
})
window.router = router;
