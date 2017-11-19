const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function({ email, password }) {
    const errors = {};

    if (!email) {
        errors.email = 'Email is required';
    } else if (!EMAIL_REGEXP.test(email)) {
        errors.email = 'Email is invalid';
    }

    if (!password) {
        errors.password = 'Password is required';
    }

    return errors;
}
