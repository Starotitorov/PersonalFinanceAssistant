import { API_URL } from '../config';

export default {
  [`POST ${API_URL}/transfers`]: ({ method, url, params, urlparams, headers }) => {
    const { fromAccountId, toAccountId, value, date, note } = params.transfer;

    return {
      transfer: {
        id: 10001,
        fromAccountId,
        toAccountId,
        value,
        date,
        note
      }
    };
  }
};
