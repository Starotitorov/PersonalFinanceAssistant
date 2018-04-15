import * as api from 'src/api';
import { logout } from '../Settings/actions';

export const changePassword = data => dispatch => api.changePassword(data)
  .then(() => {
    dispatch(logout());
  });
