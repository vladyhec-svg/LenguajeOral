// Referencias DOM
const pantallas = {
    menuPrincipal: document.getElementById('pantalla-menu-principal'),
    seleccionNivel: document.getElementById('pantalla-seleccion-nivel'),
    juegoBrinca: document.getElementById('pantalla-juego-brinca'),
    logros: document.getElementById('pantalla-logros'),
    final: document.getElementById('pantalla-final')
};

let categoriaSeleccionada = null;
let nivelSeleccionado = null;
let juegoActual = null;

function mostrarPantalla(id) {
    Object.values(pantallas).forEach(p => {
        if(p) p.classList.remove('activa');
    });
    if(pantallas[id]) pantallas[id].classList.add('activa');
    progress.actualizarUI();
}

// Inicialización del Menú
function inicializarMenu() {
    const gridTemas = document.getElementById('grid-temas');
    gridTemas.innerHTML = '';

    Object.values(CATEGORIAS).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'btn-tema';
        btn.innerHTML = `<span class="tema-icono">${cat.icono}</span><span class="tema-nombre">${cat.nombre}</span>`;
        btn.onclick = () => abrirNiveles(cat.id);
        gridTemas.appendChild(btn);
    });

    // Listener para volver y logros
    document.getElementById('btn-volver-menu').addEventListener('click', () => mostrarPantalla('menuPrincipal'));
    document.getElementById('btn-ver-logros').addEventListener('click', () => abrirLogros());
    document.getElementById('btn-volver-de-logros').addEventListener('click', () => mostrarPantalla('menuPrincipal'));
    document.getElementById('btn-volver-de-juego').addEventListener('click', () => mostrarPantalla('seleccionNivel'));
    
    // Listener Bonus
    window.addEventListener('bonusObtenido', (e) => {
        mostrarNotificacionBonus(e.detail.bonus);
    });
}

function abrirNiveles(categoriaId) {
    categoriaSeleccionada = CATEGORIAS[categoriaId];
    const contenedorNiveles = document.getElementById('niveles-container');
    document.getElementById('titulo-categoria').textContent = categoriaSeleccionada.nombre;
    contenedorNiveles.innerHTML = '';

    categoriaSeleccionada.niveles.forEach(nivel => {
        const btn = document.createElement('button');
        btn.className = 'btn-nivel';
        btn.textContent = nivel.dificultad;
        // Marcar si ya lo completó
        if (progress.state.nivelesCompletados.includes(`${categoriaId}_${nivel.id}`)) {
            btn.classList.add('completado');
            btn.innerHTML += ' ⭐';
        }
        btn.onclick = () => iniciarJuego(nivel);
        contenedorNiveles.appendChild(btn);
    });

    mostrarPantalla('seleccionNivel');
}

function iniciarJuego(nivel) {
    nivelSeleccionado = nivel;
    mostrarPantalla('juegoBrinca');
    
    juegoActual = new BrincaLaPalabra('contenedor-brinca', nivel.palabras, () => {
        // Al completar
        const nuevaInsignia = progress.completarNivel(categoriaSeleccionada.id, nivel.id);
        mostrarPantalla('final');
        if (nuevaInsignia) {
            document.getElementById('mensaje-final').textContent = "¡Has ganado una nueva insignia!";
        } else {
            document.getElementById('mensaje-final').textContent = "¡Repaso excelente!";
        }
    });
    
    juegoActual.iniciar();
}

function abrirLogros() {
    const contenedorInsignias = document.getElementById('insignias-container');
    contenedorInsignias.innerHTML = '';
    
    if (progress.state.insignias.length === 0) {
        contenedorInsignias.innerHTML = '<p>Aún no tienes insignias. ¡Juega para ganar algunas!</p>';
    } else {
        progress.state.insignias.forEach(insigniaId => {
            const el = document.createElement('div');
            el.className = 'insignia';
            // Extraer nombre de la categoría de la insignia (ej. familia_1 -> familia)
            const catId = insigniaId.split('_')[0];
            const cat = CATEGORIAS[catId];
            el.innerHTML = `<div class="insignia-icono">${cat ? cat.icono : '🏆'}</div><p>Experto en ${cat ? cat.nombre : 'Palabras'}</p>`;
            contenedorInsignias.appendChild(el);
        });
    }
    mostrarPantalla('logros');
}

function mostrarNotificacionBonus(cantidad) {
    const noti = document.createElement('div');
    noti.className = 'notificacion-bonus';
    noti.innerHTML = `¡Racha Imparable! +${cantidad} ⭐`;
    document.body.appendChild(noti);
    
    // Animar y eliminar
    setTimeout(() => {
        noti.classList.add('desvanecer');
        setTimeout(() => noti.remove(), 500);
    }, 2000);
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', () => {
    progress.loadProgress(); // Asegurar carga
    inicializarMenu();
    mostrarPantalla('menuPrincipal');
});
