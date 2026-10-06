<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <footer>
    <p>Feria Artesanal de Ñuble - certamen 2</p>
  </footer>
</template>