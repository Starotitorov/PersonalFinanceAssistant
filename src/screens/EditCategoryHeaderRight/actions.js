import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const removeCategory = id => dispatch => {
    return api.removeCategory(id)
        .then(() => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'CategoryTabs' })
                ]
            }));
        });
};
