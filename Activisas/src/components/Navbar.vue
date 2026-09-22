<template>
  <header class="navbar">
    <div class="nav-container">
      <h1 class="brand">Turismo Chillán</h1>
      <nav class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/atractivos">Atractivos</router-link>
        <router-link to="/gastronomia">Gastronomía</router-link>
        <router-link to="/contacto">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background-color: var(--color-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.brand {
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 600;
}

.nav-links a {
  color: var(--color-white);
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.nav-links a.router-link-active {
  border-bottom: 2px solid var(--color-secondary);
  padding-bottom: 4px;
}
</style>