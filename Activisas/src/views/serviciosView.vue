<script setup>
import { ref, computed, onMounted } from 'vue'
import serviciosCard from '../components/serviciosCard.vue'

const productos = ref([]) 
const buscar = ref('')
const categoria = ref('Todas')
const favoritos = ref([])

const cargando = ref(true)
const errorPeticion = ref(null)

const categorias = computed(() => {
  return ['Todas', ...new Set(productos.value.map(p => p.categoria))]
})

const productosFiltrados = computed(() => {
  return productos.value.filter(producto => {
    const coincideTexto = producto.nombre
      .toLowerCase()
      .includes(buscar.value.toLowerCase())
    const coincideCategoria =
      categoria.value === 'Todas' ||
      producto.categoria === categoria.value
    return coincideTexto && coincideCategoria
  })
})

function cambiarFavorito(id) {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(item => item !== id)
  } else {
    favoritos.value.push(id)
  }
  localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
}

const obtenerProductos = async () => {
  cargando.value = true
  errorPeticion.value = null
  
  try {
    const respuesta = await fetch('/productos.json')
    if (!respuesta.ok) {
      throw new Error('Error al obtener los datos.')
    }
    productos.value = await respuesta.json()
  } catch (error) {
    errorPeticion.value = 'Ocurrió un error al cargar el catálogo. Inténtalo más tarde.'
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  const guardados = localStorage.getItem('favoritos')
  if (guardados) favoritos.value = JSON.parse(guardados)
  
  obtenerProductos()
})
</script>

<template>
  <section class="pagina">
    <h1>Catálogo</h1>

    <div v-if="cargando" class="estado-carga">
      <p>Cargando servicios...</p>
    </div>

    <div v-else-if="errorPeticion" class="estado-error">
      <p>{{ errorPeticion }}</p>
    </div>

    <div v-else>
      <div class="filtros">
        <input v-model="buscar" placeholder="Buscar producto..." />
        <select v-model="categoria">
          <option v-for="cat in categorias" :key="cat">
            {{ cat }}
          </option>
        </select>
      </div>

      <div v-if="productosFiltrados.length" class="productos-grid">
        <serviciosCard
          v-for="producto in productosFiltrados"
          :key="producto.id"
          :producto="producto"
          :favorito="favoritos.includes(producto.id)"
          @cambiar-favorito="cambiarFavorito"
        />
      </div>
      <p v-else>No existen servicios que coincidan con la búsqueda.</p>
    </div>
  </section>
</template>

<style scoped>
.estado-carga { color: #0056b3; font-weight: bold; padding: 20px 0; }
.estado-error { color: #b42318; font-weight: bold; padding: 20px 0; }
</style>