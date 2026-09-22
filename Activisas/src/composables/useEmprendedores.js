import { ref } from 'vue';
import emprendedoresService from '../services/emprendedoresService';

export function useEmprendedores() {
  const lista = ref([]);
  const cargando = ref(false);
  const guardando = ref(false);
  const feedback = ref({ visible: false, texto: '', tipo: 'success' });

  const notificar = (texto, tipo = 'success') => {
    feedback.value = { visible: true, texto, tipo };
    setTimeout(() => {
      feedback.value.visible = false;
    }, 4000);
  };

  const listarTodos = async () => {
    cargando.value = true;
    try {
      const { data } = await emprendedoresService.getAll();
      lista.value = data;
    } catch (err) {
      notificar('No se pudo conectar con el servidor NestJS', 'error');
    } finally {
      cargando.value = false;
    }
  };

  const buscarRegistros = async (comuna, rubro) => {
    cargando.value = true;
    try {
      const { data } = await emprendedoresService.buscar(comuna, rubro);
      lista.value = data;
    } catch (err) {
      notificar('Error al realizar la búsqueda', 'error');
    } finally {
      cargando.value = false;
    }
  };

  const guardarRegistro = async (item, id = null) => {
    guardando.value = true;
    try {
      if (id) {
        await emprendedoresService.update(id, item);
        notificar('Emprendedor actualizado con éxito');
      } else {
        await emprendedoresService.create(item);
        notificar('Emprendedor registrado correctamente');
      }
      return true;
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.error || 'Error de validación';
      notificar(Array.isArray(msg) ? msg.join(', ') : msg, 'error');
      return false;
    } finally {
      guardando.value = false;
    }
  };

  const eliminarRegistro = async (id, nombre) => {
    if (!confirm(`¿Confirmas eliminar a "${nombre}"?`)) return false;
    try {
      await emprendedoresService.delete(id);
      notificar(`Registro de "${nombre}" eliminado`);
      return true;
    } catch (err) {
      notificar('Error al intentar eliminar', 'error');
      return false;
    }
  };

  return {
    lista,
    cargando,
    guardando,
    feedback,
    notificar,
    listarTodos,
    buscarRegistros,
    guardarRegistro,
    eliminarRegistro,
  };
}