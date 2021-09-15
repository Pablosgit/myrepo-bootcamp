import { Validators, createFormValidation } from "@lemoncode/fonk";
import { isUrl } from "@lemoncode/fonk-is-url-validator"
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';




const validationSchema = {
    field: {
        title: [
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
        phone: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isNumber.validator,
                message: 'El valor tiene que ser numérico',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^(6|7|8|9)\d{8}$/},
                message: 'Número de teléfono no valido',
            },
        ],
        price: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isNumber.validator,
                message: 'El valor tiene que ser numérico',
            },
        ],
        saleTypes: [
            {
                validator: arrayRequired.validator,
                message: 'Marcar mínimo 1 opción',
            },
        ],
        address: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        city: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        squareMeter: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isNumber.validator,
                message: 'El valor tiene que ser numérico',
            },
        ],
        rooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isNumber.validator,
                message: 'El valor tiene que ser numérico',
            },
        ],
        bathrooms: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isNumber.validator,
                message: 'El valor tiene que ser numérico',
            },
        ],
        locationUrl: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: isUrl.validator,
                message: 'Url no valida',
            },
        ],
        mainFeatures: [
            {
                validator: arrayRequired.validator,
                customArgs: { minLength: 1, maxLength: 10 },
                message: 'Añadir mínimo 1 caracteristica (max 10).',
            },
        ],
        province: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        images: [
            {
                validator: arrayRequired.validator,
                customArgs: { minLength: 1, maxLength: 3 },
                message: 'Añadir mínimo 1 imagen (max 3).',
            },
        ],
    },
};


export const formValidation = createFormValidation(validationSchema);