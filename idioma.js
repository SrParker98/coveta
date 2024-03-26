const lenguage = document.getElementsByClassName("btn-lengua")[0];

lenguage.addEventListener("click", () => {
  const selectlist = document.getElementsByClassName("lista-idioma")[0];

  selectlist.classList.toggle("openlist");
});
