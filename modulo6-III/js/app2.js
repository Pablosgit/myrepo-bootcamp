console.log("Módulo 6 - Algoritmos III - Laboratorio");

/* EJERCICIO Calculadora de cambio óptimo de billetes y monedas */

let arrayChange = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];

let SimbolMoney = "€"

let getValTotalMoney = () => document.getElementById("importePagar").value;
let getValPaidMoney = () => document.getElementById("importeEntregado").value;

let printChange = (num, type) => {
    let texChange;
    if (num > 1){
        texChange = type >= 5 ? "billetes" : "monedas";
    } else {
        texChange = type >= 5 ? "billete" : "moneda";
    }
    SimbolMoney = type < 1 ? "Cent" : SimbolMoney;
    type = type < 1 ? type*100 : type;
    return num + " " + texChange + " de " + type + " " + SimbolMoney;
}

let changeMoney = (change, typeChange) => {
    let numChange = Math.trunc(change/typeChange);
    change -= numChange * typeChange;
    console.log(printChange (numChange, typeChange));
    return parseFloat(change).toFixed(2);
};

let checkChange = (CCash, SMoney) => {
    let sentenceChange;
    if (CCash == 0){
        sentenceChange = "Cambio justo, Gracias !!";
    } else if ( CCash < 0) {
        sentenceChange = "Te faltan dinero. " + CCash + " " + SMoney;
    } else if (CCash > 0){
        sentenceChange = "Cambio de " + CCash + " " + SMoney;
    }
    return sentenceChange;
}

let calcChangeMoney = () => {
    let changeCash = getValPaidMoney() - getValTotalMoney();
    console.log(checkChange(changeCash, SimbolMoney));
    for (i = 0; i < arrayChange.length; i++ ){
        if (changeCash/arrayChange[i] >= 1) changeCash = changeMoney(changeCash, arrayChange[i]);
    }
    SimbolMoney = "€";
}


document.getElementById("btn-calc"). addEventListener("click",calcChangeMoney);
