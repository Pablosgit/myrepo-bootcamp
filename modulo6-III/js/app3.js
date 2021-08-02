console.log("Módulo 6 - Algoritmos III - Laboratorio");

/* EJERCICIO Calculadora de cambio óptimo de billetes y monedas segun dinero en caja*/

let arrayChange = [
    {
        type: 200,
        quantity: 0,
    },
    {
        type: 100,
        quantity: 1,
    },
    {
        type: 50,
        quantity: 1,
    },
    {
        type: 20,
        quantity: 1,
    },
    {
        type: 10,
        quantity: 2,
    },
    {
        type: 5,
        quantity: 3,
    },
    {
        type: 2,
        quantity: 4,
    },
    {
        type: 1,
        quantity: 0,
    },
    {
        type: 0.5,
        quantity: 4,
    },
    {
        type: 0.2,
        quantity: 8,
    },
    {
        type: 0.1,
        quantity: 5,
    },
    {
        type: 0.05,
        quantity: 6,
    },
    {
        type: 0.02,
        quantity: 3,
    },
    {
        type: 0.01,
        quantity: 4,
    },
    ];

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
    let numChange = Math.trunc(change/typeChange.type);
    numChange = numChange <= typeChange.quantity ? numChange : typeChange.quantity;
    change -= numChange * typeChange.type;
    console.log(printChange (numChange, typeChange.type));
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
        if (changeCash/arrayChange[i].type >= 1 && arrayChange[i].quantity > 0) changeCash = changeMoney(changeCash, arrayChange[i]);
    }
    SimbolMoney = "€";
}


document.getElementById("btn-calc"). addEventListener("click",calcChangeMoney);
