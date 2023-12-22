document.addEventListener("DOMContentLoaded", function () {
  // Cargar el primer nivel
  cargarNivel(`JUEGO/levelOne.js`);
});

function cargarNivel(nivelArchivo) {
  // Limpia el contenedor del juego
  document.getElementById("game-container").innerHTML = "";

  // Crea un script y carga el archivo del nivel
  const script = document.createElement("script");
  script.src = nivelArchivo;
  script.defer = true;

  // Cuando el script se carga, la función del nivel se ejecutará automáticamente
  script.onload = function () {
      console.log(`Nivel cargado: ${nivelArchivo}`);
      // Puedes agregar lógica adicional después de cargar el nivel
  };

  document.getElementById("game-container").appendChild(script);
}
