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
    },
    [`GET ${API_URL}/accounts`]: ({ method, url, params, urlparams, headers }) => {
        return {
            accounts: [
                {
                    id: 1,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 12000
                },
                {
                    id: 2,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 10000
                },
                {
                    id: 3,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 8000
                },
                {
                    id: 4,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 2000
                },
                {
                    id: 5,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 5000
                },
                {
                    id: 6,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000
                },
                {
                    id: 7,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 2000
                },
                {
                    id: 8,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000
                },                {
                    id: 9,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 1000
                },
                {
                    id: 10,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000
                },
                {
                    id: 11,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 10000
                },
                {
                    id: 12,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 14000
                },
                {
                    id: 13,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000
                },
                {
                    id: 14,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 11000
                }
            ],
        };
    },
    [`POST ${API_URL}/accounts`]: ({ method, url, params, urlparams, headers }) => {
        const { initialBalance: balance, name, initialDate } = params.account;

        return {
            account: {
                id: 10001,
                name,
                balance,
                initialDate
            }
        };
    },
    [`PUT ${API_URL}/accounts/{id}`]: ({ method, url, params, urlparams, headers }) => {
        const { id } = urlparams;
        const { name, initialDate } = params.account;

        return {
            account: {
                id,
                name,
                initialDate
            }
        };
    },
    [`DELETE ${API_URL}/accounts/{id}`]: ({ method, url, params, urlparams, headers }) => {
        return {
            status: 200
        };
    },
    [`GET ${API_URL}/categories`]: ({ method, url, params, urlparams, headers }) => {
        return {
            categories: [
                {
                    categoryType: 0,
                    icon: 'cash',
                    id: 0,
                    name: 'Salary',
                    userId: 0
                },
                {
                    categoryType: 1,
                    icon: 'food',
                    id: 1,
                    name: 'Food',
                    userId: 0
                },
                {
                    categoryType: 0,
                    icon: 'cat',
                    id: 2,
                    name: 'C.A.T.',
                    userId: 0
                }
            ]
        };
    }
}
