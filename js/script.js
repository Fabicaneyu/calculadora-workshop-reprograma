//Declaro as variáveis que vou trabalhar
var inputSalario = document.querySelector('#ganho-mes')
var inputHoras =  document.querySelector('#horas-dia')

var resultado = document.querySelector('span')

// função do botão Calcular
function calcularValorHora() {
    var salario = inputSalario.valueAsNumber;
    var horas = inputHoras.valueAsNumber;
    
    var horasMes = horas * 22;
    var valorHora = salario / horasMes;
    var valorDuasCasa = valorHora.toFixed(2); 
    
    resultado.textContent = "R$ " + valorDuasCasa;
}