import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import ProductoDetalleView from '../views/ProductoDetalleView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import ContactoView from '../views/ContactoView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'inicio', component: InicioView },
  { path: '/servicios', name: 'Catálogo de servicios', component: ProductosView },
  { path: '/servicios/:id', name: 'Detalle de un servicio', component: ProductoDetalleView },
  { path: '/favoritos', name: 'Servicios favoritos', component: FavoritosView },
  { path: '/contacto', name: 'Formulario de contacto', component: ContactoView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router