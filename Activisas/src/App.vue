<template>
  <div class="layout">
    <header>
      <h1>Telecomp Servicios</h1>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <router-link to="/servicios">Catálogo de Servicios</router-link>
        <router-link to="/contacto">Contacto</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  background-color: #2c3e50;
  padding: 1.5rem;
  color: white;
  text-align: center;
}
nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}
nav a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
nav a.router-link-active {
  color: white;
  text-decoration: underline;
}
main {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>