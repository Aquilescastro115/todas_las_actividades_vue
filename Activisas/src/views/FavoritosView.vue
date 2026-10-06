<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductoCard from '../components/ProductoCard.vue'
import { productos } from '../data/productos'

const favoritos = ref([])

onMounted(() => {
  const guardados = localStorage.getItem('favoritos')
  favoritos.value = guardados ? JSON.parse(guardados) : []
})

const productosFavoritos = computed(() => {
  return productos.filter(producto => favoritos.value.includes(producto.id))
})

function cambiarFavorito(id) {
  favoritos.value = favoritos.value.filter(item => item !== id)
  localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
}

// NUEVA FUNCIÓN PARA EL DESAFÍO
function limpiarFavoritos() {
  const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar todos tus productos favoritos?')
  if (confirmacion) {
    favoritos.value = [] // Vacía la lista visualmente
    localStorage.removeItem('favoritos') // Lo borra de la memoria del navegador
  }
}
</script>

<template>
  <section class="pagina">
    <div class="encabezado-favoritos">
      <h1>Mis favoritos</h1>
      <!-- NUEVO BOTÓN DEL DESAFÍO (Solo se muestra si hay favoritos) -->
      <button 
        v-if="productosFavoritos.length > 0" 
        @click="limpiarFavoritos" 
        class="boton-limpiar"
      >
        Limpiar favoritos
      </button>
    </div>

    <div v-if="productosFavoritos.length" class="productos-grid">
      <ProductoCard
        v-for="producto in productosFavoritos"
        :key="producto.id"
        :producto="producto"
        :favorito="true"
        @cambiar-favorito="cambiarFavorito"
      />
    </div>
    <div v-else>
      <p>Aún no has seleccionado productos favoritos.</p>
      <RouterLink to="/productos">Revisar catálogo</RouterLink>
    </div>
  </section>
</template>

<style scoped>
/* Estilos para que el encabezado y el botón se vean profesionales */
.encabezado-favoritos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.boton-limpiar {
  background-color: #b42318;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.boton-limpiar:hover {
  background-color: #8a1a12;
}

@media (max-width: 700px) {
  .encabezado-favoritos {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>