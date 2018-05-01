import moment from 'moment';
import { handleActions } from 'redux-actions';
import {
  changeCurrentDate,
  changePeriodView,
  setSelectedAccount,
  setViewType
} from './actions';
import { periodTypes, LIST } from './constants';

const initialState = {
  currentDate: moment(),
  periodType: periodTypes.WEEK.value,
  selectedAccount: null,
  viewType: LIST
};

const transactionsList = handleActions({
  [changeCurrentDate]: (state, action) => ({
    ...state,
    currentDate: action.payload.currentDate
  }),
  [changePeriodView]: (state, action) => ({
    ...state,
    periodType: action.payload.periodType
  }),
  [setSelectedAccount]: (state, action) => ({
    ...state,
    selectedAccount: action.payload.accountId
  }),
  [setViewType]: (state, { payload: { viewType }}) => ({
    ...state,
    viewType
  })
}, initialState);

export default transactionsList;
