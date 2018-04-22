import * as api from 'src/api';
import { alerts } from 'src/utils';
import { logout } from '../Settings/actions';

export const changePassword = data => dispatch => api.changePassword(data)
  .then(() => {
    dispatch(logout());
  })
  .catch(() => alerts.showCanNotPerformOperationAlert());
