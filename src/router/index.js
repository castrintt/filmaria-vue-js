import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path:'/',
    component:() => import('../pages/Home.vue')
  },
  {
    path:'/filme/:id',
    props:true,
    component: () => import('../pages/Filme.vue'),
  },
  {
    path:'/salvos',
    component: () => import('../pages/MeusFilmes.vue')
  },
  {
    path:'/:catchAll(.*)',
    component: () => import('../pages/Erro.vue') 
  
  }
]

const router = createRouter({
  mode:'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
