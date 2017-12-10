import moment from 'moment';
import { API_URL } from '../config';

export default {
    [`GET ${API_URL}/transactions`]: ({method, url, params, urlparams, headers}) => {
        return [
            {
                id: 10001,
                accountId: 1,
                categoryId: 1,
                value: 200,
                date: Date.now(),
                note: 'Transaction'
            },
            {
                id: 10002,
                accountId: 1,
                categoryId: 1,
                value: 200,
                date: moment(Date.now()).subtract(1, 'year'),
                note: 'Transaction'
            },
            {
                id: 10003,
                accountId: 1,
                categoryId: 1,
                value: 200,
                date: moment(Date.now()).add(1, 'month'),
                note: 'Transaction'
            },
            {
                id: 10004,
                accountId: 2,
                categoryId: 2,
                value: 200,
                date: Date.now(),
                note: 'Transaction'
            }
        ];
    },
    [`POST ${API_URL}/transactions`]: ({method, url, params, urlparams, headers}) => {
        const { accountId, categoryId, value, date, note } = params.transaction;

        return {
            transaction: {
                id: 10001,
                accountId,
                categoryId,
                value,
                date,
                note
            }
        };
    }
};
