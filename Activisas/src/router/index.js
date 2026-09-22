import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Nosotros from '../views/Nosotros.vue'
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/nosotros', name: 'Nosotros', component: Nosotros },
  { path: '/servicios', name: 'Servicios', component: Servicios },
  { path: '/contacto', name: 'Contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router