import { NavigationActions } from 'react-navigation'
import * as api from 'src/api';

export const removeAccount = id => dispatch => {
    return api.removeAccount(id)
        .then(() => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'AccountsList' })
                ]
            }));
        });
};
