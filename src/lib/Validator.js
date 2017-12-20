import _ from 'lodash';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_-]).{8,}$/;

export const password = (value, name) => {
    if (value && value.trim()) {
        return !PASSWORD_REGEXP.test(value)
            ? `The ${name} should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character`
            : undefined;
    }
};

export const email = (value, name) => {
    if (value && value.trim()) {
        if (!EMAIL_REGEXP.test(value)) {
            return `The ${name} is not a valid email`;
        }
    }
};

export const required = (value, name) => {
    if (!value) {
        return `The ${name} is required`;
    }
};

export const number = (value, name) => {
    if (value) {
        const str = String(value);

        if (isNaN(str) || isNaN(parseFloat(str))) {
            return `The ${name} is not a valid number`;
        }
    }
};

export const length = (max = Infinity, min = -Infinity) => (value, name) => {
    if (value && value.trim()) {
        if (value.length > max) {
            return `The ${name} must be less or equal ${max} characters`;
        } else if (value.length < min) {
            return `The ${name} must be at least ${min} characters long`;
        }
    }
};

export const combineValidators = fields => (values) => {
    const errors = {};

    _.keys(fields).forEach((field) => {
        const value = values[field];
        const { fieldName, validators } = fields[field];

        if (Array.isArray(validators)) {
            const fieldErrors = [];

            validators.forEach((validator) => {
                const error = validator(value, fieldName);

                if (error) {
                    fieldErrors.push(error);
                }
            });

            if (fieldErrors.length !== 0) {
                errors[field] = fieldErrors.join(', ');
            }
        } else if (_.isFunction(validators)) {
            errors[field] = validators(value, fieldName);
        }
    });

    return errors;
};
