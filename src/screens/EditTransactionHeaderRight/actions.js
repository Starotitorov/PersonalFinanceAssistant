import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const removeTransaction = id => dispatch => {
    return api.removeTransaction(id)
        .then(() => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Transactions' })
                ]
            }))
        });
};
