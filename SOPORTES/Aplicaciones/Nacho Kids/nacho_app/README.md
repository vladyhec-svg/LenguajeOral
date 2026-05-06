# Nacho Aprende 👦🏻📕

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Web Speech API](https://img.shields.io/badge/Web_Speech_API-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)

**Nacho Aprende** es una aplicación web interactiva y gamificada diseñada para niños de preescolar, con el objetivo de fomentar el desarrollo del lenguaje oral y la iniciación a la lectura. La aplicación está inspirada en la estética y metodología de la famosa "Cartilla Nacho".

## ✨ Características Principales

*   **🎨 Diseño Visual Atractivo:** Interfaz colorida y amigable utilizando colores primarios (rojo, amarillo, azul, verde) y tipografía redondeada adaptada para preescolares.
*   **🤖 Chat Simulado (NachoBot):** Un flujo interactivo guiado por reglas (sin depender de LLM o APIs externas) que acompaña al niño a lo largo de la actividad.
*   **🔊 Audio Dinámico Integrado:** Utiliza la Web Speech API nativa del navegador para leer instrucciones y pronunciar palabras lentamente por sílabas, eliminando la necesidad de archivos de audio externos.
*   **🎮 Gamificación:** Sistema de recompensas visuales y recolección de estrellas por cada respuesta correcta.
*   **🖼️ Imágenes Personalizadas:** Ilustraciones adaptadas (sapo, mamá, loma) para el cuestionario interactivo.

## 🚀 Cómo usar

1.  Clona o descarga este repositorio/carpeta.
2.  Abre el archivo `index.html` directamente en cualquier navegador web moderno (se recomienda Google Chrome para mejor compatibilidad con la síntesis de voz).
3.  ¡Haz clic en "¡Jugar Ahora!" y disfruta aprendiendo con Nacho!

## 📁 Estructura del Proyecto

```text
nacho_app/
│
├── index.html          # Estructura principal y maquetación de pantallas.
├── css/
│   └── styles.css      # Estilos visuales, animaciones y diseño responsivo.
├── js/
│   └── app.js          # Lógica interactiva, chat simulado y Web Speech API.
└── assets/
    └── images/         # Ilustraciones generadas (mascota, sapo, mamá, loma).
```

## 🛠️ Tecnologías Utilizadas

*   **HTML5:** Semántica y estructura.
*   **CSS3:** Flexbox, CSS Grid, variables CSS, animaciones (keyframes) y glassmorphism.
*   **Vanilla JavaScript:** Manipulación del DOM, lógica del juego y estado.
*   **Web Speech API:** Síntesis de voz (Text-to-Speech) ejecutada localmente en el navegador.

## 📝 Notas de Versión

*   Se implementó la lógica estática para no depender de servidores.
*   Corrección de tildes y ajustes de selección en la validación de opciones (ej. "ma-má").
