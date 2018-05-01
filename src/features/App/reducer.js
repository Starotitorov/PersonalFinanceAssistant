import { handleActions } from 'redux-actions';
import { initializeStart, initializeFailure, initializeSuccess } from './actions';

const initialState = {
  initializing: false
};

const app = handleActions({
  [initializeStart]: state => ({ ...state, initializing: true }),
  [initializeSuccess]: state => ({ ...state, initializing: false }),
  [initializeFailure]: state => ({ ...state, initializing: false }),
}, initialState);

export default app;
