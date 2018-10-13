import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Groovy from '../components/Groovy'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/groovy',
      name: 'groovy',
      component: Groovy
    }
  ]
})