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


