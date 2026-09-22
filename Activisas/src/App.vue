<template>
  <div class="view-wrapper">
    <AppHeader @nuevo="abrirModalCrear" />

    <main class="content-container">
      <EmprendedorFiltros
        :bloqueado="cargando"
        @filtrar="handleBusqueda"
        @limpiar="listarTodos"
      />

      <div v-if="cargando" class="state-notice">
        <div class="loader"></div>
        <p>Consultando base de datos...</p>
      </div>

      <div v-else-if="lista.length > 0" class="cards-layout">
        <EmprendedorCard
          v-for="item in lista"
          :key="item.id"
          :emprendedor="item"
          @editar="abrirModalEditar"
          @eliminar="handleEliminar"
        />
      </div>

      <div v-else class="state-notice">
        <p>No se registraron emprendedores con los filtros solicitados.</p>
        <button class="btn btn-outline" @click="listarTodos">Ver listado general</button>
      </div>
    </main>

    <EmprendedorFormModal
      :activo="modalVisible"
      :edicion="Boolean(seleccionado)"
      :inicial="seleccionado"
      :procesando="guardando"
      @cerrar="modalVisible = false"
      @confirmar="handleGuardar"
    />

    <FeedbackToast :mensaje="feedback" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useEmprendedores } from './composables/useEmprendedores';
import AppHeader from './components/AppHeader.vue';
import EmprendedorFiltros from './components/EmprendedorFiltros.vue';
import EmprendedorCard from './components/EmprendedorCard.vue';
import EmprendedorFormModal from './components/EmprendedorFormModal.vue';
import FeedbackToast from './components/FeedbackToast.vue';

const {
  lista,
  cargando,
  guardando,
  feedback,
  listarTodos,
  buscarRegistros,
  guardarRegistro,
  eliminarRegistro,
} = useEmprendedores();

const modalVisible = ref(false);
const seleccionado = ref(null);

const abrirModalCrear = () => {
  seleccionado.value = null;
  modalVisible.value = true;
};

const abrirModalEditar = (item) => {
  seleccionado.value = { ...item };
  modalVisible.value = true;
};

const handleBusqueda = ({ comuna, rubro }) => {
  buscarRegistros(comuna, rubro);
};

const handleGuardar = async (datos) => {
  const ok = await guardarRegistro(datos, seleccionado.value?.id);
  if (ok) {
    modalVisible.value = false;
    listarTodos();
  }
};

const handleEliminar = async (item) => {
  const ok = await eliminarRegistro(item.id, item.nombre);
  if (ok) {
    listarTodos();
  }
};

onMounted(() => {
  listarTodos();
});
</script>

<style scoped>
.content-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}
.cards-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
.state-notice {
  text-align: center;
  padding: 4rem 1rem;
  color: #64748b;
}
.loader {
  width: 32px;
  height: 32px;
  border: 3px solid #e2e8f0;
  border-top-color: #0284c7;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 1rem;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>