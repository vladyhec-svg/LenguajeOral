# Uso de IA en Lenguaje Oral Preescolar

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
