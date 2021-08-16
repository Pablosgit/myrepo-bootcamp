

const createCharacterRow = character => {
    const element = document.createElement("div");
  
    const avatar = createAvatar(character);
    element.appendChild(avatar);
  
    const link = createRowText(character);
    element.appendChild(link);
  
    element.className = "character-row";
  
    return element;
  };
  
  const createAvatar = character => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.img;
  
    return element;
  };
  
  const createRowText = character => {
    const element = document.createElement("span");
    element.append(character.name);
  
    return element;
  };
  
  const createAvatarDetail = character => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.img;
  
    return element;
  };
  
  const showCharacter = (character, episodes, quotes, deaths) => {
    const characterDetail = document.getElementById("character-detail");
    characterDetail.setAttribute("class","character_visible");
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name, "item_attribute"));
    if (character.birthday != "Unknown"){
      characterDetail.appendChild(
        createParagraph("Birthday: " + character.birthday, "item_attribute")
      );
    }
    characterDetail.appendChild(
      createParagraph("Nickname: " + character.nickname, "item_attribute")
    );
    characterDetail.appendChild(
      createDataCharacter("Quotes", character.name, quotes)
    );
    characterDetail.appendChild(
      createDataCharacter("Deaths", character.name, deaths)
    );
    characterDetail.appendChild(
      createDataCharacter("Episodes", character.name, episodes)
    );
    characterDetail.scrollTop = 0;
  };
  

  const createParagraph = (text, type) => {
    const element = document.createElement("p");
    element.setAttribute("class", type);
    element.append(text);
    return element;
  };

  const createDataCharacter = (title, nameCharacter, dataInfo) => {
    let findInfo = false;
    const paramTitle = createParagraph( title + ":", "item_attribute");
    const paramDetail = document.createElement("div");
    paramDetail.setAttribute("id", title.toLowerCase() + "-detail");
    for (let property of dataInfo){
      if (title === "Quotes"){
        if (property.author === nameCharacter){
          findInfo = true;
          paramDetail.appendChild(createParagraph(property.quote, "item-"+title.toLowerCase()));
        }
      } else if (title === "Deaths")  {
        if (property.responsible.replace(/\s\(.*\)$/,"") === nameCharacter){
          findInfo = true;
          paramDetail.appendChild(createParagraph("- " + property.death + " / Cause: " + property.cause, "item-"+title.toLowerCase()));
        }
      } else if (title === "Episodes") {
        for (let i = 0; i < property.characters.length; i++){ 
          if (property.characters[i] === nameCharacter){
            findInfo = true;
            paramDetail.appendChild(createParagraph("- Season " + property.season + " / Cap " + property.episode + ": " + property.title, "item-" + title.toLowerCase()));
          }
        }
      }
    }
    if (findInfo){paramDetail.insertBefore(paramTitle,paramDetail.firstChild);};
    return paramDetail;
  }
    

  
  export { createCharacterRow, showCharacter };