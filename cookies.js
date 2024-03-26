// Función para crear y mostrar el popup de cookies
function createCookiePopup() {
  var popup = document.createElement("div");
  popup.id = "cookie-popup";

  var message = document.createElement("p");
  message.textContent =
    "Este sitio web utiliza cookies para garantizar que obtengas la mejor experiencia en nuestra página web.";
  popup.appendChild(message);

  var acceptButton = document.createElement("button");
  acceptButton.textContent = "Aceptar cookies";
  acceptButton.classList.add("accept");
  acceptButton.addEventListener("click", function () {
    document.getElementById("cookie-popup").style.display = "none";
    localStorage.setItem("cookiePopupShown", "true"); // Guardar el estado en el almacenamiento local
    console.log("las cookies han sido aceptadas");
    // Activar Google Tag Manager después de que se acepten las cookies
    activateGoogleTagManager();
  });
  popup.appendChild(acceptButton);

  var rejectButton = document.createElement("button");
  rejectButton.textContent = "Rechazar cookies";
  rejectButton.classList.add("reject");

  rejectButton.addEventListener("click", function () {
    document.getElementById("cookie-popup").style.display = "none";
    localStorage.setItem("cookiePopupShown", "true"); // Guardar el estado en el almacenamiento local
    document.cookie = "cookiePopupShown=true; SameSite=None; Secure";
    console.log("las cookies han sido rechazadas");
  });
  popup.appendChild(rejectButton);

  document.body.appendChild(popup);

  // Mostrar el popup
  popup.style.display = "block";
}

// Función para activar Google Tag Manager
function activateGoogleTagManager() {
  // Código de Google Tag Manager
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";

    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=G-RX10KFE5W8" + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-XXXXXX");
}

// Mostrar el popup de cookies al cargar la página (solo si aún no se ha mostrado)
document.addEventListener("DOMContentLoaded", function () {
  var cookiePopupShown = localStorage.getItem("cookiePopupShown");
  if (!cookiePopupShown || cookiePopupShown !== "true") {
    createCookiePopup();
  } else {
    // Si las cookies ya se han aceptado previamente, activa Google Tag Manager directamente
    activateGoogleTagManager();
  }
});
