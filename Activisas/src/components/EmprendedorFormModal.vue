<template>
  <div v-if="activo" class="modal-overlay" @click.self="$emit('cerrar')">
    <div class="modal-box">
      <header class="modal-top">
        <h3>{{ edicion ? 'Editar Emprendedor' : 'Nuevo Emprendedor' }}</h3>
        <button class="close-btn" @click="$emit('cerrar')">&times;</button>
      </header>
      <form @submit.prevent="enviar" class="modal-body">
        <div class="form-group">
          <label>Nombre del emprendimiento (mín. 3)*</label>
          <input v-model="form.nombre" required minlength="3" placeholder="Ej: Artesanías Ñuble" />
        </div>
        <div class="form-cols">
          <div class="form-group">
            <label>Comuna*</label>
            <input v-model="form.comuna" required placeholder="Ej: Chillán" />
          </div>
          <div class="form-group">
            <label>Rubro*</label>
            <select v-model="form.rubro" required>
              <option disabled value="">Seleccionar</option>
              <option v-for="r in rubros" :key="r" :value="r">{{ r }}</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Descripción detallada (mín. 10)*</label>
          <textarea v-model="form.descripcion" required minlength="10" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>Contacto (Email o Teléfono)*</label>
          <input v-model="form.contacto" required placeholder="contacto@ejemplo.cl" />
        </div>
        <footer class="modal-actions">
          <button type="button" class="btn btn-outline" @click="$emit('cerrar')">Cancelar</button>
          <button type="submit" class="btn btn-brand" :disabled="procesando">
            {{ procesando ? 'Guardando...' : 'Guardar' }}
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RUBROS_NUBLE } from '../constants/rubros';

const props = defineProps({
  activo: Boolean,
  edicion: Boolean,
  inicial: Object,
  procesando: Boolean,
});

const emit = defineEmits(['cerrar', 'confirmar']);
const rubros = RUBROS_NUBLE;

const vacio = { nombre: '', comuna: '', rubro: '', descripcion: '', contacto: '' };
const form = ref({ ...vacio });

watch(
  () => props.inicial,
  (val) => {
    form.value = val ? { ...val } : { ...vacio };
  },
  { immediate: true }
);

const enviar = () => {
  emit('confirmar', { ...form.value });
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
}
.modal-box {
  background: #ffffff;
  width: 100%;
  max-width: 520px;
  border-radius: 14px;
  padding: 1.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
}
.modal-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}
.modal-top h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #0f172a;
}
.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
}
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.form-group label {
  font-size: 0.825rem;
  font-weight: 600;
  color: #475569;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
</style>