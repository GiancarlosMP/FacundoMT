const ocultar = document.querySelector("button");
const secciones = document.getElementById("secciones");

ocultar.addEventListener("click", oculto);

function oculto() {
  if ((secciones.style.display = "none")) {
    ocultar.addEventListener("click", abierto);
  } else {
    secciones.style.display = "none";
  }
}

function abierto() {
  if ((secciones.style.display = "block")) {
    ocultar.removeEventListener("click", abierto);
  } else {
    secciones.style.display = "block";
  }
}
