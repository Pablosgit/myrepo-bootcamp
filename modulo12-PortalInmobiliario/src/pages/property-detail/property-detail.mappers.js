export const mapPropertyDetailApiToVm = (properties, equipmentsList) => propertyDetail(properties, equipmentsList);

const getRoomWord = rooms => (rooms > 1 ? 'habitaciones' : 'habitación');

const getBathrooms = bathrooms => (bathrooms > 1 ? 'baños' : 'baño');

const getEquipments = (equipmentsIdsProperty, equipmentsList) =>
    equipmentsIdsProperty
        .map(equipmentsProperty => getNameEquipments(equipmentsProperty, equipmentsList));

const getNameEquipments = (equipmentsProperty, equipmentsList) => 
    equipmentsList
        .find(equipments => equipments.id == equipmentsProperty).name;

const propertyDetail  = (property, equipmentsList) => ({
    id: property.id,
    title: property.title,
    notes: property.notes,
    price: `${property.price.toLocaleString()} €`,
    city: property.city,
    squareMeter: `${property.squareMeter}m2`,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    bathrooms: `${property.bathrooms} ${getBathrooms(property.bathrooms)}`,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: getEquipments(property.equipmentIds, equipmentsList),
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    images: property.images,
});



