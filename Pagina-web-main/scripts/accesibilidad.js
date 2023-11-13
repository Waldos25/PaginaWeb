//Button
const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    document.querySelector(".iconoModoOscuro").src="./assets/bxs-sun.svg"
  
    // Cambia el color de los textos
    document.querySelectorAll(".text-dark").forEach((item) => {
      item.classList.add("text-light")
      item.classList.remove("text-dark")
    })
    // Cambia el color de los fondos
    document.querySelectorAll(".bg-light").forEach((item) => {
      item.classList.add("bg-dark")
      item.classList.remove("bg-light")
    })
  }
  const temaBlanco = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "ligth");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    document.querySelector(".iconoModoOscuro").src="./assets/bxs-moon.svg"
  
    document.querySelectorAll(".text-ligth").forEach((item) => {
      item.classList.add("text-dark")
      item.classList.remove("text-light")
    })
    // Cambia el color de los fondos
    document.querySelectorAll(".bg-dark").forEach((item) => {
      item.classList.add("bg-light")
      item.classList.remove("bg-dark")
    })
  
  }
  const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "ligth"?
    temaOscuro() : temaBlanco();
  }
  
  document.getElementById("dark-button").addEventListener("click",() => cambiarTema());
  
  let tamañoActualTitulo = 72;
  let tamañoActualTexto = 20; // Tamaño de fuente inicial en píxeles (ajusta esto según tus necesidades)
  
  function aumentarTamañoDeLetraTitulo() {
    tamañoActualTitulo += 2;
    cambiarTamañoDeFuenteTitulo();
  }
  
  function disminuirTamañoDeLetraTitulo() {
    tamañoActualTitulo -= 2;
    cambiarTamañoDeFuenteTitulo();
  }
  function aumentarTamañoDeLetraTexto() {
    tamañoActualTexto += 2;
    cambiarTamañoDeFuenteTexto();
  }
  
  function disminuirTamañoDeLetraTexto() {
    tamañoActualTexto -= 2;
    cambiarTamañoDeFuenteTexto();
  }
  function cambiarTamañoDeFuenteTitulo() {
    const elementosConTamañoDeFuenteTitulo = document.querySelectorAll('h1');
    elementosConTamañoDeFuenteTitulo.forEach(elemento => {
      elemento.style.fontSize = tamañoActualTitulo + 'px';
    });
  }
  function cambiarTamañoDeFuenteTexto() {
    const elementosConTamañoDeFuenteTexto = document.querySelectorAll('h2,h5,span,p,a,button');
    elementosConTamañoDeFuenteTexto.forEach(elemento => {
      elemento.style.fontSize = tamañoActualTexto + 'px';
    });
  }
  document.getElementById("font-up").addEventListener("click", aumentarTamañoDeLetraTitulo);
  document.getElementById("font-down").addEventListener("click", disminuirTamañoDeLetraTitulo);
  document.getElementById("font-up").addEventListener("click", aumentarTamañoDeLetraTexto);
  document.getElementById("font-down").addEventListener("click", disminuirTamañoDeLetraTexto);
  
  
//   document.getElementById("messenger-button").addEventListener("click",cambiarContraste);