// 1. ARREGLO DE JUGADORES (DATOS DEL CATÁLOGO)

const jugadores = [
    {
        nombre: "Franco Armani",
        posicion: "Arquero",
        numero: 1,
        imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&auto=format&fit=crop&q=60",
        descripcion: "Guardameta referente y líder bajo los tres palos con amplia trayectoria internacional."
    },
    {
        nombre: "Luis Marquínez",
        posicion: "Arquero",
        numero: 25,
        imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60",
        descripcion: "Joven arquero con gran agilidad, reflejos rápidos y excelente proyección bajo el arco."
    },
    {
        nombre: "William Tesillo",
        posicion: "Defensa",
        numero: 3,
        imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=60",
        descripcion: "Defensa central con solidez aérea, liderazgo, anticipación y salida limpia con el balón."
    },
    {
        nombre: "Cesar Haydar",
        posicion: "Defensa",
        numero: 4,
        imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&auto=format&fit=crop&q=60",
        descripcion: "Zaguero aguerrido, fuerte en los duelos individuales y con gran sentido de ubicación."
    },
    {
        nombre: "Edwin Cardona",
        posicion: "Volante",
        numero: 10,
        imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60",
        descripcion: "Volante creativo con excelente visión de juego, precisión en pases y potente pegada."
    },
    {
        nombre: "Jorman Campuzano",
        posicion: "Volante",
        numero: 21,
        imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=60",
        descripcion: "Volante de recuperación con gran despliegue físico, equilibrio táctico e intercepción."
    },
    {
        nombre: "Alfredo Morelos",
        posicion: "Delantero",
        numero: 9,
        imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&auto=format&fit=crop&q=60",
        descripcion: "Delantero potente, con gran capacidad de desmarque y definición implacable en el área rival."
    },
    {
        nombre: "Cristian Arango",
        posicion: "Delantero",
        numero: 17,
        imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60",
        descripcion: "Atacante veloz y desequilibrante por las bandas con potencia física y llegada al gol."
    }
];

// 2. FUNCIÓN PARA GENERAR LAS TARJETAS DINÁMICAMENTE

function renderizarJugadores(listaJugadores) {
    const contenedor = document.getElementById("jugadores-container");

    // Limpiar el contenedor antes de renderizar
    contenedor.innerHTML = "";

    // Recorrer el arreglo y crear cada tarjeta en el DOM
    listaJugadores.forEach(jugador => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-jugador");

        tarjeta.innerHTML = `
            <img src="${jugador.imagen}" alt="${jugador.nombre}" class="jugador-img">
            <div class="jugador-info">
                <div class="jugador-header">
                    <h3 class="jugador-nombre">${jugador.nombre}</h3>
                    <span class="jugador-dorsal">#${jugador.numero}</span>
                </div>
                <span class="jugador-posicion">${jugador.posicion}</span>
                <p class="jugador-desc">${jugador.descripcion}</p>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// 3. INICIALIZACIÓN AL CARGAR EL DOCUMENTO

document.addEventListener("DOMContentLoaded", () => {
    renderizarJugadores(jugadores);
});
