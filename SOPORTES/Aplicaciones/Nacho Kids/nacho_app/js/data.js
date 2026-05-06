const CATEGORIAS = {
    familia: {
        id: 'familia',
        nombre: 'Familia',
        icono: '👨‍👩‍👧',
        niveles: [
            {
                id: 1,
                dificultad: 'Fácil (2 sílabas)',
                palabras: [
                    { palabra: "mamá", silabas: ["ma", "má"], opciones: ["ma-má", "pa-pá", "me-mo"], imagen: "assets/images/real_mama.png" },
                    { palabra: "papá", silabas: ["pa", "pá"], opciones: ["pa-pá", "ma-má", "pe-pe"], imagen: "assets/images/real_papa.png" }
                ]
            }
        ]
    },
    animales: {
        id: 'animales',
        nombre: 'Animales',
        icono: '🐶',
        niveles: [
            {
                id: 1,
                dificultad: 'Fácil (2 sílabas)',
                palabras: [
                    { palabra: "perro", silabas: ["pe", "rro"], opciones: ["pe-rro", "ga-to", "lo-ro"], imagen: "assets/images/real_perro.png" },
                    { palabra: "gato", silabas: ["ga", "to"], opciones: ["ga-to", "pe-rro", "ra-tón"], imagen: "assets/images/real_gato.png" }
                ]
            }
        ]
    },
    naturaleza: {
        id: 'naturaleza',
        nombre: 'Naturaleza',
        icono: '🌳',
        niveles: [
            {
                id: 1,
                dificultad: 'Fácil (2 sílabas)',
                palabras: [
                    { palabra: "sol", silabas: ["sol"], opciones: ["sol", "luz", "mar"], imagen: "assets/images/real_sol.png" },
                    { palabra: "luna", silabas: ["lu", "na"], opciones: ["lu-na", "cu-na", "du-na"], imagen: "assets/images/real_luna.png" }
                ]
            }
        ]
    }
};
