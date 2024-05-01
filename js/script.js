document.addEventListener("DOMContentLoaded", function () {
  var tonoAzar = Math.floor(Math.random() * 361);
  console.log("tonoAzar: " + tonoAzar);

  /*barra cabecera*/
  var cabecera = document.querySelector(".contenedor-cabecera");
  cabecera.style.backgroundColor = "hsl(" + tonoAzar + ", 78%, 68%)";

  /*caja texto banner*/
  var textoBanner = document.querySelector(".texto-banner");
  textoBanner.style.backgroundColor = "hsl(" + tonoAzar + ", 100%, 83%, 0.55)";

  /*fondo main*/
  var mainFondo = document.querySelector("main");
  mainFondo.style.backgroundColor = "hsl(" + tonoAzar + ", 100%, 95%)";

  /*franja superior secciones*/

  var bloquesTexto = document.querySelectorAll(".bloques-texto");

  bloquesTexto.forEach(function (bloque) {
    var elementosSeparador = bloque.querySelectorAll("section");

    elementosSeparador.forEach(function (elemento) {
      elemento.style.borderTop = "50px solid hsl(" + tonoAzar + ", 76%, 50%)";
    });
  });

  /* Subrayado de títulos */
  var subrayados = document.querySelectorAll(".subrayado");

  subrayados.forEach(function (subrayado) {
    var spans = subrayado.querySelectorAll("span");

    spans.forEach(function (span) {
      span.style.borderBottom = "8px solid hsl(" + tonoAzar + ", 76%, 50%)";
    });
  });

  /*procedi logo banner*/
  var poligono1 = document.querySelector(".poligon1");
  poligono1.style = "fill:hsl(" + tonoAzar + ", 100%, 30%)";

  var poligono2 = document.querySelector(".poligon2");
  poligono2.style = "fill:hsl(" + tonoAzar + ", 100%, 40%)";

  var poligono3 = document.querySelector(".poligon3");
  poligono3.style = "fill:hsl(" + tonoAzar + ", 100%, 50%)";
});
