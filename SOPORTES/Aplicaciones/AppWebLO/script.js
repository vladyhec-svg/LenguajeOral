const imageList = [
    "Imagen 1.jpeg", "Imagen 2.jpeg", "Imagen 3.jpeg", "Imagen 4.jpeg",
    "Imagen 5.jpeg", "Imagen 6.jpeg", "Imagen 7.jpeg", "Imagen 8.jpeg"
];

// Generar la cuadrícula automáticamente
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    if (gridContainer) {
        imageList.forEach(fileName => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.onclick = () => openLightbox(`images/${fileName}`);
            div.innerHTML = `<img src="images/${encodeURIComponent(fileName)}" alt="${fileName}" loading="lazy">`;
            gridContainer.appendChild(div);
        });
    }
});

function toggleGallery(show) {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.style.display = show ? 'block' : 'none';
        document.body.style.overflow = show ? 'hidden' : 'auto';
    }
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (lightbox && img) {
        img.src = src;
        lightbox.style.display = 'flex';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// Soporte para tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        toggleGallery(false);
    }
});
