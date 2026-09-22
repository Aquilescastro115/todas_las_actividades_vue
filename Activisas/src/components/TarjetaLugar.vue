<template>
  <article class="card">
    <div class="card-icon">
      <span>{{ icono }}</span>
    </div>
    <div class="card-body">
      <span class="card-tag">{{ categoria }}</span>
      <h3 class="card-title">{{ titulo }}</h3>
      <p class="card-description">{{ descripcion }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    default: 'General'
  },
  icono: {
    type: String,
    default: '📍'
  }
})
</script>

<style scoped>
.card {
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  border-top: 3px solid var(--color-primary);
}

.card-icon {
  height: 110px;
  background-color: #f1ece4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}

.card-body {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-secondary);
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.card-title {
  font-size: 1.15rem;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.9rem;
  color: #555;
}
</style>