import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api'

export const changePeriodView = createAction(
    'TRANSACTIONS/CHANGE_PERIOD_VIEW',
    periodType => ({ periodType })
);

export const changeDate = isChangeForward => (dispatch, getState) => {
    const { transactions: { currentDate, periodType } } = getState();
    let periodModificator = periodType;

    const timeModificator = isChangeForward ? 1 : -1;
    const newDate = currentDate.clone().add(timeModificator, periodModificator);

    dispatch(changeCurrentDate(newDate));
};

export const changeCurrentDate = createAction(
    'TRANSACTIONS/CHANGE_CURRENT_DATE',
    currentDate => ({ currentDate })
);

export const fetchTransactions = () => dispatch => {

};

export const addTransaction = transactionData => dispatch => {
    return api.addTransaction(transactionData)
        .then(async () => {
            await dispatch(fetchTransactions());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Transactions' })
                ]
            }))
        });
};
