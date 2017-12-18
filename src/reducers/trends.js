import { handleActions } from 'redux-actions';
import { setSelectedAccount } from 'src/actions/trends';

const initialState = {
    selectedAccount: null
};

const trends = handleActions({
    [setSelectedAccount]: (state, action) => {
        return {
            ...state,
            selectedAccount: action.payload.id
        };
    }
}, initialState);

export default trends;
