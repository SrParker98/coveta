const GetMenu = document.querySelector(".menu-desplegable");
const GetMainNav = document.querySelector(".main-box-nav");
const GetBars = document.querySelector(".bars-icon");
const getX = document.querySelector(".x-icon");
const GetTitle = document.querySelector(".nav-logo-title");
const GetSpan = document.querySelector(".desde");

// Función para abrir el menú
function OpenMenu() {
  GetMenu.classList.add("open");
  GetMainNav.classList.add("nav-open");
  getX.classList.add("x-icon-open");
  GetTitle.classList.add("nav-logo-title-open");
  GetSpan.classList.add("nav-logo-title-open");
  console.log("Menú abierto");
}

// Función para cerrar el menú
function CloseMenu() {
  GetMenu.classList.remove("open");
  GetMainNav.classList.remove("nav-open");
  getX.classList.remove("x-icon-open");
  GetTitle.classList.remove("nav-logo-title-open");
  GetSpan.classList.remove("nav-logo-title-open");
}

// Agregar un manejador de eventos clic al área que rodea el menú
document.addEventListener("click", function (event) {
  if (!GetMenu.contains(event.target) && !GetBars.contains(event.target)) {
    // Si el clic es fuera del menú y no en el icono de las barras, cierra el menú
    if (GetMenu.classList.contains("open")) {
      CloseMenu();
    }
    var tituloH2 = document.querySelector(".carta-link"); // Selecciona el título h2
    // Verificar si el clic es en el título h2
    if (tituloH2.contains(event.target)) {
      // Si el clic es en el título h2, no hagas nada (excepción)
      OpenMenu();
    }
  }
});

// Agregar un manejador de eventos clic al icono de las barras para abrir el menú
GetBars.addEventListener("click", function (event) {
  OpenMenu();
});

// Agregar un manejador de eventos clic al icono X para cerrar el menú
getX.addEventListener("click", function (event) {
  CloseMenu();
});

const cogersubmenu = document.querySelector(".submenu");

function abrirsubmenu() {
  cogersubmenu.classList.toggle("submenu-open");
}

const btnidioma = document.getElementsByClassName(".btn-lengua");
console.log(btnidioma);

const menuDesplegable = document.querySelector(".menu-desplegable");
let touchStartY = 0;
let touchEndY = 0;

menuDesplegable.addEventListener("touchstart", function (event) {
  touchStartY = event.touches[0].clientY;
});

menuDesplegable.addEventListener("touchend", function (event) {
  touchEndY = event.changedTouches[0].clientY;
  handleGesture();
});

function handleGesture() {
  const deltaY = touchStartY - touchEndY;
  if (deltaY > 50) {
    // Deslizamiento hacia arriba
    closeMenu();
  }
}

function closeMenu() {
  GetMenu.classList.remove("open");
  GetMainNav.classList.remove("nav-open");
  getX.classList.remove("x-icon-open");
  GetTitle.classList.remove("nav-logo-title-open");
  GetSpan.classList.remove("nav-logo-title-open");
}

// Selecciona todos los elementos con la clase .span-alergeno
const spanAlergenos = document.querySelectorAll(".span-alergeno");

// Itera sobre cada elemento
spanAlergenos.forEach(function (span) {
  // Establece el contenido de texto del span a una cadena vacía, conservando las imágenes
  span.childNodes.forEach(function (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = ""; // Elimina el texto del nodo si es un nodo de texto
    }
  });
});
