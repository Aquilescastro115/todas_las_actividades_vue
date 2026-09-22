<template>
  <div class="inicio-container">
    <div class="hero">
      <h2>Bienvenido a Telecomp Servicios</h2>
      <p class="subtitulo">Soluciones tecnológicas integrales para tu empresa y hogar.</p>
      <p>
        En Telecomp nos especializamos en el desarrollo de software a medida, mantenimiento de hardware de alto rendimiento y diseño de infraestructura de redes. Nuestro objetivo es optimizar tus procesos tecnológicos para que tú solo te preocupes por hacer crecer tu negocio.
      </p>
      
      <div class="cta-container">
        <!-- Enlace rápido hacia el catálogo usando Vue Router -->
        <router-link to="/servicios" class="btn-primario">Ver nuestro catálogo</router-link>
        <router-link to="/contacto" class="btn-secundario">Contáctanos</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Componente de presentación básico, no requiere lógica reactiva compleja.
</script>

<style scoped>
.inicio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  text-align: center;
}
.hero {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  max-width: 800px;
}
h2 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.subtitulo {
  font-size: 1.2rem;
  color: #42b983;
  font-weight: bold;
  margin-bottom: 2rem;
}
.cta-container {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.btn-primario, .btn-secundario {
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}
.btn-primario {
  background-color: #42b983;
  color: white;
}
.btn-primario:hover {
  background-color: #3aa876;
}
.btn-secundario {
  background-color: #2c3e50;
  color: white;
}
.btn-secundario:hover {
  background-color: #1a252f;
}
</style>