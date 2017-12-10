import { API_URL } from '../config';

export default {
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
                    balance: 12000,
                    currency: 'BYN'
                },
                {
                    id: 2,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 10000,
                    currency: 'BYN'
                },
                {
                    id: 3,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 8000,
                    currency: 'BYN'
                },
                {
                    id: 4,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 2000,
                    currency: 'BYN'
                },
                {
                    id: 5,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 5000,
                    currency: 'BYN'
                },
                {
                    id: 6,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000,
                    currency: 'BYN'
                },
                {
                    id: 7,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 2000,
                    currency: 'BYN'
                },
                {
                    id: 8,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000,
                    currency: 'BYN'
                }, {
                    id: 9,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 1000,
                    currency: 'BYN'
                },
                {
                    id: 10,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000,
                    currency: 'BYN'
                },
                {
                    id: 11,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 10000,
                    currency: 'BYN'
                },
                {
                    id: 12,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 14000,
                    currency: 'BYN'
                },
                {
                    id: 13,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 15000,
                    currency: 'BYN'
                },
                {
                    id: 14,
                    name: 'Credit card',
                    icon: 'credit-card',
                    balance: 11000,
                    currency: 'BYN'
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
        const {balance, name, initialDate} = params.account;

        return {
            account: {
                id: 10001,
                name,
                balance,
                initialDate,
                currency: 'BYN'
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
                initialDate,
                currency: 'BYN'
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
