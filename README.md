# Actividad 11 - Feria Artesanal de Ñuble

## Objetivo
Construir un catálogo interactivo con Vue.js[cite: 28].

## Conceptos aplicados
- v-model
- v-if/v-else
- v-show
- v-for
- computed
- props y eventos.

## Ejecutar
npm install
npm run dev.

## Estructura
- *App.vue*: Componente principal que gestiona el estado de la aplicación, los filtros de búsqueda y decide cuándo renderizar el catálogo.
- *ProductoCard.vue*: Componente reutilizable que recibe información mediante props y emite eventos hacia el padre para mostrar los detalles.
- *ProductoModal.vue*: Ventana emergente que muestra el detalle completo de un producto específico seleccionado.
- *productos.js*: Archivo de datos estáticos que actúa como fuente de información para poblar el catálogo de la feria.

## Cambios realizados
- Se agregó un cuarto producto (Mermelada) al arreglo de datos en "productos.js", asignándole una nueva categoría.
- Se actualizó el texto de bienvenida en "App.vue" para darle un enfoque más profundo a la identidad cultural y artesanal de la Región de Ñuble.
- Se incorporó una alerta visual en "App.vue" utilizando la directiva "v-show" para indicar explícitamente al usuario cuando el catálogo está oculto.