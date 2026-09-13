// ==========================================================================
// 1. ARREGLO DE PRODUCTOS (TIENDA VERDOLAGA)
// ==========================================================================
const productos = [
    // --- 1. CAMISETAS (10 productos) ---
    {
        nombre: "Camiseta Verde Clásica, temporada 2011",
        categoria: "camisetas",
        precio: 249900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPCRB-V_Lq1tjBTEsCF-5WnI57uUwhRhBGJ-A1Uct2KtHF3MKjQIsbYE&s=10",
        descripcion: "Diseño tradicional con las clásicas franjas verdes y blancas, confeccionada en tejido transpirable."
    },
    {
        nombre: "Camiseta Blanca Verdolaga, temporada 2026",
        categoria: "camisetas",
        precio: 239900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuD2t_5jGZJY7KslmBIaGGcRAyYA9kfCNPxeKF5qYkFOs0A9Q7C7sI24jg&s=10",
        descripcion: "Edición visitante en color blanco con detalles verdes y escudo bordado de alta definición."
    },
    {
        nombre: "Camiseta Alternativa Negra, temporada 2025",
        categoria: "camisetas",
        precio: 229900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaWFrHZRkvZ9WcwtIuhuwZroy-3i4blD3cKonW9alP_v4hsbMsMgO1_g3&s=10",
        descripcion: "Estilo moderno en fondo negro con detalles dorados."
    },
    {
        nombre: "Camiseta Retro Época Dorada, temporada 1989",
        categoria: "camisetas",
        precio: 219900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdIZv4SfFq1oXwNxAZ-CZulrr373_VaYJfzPvQHzSOA&s=10",
        descripcion: "Diseño de corte clásico con cuello tipo polo."
    },
    {
        nombre: "Camiseta de Entrenamiento",
        categoria: "camisetas",
        precio: 159900,
        imagen: "https://peopleplays.vtexassets.com/arquivos/ids/579530-800-auto?v=639059970442700000&width=800&height=auto&aspect=true",
        descripcion: "Prenda deportiva ligera con tecnología de secado rápido, pensada para la actividad física diaria."
    },
    {
        nombre: "Camiseta Edición Homenaje Chapecoense, temporada 2026",
        categoria: "camisetas",
        precio: 259900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw80ICTxzR7iaAoFq6daJOSZrwXhrTeMujWV2HbPOhuWWNIWwc9fJm2VI&s=10",
        descripcion: "Edición especial homenaje a la tragedia de Chapecoense."
    },
    {
        nombre: "Camiseta con Firma Histórica de Alexis Henríquez, temporada 2015",
        categoria: "camisetas",
        precio: 249900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ93Du7cPYG8g0pRAF8cpfYD5dw1m2FvDqpTZXAeK9QDYNiw1-gi_QLoY&s=10",
        descripcion: "Camiseta del legendario Alexis Henríquez, temporada 2015."
    },
    {
        nombre: "Camiseta Coleccionable visitante, temporada 2004",
        categoria: "camisetas",
        precio: 239900,
        imagen: "https://fuegoverde.com.co/wp-content/uploads/2022/04/nacional-2004.jpg",
        descripcion: "Camiseta visitante del año 2004, año en el que el verde disputo dos finales de liga."
    },
    {
        nombre: "Camiseta Urbana Blow Up",
        categoria: "camisetas",
        precio: 129900,
        imagen: "https://velocitysavage.com/cdn/shop/files/camiseta-atletico-nacional-verde-edicion-blow-up-4276987.png?v=1772489527",
        descripcion: "Camiseta con estilo para lucir los colores en cualquier momento."
    },
    {
        nombre: "Camiseta Edición Leyenda del Arco Franco Armani, temporada 2016",
        categoria: "camisetas",
        precio: 229900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgmeFYX7Zajod5pwrOZ9EPkKJHm0e75zhlzETlX2m9RpiTCfvmAqucT8U&s=10",
        descripcion: "Buzo de arquero manga larga morada."
    },

    // --- 2. ACCESORIOS (10 productos) ---
    {
        nombre: "Gorra Verde Urbana",
        categoria: "accesorios",
        precio: 69900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iAltBycit9fNYL9YXzvtVocwBh3POZinJ3dHEe9R2w&s=10",
        descripcion: "Gorra con visera curva, broche ajustable y escudo verdolaga bordado en relieve."
    },
    {
        nombre: "Bufanda Verdolaga",
        categoria: "accesorios",
        precio: 45000,
        imagen: "https://fuegoverde.com.co/wp-content/uploads/2019/06/Bufanda-Tejida-Atletico-Nacional-Doble-Fax-Lana-Acrilica-3.jpg",
        descripcion: "Bufanda negra."
    },
    {
        nombre: "Termo Metálico Verdolaga",
        categoria: "accesorios",
        precio: 55000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5Tqb0VdfLb9vHv137MLqd_JgeyPL-PNTBg2gk70V4MGrh0O3FcmQKfU&s=10",
        descripcion: "Botella de acero inoxidable con tapa hermética para mantener tus bebidas a temperatura ideal."
    },
    {
        nombre: "Llavero Escudo Metálico",
        categoria: "accesorios",
        precio: 24900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTogk9TpZ4nqljyZITva2fKibGQaXLaTLpAYV5XUrwy3VrvWBZ9KrVsoM&s=10",
        descripcion: "Llavero de aleación metálica con acabado esmaltado de alta durabilidad y argolla reforzada."
    },
    {
        nombre: "Gorra campeon liga 2024",
        categoria: "accesorios",
        precio: 74900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_ZjkYwJ-1OeADZmmPxYWP5QbWkDI19imEgawZZbCH8G2gWugDP7YFII&s=10",
        descripcion: "Gorra blanca de los festejas del titulo de liga 2024."
    },
    {
        nombre: "Taza Cerámica Verdolaga",
        categoria: "accesorios",
        precio: 29900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOnhCpjSqjs41m7Q9hGs_pvlItdZqWKH8hN-QFCabweCTskSR8OJDNsA&s=10",
        descripcion: "Taza de cerámica con la mascota del equipo nacho."
    },
    {
        nombre: "Mochila Deportiva de Viaje",
        categoria: "accesorios",
        precio: 119900,
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_824672-MCO83591749488_042025-T.webp",
        descripcion: "Morral blanco perfecto para viajes."
    },
    {
        nombre: "Set de Pines Esmaltados (3 Piezas)",
        categoria: "accesorios",
        precio: 34900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4ycloYqzwz_BErDbAfoPl_rSUrPbiqHYibvQf0xE3w&s=10",
        descripcion: "Juego de 3 prendedores metálicos esmaltados para personalizar camisetas, chaquetas o mochilas."
    },
    {
        nombre: "Billetera de Cuero Sintético Verdolaga",
        categoria: "accesorios",
        precio: 49900,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_700798-MCO114183698145_072026-O.webp",
        descripcion: "Billetera compacta con grabado sutil del escudo, tarjetero y compartimento para billetes."
    },
    {
        nombre: "Pulsera de Acero Inoxidable y Cordón",
        categoria: "accesorios",
        precio: 21900,
        imagen: "https://mktaddi.vteximg.com.br/arquivos/ids/87294751/85848d3f-97bd-43e6-9a62-d7a84ab6e634-PCD73G___36dc99956e244628ca05b4e835543821.jpg?v=639136076353300000",
        descripcion: "Brazalete ajustable elaborado con cordón de alta resistencia y placa grabada en láser."
    },

    // --- 3. COLECCIONABLES (10 productos) ---
    {
        nombre: "Bandera Gigante 'Rey de copas'",
        categoria: "coleccionables",
        precio: 49900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNn7VoxqjGZRDeWTzBL2g2by4PuJxVoM_x7p8K9LygoTK9yZRSnhUycNFa&s=10",
        descripcion: "Bandera resistente para alentar con orgullo."
    },
    {
        nombre: "Balón Coleccionable vintage",
        categoria: "coleccionables",
        precio: 85000,
        imagen: "https://lacanchatiendadeportiva.com.co/cdn/shop/files/rn-image_picker_lib_temp_e1c08d2a-b180-43d8-9f4b-e6ddc02c40a0.jpg?v=1764959849",
        descripcion: "Balón decorativo conmemorativo con detalles dorados."
    },
    {
        nombre: "Balón final liga 2024",
        categoria: "coleccionables",
        precio: 249900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyT8lxkWh-VvZcG6z947EfhUuyKSbGtzF9zsH8jZfKNf3I-2el6c3ph7Q&s=10",
        descripcion: "Balón final de la liga 2024 Vuelta Contra Deportes Tolima."
    },
    {
        nombre: "Cuadro decorativo campeon libertadores",
        categoria: "coleccionables",
        precio: 100900,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_678687-MCO111153675264_052026-O.webp",
        descripcion: "Cuadro conmemorativo de aquel 27 de julio de 2016"
    },
    {
        nombre: "balon atletico nacional",
        categoria: "coleccionables",
        precio: 34900,
        imagen: "https://fuegoverde.com.co/wp-content/uploads/2023/09/balon-nacional.jpg",
        descripcion: "balon de atletico nacional verde y blanco."
    },
    {
        nombre: "Placa Decorativa Metálica",
        categoria: "coleccionables",
        precio: 39900,
        imagen: "https://static.wixstatic.com/media/b8b0b3_7773a3f4be4f4145918fc8ce40a42f1e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        descripcion: "Placa de aluminio."
    },
    {
        nombre: "Placa decorativa 'soy del verde, soy feliz'",
        categoria: "coleccionables",
        precio: 39900,
        imagen: "https://static.wixstatic.com/media/b8b0b3_b92c8f212f1e42518b7015c3862897f0~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
        descripcion: "Placa decorativa con mensaje inspirador."
    },
    {
        nombre: "Álbum histórico tricampeón",
        categoria: "coleccionables",
        precio: 144900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5jr1GRYGFJBgkOBDyvmyedrNfiL9Y5mRxbWGDL8NQ6lrjsw0GHCg17esK&s=10",
        descripcion: "Álbum conmemorativo de los tres títulos consecutivos de liga."
    },
    {
        nombre: "Escudo Decorativo 3D Multicapa",
        categoria: "coleccionables",
        precio: 80900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrH9Oe1hQ2R1Re80W2qxib7u8iMNWAgsv8w5GHuQ5WDA&s=10",
        descripcion: "Pieza artesanal de pared con acabado en relieve y colores verde y blancos."
    },
    {
        nombre: "Réplica de Trofeo de Colección libertadores 2016",
        categoria: "coleccionables",
        precio: 289900,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_703888-MCO54289219192_032023-O.webp",
        descripcion: "Figura decorativa libertadores 2016."
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
            <img src="${producto.imagen}" alt="${producto.nombre} - Tienda Verdolaga" class="producto-img">
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
// 4. FUNCIONES DE VALIDACIÓN DEL FORMULARIO DE REGISTRO
// ==========================================================================
function validarNombre(nombreInput, errorElement) {
    const valor = nombreInput.value.trim();

    if (valor === "") {
        errorElement.textContent = "El nombre es obligatorio.";
        errorElement.classList.add("activo");
        nombreInput.classList.add("campo-error");
        return false;
    } else if (valor.length < 3) {
        errorElement.textContent = "El nombre debe tener al menos 3 caracteres.";
        errorElement.classList.add("activo");
        nombreInput.classList.add("campo-error");
        return false;
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove("activo");
        nombreInput.classList.remove("campo-error");
        return true;
    }
}

function validarEmail(emailInput, errorElement) {
    const valor = emailInput.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === "") {
        errorElement.textContent = "El correo electrónico es obligatorio.";
        errorElement.classList.add("activo");
        emailInput.classList.add("campo-error");
        return false;
    } else if (!regexEmail.test(valor)) {
        errorElement.textContent = "Ingresa un correo electrónico válido.";
        errorElement.classList.add("activo");
        emailInput.classList.add("campo-error");
        return false;
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove("activo");
        emailInput.classList.remove("campo-error");
        return true;
    }
}

function validarTelefono(telefonoInput, errorElement) {
    const valor = telefonoInput.value.trim();
    const regexTelefono = /^[0-9+\s-]{7,15}$/;
    const digitos = valor.replace(/\D/g, "");

    if (valor === "") {
        errorElement.textContent = "El teléfono es obligatorio.";
        errorElement.classList.add("activo");
        telefonoInput.classList.add("campo-error");
        return false;
    } else if (!regexTelefono.test(valor) || digitos.length < 7) {
        errorElement.textContent = "Ingresa un número de teléfono válido (mínimo 7 dígitos).";
        errorElement.classList.add("activo");
        telefonoInput.classList.add("campo-error");
        return false;
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove("activo");
        telefonoInput.classList.remove("campo-error");
        return true;
    }
}

function configurarFormularioRegistro() {
    const formulario = document.getElementById("form-registro");
    if (!formulario) return;

    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");

    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorTelefono = document.getElementById("error-telefono");
    const mensajeExito = document.getElementById("mensaje-exito");

    // Validación en tiempo real mientras el usuario escribe
    nombreInput.addEventListener("input", () => {
        if (mensajeExito) mensajeExito.classList.remove("activo");
        validarNombre(nombreInput, errorNombre);
    });

    emailInput.addEventListener("input", () => {
        if (mensajeExito) mensajeExito.classList.remove("activo");
        validarEmail(emailInput, errorEmail);
    });

    telefonoInput.addEventListener("input", () => {
        if (mensajeExito) mensajeExito.classList.remove("activo");
        validarTelefono(telefonoInput, errorTelefono);
    });

    // Control del envío del formulario (submit)
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const esNombreValido = validarNombre(nombreInput, errorNombre);
        const esEmailValido = validarEmail(emailInput, errorEmail);
        const esTelefonoValido = validarTelefono(telefonoInput, errorTelefono);

        if (esNombreValido && esEmailValido && esTelefonoValido) {
            formulario.reset();
            nombreInput.classList.remove("campo-error");
            emailInput.classList.remove("campo-error");
            telefonoInput.classList.remove("campo-error");

            errorNombre.textContent = "";
            errorNombre.classList.remove("activo");
            errorEmail.textContent = "";
            errorEmail.classList.remove("activo");
            errorTelefono.textContent = "";
            errorTelefono.classList.remove("activo");

            if (mensajeExito) {
                mensajeExito.textContent = "¡Registro realizado correctamente!";
                mensajeExito.classList.add("activo");
            }
        } else {
            if (mensajeExito) {
                mensajeExito.textContent = "";
                mensajeExito.classList.remove("activo");
            }
        }
    });
}

