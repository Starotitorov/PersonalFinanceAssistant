import { NavigationActions } from 'react-navigation'
import * as api from 'src/api';

export const addCategory = categoryData => dispatch => {
    return api.addCategory(categoryData)
        .then(() => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'CategoryTabs' })
                ]
            }));
        });
};
