import { handleActions, combineActions } from 'redux-actions';
import {
    fetchApplicationDataRequest,
    fetchApplicationDataSuccess,
    fetchApplicationDataFailure
} from 'src/actions/application';

const initialState = {
    fetching: false
};

const application = handleActions({
    [fetchApplicationDataRequest]: state => {
        return {
            ...state,
            fetching: true
        };
    },
    [combineActions(fetchApplicationDataSuccess, fetchApplicationDataFailure)](state) {
        return {
            ...state,
            fetching: false
        };
    }
}, initialState);

export default application;
