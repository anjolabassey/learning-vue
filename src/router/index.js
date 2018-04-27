import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
