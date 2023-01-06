import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '@/views/Account'
import Resume from '@/views/Resume'
import Dashboard from '@/views/Dashboard'
import Branch from '@/views/Branchs'
import Product from '@/views/Product'
import Post from '@/views/Post'
import Invoice from '@/views/Invoice'
import Signin from '@/views/SignIn'
import Signup from '@/views/SignUp'
import ForgotPassword from '@/views/ForgotPassword'
import Clients from '@/views/Clients'
import ForgotPasswordSecond from '@/views/ForgotPasswordSecond'
import ConfigInitial from '@/views/config/Initial'

import store from '@/store'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: {
      name: 'Account'
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    redirect: {
      name: 'Signin'
    },
    beforeEnter:(to,from,next) => {
      if(!store.getters.getLogin){
        next()
      }else{
        next({name: 'Dashboard'})
      }
    },
    children: [{
        path: 'signin',
        name: 'Signin',
        component: Signin
      },
      {
        path: 'signup',
        name: 'Signup',
        component: Signup
      },
      {
        path: 'forgotpassword',
        name: 'Forgot password',
        component: ForgotPassword
      },
      {
        path: 'forgotPasswordSecond/:uuid',
        name: 'ForgotPasswordSecond',
        component: ForgotPasswordSecond
      }
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: async (to,form,next) => {
      if (!store.getters.getInstitution) {
        next({name:'Configinitial'})
      }else{
        next()
      }
    },
    children: [
      {
        path: 'resume',
        name: 'Resume',
        component: Resume
      },
      {
        path: 'branchs',
        name: 'Branch',
        component: Branch
      },
      {
        path: 'products',
        name: 'Products',
        component: Product
      },
      {
        path: 'post',
        name: 'Post',
        component: Post
      },
      {
        path: 'invoice',
        name: 'Invoice',
        component: Invoice
      },
      {
        path: 'clients',
        name: 'Clients',
        component: Clients
      }
    ]
  },
  {
    path: '/initial',
    name: 'Configinitial',
    component: ConfigInitial,
    beforeEnter:(to,from,next) => {
      if(!store.getters.getInstitution){
        next()
      }else{
        next({name:'Dashboard'})
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router