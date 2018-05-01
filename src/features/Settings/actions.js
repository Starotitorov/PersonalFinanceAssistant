import { reset } from '../../services/database';
import { alerts } from 'src/utils';

export const resetData = () => async () => {
  await reset();

  alerts.showResetDataAlert();
};
