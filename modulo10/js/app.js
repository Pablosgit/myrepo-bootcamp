const objeto = { id: 4451234, name: "Javi", surname: "Calzado", age: 36 };
const array = ["Platano", "Aceituna", "Albaricoque", "Manzana","Aguacate","Melocotón", "Arándano","Naranja"];
const array2 = ["Platano", "Aceituna", "Albaricoque", "Manzana","Aguacate","Melocotón", "Arándano","Naranja","Melón"];
const arrayNum = [10, 20, 40, 150, 5, 7, 95];

console.log("%c- EJercicio: hasId","color: green");
console.log(objeto);
const hasId = ({id}) => id ? true : false;  
console.log(hasId(objeto));

console.log("%c- Ejercicio: head","color: green");
console.log(array);
const head = ([first]) => first;
console.log(head(array));

console.log("%c- Ejercicio: tail","color: green");
console.log(array);
const tail = ([ , ...restArrayTail]) => restArrayTail;
console.log(tail(array));

console.log("%c- Ejercicio: swapFirstToLast","color: green");
console.log(array);
const swapFirstToLast = ([FirstItem , ...restArray]) => {
    restArray.push(FirstItem)
    return restArray;
};
console.log(swapFirstToLast(array));

console.log("%c- Ejercicio: excludeId","color: green");
console.log(objeto);
const excludeId = ({id, ...restObjeto}) => restObjeto;
console.log(excludeId(objeto));


console.log("%c- Ejercicio: wordsStartingWithA","color: green");
console.log(array);
const pattern = /^(a|A).*/;
const wordsStartingWithA = fruits => fruits.filter( fruit => pattern.test(fruit) === true );
console.log(wordsStartingWithA(array));


console.log("%c- Ejercicio: concat","color: green");
const concat = (...data) => data.join(" | ");

console.log(concat("Buenas noches"));
console.log(concat("Buenos noches", "María"));
console.log(concat("Buenos noches", "María", "Jaime"));


console.log("%c- Ejercicio: multArray","color: green");
const multiplicador = 5;
console.log(multiplicador + " x ", arrayNum);
const multArray = (num, numArray) => numArray.map(datanum => datanum*num);
console.log(multArray(multiplicador, arrayNum));


console.log("%c- Ejercicio: calcMult","color: green");
const calcMult = (...numbers) => numbers.reduce((productNum, num) => productNum * num);
console.log(calcMult(2,1));
console.log(calcMult(2,2,2));
console.log(calcMult(2,2,3,10));



console.log("%c- EJERCICIOS EXTRA:","color: green");

console.log("%c- Ejercicio: swapFirstSecond","color: green");
console.log(array);
const swapFirstSecond = datosArray => {
    const [primero, segundo, ...restArray] = datosArray;
    restArray.unshift(segundo, primero);
    return restArray;
}
console.log(swapFirstSecond(array));

console.log("%c- Ejercicio: firstEqual","color: green");
//const firstEqual = (leter, ...multipleStrings) => multipleStrings.every( valString => valString.toLowerCase().startsWith(leter.toLowerCase()));
const firstEqual = (leter, ...multipleStrings) => multipleStrings.every( valString => valString.toLowerCase().indexOf(leter.toLowerCase()) === 0);
console.log(firstEqual("N","Agua","Nadar"));
console.log(firstEqual("s","Sol","Salero","sardinas"));
console.log(firstEqual("P","Playa","Arena","Toalla"));

console.log("%c- Ejercicio: longest","color: green");
const longest = (...arrays) => {
    arrays.sort((a,b) => (a.length < b.length ? 1 : -1))
    return arrays[0];
}
console.log(longest(array, arrayNum, array2));

console.log("%c- Ejercicio: searchInStringV1","color: green");
const searchInStringV1 = (valLetter, valString) => 
    Array.from(valString.toLowerCase())
    .reduce((numLetter, findString) => { 
        if ( findString.indexOf(valLetter.toLowerCase()) >= 0 ) numLetter++ ; 
        return numLetter;
    } ,0);
console.log(searchInStringV1("A","Agua") + ' letras "A" en "Agua"');
console.log(searchInStringV1("N","hola") + ' letras "N" en "Hola"');
console.log(searchInStringV1("R","Rinoceronte") + ' letras "R" en "Rinoceronte"');
console.log(searchInStringV1("O","Hipopotamo") + ' letras "O" en "Hipopotamo"');



console.log("%c- Ejercicio: searchInStringV2","color: green");

const searchInStringV2 = (valLetter2, valString2) => { 
    let numLetter2 = 0;
    Array.from(valString2.toLowerCase())
    .forEach( findString2 => { 
        if (findString2 == valLetter2.toLowerCase()) numLetter2++;
    });
    return numLetter2 + " / " + valLetter2 + " / " + valString2;
}
console.log(searchInStringV2("A","Agua"));
console.log(searchInStringV2("N","hola"));
console.log(searchInStringV2("R","Rinoceronte"));
console.log(searchInStringV2("O","Hipopotamo"));

console.log("%c- Ejercicio: sortCharacters","color: green");
const sortCharacters = valString3 => Array.from(valString3.toLowerCase()).sort((a,b) => (a > b ? 1 : -1)).join("");
console.log(sortCharacters("Agua") + " / Agua");
console.log(sortCharacters("Murcielago") + " / Murcielago");
console.log(sortCharacters("Rinoceronte") + " / Rinoceronte");
console.log(sortCharacters("Hipopotamo") + " / Hipopotamo");


console.log("%c- Ejercicio: shout","color: green");

const shout = (...valWords) => valWords.map(word => "¡" + word + "!").join("").toUpperCase();

console.log(shout("hola","adios"));
console.log(shout("hola","adios","Buenas tardes"));
console.log(shout("hola","adios","Buenas tardes", "Buenas noches"));


console.log("%c - Ejercicio: Lista de la compra","color: green");

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
  ];

console.log("%cA. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto:","color: green");
const modifyIVA = valCart => valCart.map(cart => Object.defineProperty(cart,"iva", { value: cart.price*0.21 }));
console.log(modifyIVA(shoppingCart));

console.log("%cB. Ordena la lista de más a menos unidades:","color: green");
const orderCart = valCart => valCart.sort( (a,b) => (a.units < b.units? 1: -1));
console.log(orderCart(shoppingCart));

console.log("%cC. Obtén el subtotal gastado en droguería:","color: green");
const totalCategoryCart = valCart => valCart.reduce((sumTotal, productCart) => {
    if (productCart.category === "Droguería") sumTotal += productCart.price*productCart.units;
    return sumTotal;
    },0)
console.log(totalCategoryCart(shoppingCart) + "€ + IVA","color: green");

console.log('%cD. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.',"color: green");
const getListCart = valCart => 
    valCart
        .sort((a,b) => (a.category > b.category? 1 : -1))
        .map(cart => cart.product + " -> " + ((cart.price*cart.units)+(cart.iva*cart.units)) + "€")
        .join("\n");

console.log(getListCart(shoppingCart));
