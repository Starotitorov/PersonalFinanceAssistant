export default function getTransactionsMocks(API_URL) {
    return {
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
    }
};
