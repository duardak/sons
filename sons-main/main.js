function tocaSomPom(){
  document.querySelector("#tecla tecla_pom")
}
document.querySelector("#som_tecla_pom").play();
const listaDeTeclas=document.querySelectorAll(".tecla");
listaDeTeclas[0].onclock=tocaSomPom;

let contador = 0;
while (contador < listaDeTeclas.length){
  const efeito = listaDeTeclas[contador].classList[1];
  const idAudio = "#som_" + efeito;
  listaDeTeclas[contador].onclick = function(){
    tocaSomPom(idAudio);
  }
}