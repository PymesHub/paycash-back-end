Prueba para Paycash 👋
¡Hola! Soy Carlos, y esta es la solución a la prueba técnica que se planteó. 🚀

Tecnologías Utilizadas 🛠️
Node.js con TypeScript 🌐
AWS Lambda ⚡
AWS SQS (FIFO) 📦
AWS RDS (base de datos) 🗃️
AWS RDS Read-Optimized 📈
AWS S3 ☁️
AWS Amplify 🌍
AWS CloudWatch 🕒
AWS CloudFormation 🔧
Serverless Framework ⚙️
IAM (Identity and Access Management) 🔐
Descripción del Proyecto 📝
Este proyecto resuelve una problemática relacionada con la gestión de usuarios, donde cada uno tiene los siguientes 6 campos:

Nombre
Apellidos
Fecha de nacimiento
Género
Email
PLD Status (un campo adicional, que simula un problema del mundo real)
El PLD Status representa un desafío típico en arquitecturas de microservicios, y es un añadido para brindar un poco mas de mi background tecnico

Diseño y Arquitectura 🔍
La arquitectura se basa completamente en Clean Architecture, lo que proporciona una separación clara entre las distintas capas del sistema. Además, implementé CQRS (Command Query Responsibility Segregation) para separar los comandos de las consultas, mejorando la eficiencia tanto en la lectura como en la escritura de datos.

Las bases de datos están configuradas con réplicas para optimizar ambos procesos.

Se implementó el Patrón Mediator con un bus para gestionar las comunicaciones internas, permitiendo que, tras la creación de un usuario, se procese su PLD Status a través de un SQS FIFO. Cuando el proceso termina, se actualiza este campo y se devuelve al frontend. 🔄

Orquestación 🔗
Todo el flujo está orquestado mediante el Serverless Framework y gestionado con IAM para controlar los permisos de forma segura.

Requisitos para Iniciar el Proyecto 🚀
Para comenzar, asegúrate de tener configurado lo siguiente:

Credenciales de AWS ✅
Instalar los paquetes necesarios (en el archivo package.json)
Despliegue 🌐
La aplicación ya está desplegada y puedes acceder a ella en cualquier momento. Además, la documentación está disponible en Swagger. ¡Aquí te dejo el enlace para que puedas explorarlo!

Swagger Documentation
https://swagger-temp.s3.us-east-1.amazonaws.com/index.html

Flujo de Trabajo 🌀
Se crea un usuario.
El usuario es procesado mediante SQS FIFO.
Se actualiza el campo PLD Status.
La información se retorna al frontend de manera eficiente.
Cosas que Faltaron 🚧
Entornos de Testing: Aunque tener pruebas unitarias es crucial, la arquitectura serverless consume bastante memoria, lo que dificultó la simulación de eventos de AWS en mi equipo. Esto provocó que los tests se extendieran mucho, así que opté por pruebas End-to-End utilizando BDD (Behavior Driven Development).

Enfoque del Proyecto: Aunque esta solución es Full Stack, la naturaleza de la prueba hizo que el backend recibiera mayor atención. Sin embargo, el frontend cuenta con un sistema de caché para las peticiones, lo que permite simular un socket para obtener datos de manera asíncrona sin tener que recargar la página.

Lenguaje Utilizado 💻
Node.js con TypeScript para todo el desarrollo backend.
Conclusión 🎉
Este proyecto es un ejemplo de cómo una arquitectura escalable y bien estructurada puede facilitar la gestión de usuarios en un entorno serverless. Con la implementación de Clean Architecture, CQRS y Mediator, he logrado crear un sistema eficiente y flexible que puede crecer a medida que aumenten los requisitos.
