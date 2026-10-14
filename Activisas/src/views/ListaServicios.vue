<script setup>
import { ref, onMounted, computed } from 'vue';
import { obtenerServicios, eliminarServicio } from '../services/serviciosApi';

const servicios = ref([]);
const busqueda = ref('');
const filtroCategoria = ref(''); // NUEVO: Estado para el filtro de categoría
const cargando = ref(false);
const error = ref('');
const mensaje = ref('');

// NUEVO: Computed modificado para filtrar por ambos criterios
const filtrados = computed(() => {
  return servicios.value.filter(s => {
    const coincideNombre = s.nombre.toLowerCase().includes(busqueda.value.toLowerCase());
    const coincideCategoria = filtroCategoria.value === '' || s.categoria === filtroCategoria.value;
    
    return coincideNombre && coincideCategoria;
  });
});

async function cargar() {
  cargando.value = true; error.value = '';
  try { servicios.value = await obtenerServicios(); }
  catch (e) { error.value = `No fue posible cargar: ${e.message}`; }
  finally { cargando.value = false; }
}

async function borrar(id) {
  if (!confirm('¿Eliminar este servicio?')) return;
  try { await eliminarServicio(id); mensaje.value = 'Servicio eliminado'; await cargar(); }
  catch (e) { error.value = `No fue posible eliminar: ${e.message}`; }
}

onMounted(cargar);
</script>

<template>
  <section>
    <h2>Servicios disponibles</h2>
    
    <!-- NUEVO: Controles de filtro agolpados -->
    <div class="filtros">
      <input v-model="busqueda" placeholder="Buscar por nombre" />
      <select v-model="filtroCategoria">
        <option value="">Todas las categorías</option>
        <option value="Soporte">Soporte</option>
        <option value="Desarrollo">Desarrollo</option>
        <option value="Redes">Redes</option>
      </select>
    </div>

    <p v-if="cargando">Cargando servicios...</p>
    <p v-if="error" role="alert">{{ error }}</p>
    <p v-if="mensaje">{{ mensaje }}</p>
    
    <!-- NUEVO: Mostrar la cantidad total de servicios filtrados -->
    <p v-if="!cargando && !error"><strong>Total de servicios: {{ filtrados.length }}</strong></p>
    
    <p v-if="!cargando && !error && filtrados.length === 0">Sin resultados.</p>
    
    <div class="contenedor-tarjetas">
      <article v-for="s in filtrados" :key="s.id" class="tarjeta">
        <h3>{{ s.nombre }}</h3>
        <p>{{ s.categoria }} | ${{ Number(s.precio).toLocaleString('es-CL') }}</p>
        <p>{{ s.descripcion }}</p>
        <RouterLink :to="`/editar/${s.id}`">Editar</RouterLink>
        <button @click="borrar(s.id)">Eliminar</button>
      </article>
    </div>
  </section>
</template>