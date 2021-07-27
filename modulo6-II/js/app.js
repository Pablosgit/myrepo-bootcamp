const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

let valueTextDecrypt = () => document.getElementById("text-decrypt").value.toLowerCase();
let valueTextEncrypt = () => document.getElementById("text-encrypt").value;


// let encrypt = (letter) => {
//     let index;
//     for (indexLetter = 0; indexLetter < plainAlphabet.length; indexLetter++){
//       if (plainAlphabet[indexLetter] === letter) index = indexLetter;
//     };
//     return index >= 0 ? encryptedAlphabet[index] : letter;
// }

// let decrypt = (letter) => {
//     let index;
//     for (indexLetter = 0; indexLetter < encryptedAlphabet.length; indexLetter++){
//       if (encryptedAlphabet[indexLetter] === letter) index = indexLetter;
//     };
//     return index >= 0 ? plainAlphabet[index] : letter;
// }


let encrypt = (letter) => {
    let index = plainAlphabet.indexOf(letter);
    return index >= 0 ? encryptedAlphabet[index] : letter;
}

let decrypt = (letter) => {
    let index = encryptedAlphabet.indexOf(letter);
    return index >= 0 ? plainAlphabet[index] : letter;
}

let changeText = (id, validationFuction) => {
    let valText = id === "encrypt" ? valueTextDecrypt() : valueTextEncrypt();
    let tranforText = "";
    for (i = 0; i < valText.length; i++){
        tranforText += validationFuction(valText[i]);
    }
    document.getElementById("text-" + id).value = tranforText;
}

document.getElementById("encrypt").addEventListener("click", event => changeText(event.target.id, encrypt));
document.getElementById("decrypt").addEventListener("click", event => changeText(event.target.id, decrypt));

