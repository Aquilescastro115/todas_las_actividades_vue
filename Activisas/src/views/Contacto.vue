<template>
  <div class="contacto-container">
    <h2>Solicitud de Contacto</h2>
    <p>Completa el formulario para que nuestros técnicos te contacten.</p>

    <form @submit.prevent="procesarFormulario" v-if="!formularioEnviado">
      <div class="campo">
        <label>Nombre completo *</label>
        <input v-model="form.nombre" type="text" required>
      </div>

      <div class="campo">
        <label>Correo electrónico *</label>
        <input v-model="form.correo" type="email" required>
      </div>

      <div class="campo">
        <label>Teléfono</label>
        <input v-model="form.telefono" type="tel">
      </div>

      <div class="campo">
        <label>Servicio de interés</label>
        <input v-model="form.servicio" type="text" readonly>
      </div>

      <div class="campo">
        <label>Mensaje *</label>
        <textarea v-model="form.mensaje" required rows="4"></textarea>
      </div>

      <p v-if="error" class="error">Por favor, completa todos los campos obligatorios correctamente.</p>
      
      <button type="submit">Enviar Solicitud</button>
    </form>

    <div v-else class="exito">
      <h3>¡Solicitud enviada con éxito!</h3>
      <p>Gracias <strong>{{ form.nombre }}</strong>. Te contactaremos pronto respecto a <strong>{{ form.servicio || 'tu consulta general' }}</strong>.</p>
      <button @click="formularioEnviado = false">Nueva consulta</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  servicio: '',
  mensaje: ''
})

const error = ref(false)
const formularioEnviado = ref(false)

// Captura automática del servicio si viene desde el catálogo[cite: 2]
onMounted(() => {
  if (route.query.interes) {
    form.value.servicio = route.query.interes
  }
})

const procesarFormulario = () => {
  if (!form.value.nombre || !form.value.correo || !form.value.mensaje) {
    error.value = true
    return
  }
  error.value = false
  formularioEnviado.value = true
}
</script>

<style scoped>
.contacto-container {
  max-width: 600px;
  margin: 0 auto;
}
.campo {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}
input, textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input[readonly] {
  background-color: #f5f5f5;
  color: #666;
}
button {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error {
  color: red;
  font-weight: bold;
}
.exito {
  background: #e8f8f5;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #42b983;
  text-align: center;
}
</style>