<template>
  <section class="inicio">
    <div class="hero">
      <img :src="heroImg" alt="Chillán" class="hero-image" />
      <h2 class="page-title">Bienvenidos a Chillán</h2>
      <p class="page-subtitle">Tierra de historia, cordillera y tradición</p>
    </div>

    <div class="historia-section">
      <h3>Historia de la Ciudad</h3>
      <p>
        Fundada originalmente en 1580 como San Bartolomé de Chillán por Martín Ruiz de Gamboa, 
        la ciudad ha sido cuna de grandes personajes históricos y artísticos como Bernardo O'Higgins, 
        Arturo Prat, Claudio Arrau, Marta Colvin y Violeta Parra.
      </p>
      <p>
        Tras el terremoto de 1939, Chillán se transformó en un referente de la arquitectura moderna latinoamericana, 
        destacando el diseño monumental de su Catedral y sus tradicionales pasajes cívicos.
      </p>
    </div>
  </section>
</template>

<script setup>
import heroImg from '../assets/hero.png'
</script>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-image {
  max-width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.historia-section {
  background: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.historia-section h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.historia-section p {
  margin-bottom: 1rem;
  text-align: justify;
}
</style>