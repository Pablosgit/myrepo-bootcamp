import "./styles.css";

import * as dataBusiness from "./data-business";
import * as Utils from "./utils";


dataBusiness.getActors().then((data)=>{
    const characters = data;
    dataBusiness.getEpisodes().then((data)=>{
        const dataEpisodes = data;
        dataBusiness.getQuote().then((data)=>{
            const dataQuote = data;
            dataBusiness.getDeath().then((data)=>{
                const dataDeaths = data;
                printApp(characters, dataEpisodes, dataQuote, dataDeaths);
            });
        });
    });
})


const printApp = (characters, episodes, quotes, deaths) =>{

    document.getElementById("root").innerHTML = "";

    for (let actor of characters ){
        const nodeCharacter = Utils.createCharacterRow(actor);
        nodeCharacter.addEventListener("click", () => Utils.showCharacter(actor, episodes, quotes, deaths));
        document.getElementById("root").append(nodeCharacter);
    }

    setTimeout(function() {
        document.getElementById("page-loading").setAttribute("class","hidden");
       }, 500);

}




