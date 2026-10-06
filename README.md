# Plataforma de Servicios de Ñuble

*Estudiante:* Diego Elías Castro Bórquez

## Tecnologías y Herramientas
* Vue.js 
* Vue Router
* Fetch API 
* LocalStorage

## Etapas de la Evaluación Completadas

* [x] Etapa 0 - Preparación del repositorio: Repositorio creado, proyecto de Vue inicializado y configurado.
* [x] Etapa 1 - Estructura inicial de la aplicación: Creación de la estructura de carpetas (components, views, router) y las vistas principales de la aplicación.
* [x] Etapa 2 - Navegación con Vue Router: Configuración de las rutas estáticas e implementación del menú principal utilizando RouterLink para funcionar como SPA.
* [x] Etapa 3 - Catálogo dinámico: Creación del componente reutilizable serviciosCard.vue y renderizado iterativo del catálogo mediante v-for.
* [x] Etapa 4 - Búsqueda, filtros y condicionales: Implementación de buscador interactivo y selector de categoría enlazados con v-model y procesados mediante propiedades computed.
* [x] Etapa 5 - Ruta dinámica y detalle del servicio: Implementación de la ruta /servicios/:id para recuperar y visualizar la información completa de cada servicio seleccionado.
* [x] Etapa 6 - Comunicación entre componentes: Interacción funcional entre la vista padre y el componente hijo mediante el uso de props y la emisión de eventos con emit.
* [x] Etapa 7 - Persistencia con localStorage: Lógica de almacenamiento, visualización y eliminación de los servicios favoritos guardando su estado directamente en el navegador.
* [x] Etapa 8 - Consumo de datos con Fetch: Refactorización del catálogo para obtener los datos de forma asíncrona manejando correctamente los estados de carga, éxito y error con async y await.
* [x] Etapa 9 - Formulario de contacto: Construcción de un formulario reactivo con validación integral para los campos principales y retroalimentación en pantalla.
* [x] Etapa 10 - Revisión y entrega: Aplicación probada, libre de errores en consola, con historial de versionamiento completo y cambios finales subidos al repositorio.

## Instalación y Ejecución Local

1. Clonar el repositorio:
git clone https://github.com/Aquilescastro115/todas_las_actividades_vue.git

2. Instalar las dependencias del proyecto:
npm install

3. Ejecutar el servidor de desarrollo:
npm run dev

## Estructura del Proyecto

src/
├── assets/
├── components/
│   ├── Navbar.vue
│   └── serviciosCard.vue
├── data/
│   └── productos.js
├── router/
│   └── index.js
├── views/
│   ├── ContactoView.vue
│   ├── FavoritosView.vue
│   ├── InicioView.vue
│   ├── NotFoundView.vue
│   ├── serviciosDetalleView.vue
│   └── serviciosView.vue
├── App.vue
└── main.js
public/
└── productos.json