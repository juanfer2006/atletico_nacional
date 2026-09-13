# Tienda Verdolaga

> Tienda Verdolaga es un sitio web académico dedicado a mostrar un catálogo de productos inspirados en los colores y la identidad de Atlético Nacional. El proyecto fue desarrollado como parte de la materia de Desarrollo Web.

---

## Descripción del proyecto

Tienda Verdolaga es una propuesta de sitio web creada para presentar un catálogo interactivo de artículos temáticos inspirados en Atlético Nacional (camisetas, accesorios y coleccionables).

El proyecto busca resolver la necesidad de contar con una interfaz clara, accesible y moderna donde los aficionados puedan explorar diferentes productos organizados por categorías y registrarse como clientes mediante un formulario. La página fue pensada y construida desde cero para ofrecer una experiencia cómoda y funcional tanto en computadores de escritorio como en tablets y teléfonos celulares.

---

## Funcionalidades

* **Catálogo dinámico de productos:** Las tarjetas de los productos se generan e insertan dinámicamente en el DOM a partir de un arreglo en JavaScript con su respectiva información (nombre, categoría, precio formateado, imagen y descripción).
* **Filtro de productos por categoría:** Botones interactivos que permiten filtrar los artículos por *Todos*, *Camisetas*, *Accesorios* o *Coleccionables* de forma instantánea.
* **Categorías de productos:** Sección informativa que describe las tres líneas principales de artículos disponibles en la tienda.
* **Formulario de registro:** Formulario semántico para capturar nombre completo, correo electrónico y teléfono de los usuarios.
* **Validación del formulario:** Validación en el cliente tanto en tiempo real (`input`) como al enviar (`submit`), verificando que los campos no estén vacíos, que el nombre tenga al menos 3 caracteres, que el correo tenga formato válido y que el teléfono cuente con mínimo 7 dígitos.
* **Mensajes de error junto a los campos:** Mensajes claros que aparecen debajo de cada campo cuando los datos ingresados no son válidos, resaltando además el borde del campo con error.
* **Mensaje de registro exitoso:** Notificación visual dentro de la propia página cuando todos los datos son válidos y el formulario se envía correctamente (sin usar `alert()`).
* **Menú hamburguesa para dispositivos móviles:** Botón accesible que permite desplegar y ocultar la barra de navegación en pantallas pequeñas con cambio de ícono (☰ / ✕) y atributos de accesibilidad (`aria-expanded`, `aria-label`).
* **Diseño responsive:** Interfaz adaptable que reorganiza el menú, los espaciados y las columnas del catálogo según el tamaño del dispositivo.
* **Navegación entre las diferentes secciones de la página:** Enlaces de navegación que permiten desplazarse directamente a las secciones (*Inicio*, *Productos*, *Categorías*, *Nosotros*, *Registro*), cerrando automáticamente el menú móvil al hacer clic.

---

## Tecnologías utilizadas

* **HTML5:** Estructura semántica del documento (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, formularios accesibles).
* **CSS3:** Estilos visuales personalizados, variables CSS (`:root`), diseño fluido con **Flexbox** y maquetación con **CSS Grid**, además de Media Queries para el diseño responsive.
* **JavaScript:** Lógica de interacción en el cliente utilizando **JavaScript puro (Vanilla JS)**, sin dependencias, librerías ni frameworks externos (sin React, Bootstrap ni Tailwind).

---

## Estructura del proyecto

```text
/
├── index.html
├── styles.css
├── script.js
└── README.md
```

* `index.html`: Contiene la estructura y contenido de la página.
* `styles.css`: Contiene los estilos, diseño responsive, Grid, Flexbox y apariencia visual.
* `script.js`: Contiene el catálogo dinámico, filtros, menú hamburguesa y validación del formulario.
* `README.md`: Documentación del proyecto.

---

## Decisiones técnicas

### Flexbox y Grid
* Se utilizó **Flexbox** principalmente para organizar elementos de navegación y componentes en una dimensión (barra de navegación, filtros, botones y cabeceras de tarjetas).
* Se utilizó **CSS Grid** para organizar el catálogo de productos en diferentes columnas (3 en escritorio, 2 en tablet y 1 en celular) y permitir que se adapte automáticamente al ancho de la pantalla.

### JavaScript
* Se utilizó JavaScript para generar dinámicamente los productos a partir de un arreglo de objetos, aplicar filtros por categoría, controlar el menú hamburguesa y validar el formulario de registro.


### Validación
* El formulario valida:
  * Campos obligatorios.
  * Nombre con mínimo de 3 caracteres.
  * Formato válido de correo electrónico.
  * Teléfono con mínimo de 7 dígitos.
* Todos los errores y confirmaciones aparecen directamente en la página junto a los campos y no mediante `alert()`.

---

## Diseño responsive

El sitio web fue adaptado para:

* **Computadores:** Navegación horizontal visible y catálogo organizado en 3 columnas por fila.
* **Tablets:** Catálogo ajustado a 2 columnas y activación del menú hamburguesa en pantallas intermedias.
* **Celulares:** Navegación plegable mediante menú hamburguesa, catálogo en 1 sola columna y formulario con espaciados cómodos para pantallas táctiles.

---

## Proyecto desplegado

**Enlace de Vercel:** `PENDIENTE`


## Parte más difícil del proyecto

Como dificultad técnica destacó la implementación de la generación dinámica del catálogo de productos con sus filtros por categoría y la gestión de la validación del formulario en tiempo real dentro del DOM sin utilizar librerías externas.

---

## Uso de inteligencia artificial

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial como apoyo para resolver algunas dudas, revisar aspectos puntuales del código y recibir sugerencias durante el proceso.

El desarrollo y las decisiones finales del proyecto fueron realizados y revisados por el estudiante.

---

## Autor

**Juan Fernando Castañeda Agudelo**  
Proyecto académico — Universidad de Medellín.