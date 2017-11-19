import shortid from 'shortid';

export default {
    'POST http://localhost:8080/api/v1/auth/signin': ({ method, url, params, urlparams, headers }) => {
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
    'POST http://localhost:8080/api/v1/auth/signup': ({ method, url, params, urlparams, headers }) => {
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
