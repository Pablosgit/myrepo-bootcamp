/* DECLARACION DE VARIABLES Y ARRAYS */
const carrito = [
     {
     id: 198752,
     name: "Tinta DJ27 Color",
     price: 52.95,
     count: 3,
     premium: true,
     },
     {
     id: 75621,
     name: "Impresora ticketera PRO-201",
     price: 32.75,
     count: 2,
     premium: true,
     },
     {
     id: 54657,
     name: "Caja de rollos de papel para ticketera",
     price: 5.95,
     count: 3,
     premium: false,
     },
     {
     id: 3143,
     name: "Caja de folios DIN-A4 80gr",
     price: 9.95,
     count: 2,
     premium: false,
     }
    ];

let simbolMoney = "€";
let numProduct = 0;
let estructuraGeneral;
let estructuraItem;
let estructurProperly;
let estructuraFilter;
const infoEnvio1 = "Con gastos de envío";
const infoEnvio2 = "Gastos de envío cero";
const infofiltro = "No existen elementos";
const discountPrice = 0.05;
const discountLimit = 50;


/* FUNCION SACA EL VALOR DEL SELECT DE FILTRADO */
let valorfilter = () => document.getElementById("filter-item").value;

/* FUNCION PINTA EL NOMBRE DE LA PROPIEDAD A MODO DE INDICE */
function printProperlyIndex (){
     estructurProperly = ""
     for (propiedades in carrito[0]){
          estructurProperly += '<div id="indexItem-'+ propiedades +'" class="index-item">' + propiedades.toUpperCase() + '</div>';
     }
     estructurProperly += '<div id="indexItem-eliminar" class="index-item"></div>';
     document.getElementById("chopping-properly").innerHTML = estructurProperly;
}

/* FUNCION PINTA LA ESTRUCTURA PRINCIPAL DE CADA PRODUCTO Y COMPRUEBA LOS PRECIOS Y DESCUENTOS*/
function estructuraPrincipalCarrito() {
     estructuraGeneral = "";
     for (i = 0; i < carrito.length; i++){
          estructuraGeneral += '<div id="itemID-' + carrito[i].id + '" class="chopping-item">'+ estructuraPrincipalItem(carrito[i]) +'</div>';
     }
     document.getElementById("shopping-body").innerHTML = estructuraGeneral;
     if (carrito.length == 0) noItem();
     printPriceCart();
}

/* FUNCION PINTA LA ESTRUCTURA DE PROPIEDADES DE CADA PRODUCTO O ITEN */
function estructuraPrincipalItem(itemProperly){
     estructuraItem = "";
     for (properly in itemProperly){
          estructuraItem += '<div class="content-item-' + properly + '"><span class="item-' + properly + '">' + itemProperly[properly] + '</span></div>';
     }
     estructuraItem += '<div class="content-item-action"><button id="' + itemProperly["id"] + '" class="button-delete" type="button" onclick="eliminaProducto(' + itemProperly["id"] + ')">X</button></div>';
     return estructuraItem;
}

/* FUNCION PINTA LA ESTRUCTURA PRINCIPAL DE CADA PRODUCTO FILTRADO  */
function imprimirItemFilter(filtrado){
     estructuraFilter += '<div id="itemID-' + filtrado.id + '" class="chopping-item">'+ estructuraPrincipalItem(filtrado) +'</div>';
     document.getElementById("shopping-body").innerHTML = estructuraFilter;
     printPriceCart();
}

/* FUNCION QUE COMPRUEBA LOS PRECIOS, DESCUENTOS Y GASTOS DE ENVIO CARRITO */
function printPriceCart(){
     document.getElementById("chopping-price-discount").innerHTML = "";
     document.getElementById("chopping-price").innerHTML = calcularPrecioTotal () + simbolMoney;
     document.getElementById("info-chopping-price").innerHTML = '"' + infoGastosEnvio () + '"';
}


/* FUNCION CALCULA EL PRECIO TOTAL */
function calcularPrecioTotal (){
     let precioTotal = 0;
     for (properly of carrito){
          precioTotal += properly.price * properly.count;
     }
     precioTotal = precioTotal > discountLimit ? aplicaDescuentoCarrito(precioTotal) : precioTotal ;
     return precioTotal;
}


/* FUNCION QUE FILTRA LOS ELEMENTOS DEL CARRO SEGUN PREMIUN */
function filterItem (){
     let filter = valorfilter();
     estructuraFilter = "";
     if (filter == "Prime"){
          for (propiedad of carrito) {
               if (propiedad.premium) imprimirItemFilter(propiedad);
          }
          noItenCarrito();
     } else if (filter == "Todos") {
         estructuraPrincipalCarrito();
     } 
}


/* FUNCION INDICA SI NO HAY ELEMENTOS FILTRADOS EN EL CARRITO */
function noItenCarrito () {
     let itenVacio = false;
     for (i = 0; i < carrito.length; i++) {
          itenVacio = itenVacio || carrito[i].premium === true;
     } 
     if (!itenVacio){
          noItem();
          printPriceCart();
     }
}


/* FUNCION QUE INFORMA SI NO HAY ELEMENTOS AL FILTRAR */
let noItem = () => document.getElementById("shopping-body").innerHTML = '<p id="info-chopping-item">"' + infofiltro + '"</p>';

/* FUNCION INDICA SI LOS GASTOS DE ENVIO SON O NO 0 */
function infoGastosEnvio(){
     let compruebaPrime = true;
     for (propiedades in carrito){
          compruebaPrime = compruebaPrime && carrito[propiedades].premium;
     }
     let gastosInfo = compruebaPrime ? infoEnvio2 : infoEnvio1;
     return gastosInfo;
}


/* FUNCION QUE APLICA DESCUENTO AL TOTAL DEL PRECIO */
function aplicaDescuentoCarrito(precioTotal){
     let priceDiscount = precioTotal * discountPrice;
     precioTotal = precioTotal - priceDiscount;
     document.getElementById("chopping-price-discount").innerHTML = "( Descuento del " + discountPrice*100 + "% )";
     return precioTotal;
}


/* FUNCION ELEIMINA UN PRODUCTO DEL CARRITO */
function eliminaProducto (paramDelete) {   
     let encontrado = false;
     let posItem;
     for (i=0; i < carrito.length; i++){
          if (carrito[i].id == paramDelete){
               posItem = carrito.indexOf(carrito[i]);
               encontrado = true;
          }
     }
     let respElimina = confirm("¿Quiere eliminar del carro de la compra el producto seleccionado? Código: " + carrito[posItem].id +" - " + carrito[posItem].name);
     if (respElimina === true && encontrado === true) {
          carrito.splice(posItem,1);
          //estructuraPrincipalCarrito();
          filterItem ();
     }
}

/*ASIGNACION EVENTO CHANGE AL SELECT PARA FILTRAR LOS ELEMENTOS DEL CARRO*/
document.getElementById("filter-item").addEventListener("change",filterItem)

/* LLAMADA A FUNCIONES QUE MUESTRA EN PANTALLA LOS ELEMENTOS DEL CARRO DE LA COMPRA */
printProperlyIndex();
estructuraPrincipalCarrito();