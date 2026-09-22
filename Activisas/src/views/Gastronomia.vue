<template>
  <section class="gastronomia">
    <h2 class="page-title">Gastronomía Típica</h2>
    <p class="page-subtitle">Los sabores tradicionales de Ñuble</p>

    <div class="grid-cards">
      <TarjetaLugar
        v-for="plato in listaPlatos"
        :key="plato.id"
        :titulo="plato.titulo"
        :descripcion="plato.descripcion"
        :categoria="plato.categoria"
        :icono="plato.icono"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TarjetaLugar from '../components/TarjetaLugar.vue'

const listaPlatos = ref([
  {
    id: 1,
    titulo: 'Longanizas de Chillán',
    descripcion: 'Embutido artesanal aliñado con orégano y ají color, producto con sello distintivo e identidad de la ciudad.',
    categoria: 'Especialidad Local',
    icono: '🥩'
  },
  {
    id: 2,
    titulo: 'Pan Amasado',
    descripcion: 'Pan tradicional horneado a la leña con masa suave y corteza dorada, infaltable en el desayuno y la once local.',
    categoria: 'Panadería Típica',
    icono: '🥖'
  },
  {
    id: 3,
    titulo: 'Vinos del Valle del Itata',
    descripcion: 'Vinos elaborados con parras centenarias de cepas patrimoniales como Cinsault, País y Moscatel de Alejandría.',
    categoria: 'Vitivinicultura',
    icono: '🍷'
  }
])
</script>