// ==========================================================================
// 5. FUNCIÓN PARA CONFIGURAR EL MENÚ HAMBURGUESA
// ==========================================================================
function configurarMenuHamburguesa() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!menuToggle || !navLinks) return;

    // Alternar apertura y cierre del menú
    menuToggle.addEventListener("click", () => {
        const estaAbierto = navLinks.classList.toggle("menu-abierto");

        // Actualizar atributos de accesibilidad y el ícono
        menuToggle.setAttribute("aria-expanded", estaAbierto ? "true" : "false");
        menuToggle.setAttribute("aria-label", estaAbierto ? "Cerrar menú" : "Abrir menú");
        menuToggle.innerHTML = estaAbierto ? "&times;" : "&#9776;";
    });

    // Cerrar el menú al seleccionar cualquier enlace de navegación
    const enlacesNav = navLinks.querySelectorAll("a");
    enlacesNav.forEach(enlace => {
        enlace.addEventListener("click", () => {
            if (navLinks.classList.contains("menu-abierto")) {
                navLinks.classList.remove("menu-abierto");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                menuToggle.innerHTML = "&#9776;";
            }
        });
    });
}

// ==========================================================================
// 6. INICIALIZACIÓN AL CARGAR EL DOCUMENTO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Cargar por defecto la categoría 'camisetas'
    const productosIniciales = productos.filter(producto => producto.categoria === "camisetas");
    renderizarProductos(productosIniciales);
    configurarFiltros();
    configurarFormularioRegistro();
    configurarMenuHamburguesa();
});
