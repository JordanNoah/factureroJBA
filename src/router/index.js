import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '@/views/Account'
import Resume from '@/views/Resume'
import Dashboard from '@/views/Dashboard'
import Branch from '@/views/Branchs'
import Product from '@/views/Product'
import Post from '@/views/Post'
import Invoice from '@/views/Invoice'
import Global from '@/plugins/global'
import Signin from '@/views/SignIn'
import Signup from '@/views/SignUp'
import ForgotPassword from '@/views/ForgotPassword'
import Clients from '@/views/Clients'
import CompleteConfig from '@/views/CompleteConfig'

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
    redirect:{
      name:'Signin'
    },
    children:[
      {
        path:'signin',
        name:'Signin',
        component:Signin
      },
      {
        path:'signup',
        name:'Signup',
        component:Signup
      },
      {
        path:'forgotpassword',
        name:'Forgot password',
        component:ForgotPassword
      }
    ],
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
    redirect:{
      name:'Resume'
    },
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
        path:'completeConfig',
        name:'CompleteConfig',
        component: CompleteConfig
      },
      {
        path:'resume',
        name:'Resume',
        component: Resume
      },
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
      },
      {
        path:'clients',
        name:'Clients',
        component:Clients
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
