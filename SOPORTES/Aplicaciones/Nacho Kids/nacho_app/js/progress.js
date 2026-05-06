class ProgressManager {
    constructor() {
        this.loadProgress();
    }

    loadProgress() {
        const guardado = localStorage.getItem('nacho_progress');
        if (guardado) {
            this.state = JSON.parse(guardado);
        } else {
            this.state = {
                estrellasTotales: 0,
                rachaActual: 0,
                nivelesCompletados: [],
                insignias: [] // ej. 'familia_1'
            };
        }
    }

    saveProgress() {
        localStorage.setItem('nacho_progress', JSON.stringify(this.state));
        this.actualizarUI();
    }

    addEstrellas(cantidad) {
        this.state.estrellasTotales += cantidad;
        this.state.rachaActual += 1;
        
        // Bonus por racha
        let bonus = 0;
        if (this.state.rachaActual > 0 && this.state.rachaActual % 3 === 0) {
            bonus = 5;
            this.state.estrellasTotales += bonus;
            // Podríamos emitir un evento de "Bonus obtenido"
            window.dispatchEvent(new CustomEvent('bonusObtenido', { detail: { bonus } }));
        }
        
        this.saveProgress();
    }

    resetRacha() {
        this.state.rachaActual = 0;
        this.saveProgress();
    }

    completarNivel(categoriaId, nivelId) {
        const key = `${categoriaId}_${nivelId}`;
        if (!this.state.nivelesCompletados.includes(key)) {
            this.state.nivelesCompletados.push(key);
            this.state.insignias.push(key);
            this.saveProgress();
            return true; // Nueva insignia ganada
        }
        return false;
    }

    actualizarUI() {
        const els = document.querySelectorAll('.estrellas-totales-ui');
        els.forEach(el => el.textContent = this.state.estrellasTotales);
    }
}

const progress = new ProgressManager();
