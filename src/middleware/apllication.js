import {
    fetchApplicationDataRequest,
    fetchApplicationDataSuccess,
    fetchApplicationDataFailure,
} from 'src/actions/application';
import { fetchAccounts } from 'src/actions/accounts';
import { fetchCategories } from 'src/actions/categories';

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
                    dispatch(fetchCategories())
                ])
                    .then(() => dispatch(fetchApplicationDataSuccess()))
                    .catch(() => dispatch(fetchApplicationDataFailure()));

                break;
            default:
                break;
        }
    };
};
