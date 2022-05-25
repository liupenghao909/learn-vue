// 主程序
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,    // 指定路由规则  为router:router的简写
  components: { App },   // 使用的App组件，为App（属性名）:App（属性值）的简写
  template: '<App/>'   // 元素如何渲染，指定了一个模板template: '<App/>'   模板使用了App组件。所以App组件长什么样 el绑定的元素app就长什么样
})
