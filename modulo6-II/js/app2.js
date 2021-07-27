var searchRepeat = (array, target) => {
    for (var x = 0; x < array.length; x++) {
        if (array[x] === target) return x;
    }
    return -1;
};

var randomPick = (n, min, max) => {
    let ArrayAleatorio = [n];
    let valRandom;
    let arrayNoRepeat
    for ( i = 0; i < n; i++){
       do {
        valRandom = Math.floor(Math.random() * max) + min;
        arrayNoRepeat = searchRepeat(ArrayAleatorio, valRandom);
       } while (arrayNoRepeat != -1);
       ArrayAleatorio[i] = valRandom;
    }
    return ArrayAleatorio;
}

console.log(randomPick(10, 1, 100));