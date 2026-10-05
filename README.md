# Actividad 9 - Primer Backend con Express.js

## Datos del Proyecto
* *Nombre del estudiante:* Diego Elías Castro Bórquez

## Parte 1 y 2 - Preparación del backend
* Se creó la carpeta del backend y se inicializó el proyecto de Node.js mediante los comandos "mkdir backend", "cd backend" y "npm init -y".
* El comando "npm init -y" generó el archivo "package.json", el cual registra la información y dependencias del backend.
* Se instaló Express mediante "npm install express".
* Express se instaló porque es un framework para Node.js que facilita la creación de servidores web, el manejo de rutas y la construcción de APIs.

## Parte 3 y 4 - Primer servidor
* La función "app.get()" se encarga de definir una ruta GET específica (como la dirección principal "/") en el servidor.
* Los parámetros "req" y "res" representan la solicitud (request) que hace el cliente y la respuesta (response) que enviará el servidor, respectivamente.
* El método "app.listen()"" tiene la función de iniciar el servidor y mantenerlo escuchando peticiones en un puerto definido (como el 3000).

## Parte 5 - Datos de servicios
* Se creó el archivo "servicios.js" dentro de la carpeta "data" conteniendo un arreglo con un mínimo de seis servicios.
* Cada servicio incluye la información de "id", "nombre", "categoria", "descripcion", "precio" y "disponible".

## Parte 6 - API de servicios
* La diferencia principal radica en el formato de respuesta: "res.send()" se utiliza para enviar texto plano o mensajes simples.
* Por otro lado, "res.json()"" envía la respuesta estructurada en formato JSON, lo que conforma la base de la API para que los datos puedan ser consumidos posteriormente desde un frontend.

## Parte 7 - Consulta por ID
* El objeto "req.params" sirve para capturar y obtener los valores dinámicos que se envían directamente en la URL, como el "":id".
* Se utiliza la función "Number()" porque el parámetro extraído de la URL llega siempre en formato de texto y es necesario convertirlo a número para buscarlo correctamente en el arreglo.
* El estado HTTP 404 representa que el recurso o servicio buscado no existe o no fue encontrado en el servidor.

## Parte 8 - Filtro por categoría
* "req.params" se utiliza para capturar variables que forman parte de la estructura fija de la ruta.
* En contraste, "req.query" permite obtener valores opcionales que se envían como parámetros de consulta al final de la URL, después del signo "?"".

## Parte 9 - Middleware JSON
* La instrucción "express.json()" actúa como un middleware que permitirá a Express interpretar y procesar correctamente los cuerpos de las solicitudes que se envíen en formato JSON.
* Esto será fundamental para futuras actividades donde necesitemos recibir datos desde el cliente al implementar métodos como POST y PUT.

## Parte 12 - Pruebas finales
* *Prueba 1:* Se ejecutó "node server.js" y el servidor inició correctamente mostrando el mensaje en consola.
* *Prueba 2:* Al ingresar a la ruta raíz "/", el servidor respondió correctamente con el mensaje de texto configurado.
* *Prueba 3:* La ruta "GET /api/servicios" devolvió exitosamente el arreglo completo de servicios en formato JSON.
* *Prueba 4:* La ruta "GET /api/servicios/1" retornó correctamente los datos correspondientes a un servicio existente.
* *Prueba 5:* Al probar "GET /api/servicios/999", el servidor devolvió exitosamente el error 404 con el mensaje de "Servicio no encontrado".
* *Prueba 6:* La consulta "GET /api/servicios?categoria=..."" filtró de manera correcta mostrando solo los servicios de la categoría solicitada.

## Instrucciones para ejecutar el backend
1. Abrir la terminal y ubicarse en la carpeta del backend.
2. Ejecutar el comando "npm install" para restaurar los módulos de Node.
3. Ejecutar el comando "node server.js" para iniciar el servidor web.
4. Ingresar a "http://localhost:3000" en el navegador para comprobar su funcionamiento.

## Reflexión final
El desarrollo de esta actividad me permitió comprender la diferencia estructural entre el frontend y el backend, entendiendo cómo Express facilita el levantamiento de un servidor con Node.js. Aprender a diferenciar el uso de rutas estáticas, parámetros dinámicos ("req.params") y filtros ("req.query") me proporciona una base sólida para crear APIs escalables que posteriormente integraré con mis interfaces gráficas.