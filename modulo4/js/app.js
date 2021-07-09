/* FUNCIONES PARA SACAR EL VALOR DE LOS IMPUTS */
var getValA = () => parseInt(document.getElementById("valueA").value);
var getValB = () => parseInt(document.getElementById("valueB").value);

/* FUNCIONES DE CADA UNA DE LAS OPERACIONES */
var sum = () => printResult( getValA() + getValB() );
var rest = () => printResult( getValA() - getValB() );
var multiply = () => printResult( getValA() * getValB() );
var divide = () => printResult( getValA() / getValB() );

/* FUNCION IMPRIME EL RESULTADO */
function printResult(result){
    if ( isNaN(result) || result == "Infinity"){
        document.getElementById("valueC").innerHTML = "Error"
    } else {
        document.getElementById("valueC").innerHTML = result;
    }
}

/* EVENTOS DE CLICK BOTONES OPERACIONES */
document.getElementById("buttonSum").addEventListener("click", sum);
document.getElementById("buttonRest").addEventListener("click", rest);
document.getElementById("buttonMultiply").addEventListener("click", multiply);
document.getElementById("buttonDivide").addEventListener("click", divide);