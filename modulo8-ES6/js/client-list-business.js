import * as dataBusiness from "./data-business";
import * as clientBusiness from "./client-business"


function printClientsAccounts() {
    const clients = dataBusiness.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = clientBusiness.getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }


  export { printClientsAccounts };