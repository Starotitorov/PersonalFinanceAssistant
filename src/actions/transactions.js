import moment from 'moment';
import { createAction } from 'redux-actions';
import * as periodTypes from 'src/constants/transactionPeriodTypes';

export const changePeriodView = createAction(
    'TRANSACTIONS/CHANGE_PERIOD_VIEW',
    periodType => ({ periodType })
);

export const changeDate = isChangeForward => (dispatch, getState) => {
    const { transactions: { currentDate, periodType } } = getState();
    let periodModificator;

    switch(periodType) {
        case periodTypes.DAYS:
            periodModificator = 'days';
            break;
        case periodTypes.WEEKS:
            periodModificator = 'weeks';
            break;
        case periodTypes.MONTHS:
            periodModificator = 'months';
            break;
        case periodTypes.YEARS:
            periodModificator = 'years';
            break;
        default:
            return;
    }

    const timeModificator = isChangeForward ? 1 : -1;
    const newDate = currentDate.clone().add(timeModificator, periodModificator);

    dispatch(changeCurrentDate(newDate));
};

export const changeCurrentDate = createAction(
    'TRANSACTIONS/CHANGE_CURRENT_DATE',
    currentDate => ({ currentDate })
);