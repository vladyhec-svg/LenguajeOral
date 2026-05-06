// Web Speech API helper
function hablar(texto, velocidad = 1.0) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'es-ES';
        utterance.rate = velocidad;
        utterance.pitch = 1.1; // Menos agudo, más natural pero amigable
        window.speechSynthesis.speak(utterance);
    }
}

// --- JUEGO: BRINCA LA PALABRA ---
class BrincaLaPalabra {
    constructor(contenedorId, palabras, onComplete) {
        this.contenedor = document.getElementById(contenedorId);
        this.palabras = palabras;
        this.onComplete = onComplete;
        this.palabraActualIdx = 0;
        this.silabaEsperadaIdx = 0;
    }

    iniciar() {
        this.palabraActualIdx = 0;
        this.cargarNivel();
    }

    cargarNivel() {
        if (this.palabraActualIdx >= this.palabras.length) {
            this.onComplete();
            return;
        }

        this.silabaEsperadaIdx = 0;
        const p = this.palabras[this.palabraActualIdx];
        
        // Limpiar contenedor
        this.contenedor.innerHTML = `
            <div class="brinca-header">
                <img src="${p.imagen}" class="img-realista-pequena" alt="${p.palabra}">
                <button class="btn-audio-small" onclick="hablar('${p.silabas.join("... ")}', 0.6)">🔊 Escuchar</button>
            </div>
            <div class="rio-container">
                <div id="personaje-brinca" class="personaje-brinca">🧒</div>
                <div id="piedras-container" class="piedras-container"></div>
            </div>
        `;

        const piedrasContainer = document.getElementById('piedras-container');
        
        // Generar piedras (desordenadas, pero para simplificar, las pondremos ordenadas o mezcladas con falsas)
        // Por ahora, pondremos las sílabas reales en orden, más algunas "falsas" para que elija.
        // Simplificación: Un camino recto donde tiene que hacer clic en la siguiente sílaba correcta de opciones
        
        let opciones = [...p.silabas];
        // Añadir una sílaba falsa para despistar (ej. random string)
        opciones.push("ta"); 
        opciones.sort(() => Math.random() - 0.5);

        opciones.forEach((silaba, idx) => {
            const piedra = document.createElement('div');
            piedra.className = 'piedra';
            piedra.textContent = silaba;
            piedra.onclick = () => this.verificarSalto(piedra, silaba, p);
            piedrasContainer.appendChild(piedra);
        });

        // Auto reproducir
        setTimeout(() => hablar(p.silabas.join("... "), 0.6), 500);
    }

    verificarSalto(piedraElement, silabaSeleccionada, p) {
        const silabaCorrecta = p.silabas[this.silabaEsperadaIdx];
        
        if (silabaSeleccionada === silabaCorrecta) {
            // Correcto
            piedraElement.classList.add('piedra-correcta');
            
            // Mover personaje a la piedra
            const personaje = document.getElementById('personaje-brinca');
            const rect = piedraElement.getBoundingClientRect();
            const containerRect = document.querySelector('.rio-container').getBoundingClientRect();
            personaje.style.transform = `translate(${rect.left - containerRect.left}px, ${rect.top - containerRect.top - 30}px)`;
            
            hablar(silabaCorrecta);
            progress.addEstrellas(1);

            this.silabaEsperadaIdx++;
            if (this.silabaEsperadaIdx >= p.silabas.length) {
                // Completó la palabra
                hablar("¡Muy bien! " + p.palabra);
                setTimeout(() => {
                    this.palabraActualIdx++;
                    this.cargarNivel();
                }, 1500);
            }
        } else {
            // Incorrecto
            piedraElement.classList.add('piedra-incorrecta');
            setTimeout(() => piedraElement.classList.remove('piedra-incorrecta'), 500);
            progress.resetRacha();
            hablar("Ups, intenta otra vez.");
        }
    }
}
