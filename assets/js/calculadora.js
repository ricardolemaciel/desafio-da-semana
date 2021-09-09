
 function calculadora(){
     
    var fnome = document.getElementById("fnome").value;
    var fValorInicial = document.getElementById("fValorInicial").value;
    var fValorMensal = document.getElementById("fValorMensal").value;
    var fPeriodo = parseInt(document.getElementById("fPeriodo").value);

    var taxaDeJuros = 1.5;
    taxaDeJuros = 1 + (1.5/100);

    var valorInicial = parseFloat(fValorInicial);
    var valorMensal = parseFloat(fValorMensal); 

    valorInicial = valorInicial + (valorMensal * fPeriodo);

    var result = valorInicial * Math.pow(taxaDeJuros, fPeriodo);

    var resultados = [fnome, fValorInicial, valorMensal, fPeriodo, result];

    var passaValor = function(valor)
    {
         window.location = "resultado.html?minhaVariavel="+valor;
    } 
     
    var valorQueEuQueroPassar = resultados;
     
    passaValor(valorQueEuQueroPassar);

 }
