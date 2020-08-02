//Declarar as variáveis que vou trabalhar 
var inputValor = document.querySelector('#valor-hora')
var inputHoras = document.querySelector('#horas-projeto')
var resultado = document.querySelector('span')

function calcular(){
    var valor = inputValor.valueAsNumber;
    var horas = inputHoras.valueAsNumber;

    var total = valor * horas;
    var valorDuasCasas = total.toFixed(2);

    resultado.textContent = "O valor total do seu projeto é R$ "+ valorDuasCasas+" reais.";
}