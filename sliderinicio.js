function cambiarImagenes() {
  var imagenes = [
    "/assets/fotos-coveta/foto1_1_11zon.webp",
    "/assets/fotos-coveta/foto2_2_11zon.webp",
    "/assets/fotos-coveta/foto22_11zon.webp",
    "/assets/fotos-coveta/foto30_4_11zon.webp",
    "/assets/fotos-coveta/foto36_6_11zon.webp",
    "/assets/fotos-coveta/foto33_5_11zon.webp",
    "/assets/fotos-coveta/foto68_11zon.webp",
  ];
  var i = 0;
  setInterval(function () {
    document.getElementById("js-carousel").style.backgroundImage =
      "url('" + imagenes[i] + "')";
    i = (i + 1) % imagenes.length;
    if (i === 0) {
      i = 0; // Volver al inicio del array
    }
  }, 7000);
}
cambiarImagenes();

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    // Configuración opcional
    loop: true, // Habilita el modo bucle (opcional)
    slidesPerView: "auto",
    freeMode: false,

    navigation: {
      nextEl: ".swiper-button-next", // Selector del botón de siguiente
      prevEl: ".swiper-button-prev", // Selector del botón de anterior
    },
    pagination: {
      el: ".swiper-pagination", // Elemento para la paginación (opcional)
      clickable: false, // Permite hacer clic en los puntos de paginación para navegar (opcional)
    },
    // Breakpoints para ajustar el número de slides visibles
    breakpoints: {
      // Cuando el ancho de la ventana es igual o mayor a 1024px
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
