#PersonalFinanceAssistant

PersonalFinanceAssistant react-native client.

### Accounts API

```js
export default function getAccountsMocks(API_URL) {
    return {
        /**
         * GET /api/v1/accounts
         * Response
         * {
         *      accounts: [{
         *          id: Number,
         *          name: String,
         *          icon: String,
         *          balance: Number,
         *          initialDate: Number
         *      }]
         * }
         */
        [`GET ${API_URL}/accounts`]: ({method, url, params, urlparams, headers}) => {
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
                    }, {
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
        /**
         * POST /api/v1/accounts
         * Request
         * {
         *      account: {
         *          name: String,
         *          icon: String,
         *          initialBalance: Number,
         *          initialDate: Number
         *      }
         * }
         *
         * Response
         * {
         *      account: {
         *          id: Number,
         *          icon: String,
         *          balance: Number,
         *          initialDate: Number,
         *          name: String
         *      }
         * }
         */
        [`POST ${API_URL}/accounts`]: ({method, url, params, urlparams, headers}) => {
            const {initialBalance: balance, name, initialDate} = params.account;

            return {
                account: {
                    id: 10001,
                    name,
                    balance,
                    initialDate
                }
            };
        },
        /**
         * PUT /api/v1/accounts/:id
         * Request
         * {
         *      account: {
         *          name: String,
         *          icon: String,
         *          initialDate: Number
         *      }
         * }
         *
         * Response
         * {
         *      account: {
         *          id: Number,
         *          icon: String,
         *          balance: Number,
         *          initialDate: Number,
         *          name: String
         *      }
         * }
         */
        [`PUT ${API_URL}/accounts/{id}`]: ({method, url, params, urlparams, headers}) => {
            const {id} = urlparams;
            const {name, initialDate} = params.account;

            return {
                account: {
                    id,
                    name,
                    initialDate
                }
            };
        },
        /**
         * DELETE /api/v1/accounts/:id
         */
        [`DELETE ${API_URL}/accounts/{id}`]: ({method, url, params, urlparams, headers}) => {
            return {
                status: 200
            };
        }
    }
}
```
