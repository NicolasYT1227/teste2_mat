//modal history
var modal = document.querySelector(".modalContainer");
var btn = document.getElementById("btnModal");
var btnClose = document.getElementById("btnClose");
var span = document.getElementsByClassName("close")[0];
// Abrir a janela modal quando o botão é clicado
  
btn.onclick = function() {
  modal.style.display = "block";
}

// Fechar a janela modal quando clicar no "X"
btnClose.onclick = function(){
  modal.style.display = "none";
}

span.onclick = function(){
  modal.style.display = "none";
}

// Fechar a janela modal clicando fora dela
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// /Modal history

//Modal directors
var modalDirectors = document.querySelector(".modal-container-director");
var btnDirector = document.getElementById("btnModalDiretor");
var btnCloseD = document.querySelector(".btnD");
var spanDiretor = document.getElementsByClassName("director-btnClose")[0];
//Abrir janela modal de diretores
btnDirector.onclick = function(){
  modalDirectors.style.display = "block";
}

btnCloseD.onclick = function(){
  modalDirectors.style.display = "none";
}

spanDiretor.onclick = function(){
  modalDirectors.style.display = "none";
}

window.onclick = function(event){
  if(event.target == modalDirectors){
    modalDirectors.style.display = "none";
  }
}
// /Modal directors

//expand imageHistory
const expandableImage = document.querySelector('#expand');
const paragraphHistory = document.querySelector(".history-text");
const headerDirectorOff = document.querySelector(".header-directors"); //Deixa o display do campo de diretores off.
const nav = document.querySelector(".nav-title");

expandableImage.addEventListener('click', function() {
  this.classList.toggle('expanded');

  if(paragraphHistory){
    paragraphHistory.classList.toggle('hidden');
  }
  
  if(headerDirectorOff){
    headerDirectorOff.classList.toggle('hidden');
  }

  if(nav){
    nav.classList.toggle('hidden');
  }
});
// /expand imageHistory

// expand imageDirector
const expandableImageDirector = document.querySelector('#expandDi');
const paragraph = document.querySelector(".director-text");
const headerHistoryOff = document.querySelector(".header-history");

expandableImageDirector.addEventListener('click', function() {
  this.classList.toggle('expanded');

  if(paragraph){
    paragraph.classList.toggle('hidden');
  }

  if(headerHistoryOff){
    headerHistoryOff.classList.toggle('hidden');
  }

  if(nav){
    nav.classList.toggle('hidden');
  }
});
// /expand imageDirector

//Barra de rolagem
document.querySelector('.content').addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    this.scrollBy(300, 0); // Rola para baixo
  } else {
    this.scrollBy(-300, 0); // Rola para cima
  }
});
// /Barra de rolagem