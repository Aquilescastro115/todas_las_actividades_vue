<template>
  <section class="atractivos">
    <h2 class="page-title">Atractivos Turísticos</h2>
    <p class="page-subtitle">Lugares icónicos que no puedes dejar de visitar</p>

    <div class="grid-cards">
      <TarjetaLugar
        v-for="lugar in listaLugares"
        :key="lugar.id"
        :titulo="lugar.titulo"
        :descripcion="lugar.descripcion"
        :categoria="lugar.categoria"
        :icono="lugar.icono"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TarjetaLugar from '../components/TarjetaLugar.vue'


const listaLugares = ref([
  {
    id: 1,
    titulo: 'Catedral de Chillán',
    descripcion: 'Ícono de la arquitectura moderna con su imponente arco parabólico de 39 metros y la cruz monumental en memoria del terremoto de 1939.',
    categoria: 'Patrimonio y Arquitectura',
    icono: '⛪'
  },
  {
    id: 2,
    titulo: 'Termas de Chillán',
    descripcion: 'Complejo termal y de esquí situado en las faldas del volcán Chillán, reconocido internacionalmente por sus aguas curativas y pistas de nieve.',
    categoria: 'Naturaleza y Relax',
    icono: '♨️'
  },
  {
    id: 3,
    titulo: 'Valle Las Trancas',
    descripcion: 'Santuario de bosque nativo cordillerano, ideal para turismo aventura, trekking, cabalgatas y desconexión.',
    categoria: 'Aventura y Ecoturismo',
    icono: '🏔️'
  },
  {
    id: 4,
    titulo: 'Feria y Mercado de Chillán',
    descripcion: 'Espacio patrimonial con artesanía tradicional en greda de Quinchamalí, cantería, tallados en madera y productos campesinos.',
    categoria: 'Cultura Tradicional',
    icono: '🏺'
  }
])
</script>