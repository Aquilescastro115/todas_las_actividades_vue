# Actividad 7 - Diagnóstico y Corrección de Aplicación Vue 3

## Diagnóstico inicial

Diagnóstico inicial:
1. Problema detectado:

function guardar(){
  /  <---- ese es un error del archivo
  if(!form.value.id_proveedor){
    alert('Seleccione proveedor')
   
  }
  state.recepciones.push({ id: Date.now(), ...form.value })
  seleccion.value = state.recepciones[state.recepciones.length-1]?.id || null
  form.value = { fecha: '', nro_guia: '', id_proveedor: '' }
}
   Archivo: Recepciones.vue
   Posible causa: Error en la sintaxis 

2. Problema detectado:
import { createApp } from 'vue'
import './styles.css'  <----- error con la s
import App from './App.vue'
   Archivo: Main.js
   Posible causa: Mal tipeo en el nombre del archivo

3. Problema detectado: Hay problemas con los "}" o con ": y ;" despue de la funcion agregar

   Archivo: ItemsRecepcion.vue
   Posible causa: Equivocacion con los ":", deberia de ser ";" y unos parentesis de llaves mal puestos.

4. Problema detectado: No hay nada en el archivo llamado "Proveedores"
   Archivo: Proveedores.vue
   Posible causa: el ocntenido del archivo

5. Problema detectado:problemas con el archivo de proveedores
   Archivo: app.vue
   Posible causa: Ya que no hay nada dentro del archivo proveedores, seria mejor solamente quitarlo dentro del app.vue para poder soslucionar todos los errores. 

   ## Estado compartido

* *Problema encontrado:* Los componentes no lograban acceder a los datos de la tienda (proveedores, libros, recepciones, ítems) o existían inconsistencias en los nombres de las propiedades declaradas en el estado.
* *Corrección realizada:* Se ajustó la estructura reactiva (usando `reactive` o `ref`) y se corrigieron los nombres inconsistentes para que la función `useRecepcionStore()` exportara correctamente los datos.
* *Justificación:* El estado debe ser compartido entre componentes para mantener una única "fuente de la verdad". De esta manera, si se agrega una recepción o un libro desde una vista, el resto de la aplicación se entera inmediatamente y se actualiza sin perder información.

## Gestión de libros

* *Error en la validación:* La validación del ISBN no verificaba correctamente el requerimiento de que la longitud fuera estrictamente de 10 o 13 caracteres.
* *Corrección realizada:* Se modificó la condición en `Libros.vue` utilizando `.length` (ej: `if (isbn.length !== 10 && isbn.length !== 13)`) para impedir el registro si la condición no se cumplía.
* *Problema con el año:* Existía una inconsistencia en el nombre de la variable (o propiedad reactiva) encargada de almacenar y renderizar el año de publicación (por ejemplo, entre `ano` y `anio`), lo que se unificó a un solo nombre.

## Gestión de recepciones

* *Errores encontrados y correcciones:*
  * En la función `guardar()`, se eliminó el error de sintaxis (`/`) y se añadió un `return` después de la validación del proveedor para evitar que continuara el proceso.
  * Se corrigió la asignación de campos para que la nueva recepción se guardara correctamente en el estado reactivo, visualizándose de inmediato en la tabla de recepciones.

## Detalle de recepción

* *Problema con el identificador:* La prop (o variable) recibida para identificar a qué recepción se le estaban agregando ítems no coincidía con el ID real de la recepción activa, por lo que los ítems quedaban "huérfanos" o se mezclaban.
* *Solución de filtrado:* Se creó una propiedad calculada (`computed`) que filtra los ítems desde la tienda evaluando `item.id_recepcion === props.idRecepcion`.
* *Agregado de un nuevo ítem:* Se aseguró de castear la cantidad ingresada por el usuario usando `Number(cantidad)` antes de guardarla. Luego, el objeto del ítem se empujó al arreglo central del estado compartido asociándolo con el ID correcto de la recepción actual.

## Cálculos de recepción

* *Cálculo del total:* Para obtener el "Total de libros" de cada recepción, se implementó una función o computed que filtra todos los ítems pertenecientes a esa recepción específica y suma sus propiedades `cantidad`.
* *Elementos con problemas:* Se identificaron los ítems problemáticos filtrando aquellos cuyo estado era "dañado" o "mixto".
* *Información utilizada:* Se utilizó el arreglo completo de ítems guardados en el estado, cruzando su `id_recepcion` con la tabla y aplicando operaciones matemáticas para definir el porcentaje sin dejar datos estáticos como "0" o "NaN".