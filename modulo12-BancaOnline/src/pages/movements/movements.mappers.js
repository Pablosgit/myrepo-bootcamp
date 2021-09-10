
// Forma 1: Mapea los datos ya filtrados
// export const mapMovementsListApiToVm = movementsList =>
// Array.isArray(movementsList) ? 
// movementsList.map(movements => mapMovementsApiToVm(movements))
//  : [];

// Forma 2: Filtra los datos y luego Mapea los datos
 export const mapMovementsListApiToVm = (paramID, movementsList) =>
Array.isArray(movementsList) ? movementsList
.filter(movements => movements.accountId == paramID)
.map(movements => mapMovementsApiToVm(movements))
    : [];

const mapMovementsApiToVm = movements => ({
    id: movements.id,
    description: movements.description,
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`,
    transaction: new Date(movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
});