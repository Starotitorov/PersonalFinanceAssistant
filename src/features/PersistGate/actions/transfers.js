import { createAction } from 'redux-actions';

export const createTransfer = createAction('TRANSFERS/CREATE_TRANSFER');

export const resetTransfers = createAction('TRANSFERS/RESET_TRANSFERS');
