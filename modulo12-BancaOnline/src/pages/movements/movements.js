import {getMovement, getAccount} from "./movements.api";
import {addMovementRows, addDataAccount} from "./movements.helpers"
import {mapMovementsListApiToVm} from "./movements.mappers"
import {history} from "../../core/router"

const params = history.getParams();

if (params.id){
    getAccount(params.id).then(apiAccount =>{
        addDataAccount(apiAccount);
    })

    // getMovement(params.id).then( movementsList => {
    //     const vmMovementsList = mapMovementsListApiToVm(movementsList);
    //     addMovementRows(vmMovementsList);
    // });

    getMovement().then( movementsList => {
        const vmMovementsList = mapMovementsListApiToVm( params.id, movementsList);
        addMovementRows(vmMovementsList);
    });
}
