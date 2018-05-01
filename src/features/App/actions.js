import { createAction } from 'redux-actions';
import * as db from 'src/services/database';

export const initializeStart = createAction('APP/INITIALIZE_START');
export const initializeSuccess = createAction('APP/INITIALIZE_SUCCESS');
export const initializeFailure = createAction('APP/INITIALIZE_FAILURE');

export const initialize = () => async dispatch => {
  dispatch(initializeStart());

  try {
    await db.initialize();

    dispatch(initializeSuccess());
  } catch(e) {
    dispatch(initializeFailure());
  }
}
