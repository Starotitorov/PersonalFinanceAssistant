import {
    fetchApplicationDataRequest,
    fetchApplicationDataSuccess,
    fetchApplicationDataFailure,
} from 'src/actions/application';
import { fetchAccounts } from 'src/actions/accounts';
import { fetchCategories } from 'src/actions/categories';
import { fetchTransactions } from 'src/actions/transactions';

export const fetchApplicationData = ({ dispatch, getState }) => {
    return next => (action) => {
        next(action);

        const { authorization: { user, token } } = getState();

        switch (action.type) {
            case fetchApplicationDataRequest.toString():
                if (!user || !token) {
                    return dispatch(fetchApplicationDataSuccess());
                }

                Promise.all([
                    dispatch(fetchAccounts()),
                    dispatch(fetchCategories()),
                    dispatch(fetchTransactions())
                ])
                    .then(() => dispatch(fetchApplicationDataSuccess()))
                    .catch(() => dispatch(fetchApplicationDataFailure()));

                break;
            default:
                break;
        }
    };
};
