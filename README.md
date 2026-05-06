# Uso de IA en Lenguaje Oral Preescolar

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

Este proyecto es una intervención tecnopedagógica estratégica diseñada para cerrar brechas de comunicación en la primera infancia, utilizando aplicaciones interactivas.

## Estructura del Proyecto

El proyecto sigue las buenas prácticas de desarrollo web, manteniendo una separación clara entre estructura, estilo y lógica:

- `index.html`: Estructura principal y contenido, estilizado utilizando Tailwind CSS.
- `styles.css`: Estilos personalizados extraídos para mantener el HTML limpio, como los estilos de la galería modal.
- `script.js`: Lógica de la aplicación separada del HTML. Contiene la funcionalidad para generar la galería sincronizando la carpeta `images/`.
- `images/`: Carpeta que contiene todas las evidencias y recursos gráficos.

## Cómo desplegar en Netlify

1. Asegúrate de tener una cuenta en [Netlify](https://app.netlify.com/).
2. Tienes dos opciones fáciles:
   - **Netlify Drop:** Ve a [Netlify Drop](https://app.netlify.com/drop) y simplemente arrastra la carpeta completa del proyecto `AppWebLO` (que contiene `index.html`, las carpetas, etc.) a la pantalla.
   - **Git/GitHub:** Sube este proyecto a un repositorio de GitHub, entra a Netlify, selecciona "Add new site" -> "Import an existing project" y conecta tu repositorio. No necesitas comandos de compilación (Build command) ya que es un sitio estático.

## Características

- Interfaz moderna y responsive con Tailwind CSS.
- Modal de galería dinámico que carga automáticamente los recursos desde la carpeta de imágenes.
- Lógica modularizada.
