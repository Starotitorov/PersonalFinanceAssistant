import { createAction } from 'redux-actions';

export const fetchApplicationDataRequest = createAction('APPLICATION/FETCH_APPLICATION_DATA_REQUEST');
export const fetchApplicationDataSuccess = createAction('APPLICATION/FETCH_APPLICATION_DATA_SUCCESS');
export const fetchApplicationDataFailure = createAction('APPLICATION/FETCH_APPLICATION_DATA_FAILURE');
