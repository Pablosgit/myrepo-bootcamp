import "./styles.css";

import * as dataBusiness from "./data-business";
import * as Utils from "./utils";

const newcharacters = [];

for (let i = 1; i <= 34; i++){
    dataBusiness.getActors(i).then((data)=>{
        printApp(data.results,i);
    });
};


const printApp = (characters,num) =>{
    for (let actor of characters ){
        const nodeCharacter = Utils.createCharacterRow(actor);
        nodeCharacter.addEventListener("click", () => Utils.showCharacter(actor));
        document.getElementById("root").append(nodeCharacter);
    };
    if (num === 34){
        setTimeout(function() {
            document.getElementById("page-loading").setAttribute("class","hidden");
        }, 500);
    }
}





