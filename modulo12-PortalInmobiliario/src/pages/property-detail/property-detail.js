import {onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import {getProperty, insertContact, getPropertyEquipment} from "./property-detail.api";
import {setPropertyValues} from "./property-detail.helpers";
import {mapPropertyDetailApiToVm} from "./property-detail.mappers";
import {formValidation} from "./property-detail.validation";
import {history} from "../../core/router"

const params = history.getParams();
const isId = Boolean(params.id);

let dataContacForm = {
    email:"",
    message: "",
    propertyId: "",
}

if (isId){

    dataContacForm = {
        ...dataContacForm,
        propertyId: params.id,
    }

    // getProperty(params.id).then(property =>{
    //     getPropertyEquipment().then(propertyEquipment => {
    //         const vmPropertyDetail = mapPropertyDetailApiToVm(property, propertyEquipment);
    //         setPropertyValues(vmPropertyDetail);
    //     });
    // });

    Promise.all([
        getProperty(params.id),
        getPropertyEquipment(),
    ]).then(([property, propertyEquipment]) => { 
        const vmPropertyDetail = mapPropertyDetailApiToVm(property, propertyEquipment);
        setPropertyValues(vmPropertyDetail);
    });

}


onUpdateField('email', event => {
    const value = event.target.value;
    dataContacForm = {
        ...dataContacForm,
        email: value,
    };
    formValidation.validateField("email", dataContacForm.email).then(result => {
        onSetError("email", result);
    });
});

onUpdateField('message', event => {
    const value = event.target.value;
    dataContacForm = {
        ...dataContacForm,
        message: value,
    };
    formValidation.validateField("message", dataContacForm.message).then(result => {
        onSetError("message", result);
    });
});

const onSave = () => insertContact(dataContacForm);

onSubmitForm('contact-button', () => {

    formValidation.validateForm(dataContacForm).then(result =>{
        onSetFormErrors(result);
        if (result.succeeded){
            onSave().then(() => {
              history.back();
            });               
        }
    })

});
