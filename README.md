![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Módulo 2. Evaluación final

Proyecto de evaluación final del módulo 2 del Bootcamp de **Programación Web** impartido por Adalab (Promo Salas). El proyecto consiste en una aplicación web de búsqueda de cócteles de todo el mundo. El cuerpo de la web consta de 3 partes diferenciadas:

- **¿Qué te apetece hoy?**
  Zona de búsqueda con un campo para escribir la bebida que se desea, un botón de _Buscar_ y un botón de _Reset_ que permite borrar lo escrito en el campo de texto. Además de haciendo _click_ sobre el botón de _Buscar_, es posible pulsar la tecla _Enter_ para lanzar búsqueda.

- **Lista de cócteles**
  Sección donde aparecerán todos los cócteles relacionados con la palabra buscada. Para marcar los favoritos solo habrá que hacer _click_ sobre ellos y automáticamente se guardarán en la lista de la derecha.

- **Cócteles favoritos**
  Lugar donde almacenar las bebidas favoritas. Éstas pueden ser eliminadas de una en una haciendo _click_ sobre el icono que aparece al situar el cursor sobre la foto o bien, hacer uso del botón de _Borrar favoritos_ para eliminarlas todas a la vez.

Además de la versión tablet/web se ha añadido una versión mobile.

Como base para el proyecto se ha utilizado el _Adalab Web Starter Kit_ (WSK), una plantilla de proyectos con funcionalidades preinstaladas y preconfiguradas. Éste ha sido creado en **Node** y **Gulp** e incluye un motor de plantillas **HTML**, el preprocesador **SASS** y un servidor local, que han permitido la automatización de tareas.

En el proyecto hay 3 tipos de ficheros y carpetas:

- Ficheros que se encuentran en la raíz del repositorio y constituyen la configuración del WSK.
- La carpeta `src/` con los ficheros de la página web como **HTML**, **CSS**, **JS** e imágenes.
- Las carpetas `public/` y `docs/`, generadas de forma automática por el kit al arrancar el proyecto y leer los ficheros contenidos en la carpeta `src/`.

Gracias al kit ha sido posible, además, dividir el proyecto en varios _partials_, incluidos en la carpeta `src/`. Al procesar dicha carpeta, como se ha comentado anteriormente, se genera un solo archivo `index.html`, `main.css` y `main.js` en la carpeta `public/`. Los _partials_ son:

- _Header_
- _Main_
- _Footer_

Todo el proyecto se ha realizado en la rama _develop_ para finalmente, una vez concluido, hacer _merge_ a la rama principal _main_.

En resumen, para la realización de la página web se ha utilizado:

- **HTML** y **CSS** para la maquetación
- **SASS** como preprocesador de CSS
- **JS** como lenguaje de programación
- **NPM** como gestor de paquetes y dependencias (WSK)
- **Gulp**, herramienta de automatización de tareas (WSK)

¡Muchas gracias!
