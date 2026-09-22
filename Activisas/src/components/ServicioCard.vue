<template>
  <div class="card" :class="{ 'no-disponible': !servicio.disponible }">
    <h3>{{ servicio.nombre }}</h3>
    <span class="categoria">{{ servicio.categoria }}</span>
    <p>{{ servicio.descripcion }}</p>
    <p class="precio">Valor ref: ${{ servicio.precio.toLocaleString('es-CL') }}</p>
    
    <!-- Control condicional de disponibilidad -->
    <p v-if="!servicio.disponible" class="agotado">Temporalmente no disponible</p>
    
    <button 
      v-if="servicio.disponible" 
      @click="$emit('seleccionar', servicio.nombre)"
    >
      Me interesa
    </button>
  </div>
</template>

<script setup>
defineProps({
  servicio: Object
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.no-disponible {
  opacity: 0.6;
}
.categoria {
  background: #eee;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
.precio {
  font-weight: bold;
  color: #2c3e50;
}
.agotado {
  color: red;
  font-weight: bold;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
</style>