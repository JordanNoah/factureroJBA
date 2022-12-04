import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '@/views/Account'
import Dashboard from '@/views/Dashboard'
import Branch from '@/views/Branchs'
import Product from '@/views/Product'
import Post from '@/views/Post'
import Invoice from '@/views/Invoice'
import Global from '@/plugins/global'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:{
      name:'Account'
    }
  },
  {
    path:'/account',
    name:'Account',
    component:Account,
    beforeEnter:(to, from, next) => {
      var response = Global.checkSession()
      if (response) {
        next({
          name:'Dashboard'
        })
      }
      next()
    }
  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component:Dashboard,
    beforeEnter: (to, from, next) => {
      var response = Global.checkSession()
      if (!response) {
        next({
          name:'Account'
        })
      }
      next()
    },
    children:[
      {
        path:'branchs',
        name:'Branch',
        component:Branch
      },
      {
        path:'products',
        name:'Products',
        component:Product
      },
      {
        path:'post',
        name:'Post',
        component:Post
      },
      {
        path:'invoice',
        name:'Invoice',
        component:Invoice
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
