<template>
  <Transition name="fade">
    <div v-if="mensaje.visible" :class="['toast', `toast-${mensaje.tipo}`]">
      <span>{{ mensaje.tipo === 'error' ? '⚠️' : '✅' }}</span>
      <p>{{ mensaje.texto }}</p>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  mensaje: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 100;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.toast p {
  margin: 0;
}
.toast-success {
  background: #ecfdf5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}
.toast-error {
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>