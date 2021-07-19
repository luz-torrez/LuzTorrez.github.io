let inicio = document.querySelector("#inicio");
let saludoinicial = document.querySelector("#saludoinicial");

inicio.addEventListener("click", navegarsaludoinicial, false);

function navegarsaludoinicial(e) {
    saludoinicial.scrollIntoView({behavior: "smooth"}, 2000);
};

let sobremi = document.querySelector("#sobremi");
let tecnologias = document.querySelector("#tecnologias");

sobremi.addEventListener("click", navegartecnologias, false);

function navegartecnologias(e) {
    tecnologias.scrollIntoView({behavior: "smooth"}, 2000);
};

let contacto = document.querySelector("#contacto");
let misredes = document.querySelector("#misredes");

contacto.addEventListener("click", navegarmisredes, false);

function navegarmisredes(e) {
    misredes.scrollIntoView({behavior: "smooth"}, 2000);
};



let linkedin = document.querySelector(".LinkedIn");
linkedin.addEventListener("click", abrirLinkedIn);

let github = document.querySelector(".GitHub");
github.addEventListener("click", abrirGitHub);

let twitter = document.querySelector(".Twitter");
twitter.addEventListener("click", abrirTwitter);


function abrirLinkedIn (e) {
  window.open("https://www.linkedin.com/in/luztorrezmildenberger/");
}

  function abrirGitHub (e) {
    window.open("https://github.com/luz-torrez");
  }
 
          function abrirTwitter (e) {
            window.open("https://twitter.com/0800lucinda");
          }
         

