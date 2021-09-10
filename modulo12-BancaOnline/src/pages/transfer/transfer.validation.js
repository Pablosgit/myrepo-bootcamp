import {Validators, createFormValidation} from "@lemoncode/fonk";
import {iban} from "@lemoncode/fonk-iban-validator";


const validationSchema = {
    field: {
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: iban.validator,
                message: 'Iban no válido',
            },
            // {
            //     validator: Validators.pattern,
            //     customArgs: { pattern: /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/ },
            //     message: 'Iban no válido',
            // }
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        notes: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        email: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'Email no válido',
            },
        ],
    },
};


export const formValidation = createFormValidation(validationSchema);

