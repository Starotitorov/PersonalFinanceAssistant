import { NavigationActions } from 'react-navigation'

export const handleAddTransfer = () => dispatch => {
    dispatch(NavigationActions.navigate({ routeName: 'AddTransfer' }));
};
