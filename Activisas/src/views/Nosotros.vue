<template>
  <div class="nosotros-container">
    <h2>Quiénes Somos</h2>
    <hr class="separador" />
    
    <div class="contenido">
      <section class="bloque">
        <h3>Nuestra Historia</h3>
        <p>
          Telecomp Servicios nació con la convicción de acercar soluciones tecnológicas de nivel corporativo a emprendimientos y empresas locales. Observamos que muchas organizaciones carecían de un soporte adecuado para sus equipos y de una presencia web sólida, por lo que decidimos crear un ecosistema de servicios que cubra ambas necesidades.
        </p>
      </section>

      <section class="bloque">
        <h3>Nuestro Propósito</h3>
        <p>
          Nuestra misión principal es actuar como un socio tecnológico estratégico. Ya sea desarrollando una aplicación web moderna (SPA), implementando una red inalámbrica eficiente o realizando mantenimiento preventivo a tus equipos, nos aseguramos de que la tecnología sea una herramienta a tu favor y no un obstáculo.
        </p>
      </section>

      <section class="valores">
        <h3>¿Por qué elegirnos?</h3>
        <ul>
          <li><strong>Compromiso:</strong> Cumplimos con los plazos y estándares acordados.</li>
          <li><strong>Innovación:</strong> Utilizamos tecnologías modernas como Vue 3 y Node.js.</li>
          <li><strong>Transparencia:</strong> Te informamos cada paso del proceso de diagnóstico y desarrollo.</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
// Vista estática informativa
</script>

<style scoped>
.nosotros-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
}
.separador {
  border: 0;
  height: 3px;
  background: #42b983;
  width: 60px;
  margin: 0 auto 2rem;
  border-radius: 3px;
}
.bloque {
  margin-bottom: 2rem;
}
h3 {
  color: #34495e;
  margin-bottom: 0.8rem;
  border-left: 4px solid #42b983;
  padding-left: 0.8rem;
}
p {
  line-height: 1.6;
  color: #555;
  text-align: justify;
}
.valores ul {
  list-style-type: none;
  padding: 0;
}
.valores li {
  background: #f8f9fa;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #2c3e50;
}
</style>