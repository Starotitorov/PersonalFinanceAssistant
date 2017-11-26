import shortid from 'shortid';

const API_URL = 'http://dzianis.mooo.com/api/v1';

export default {
    [`POST ${API_URL}/auth/signin`]: ({ method, url, params, urlparams, headers }) => {
        const id = shortid.generate();

        return {
            user: {
                id,
                name: `User${id}`,
                email: `user${id}@example.com`
            },
            token: 'token'
        };
    },
    [`POST ${API_URL}/auth/signup`]: ({ method, url, params, urlparams, headers }) => {
        const id = shortid.generate();

        return {
            user: {
                id,
                name: `User${id}`,
                email: `user${id}@example.com`
            },
            token: 'token'
        };
    },
    [`POST ${API_URL}/auth/signin/facebook`]: ({ method, url, params, urlparams, headers }) => {
        const id = shortid.generate();

        return {
            user: {
                id,
                name: `User${id}`,
                email: `user${id}@example.com`
            },
            token: 'token'
        };
    }
}
