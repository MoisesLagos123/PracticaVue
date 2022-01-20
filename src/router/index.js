import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TablaBurger from '@/components/TablaBurger.vue'
import TablaBurgerAgregar from '@/components/TablaBurgerAgregar.vue'
import TablaBurgerEditar from '@/components/TablaBurgerEditar.vue'
import TablaBurgerEliminar from '@/components/TablaBurgerEliminar.vue'
import TablaBurgerDetalles from '@/components/TablaBurgerDetalles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TablaBurger',
    name: 'TablaBurger',
    component: TablaBurger
  },
  {
    path: '/TablaBurgerDetalles',
    name: 'TablaBurgerDetalles',
    component: TablaBurgerDetalles
  },
  {
    path: '/TablaBurgerAgregar',
    name: 'TablaBurgerAgregar',
    component: TablaBurgerAgregar
  },
  {
    path: '/TablaBurgerEditar',
    name: 'TablaBurgerEditar',
    component: TablaBurgerEditar
  },
  {
    path: '/TablaBurgerEliminar',
    name: 'TablaBurgerEliminar',
    component: TablaBurgerEliminar
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
