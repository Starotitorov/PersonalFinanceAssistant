import { createAction } from 'redux-actions';

export const setSelectedAccount = createAction(
    'TRENDS/SET_SELECTED_ACCOUNT',
    id => ({ id })
);
