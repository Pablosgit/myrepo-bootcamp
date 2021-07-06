
/* EJERCICIO CALCULAR PRECIO E IVA */

/* Declaracion de variables y objetos */
const product = { count: 3, price: 12.55, type: "Libro" };
const taxIva = { normal: 0.21, alimentacion: 0.10, libro: 0.04 };
const simboloMoneda = "€"; 
let precioSinIva;
let precioConIva;
let precioIva;
let tipoIva;

/* Calcular precio total de un producto sin iva  */
if ( product.count > 0 ) {
    precioSinIva = product.count * product.price;
} else {
    precioSinIva = 0;
}

/* Calcular tipo de IVA*/
//Opcion 1 operador Ternario:
//tipoIva = product.type == "alimentacion" || product.type == "libro" ? taxIva[product.type] : taxIva.normal;
//Opcion 2 operador Switch:
switch(product.type){
    case "alimentacion": tipoIva = taxIva[product.type]; break;
    case "libro": tipoIva = taxIva[product.type]; break;
    default: tipoIva = taxIva.normal; break;
}

/* Calcula el precio IVA*/
precioIva = precioSinIva * tipoIva;

/* calcula precio total producto mas IVA */
precioConIva = precioSinIva + precioIva;

/* Imprimir los diferentes valores */
console.log("%cCalcular precio total e IVA de un producto:","color:green");
console.log("Subtotal:", precioSinIva, simboloMoneda);
console.log("IVA " + tipoIva*100 + "%:", precioIva, simboloMoneda);
console.log("Total:", precioConIva, simboloMoneda);



/* EJERCICIO AVANZADO CALCULAR PRECIO E IVA MEDIANTE FUNCIONES*/

function getTotal(product){
    return product.count > 0 ? product.count * product.price : 0;
};

function getVat(product){
    return product.price * getIvaTipo(product);
};

function getIvaTipo(product){
    return product.type == "alimentacion" || product.type == "libro" ? taxIva[product.type] : taxIva.normal;
};

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
};

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const tipoVat = getIvaTipo(product);
    const total = subtotal + vat;
    console.log("%cCalcular precio total e IVA de un producto mediante Funciones:","color:green");
    console.log("Subtotal:", subtotal, simboloMoneda);
    console.log("IVA " + tipoVat*100 + "%", vat, simboloMoneda);
    console.log("Total:", total, simboloMoneda);
};

printProductPrice(product);


/* EJERCICIO CALCULAR NOMINA */

/* Declaracion de variables y objetos*/
const empleado = { bruto: 33999, hijos: 2, pagas: 14};
const retencion = { ret0: 0, ret1: 8, ret2: 16, ret3: 30, retHijos: 2};
let calculaRetecion;
let porcentRetencion;
let totalNeto;
let netoMensual;
let pagasNormal = 12;

/* Calcular la retencion segun sueldo bruto anual*/
if (empleado.bruto < 12000){
    calculaRetecion = retencion.ret0;
    porcentRetencion = retencion.ret0;
} else if (empleado.bruto >= 12000 && empleado.bruto < 24000){
    calculaRetecion = empleado.bruto*(retencion.ret1/100);
    porcentRetencion = retencion.ret1;
} else if (empleado.bruto >= 24000 && empleado.bruto < 34000){
    calculaRetecion = empleado.bruto*(retencion.ret2/100);
    porcentRetencion = retencion.ret2;
} else if (empleado.bruto >= 34000){
    calculaRetecion = empleado.bruto*(retencion.ret3/100);
    porcentRetencion = retencion.ret3;
}

/* Restar a la retencion 2 puntos si se tienen hijos*/
calculaRetecion = empleado.hijos > 0 && empleado.bruto >= 12000 ? calculaRetecion-retencion.retHijos : calculaRetecion;

/* Restar al total bruto la retencion */
totalNeto = empleado.bruto - calculaRetecion;

/* Calcular el neto mensual segun pagas: 14 o 12*/
netoMensual = empleado.pagas == 14 ? totalNeto/empleado.pagas : totalNeto/pagasNormal;

/* Imprimir los diferentes valores */
console.log("%cCalcular sueldo neto en nómina:","color:green");
console.log("Bruto anual nómina: ", empleado.bruto, simboloMoneda);
console.log("Retencion "+ porcentRetencion + "%:", calculaRetecion, simboloMoneda);
console.log("Neto anual nómina: ", totalNeto, simboloMoneda);
console.log("Neto mensual nómina: ", netoMensual, simboloMoneda);

