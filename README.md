## Actividad 12 - Vue Router y favoritos

En esta actividad se transformó el proyecto Feria Artesanal de Ñuble en una SPA utilizando Vue Router.

### Funcionalidades
- Navegación mediante RouterLink.
- Rutas para Inicio, Productos, Favoritos y Contacto.
- Ruta dinámica para detalle de producto.
- Página 404.
- Filtro de productos.
- Componentes reutilizables.
- Props y emit.
- Favoritos persistentes mediante localStorage.

### Desafío Individual Seleccionado
*"Agregar un botón Limpiar favoritos con confirmación"*
- Se modificó el archivo "src/views/FavoritosView.vue".
- Se agregó la función "limpiarFavoritos" que direcciona a un "window.confirm".
- Si el usuario acepta, se asigna un arreglo vacío a la variable reactiva "favoritos.value" y se elimina la clave del "localStorage" mediante "localStorage.removeItem('favoritos')".

### Tecnologías
- Vue 3
- Vite
- Vue Router
- JavaScript
- CSS
- localStorage