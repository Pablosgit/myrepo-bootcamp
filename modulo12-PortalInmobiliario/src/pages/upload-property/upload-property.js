import {
    onUpdateField, 
    onSubmitForm, 
    onSetError, 
    onSetFormErrors,
    onAddFile
} from "../../common/helpers";
import {formValidation} from "./upload-property.validation";
import { history } from "../../core/router";
import {
    formatDeleteFeatureButtonId,
    setCheckboxList, 
    setOptionList,
    onAddFeature,
    onRemoveFeature,
    onAddImage
} from "./upload-property.helpers";
import {insertProperty, getSaleTypeList, getProvinceList, getEquipmentsList} from "./upload-property.api"
import {mapPropertyListApiToVm} from "./upload-property.mappers"

let property = {
    id: "",
    title: "",
    notes: "",
    email: "",
    phone: "",
    price: "",
    saleTypes: [],
    address: "",
    city: "",
    province: "",
    squareMeter: "",
    rooms: "",
    bathrooms: "",
    locationUrl: "",
    mainFeatures: [],
    equipments: [],
    images: []
};

let validatorField = [
    "title",
    "notes",
    "email",
    "phone",
    "price",
    "saleTypes",
    "address",
    "city",
    "province",
    "squareMeter",
    "rooms",
    "bathrooms",
    "locationUrl",
    "mainFeatures",
    "equipments",
];

let contImages = 0;

Promise.all([
    getProvinceList(),
    getSaleTypeList(),
    getEquipmentsList(),
]).then(([provincesList, saleTypeList, equipmentsList]) => { 
    setOptionList(provincesList, "province");
    setCheckboxList(saleTypeList,"saleTypes");
    setCheckboxList(equipmentsList,"equipments");
});

const typeCheck = (field, event, value) => {
    const inputChecked = event.target.checked;
    if (inputChecked){
        property[field].push(value);
    } else {
        let posInput = property[field].indexOf(value);
        property[field].splice(posInput, 1); 
    }
    property[field].sort();
};

validatorField.forEach( field => {
    onUpdateField (field, event => {
        const value = event.target.value;
        if ( field === "saleTypes" || field === "equipments" ){      
            typeCheck(field, event, value); 
        } else {
            property = { 
                ...property, 
                [field] : value,
            }; 
        }
        formValidation.validateField(field, property[field]).then(result => {
            onSetError(field, result);
        });
    });
});

const validFeatures = property => {
    formValidation.validateField("mainFeatures", property.mainFeatures).then(result => {
        onSetError("mainFeatures", result);
        onSetError("newFeature", result);
    });
};

onSubmitForm ("insert-feature-button", () => {
    const newFeature =  document.getElementById("newFeature").value;
    if (newFeature){
        property.mainFeatures.push(newFeature);
        onAddFeature(newFeature);
        onSubmitForm (`delete-${newFeature}-button`, () => {
            let posFeature = property.mainFeatures.indexOf(newFeature);
            property.mainFeatures.splice(posFeature, 1);
            onRemoveFeature(newFeature);
            validFeatures(property);
        });
        validFeatures(property);
    };
});


// const onAddDeleteImages = images => {
//     const imagesContainer = document.getElementById("delete-" + images);
//     const deleteButtonImg = document.createElement('button');
//     deleteButtonImg.id = formatDeleteFeatureButtonId(images);
//     deleteButtonImg.type = 'button';
//     imagesContainer.appendChild(deleteButtonImg);
//     onSubmitForm (`delete-${images}-button`, event => {
//         const getImg = document.getElementById(`delete-${images}`).firstChild;
//         const getAtrSrc = getImg.getAttribute("src");
//         let posImg = property.images.indexOf(getAtrSrc);
//         property.images.splice(posImg, 1);
//         onRemoveImages(images);
//     });
//   };

//   const onRemoveImages = images => {
//     const mainImagesElement = document.getElementById('images');
//     const imagesContainer = document.getElementById(`delete-${images}`);
//     mainImagesElement.removeChild(imagesContainer);
//   };


onAddFile("add-image", value => {   
    onAddImage(value);
    property.images.push(value);
    formValidation.validateField("images", property.images).then(result => {
        onSetError("images", result);
    });
    //const nameImages = document. getElementById("add-image").value;
    // const elemImages = document.getElementById('images')
    // const elemAddImg = document.getElementsByClassName("add_img");
    // const elemLength = elemImages.getElementsByClassName("add_img").length;
    // property.images.push(value);
    // for (let i = 0; i < elemLength; i++){
    //     if (elemAddImg[i].id === "") { 
    //         elemAddImg[i].id = "delete-img" + (i+1);
    //         onAddDeleteImages("img"+(i+1));
    //     }
    // }
});


const onSave = newProperty => insertProperty(newProperty);

onSubmitForm ("save-button", () => {

    formValidation.validateForm(property).then(result =>{
        //console.log(result);
        //console.log(property);
        onSetFormErrors(result);
        validFeatures(property);
        if (result.succeeded){ 
            const newProperty = mapPropertyListApiToVm(property);
            onSave(newProperty).then(() => {
                history.back();
            });               
        }
    })

})