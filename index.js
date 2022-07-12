function pare() {
  document.querySelector("#vermelho").classList.remove("opacidade");
  document.querySelector("#amarelo").classList.add("opacidade");
  document.querySelector("#verde").classList.add("opacidade");
}

function atencao() {
  document.querySelector("#vermelho").classList.add("opacidade");
  document.querySelector("#amarelo").classList.remove("opacidade");
  document.querySelector("#verde").classList.add("opacidade");
}

function siga() {
  document.querySelector("#vermelho").classList.add("opacidade");
  document.querySelector("#amarelo").classList.add("opacidade");
  document.querySelector("#verde").classList.remove("opacidade");
}
