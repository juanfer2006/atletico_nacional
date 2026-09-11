// ==========================================================================
// 1. ARREGLO DE PRODUCTOS (TIENDA VERDOLAGA)
// ==========================================================================
const productos = [
    {
        nombre: "Camiseta Verde Clásica",
        categoria: "camisetas",
        precio: 249900,
        imagen: "https://images.unsplash.com/photo-1577210897949-1f56f9435824?w=500&auto=format&fit=crop&q=60",
        descripcion: "Diseño tradicional con las clásicas franjas verdes y blancas, confeccionada en tejido transpirable."
    },
    {
        nombre: "Camiseta Blanca Verdolaga",
        categoria: "camisetas",
        precio: 239900,
        imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60",
        descripcion: "Edición visitante en color blanco con detalles verdes y escudo bordado de alta definición."
    },
    {
        nombre: "Camiseta Alternativa Negra",
        categoria: "camisetas",
        precio: 229900,
        imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60",
        descripcion: "Estilo moderno en fondo negro con vivos verdes neón y acabado de alto rendimiento deportivo."
    },
    {
        nombre: "Gorra Verde Urbana",
        categoria: "accesorios",
        precio: 69900,
        imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
        descripcion: "Gorra con visera curva, broche ajustable y escudo verdolaga bordado en relieve."
    },
    {
        nombre: "Bufanda Verdolaga Estadio",
        categoria: "accesorios",
        precio: 45000,
        imagen: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format&fit=crop&q=60",
        descripcion: "Bufanda tejida doble faz con flecos y la frase representativa de la hinchada."
    },
    {
        nombre: "Termo Metálico Verdolaga",
        categoria: "accesorios",
        precio: 55000,
        imagen: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
        descripcion: "Botella de acero inoxidable con tapa hermética para mantener tus bebidas a temperatura ideal."
    },
    {
        nombre: "Bandera Gigante 'Soy del Verde'",
        categoria: "coleccionables",
        precio: 49900,
        imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&auto=format&fit=crop&q=60",
        descripcion: "Bandera de gran tamaño (1.50 x 1.00 m) elaborada en poliéster resistente para alentar con orgullo."
    },
    {
        nombre: "Balón Coleccionable Gloria",
        categoria: "coleccionables",
        precio: 119900,
        imagen: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500&auto=format&fit=crop&q=60",
        descripcion: "Balón decorativo conmemorativo con detalles dorados de los títulos y copas más importantes."
    }
];

// ==========================================================================
// 2. FUNCIÓN PARA RENDERIZAR LAS TARJETAS DINÁMICAMENTE
// ==========================================================================
function renderizarProductos(listaProductos) {
    const contenedor = document.getElementById("productos-container");

    if (!contenedor) return;

    // Limpiar el contenedor antes de insertar las tarjetas
    contenedor.innerHTML = "";

    // Recorrer el arreglo recibido y generar las tarjetas
    listaProductos.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        // Formatear precio para Colombia con separador de miles
        const precioFormateado = `$${producto.precio.toLocaleString("es-CO")}`;

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <div class="producto-info">
                <div class="producto-header">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <span class="producto-precio">${precioFormateado}</span>
                </div>
                <span class="producto-categoria">${producto.categoria}</span>
                <p class="producto-desc">${producto.descripcion}</p>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// ==========================================================================
// 3. FUNCIÓN PARA CONFIGURAR LOS FILTROS POR CATEGORÍA
// ==========================================================================
function configurarFiltros() {
    const botonesFiltro = document.querySelectorAll(".btn-filtro");

    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", () => {
            // Actualizar estilo visual del botón activo
            botonesFiltro.forEach(btn => btn.classList.remove("activo"));
            boton.classList.add("activo");

            // Obtener la categoría seleccionada
            const categoriaSeleccionada = boton.getAttribute("data-categoria");

            // Filtrar productos según la categoría
            if (categoriaSeleccionada === "todos") {
                renderizarProductos(productos);
            } else {
                const productosFiltrados = productos.filter(
                    producto => producto.categoria === categoriaSeleccionada
                );
                renderizarProductos(productosFiltrados);
            }
        });
    });
}

// ==========================================================================
// 4. INICIALIZACIÓN AL CARGAR EL DOCUMENTO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(productos);
    configurarFiltros();
});
