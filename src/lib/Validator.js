import _ from 'lodash';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
        const validators = fields[field];

        if (Array.isArray(validators)) {
            const fieldErrors = [];

            validators.forEach((validator) => {
                const error = validator(value, field);

                if (error) {
                    fieldErrors.push(error);
                }
            });

            if (fieldErrors.length !== 0) {
                errors[field] = fieldErrors.join(', ');
            }
        } else if (_.isFunction(validators)) {
            errors[field] = validators(value, field);
        }
    });

    return errors;
};
