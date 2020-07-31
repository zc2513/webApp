import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [ 
  {
    path: '/',
    redirect: '/home', 
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由级别的代码分割
    // 这会为该路由生成一个单独的块(about.[hash].js)
    // 当路由被访问时延迟加载。
    component: () => import(/* webpackChunkName: "about" */ './../views/About.vue')
  },
  {
    path: '/shop',
    name: 'shop', 
    component: () => import(/* webpackChunkName: "shop" */ './../views/shop.vue')
  },
  {
    path: '/cart',
    name: 'cart', 
    component: () => import(/* webpackChunkName: "cart" */ './../views/cart.vue')
  },
  {
    path: '/user',
    name: 'user', 
    component: () => import(/* webpackChunkName: "user" */ './../views/user.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
