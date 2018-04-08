import { createValidator } from 'revalidate'

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-]).{8,}$/;

export const password = createValidator(
    message => value => {
        if (value && value.trim()) {
            return !PASSWORD_REGEXP.test(value) ? message : undefined;
        }
    },
    field => `The ${field} is invalid`
);

export const email = createValidator(
    message => value => {
        if (value && value.trim()) {
            return !EMAIL_REGEXP.test(value) ? message : undefined;
        }
    },
    field => `The ${field} is invalid`
);

export const range = (min=-Infinity, max=Infinity) => createValidator(
    message => value => {
        const number = Number(value);

        if (number) {
            return number <= min || number >= max ? message : undefined;
        }
    },
    field => `The ${field} is invalid`
);

export const required = createValidator(
    message => value => !value ? message : undefined,
    field => `The ${field} is required`
);

export const number = createValidator(
    message => value => {
        if (value) {
            return isNaN(parseFloat(value)) || !isFinite(value) ? message : undefined;
        }
    },
    field => `The ${field} is not a valid number`
);

export const match = otherField => createValidator(
    message => (value, values) => {
        return value && value !== values[otherField] ? message : undefined;
    },
    field => `The ${field} should match ${otherField}`
);
