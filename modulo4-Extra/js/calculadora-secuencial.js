/* DECLARACION DE VARIABLES */
var resultParcial = 0;
var resultProgres = "";
var operadorAnterior;
var Error1 = "Error. Introduce un valor numérico."
var Error2 = "Error. No se puede dividir entre 0."

/* FUNCION PARA SACAR EL VALOR DEL INPUT */
var getValInput = () => parseInt(document.getElementById("valueInput").value);

/* FUNCION RESETEA INPUT */
var resetValInput = () => document.getElementById("valueInput").value = "";

/* FUNCIONES DE CADA UNA DE LAS OPERACIONES */
var sum = () => realizaOperaciones(getValInput(),"+");
var rest = () => realizaOperaciones(getValInput(),"-");
var multiply = () => realizaOperaciones(getValInput(),"*");
var divide = () => realizaOperaciones(getValInput(),"/");
var equals = () => realizaOperaciones(getValInput(),"=");


/* FUNCION REALIZA LAS DIFERENTES OPERACIONES*/
function realizaOperaciones(result,operador){  
    resetValInput();
    if ( isNaN(result) ){
        errorMessage(Error1);
    } else {
        switch(operadorAnterior){
            case "+": resultParcial = resultParcial + result; break;
            case "-": resultParcial = resultParcial - result; break;
            case "*": resultParcial = resultParcial * result; break;
            case "/": resultParcial = result != 0 ? resultParcial / result: resultParcial; break;
            default: resultParcial = result; break;
        }
        if (result == 0 && operadorAnterior == "/" ){
            errorMessage(Error2);
        } else {
            printResult(result,operador);
        } 
    }
}

/* FUNCION QUE MUESTRA MENSAJE DE ERRORES */
function errorMessage (Error){
    document.getElementById("resultado-parcial").innerHTML = Error;
}

/* FUNCION IMPRIME RESULTADO */
function printResult(result,operador){
    resultProgres = resultProgres + " " + result + " " + operador;
    operadorAnterior = operador;
    document.getElementById("progreso-operacion").innerHTML = resultProgres;
    document.getElementById("resultado-parcial").innerHTML = resultParcial;
    document.getElementById("valueInput").focus();
    resultProgres = operador == "=" ? "" : resultProgres;
}

/* EVENTOS DE CLICK BOTONES OPERACIONES */
document.getElementById("buttonSum").addEventListener("click", sum);
document.getElementById("buttonRest").addEventListener("click", rest);
document.getElementById("buttonMultiply").addEventListener("click", multiply);
document.getElementById("buttonDivide").addEventListener("click", divide);
document.getElementById("buttonEqual").addEventListener("click", equals);
document.getElementById("valueInput").focus();


/* FUNCION QUE LLAMA A EVENTOS DE TECLADO */
function pressKeyboard(value){
    //console.log(value.keyCode);
    switch(value.keyCode){
        case 13: equals(); break;
        case 107: sum(); break;
        case 109: rest(); break;
        case 106: multiply(); break;
        case 111: divide(); break;
    }
}

/* EVENTOS PRESS TECLADO*/
document.getElementById("calculator-container").addEventListener("keyup", pressKeyboard);




