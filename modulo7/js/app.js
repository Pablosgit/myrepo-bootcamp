console.log("%cValidar un IBAN:", "color: green");

console.log("Caso 1: validar");
const pattern1 = /^[A-Z]{2}\d{22}$/;
const IBAN1 = "ES6600190020961234567890";
let result1 = pattern1.test(IBAN1)? "correcto" : "incorrecto";
console.log("El número de IBAN: " + IBAN1 + " es " + result1 + " (" + pattern1.test(IBAN1) + ")");

console.log("Caso 2: validar");
const pattern2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;
const IBAN2 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
let result2 
for (i = 0; i < IBAN2.length; i++ ){
  result2 = pattern2.test(IBAN2[i])? "correcto" : "incorrecto";
  console.log("El número de IBAN: " + IBAN2[i] + " es " + result2 + " (" + pattern2.test(IBAN2[i]) + ")");
}

console.log("Caso 3: extraer datos.");
const pattern3 = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/;
const IBAN3 = "ES6600190020961234567890";
let result3 = pattern3.exec(IBAN3);
console.log(result3);
console.log("Código del pais: " + result3[1]);
console.log("Dígito de control: " + result3[2]);


console.log("%cValidar matrícula coche:", "color: green");

console.log("Caso 1: validar");
const pattern4 = /^\d{4}(\s|-|_)?[A-Z]{3}$/;
const matricula1 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
let result4;
for (i = 0; i < matricula1.length; i++ ){
  result4 = pattern4.test(matricula1[i])? "correcto" : "incorrecto";
  console.log("El número de Matrícula: " + matricula1[i] + " es " + result4 + " (" + pattern4.test(matricula1[i]) + ")");
}

console.log("Caso 2: extraer datos.");
const pattern5 = /^(\d{4})(\s|-|_)?([A-Z]{3})$/;
const matricula2 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
let result5;
for (i = 0; i < matricula2.length; i++ ){
  result5 = pattern5.exec(matricula2[i]);
  console.log(result5);
  console.log("El número de Matrícula: " + matricula2[i] + " / Numeros:" + result5[1] + " / Letras:" + result5[3]);
}


console.log("%cEJERCICIOS OPCIONALES:","color: red");

console.log("%cExtraer imágenes de un fichero HTML:", "color: green");

console.log("Caso 1: de una sola linea extraer el contenido de src.");
//const pattern6 = /^\<(img)\s?(src)\=\"(.*)\"\s?\/\>$/;
const pattern6 = /https:\/\/.*png/;
const htmlImg = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';
let result6 = pattern6.exec(htmlImg);
console.log(result6);
console.log("La url de la imagen es: " + result6);

console.log("Caso 2: extraer todos los src de todos los objetos img.");
const pattern7 = /https:\/\/.*(jpg|png)/gm;
const htmlImg2 = '<html>\n'+
'<body>\n'+
  '<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg" />\n'+
  '<h1>ejemplo</h1>\n'+
  '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />\n'+
'</body>\n'+
'</html>\n';
let result7 = htmlImg2.match(pattern7);
console.log("La url de la imagen 1 es: " + result7[0]);
console.log("La url de la imagen 1 es: " + result7[1]);


console.log("%cValidar sintaxis tarjeta de crédito:", "color: green");

console.log("Caso 1: validar");
const pattern8 = /^[5][0-5]\d{2}((\s|-)?(\d{4})){3}$/;
const creditCard = ["5299 6400 0000 0000","5299-6400-0000-0000","5299640000000000"];
let result8;
for (i = 0; i < creditCard.length; i++ ){
  result8 = pattern8.test(creditCard[i])? "correcto" : "incorrecto";
  console.log("El número de CreditCard: " + creditCard[i] + " es " + result8 + " (" + pattern8.test(creditCard[i]) + ")");
}

console.log("Caso 2: extraer datos.");
const pattern9 = /^([5][0-5]\d{2})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})$/;
const creditCard2 = ["5199 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];
let result9;
for (i = 0; i < creditCard2.length; i++ ){
  result9 = pattern9.exec(creditCard2[i]);
  console.log(result9);
  console.log("El número de CreditCard: " + creditCard2[i]);
  console.log("1º grupo: " + result9[1] + " / 2º grupo: " + result9[3] + " / 3º grupo: " + result9[5] + " / 4º grupo: " + result9[7]);
}


console.log("%cBuscar Expresiones regulares:", "color: red");

console.log("%cComprobar si una clave es fuerte o no.", "color: green");

const password = ["456gsb4h","456Hsb4h$HHE","Miclav1","Miclave125"];

console.log("Caso 1: complejo -> Una minuscula, una mayuscula, un numero y un caracter especial.");
const pattern10 = /^(?=\w*[a-z])(?=\w*[A-Z])(?=\w*\d)(?=\w*[\u0021-\u002b\u003c-\u0040])\S{8,16}$/
let result10;
for (i = 0; i < password.length; i++ ){
  result10 = pattern10.test(password[i])? "correcta" : "incorrecta";
  console.log("La contraseña: " + password[i] + " es " + result10 + " (" + pattern10.test(password[i]) + ")");
}


console.log("Caso 2: Moderado -> Una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.");
const pattern11 = /^(?=\w*[a-z])(?=\w*[A-Z])(?=\w*\d)\S{8,16}$/
let result11;
for (i = 0; i < password.length; i++ ){
  result11 = pattern11.test(password[i])? "correcta" : "incorrecta";
  console.log("La contraseña: " + password[i] + " es " + result11 + " (" + pattern11.test(password[i]) + ")");
}


console.log("%cValidar que una URL esta bien formada.","color: green");

const pattern12 = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
const urlAddress = ["https://www.lemoncode.net","http://www.lemoncode.net","www.lemoncode.net","lemoncode.net"];
let result12;
for (i = 0; i < urlAddress.length; i++ ){
  result12 = pattern12.test(urlAddress[i])? "correcta" : "incorrecta";
  console.log("La URL: " + urlAddress[i] + " es " + result12 + " (" + pattern12.test(urlAddress[i]) + ")");
}



console.log("%cValidar que un color en Hexadecimal esta bien formado:","color: green");

const pattern13 = /^#(\w{3}){1,2}$/;
const codColor = ["#99ccff","#00cc0","#FFFFFF","00CC00","#000"];
let result13;
for (i = 0; i < codColor.length; i++ ){
  result13 = pattern13.test(codColor[i])? "correcto" : "incorrecto";
  console.log("El código de color: " + codColor[i] + " es " + result13 + " (" + pattern13.test(codColor[i]) + ")");
}