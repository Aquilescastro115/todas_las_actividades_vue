# Actividad 8 - Sitio Web Empresa de Servicios

## Datos del Proyecto
* *Nombre de la Empresa:* Telecomp Servicios
* *Rubro:* Servicios Tecnológicos

## Parte 1 - Reutilización del proyecto
* Se conservaron las configuraciones base del proyecto Vue 3, la integración de Vue Router y la estructura general de carpetas ("components", "views", "data") de la Actividad 7.
* Se modificaron los archivos de datos y los textos estáticos para cambiar el enfoque hacia una empresa de servicios, eliminando los datos y componentes del proyecto anterior que no correspondían al nuevo caso.
* Se tomó la decisión de mantener el componente Navbar y el Footer por ser elementos estructurales transversales que solo requerían adaptación de estilos.

## Parte 2 - Navegación y Vistas
* La aplicación cuenta con cuatro vistas principales desarrolladas con Vue Router: "Inicio" (presentación breve), "Nosotros" (propósito de la empresa), "Servicios" (oferta) y "Contacto" (consultas).
* La navegación se implementó utilizando componentes "<RouterLink>" para permitir desplazamientos instantáneos entre las distintas vistas sin requerir recargar la página web en el navegador.

## Parte 3 - Catálogo y componentes de servicios
* Los servicios se organizaron en un arreglo de objetos estático, conteniendo propiedades como nombre, categoría, descripción, precio y disponibilidad.
* Se creó un componente reutilizable llamado "ServicioCard.vue" que se encarga de estructurar visualmente cada prestación.
* Este componente recibe de su padre, mediante "props", el objeto completo con toda la información del servicio a renderizar de forma dinámica con "v-for".

## Parte 4 - Filtros, condicionales e interacción
* Se implementó un filtro dual por nombre (búsqueda de texto) y categoría utilizando una propiedad "computed" y "v-model" para asegurar que el arreglo original no fuera mutado.
* La directiva "v-if" se utilizó para mostrar el estado de disponibilidad del servicio y para manejar el escenario donde la búsqueda no arroja ningún resultado.
* La comunicación hijo-padre se logró a través de "emit". Al hacer clic en un botón "Solicitar", el componente hijo notifica al padre el servicio seleccionado para que quede destacado.

## Parte 5 - Formulario de contacto
* La vista "Contacto.vue" contiene campos enlazados con "v-model" para nombre, correo, teléfono, servicio de interés y mensaje.
* El formulario cuenta con una validación que, al detectar campos obligatorios vacíos, previene el envío y despliega un mensaje de error.
* Si la validación es exitosa, se bloquea el formulario y se despliega un mensaje de resumen al usuario confirmando la solicitud.
* A través del uso del estado global, si un servicio fue emitido en el catálogo, este campo aparece seleccionado automáticamente en el formulario.

## Parte 6 - Diseño y revisión final
* El diseño se orientó a mantener colores institucionales serios y estructurados, acordes a una empresa del sector, respetando la identidad gráfica a lo largo de todas las vistas.
* Se aplicaron reglas CSS como "Flexbox" y "CSS Grid" para la disposición del catálogo de tarjetas y el diseño responsivo en pantallas móviles.
* Durante la revisión final, se corrigieron problemas menores de desbordamiento en dispositivos pequeños y se confirmó la ausencia de advertencias en la consola del navegador.