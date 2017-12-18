import { createAction } from 'redux-actions';

export const setSelectedAccount = createAction(
    'TRANSACTIONS/SET_SELECTED_ACCOUNT',
    id => ({ id })
);
