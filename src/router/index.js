import Vue from 'vue'
import Router from 'vue-router'
import CreateListComponent from '../hoc/CreateListComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product',
      name: 'ProductList',
      component: CreateListComponent('ProductList')
    },
    {
      path: '/user',
      name: 'UserList',
      component: CreateListComponent('UserList')
    }
  ]
})
