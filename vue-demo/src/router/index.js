import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello.vue'
import MyTable from '@/components/MyTable.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 代表：当使用/路径时，将使用HelloWorld组件
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/table',
      name: 'MyTable',
      component: MyTable
    }
  ]
})
