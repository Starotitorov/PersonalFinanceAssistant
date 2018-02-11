import * as api from 'src/api';
import { logout } from '../Settings/actions'

export const changePassword = data => dispatch => {
    return api.changePassword(data)
        .then(() => {
            dispatch(logout());
        });
};
