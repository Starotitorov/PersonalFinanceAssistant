import { find } from 'lodash'
import { getFormValues } from 'redux-form';
import { TRANSFER_FORM } from 'src/constants/forms';

export const getTransferFormValues = getFormValues(TRANSFER_FORM);

export const isSameCurrency = (state, fromAccountId, toAccountId) => {
    if (!fromAccountId || !toAccountId) {
        return true;
    }

    const { addTransfer: { accounts }} = state;

    const { currency: fromAccountCurrency } = find(accounts, { id: fromAccountId });
    const { currency: toAccountCurrency } = find(accounts, { id: toAccountId });

    return fromAccountCurrency === toAccountCurrency;
};
