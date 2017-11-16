import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Notification from '@/components/Notification.vue'
import TodoList from '@/components/TodoList/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/notification',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/todo_list',
      name: 'NotTodoListification',
      component: TodoList
    }
  ]
})
