// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
const simbolMoney = "€"

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];


// CALCULA Y PINTA LA ESTRUCTURA DEL CARRITO

/* Devuelve los campos imput de cada lista de productos */
var ImputChoppingCart = (product) =>{
  var inputProduct = document.createElement("input");
  inputProduct.setAttribute("id", products.indexOf(product));
  inputProduct.setAttribute("class", "product-unit");
  inputProduct.setAttribute("type", "number");
  inputProduct.setAttribute("min", "0");
  inputProduct.setAttribute("max", product.stock);
  inputProduct.setAttribute("value", product.units);
  inputProduct.addEventListener("change", event => modifyUnits(event.target.id, event.target.value)); 
  return inputProduct;
}

/* DEVULVE LOS DATOS DEL PRODUTO. DESCRIPCION Y PRECIO UNIDAD Y LO CONCATENA */
var attrProduct = (product) => product.description + " - " + product.price + simbolMoney + "/ud. ";

/* DEVULVE LOS DATOS DEL PRODUTO. DESCRIPCION Y PRECIO UNIDAD Y LO CONCATENA */
var ListChoppingCart = (product) => {
  var listItem = document.createElement("li");
  listItem.setAttribute("class", "list-chopping-iten");
  listItem.innerHTML = attrProduct(product);
  listItem.appendChild(ImputChoppingCart(product));
  return listItem;
}

/* CREA Y PINTA LA ESTRUCTURA PRINCIPAL DE LA LISTA DE ELEMENTOS DEL CARRITO */
var BodyChoppingCart = () => {
  var choppingCartBody = document.getElementById("chopping-body");
  var listProduct = document.createElement("ol"); 
  listProduct.setAttribute("class", "list-chopping-body");
  choppingCartBody.appendChild(listProduct);
  return listProduct;
}

/* INICIALIZA Y PINTA LOS ELEMENTOS DE LA LISTA DEL CARRITO*/
var printChoppingCart = () => {
  var bodyCart = BodyChoppingCart();
  for( i = 0 ; i < products.length; i++){
    bodyCart.appendChild(ListChoppingCart(products[i]));
  }
  document.getElementById("chopping-buttom").addEventListener("click", printTotalCart);
  document.getElementById("chopping-buttom").disabled = disabledButton();
}

/* MODIFICA EL VALOR DE LA UNIDADES EN EL ARRAY PRINCIPAL */
var modifyUnits = (valPos, valUnits) => {
  products[valPos].units = valUnits;
  document.getElementById("chopping-buttom").disabled = disabledButton();
}

/* ACTIVA O DESACTIVA EL BOTON DE CALCULAR */
var disabledButton = () => {
  let activeButton = true;
  for (i = 0; i < products.length; i++) {
    activeButton = activeButton && products[i].units == 0;
  }
  if (activeButton) printTotalCart(); 
  return activeButton;
}

// CALCULA LOS DATOS Y PRECIO DEL CARRITO. SUBTOTAL, IVA Y TOTAL.

/* DEVULVE PRECIO IVA POR UNID DE CADA PRODUCTO */
var typeIvaProduct = (valIVA) => valIVA.price * (valIVA.tax/100);

/* DEVULVE Y CALCULA EL IVA TOTAL*/
var calcIVA = () => {
  var priceIVA = 0;
  for( i = 0 ; i < products.length; i++){
    priceIVA += typeIvaProduct(products[i]) * products[i].units;
  }
  return priceIVA;
}

/* DEVULVE TOTAL CARRITO SIN IVA */
var calcSubtotal = () => {
  var priceSubtotal = 0;
  for( i = 0 ; i < products.length; i++){
    priceSubtotal += products[i].price * products[i].units;
  }
  return priceSubtotal;
}

/* PINTA EL TOTAL DEL CARRITO. SUBTOTAL, IVA Y TOTAL.*/
var printTotalCart = () => {
  var subtotalCart = calcSubtotal();
  var IVAtotal = calcIVA();
  document.getElementById("subtotal-price").innerHTML = "Subtotal " + subtotalCart + " " + simbolMoney;
  document.getElementById("iva-price").innerHTML = "IVA " + IVAtotal + " " + simbolMoney;
  document.getElementById("total-price").innerHTML = "TOTAL " + ( subtotalCart + IVAtotal ) + " " + simbolMoney;
}


/* INICIALIZA Y PINTA CARRITO DE LA COMPRA */
printChoppingCart();