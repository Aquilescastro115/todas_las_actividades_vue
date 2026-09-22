<template>
  <header class="app-header">
    <div class="header-inner">
      <div>
        <span class="region-pill">Región de Ñuble</span>
        <h1 class="header-title">Portal de Emprendedores Locales</h1>
      </div>
      <button class="btn btn-brand" @click="$emit('nuevo')">
        <span>+</span> Nuevo Registro
      </button>
    </div>
  </header>
</template>

<script setup>
defineEmits(['nuevo']);
</script>

<style scoped>
.app-header {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.region-pill {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #0284c7;
  letter-spacing: 0.05em;
}
.header-title {
  margin: 0.25rem 0 0;
  font-size: 1.45rem;
  font-weight: 700;
  color: #0f172a;
}
.btn-brand {
  background-color: #0284c7;
  color: #fff;
}
.btn-brand:hover {
  background-color: #0369a1;
}
</style>