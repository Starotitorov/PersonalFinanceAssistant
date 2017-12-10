export default function getTransactionsMocks(API_URL) {
    return {
        [`POST ${API_URL}/transfers`]: ({method, url, params, urlparams, headers}) => {
            const { fromAccountId, toAccountId, value, date, note } = params.transfer;

            return {
                category: {
                    id: 10001,
                    fromAccountId,
                    toAccountId,
                    value,
                    date,
                    note
                }
            };
        }
    }
}
