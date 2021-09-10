import {
    onUpdateField, 
    onSubmitForm, 
    onSetError, 
    onSetFormErrors, 
    onSetValues
} from "../../common/helpers";
import {formValidation} from "./transfer.validation";
import { history } from "../../core/router";
import {setAccountOptions} from "./transfer.helpers";
import {getAccount, insertTranfer} from "./transfer.api"
import {isValidDate, getTranferDate} from "./tranfer.validation.date"



let params = history.getParams();
const isEditMode = Boolean(params.id);

let transfer = {
    id: "",
    iban: "",
    name: "",
    amount: "",
    concept: "",
    notes: "",
    transaction: "",
    realTransaction: "",
    email: "",
    accountId: "",
    day: "",
    month: "",
    year: ""
};

let date = {
    day: "",
    month: "",
    year: ""
}

if (!isEditMode) {
   params.id = "1";
}

getAccount().then(apiAccount =>{
    setAccountOptions(apiAccount, params.id);
    onSetValues(apiAccount);
})

transfer = { 
    ...transfer, 
    accountId : params.id,
}


onUpdateField ("select-account", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        accountId : value,
    }
})

onUpdateField ("iban", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        iban : value,
    };
    formValidation.validateField("iban", transfer.iban).then(result =>{
        onSetError("iban", result);
    });
});

onUpdateField ("name", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        name : value,
    };
    formValidation.validateField("name", transfer.name).then(result =>{
        onSetError("name", result);
    });
});

onUpdateField ("amount", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        amount : value,
    };
    formValidation.validateField("amount", transfer.amount).then(result =>{
        onSetError("amount", result);
    });
});

onUpdateField ("concept", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        concept : value,
    };
    formValidation.validateField("concept", transfer.concept).then(result =>{
        onSetError("concept", result);
    });
});

onUpdateField ("notes", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        notes : value,
    };
    formValidation.validateField("notes", transfer.notes).then(result =>{
        onSetError("notes", result);
    });
});

onUpdateField ("day", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        day : value,
    };
    formValidation.validateField("day", transfer.day).then(result =>{
        onSetError("day", result);
        if (transfer.day != "" && transfer.month != "" && transfer.year != "" ){
            onSetErrorDate(transfer, result);
        };
    });

});

onUpdateField ("month", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        month : value,
    };
    formValidation.validateField("month", transfer.month).then(result =>{
        onSetError("month", result);
        if (transfer.day != "" && transfer.month != "" && transfer.year != "" ){
            onSetErrorDate(transfer, result);
        };
    });
});

onUpdateField ("year", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        year : value,
    };
    formValidation.validateField("year", transfer.year).then(result =>{
        onSetError("year", result);
        if (transfer.day != "" && transfer.month != "" && transfer.year != "" ){
            onSetErrorDate(transfer, result);
        }
    });
});

onUpdateField ("email", event => {
    const value = event.target.value;
    transfer = { 
        ...transfer, 
        email : value,
    }; 
    formValidation.validateField("email", transfer.email).then(result =>{
        onSetError("email", result);
    });
});


const onSave = () => insertTranfer(transfer);

const onSetErrorDate = (transfer, result) => {
    if (isValidDate(transfer)){
        onSetError("date", {...result, message: "", succeeded: true});
    }  else {
        onSetError("date", {...result, message: "Fecha no valida", succeeded: false});
    }
};

onSubmitForm ("transfer-button", event => {

    formValidation.validateForm(transfer).then(result =>{
        onSetFormErrors(result);
        if (result.succeeded && isValidDate(transfer)){
            transfer = { 
                ...transfer, 
                transaction : new Date(),
                realTransaction : getTranferDate(transfer),
            };
            onSave().then(() => {
               history.back();
            });               
        }
    })

})