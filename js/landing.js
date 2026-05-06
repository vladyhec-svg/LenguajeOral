// Datos del Chat Estático (FAQ)
const faqs = [
    {
        pregunta: "¿Cuál es el objetivo de EduNacho AI?",
        respuesta: "Nuestro objetivo es potenciar el lenguaje oral en niños de preescolar en Bolivia mediante una herramienta tecnológica interactiva que respeta su ritmo de aprendizaje, y que no necesita internet para funcionar en el aula."
    },
    {
        pregunta: "¿Cómo protegen la privacidad de los niños?",
        respuesta: "La privacidad es nuestra máxima prioridad. La aplicación 'Nacho Aprende Pro' procesa todo el audio y los datos localmente en el dispositivo del colegio usando Web Speech API. Ningún dato infantil se envía a la nube."
    },
    {
        pregunta: "¿Por qué no usa una IA conectada a internet?",
        respuesta: "Para garantizar que escuelas en contextos vulnerables o con acceso limitado a internet puedan usarla sin problemas. Además, evita el consumo de tokens y reduce costos y sesgos culturales."
    },
    {
        pregunta: "¿Quiénes están detrás de este proyecto?",
        respuesta: "Somos un equipo multidisciplinario de docentes y licenciados en educación bolivianos (Nadia, Claudia, Javier, Miriam, Carmen, Vladibostok y Jenny) apasionados por acortar la brecha digital en la educación."
    }
];

// Lógica del Chat Widget
document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = document.getElementById('chat-widget');
    const chatToggle = document.getElementById('chat-toggle');
    const chatIcon = document.getElementById('chat-icon');
    const chatMessages = document.getElementById('chat-messages');
    const chatQuickReplies = document.getElementById('chat-quick-replies');

    // Toggle Chat
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('open');
        chatIcon.textContent = chatWidget.classList.contains('open') ? '▼' : '▲';
    });

    // Render Quick Replies
    function renderQuickReplies() {
        chatQuickReplies.innerHTML = '';
        faqs.forEach((faq, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn-reply';
            btn.textContent = faq.pregunta;
            btn.onclick = () => handleUserQuestion(faq.pregunta, faq.respuesta);
            chatQuickReplies.appendChild(btn);
        });
    }

    function handleUserQuestion(pregunta, respuesta) {
        // Ocultar opciones temporalmente
        chatQuickReplies.innerHTML = '';

        // Añadir mensaje del usuario
        addMessage(pregunta, 'user');

        // Simular tiempo de escritura de la IA estática
        setTimeout(() => {
            addMessage(respuesta, 'bot');
            
            // Volver a mostrar opciones después de un ratito
            setTimeout(() => {
                renderQuickReplies();
            }, 1000);
            
        }, 600);
    }

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
    }

    // Inicializar botones
    renderQuickReplies();
});
