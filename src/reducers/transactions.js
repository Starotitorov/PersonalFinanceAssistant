import moment from 'moment';
import { handleActions } from 'redux-actions';
import { changeCurrentDate, changePeriodView } from 'src/actions/transactions';
import { WEEKS } from 'src/constants/transactionPeriodTypes';

const initialState = {
    currentDate: moment(),
    periodType: WEEKS 
};

const transactions = handleActions({
    [changeCurrentDate]: (state, action) => {
        return {
            ...state,
            currentDate: action.payload.currentDate
        }
    },
    [changePeriodView]: (state, action) => {
        return {
            ...state,
            periodType: action.payload.periodType
        }
    }
}, initialState);

export default transactions;