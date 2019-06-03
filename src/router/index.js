import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../components/ProductList'
import UserList from '../components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/user',
      name: 'UserList',
      component: UserList
    }
  ]
})
