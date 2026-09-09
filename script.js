// 1. ARREGLO DE PRODUCTOS (DATOS DEL CATÁLOGO)

const productos = [
    {
        id: 1,
        nombre: "Camiseta Titular 2026",
        categoria: "camisetas",
        precio: "$ 249.900",
        imagen: "https://images.unsplash.com/photo-1577210897949-1f56f9435824?w=500&auto=format&fit=crop&q=60",
        descripcion: "Camiseta oficial verdolaga con franjas verdes y blancas tradicionales y tecnología transpirable."
    },
    {
        id: 2,
        nombre: "Camiseta Alternativa Negra",
        categoria: "camisetas",
        precio: "$ 239.900",
        imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60",
        descripcion: "Edición especial en color negro con detalles y escudo en verde neón de alta calidad."
    },
    {
        id: 3,
        nombre: "Gorra Urbana Verdolaga",
        categoria: "accesorios",
        precio: "$ 69.900",
        imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60",
        descripcion: "Gorra con visera curva, ajuste trasero y escudo bordado en relieve para uso diario."
    },
    {
        id: 4,
        nombre: "Bufanda Estadio Doble Faz",
        categoria: "accesorios",
        precio: "$ 45.000",
        imagen: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format&fit=crop&q=60",
        descripcion: "Bufanda tejida con los colores verdolagas y la frase 'El Más Grande de Colombia'."
    },
    {
        id: 5,
        nombre: "Termo Metálico Verdolaga",
        categoria: "accesorios",
        precio: "$ 55.000",
        imagen: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
        descripcion: "Termo de acero inoxidable con aislamiento térmico para bebidas frías y calientes."
    },
    {
        id: 6,
        nombre: "Bandera Gigante 'Soy del Verde'",
        categoria: "coleccionables",
        precio: "$ 49.900",
        imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&auto=format&fit=crop&q=60",
        descripcion: "Bandera de 1.50 x 1.00 m en poliéster resistente para alentar en la tribuna o lucir en tu habitación."
    },
    {
        id: 7,
        nombre: "Balón Conmemorativo Gloria",
        categoria: "coleccionables",
        precio: "$ 119.900",
        imagen: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=500&auto=format&fit=crop&q=60",
        descripcion: "Balón decorativo de colección con acabados dorados y detalles de los títulos internacionales."
    },
    {
        id: 8,
        nombre: "Pin Metálico Escudo Legendario",
        categoria: "coleccionables",
        precio: "$ 25.000",
        imagen: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
        descripcion: "Pin esmaltado de alta precisión para chaquetas, morrales o colección de recuerdos."
    }
];

// ==========================================================================
// 2. FUNCIÓN PARA GENERAR LAS TARJETAS DE PRODUCTOS DINÁMICAMENTE
// ==========================================================================
function renderizarProductos(listaProductos) {
    const contenedor = document.getElementById("productos-container");

    if (!contenedor) return;

    // Limpiar el contenedor antes de insertar las tarjetas
    contenedor.innerHTML = "";

    // Recorrer el arreglo y crear cada tarjeta en el DOM
    listaProductos.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <div class="producto-info">
                <div class="producto-header">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <span class="producto-precio">${producto.precio}</span>
                </div>
                <span class="producto-categoria">${producto.categoria}</span>
                <p class="producto-desc">${producto.descripcion}</p>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// ==========================================================================
// 3. INICIALIZACIÓN AL CARGAR EL DOCUMENTO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(productos);
});
