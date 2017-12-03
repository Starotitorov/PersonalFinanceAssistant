export default function getAuthorizationMocks(API_URL) {
    return {
        [`POST ${API_URL}/auth/signin`]: ({method, url, params, urlparams, headers}) => {
            const id = 1001;

            return {
                user: {
                    id,
                    name: `User${id}`,
                    email: `user${id}@example.com`
                },
                token: 'token'
            };
        },
        [`POST ${API_URL}/auth/signup`]: ({method, url, params, urlparams, headers}) => {
            const id = 1001;

            return {
                user: {
                    id,
                    name: `User${id}`,
                    email: `user${id}@example.com`
                },
                token: 'token'
            };
        },
        [`POST ${API_URL}/auth/signin/facebook`]: ({method, url, params, urlparams, headers}) => {
            const id = 1001;

            return {
                user: {
                    id,
                    name: `User${id}`,
                    email: `user${id}@example.com`
                },
                token: 'token'
            };
        }
    };
}
