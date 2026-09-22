<template>
  <div>
    <h2>Catálogo de Servicios</h2>
    
    <div class="filtros">
      <label>Filtrar por categoría:</label>
      <select v-model="filtroCategoria">
        <option value="">Todos los servicios</option>
        <option value="Desarrollo">Desarrollo</option>
        <option value="Soporte">Soporte</option>
        <option value="Infraestructura">Infraestructura</option>
      </select>
    </div>

    <!-- Lista dinámica de servicios filtrados -->
    <div class="grid" v-if="serviciosFiltrados.length > 0">
      <ServicioCard 
        v-for="srv in serviciosFiltrados" 
        :key="srv.id" 
        :servicio="srv"
        @seleccionar="irAContacto"
      />
    </div>
    <div v-else>
      <p>No se encontraron servicios para esta categoría.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ServicioCard from '../components/ServicioCard.vue'

const router = useRouter()
const filtroCategoria = ref('')

const servicios = ref([
  { id: 1, nombre: 'Portal Web E-commerce', categoria: 'Desarrollo', descripcion: 'Desarrollo de portales de venta personalizados.', precio: 350000, disponible: true },
  { id: 2, nombre: 'Soporte Hardware', categoria: 'Soporte', descripcion: 'Mantenimiento de equipos de alto rendimiento.', precio: 45000, disponible: true },
  { id: 3, nombre: 'Redes Empresariales', categoria: 'Infraestructura', descripcion: 'Configuración de redes WiFi corporativas.', precio: 120000, disponible: false },
  { id: 4, nombre: 'Desarrollo de API REST', categoria: 'Desarrollo', descripcion: 'Creación de interfaces backend robustas.', precio: 250000, disponible: true },
  { id: 5, nombre: 'Mantenimiento Preventivo', categoria: 'Soporte', descripcion: 'Limpieza y optimización lógica de PCs.', precio: 30000, disponible: true },
  { id: 6, nombre: 'Cableado Estructurado', categoria: 'Infraestructura', descripcion: 'Diseño e instalación de redes físicas.', precio: 180000, disponible: true }
])

const serviciosFiltrados = computed(() => {
  if (!filtroCategoria.value) return servicios.value
  return servicios.value.filter(s => s.categoria === filtroCategoria.value)
})

const irAContacto = (nombreServicio) => {
  // Redirigimos al contacto pasando el servicio como parámetro en la URL[cite: 2]
  router.push({ path: '/contacto', query: { interes: nombreServicio } })
}
</script>

<style scoped>
.filtros {
  margin-bottom: 2rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
</style>