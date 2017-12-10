import { NavigationActions } from 'react-navigation';
import { fetchAccounts } from 'src/actions/accounts';
import * as api from 'src/api';

export const addTransfer = transferData => dispatch => {
    return api.addTransfer(transferData)
        .then(async () => {
            await dispatch(fetchAccounts());

            dispatch(NavigationActions.back());
        });
};
