
var valorHora = document.querySelector("#hora");
var horasProjeto = document.querySelector("#projeto");
var valorTotal = document.querySelector("#resposta");

function calcular() {

    var valorTotalProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber).toFixed(2);
    valorTotal.textContent = "Valor Total do Projeto: R$ " + valorTotalProjeto;
}
