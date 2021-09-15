export const mapPropertyListApiToVm = newproperty => mapPropertyApiToVm(newproperty);

const mapPropertyApiToVm = property => ({
    id: property.id,
    title: property.title,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    price: property.price,
    saleTypeIds: property.saleTypes,
    address: property.address,
    city: property.city,
    provinceId: property.province,
    squareMeter: property.squareMeter,
    rooms: property.rooms,
    bathrooms: property.bathrooms,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipmentIds: property.equipments,
    images: property.images
});