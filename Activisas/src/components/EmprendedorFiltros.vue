<template>
  <section class="filter-panel">
    <div class="filter-grid">
      <div class="input-control">
        <label>Comuna</label>
        <input
          v-model="comuna"
          type="text"
          placeholder="Ej: Chillán, San Carlos, Pinto..."
          @keyup.enter="ejecutarBusqueda"
        />
      </div>
      <div class="input-control">
        <label>Rubro</label>
        <select v-model="rubro" @change="ejecutarBusqueda">
          <option value="">Todos los rubros</option>
          <option v-for="r in rubros" :key="r" :value="r">{{ r }}</option>
        </select>
      </div>
      <div class="filter-actions">
        <button class="btn btn-dark" @click="ejecutarBusqueda" :disabled="bloqueado">
          Buscar
        </button>
        <button class="btn btn-outline" @click="limpiar" :disabled="bloqueado">
          Reestablecer
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { RUBROS_NUBLE } from '../constants/rubros';

defineProps({
  bloqueado: { type: Boolean, default: false },
});

const emit = defineEmits(['filtrar', 'limpiar']);

const rubros = RUBROS_NUBLE;
const comuna = ref('');
const rubro = ref('');

const ejecutarBusqueda = () => {
  emit('filtrar', { comuna: comuna.value, rubro: rubro.value });
};

const limpiar = () => {
  comuna.value = '';
  rubro.value = '';
  emit('limpiar');
};
</script>

<style scoped>
.filter-panel {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}
.filter-grid {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1.25rem;
  align-items: flex-end;
}
.input-control {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.input-control label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}
.filter-actions {
  display: flex;
  gap: 0.5rem;
}
.btn-dark {
  background-color: #0f172a;
  color: #ffffff;
}
.btn-dark:hover {
  background-color: #1e293b;
}
@media (max-width: 768px) {
  .filter-grid {
    grid-template-columns: 1fr;
  }
}
</style>