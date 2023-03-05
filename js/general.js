/*

// Obtener el elemento que deseas ocultar
const elemento = document.getElementById("titulo-cabecera");

// Escuchar el evento "scroll" en la ventana
window.addEventListener("scroll", function() {
  // Obtener la posición actual de desplazamiento vertical
  let posicionScroll = window.scrollY;
  console.log(window.scrollY);
  
  // Verificar si el usuario ha desplazado una cantidad de píxeles determinada
  if (posicionScroll > 5) {
    // Si el usuario ha desplazado más de 100 píxeles, ocultar el elemento
    elemento.classList.add("oculto");
  } else {
    // Si el usuario ha desplazado menos de 100 píxeles, mostrar el elemento
    elemento.classList.remove("oculto");
  }
});

*/

function toggleAndRotate() {
  var elementos = document.getElementById("elementos");
  var imagen = document.getElementById("flecha-giratoria");
  var anchoPantalla = window.innerWidth;

    if (elementos.style.display === "none") {
      elementos.style.display = "flex";
      imagen.style.transform = "rotate(0deg)";
    } else {
      elementos.style.display = "none";
      imagen.style.transform = "rotate(180deg)";
    } 
}

