<template>
  <section class="contacto">
    <h2 class="page-title">Contacto Turístico</h2>
    <p class="page-subtitle">Escríbenos para obtener información sobre tu visita</p>

    <div class="form-container">
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nombre">Nombre Completo</label>
          <input 
            id="nombre" 
            v-model="formulario.nombre" 
            type="text" 
            placeholder="Ej. María González" 
            required 
          />
        </div>

        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input 
            id="email" 
            v-model="formulario.email" 
            type="email" 
            placeholder="nombre@correo.cl" 
            required 
          />
        </div>

        <div class="form-group">
          <label for="mensaje">Consulta o Sugerencia</label>
          <textarea 
            id="mensaje" 
            v-model="formulario.mensaje" 
            rows="4" 
            placeholder="Escribe aquí tu mensaje..." 
            required
          ></textarea>
        </div>

        <button type="submit" class="btn-submit">Enviar Mensaje</button>
      </form>

      <div v-if="enviado" class="alert-success">
        ¡Mensaje enviado con éxito! Te contactaremos pronto.
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formulario = reactive({
  nombre: '',
  email: '',
  mensaje: ''
})

const enviado = ref(false)

const enviarFormulario = () => {
  enviado.value = true
  formulario.nombre = ''
  formulario.email = ''
  formulario.mensaje = ''

  setTimeout(() => {
    enviado.value = false
  }, 4000)
}
</script>

<style scoped>
.form-container {
  max-width: 550px;
  margin: 0 auto;
  background: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.form-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--color-text);
}

input, textarea {
  padding: 0.65rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.btn-submit {
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: var(--color-primary-dark);
}

.alert-success {
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  text-align: center;
  font-size: 0.9rem;
}
</style>