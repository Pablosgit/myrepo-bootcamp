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
    const element = document.createElement("div");
    const elementIMG = document.createElement("img");
    elementIMG.width = 150;
    elementIMG.src = character.image;
    element.className = "thumbnail";
    element.appendChild(elementIMG);
  
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
    element.src = character.image;
  
    return element;
  };
  
  const showCharacter = (character, episodes) => {
    const characterDetail = document.getElementById("character-detail");
    characterDetail.setAttribute("class","character_visible");
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name, "item_attribute"));
  
    characterDetail.appendChild(
      createParagraph("Species: " + character.species, "item_attribute")
    );

    characterDetail.appendChild(
      createParagraph("Gender: " + character.gender, "item_attribute")
    );

    characterDetail.appendChild(
      createParagraph("Origin: " + character.origin.name, "item_attribute")
    );

    characterDetail.appendChild(
      createParagraph("Type: " + character.type, "item_attribute")
    );

    characterDetail.appendChild(
      createParagraph("Status: " + character.status, "item_attribute")
    );

    // characterDetail.scrollTop = 0;
  };
  

  const createParagraph = (text, type) => {
    const element = document.createElement("p");
    element.setAttribute("class", type);
    element.append(text);
    return element;
  };

  
  export { createCharacterRow, showCharacter };