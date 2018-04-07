import {
    TRANSFER_FORM_DATE_FIELD,
    TRANSFER_FORM_EXCHANGE_RATE_FIELD,
    TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD,
    TRANSFER_FORM_TO_ACCOUNT_ID_FIELD,
    TRANSFER_FORM_NOTE_FIELD,
    TRANSFER_FORM_VALUE_FIELD
} from './constants';

export const createAddTransferViewModel = ({ accounts = [] } = {}) => ({
    value: {
        name: TRANSFER_FORM_VALUE_FIELD,
        label: 'Sum',
        placeholder: 'Enter sum to transfer...'
    },
    fromAccountId: {
        name: TRANSFER_FORM_FROM_ACCOUNT_ID_FIELD,
        label: 'From account',
        options: accounts
    },
    toAccountId: {
        name: TRANSFER_FORM_TO_ACCOUNT_ID_FIELD,
        label: 'To account',
        options: accounts
    },
    exchangeRate: {
        name: TRANSFER_FORM_EXCHANGE_RATE_FIELD,
        label: 'Exchange rate',
        placeholder: 'Enter exchange rate'
    },
    date: {
        name: TRANSFER_FORM_DATE_FIELD,
        label: 'Date'
    },
    note: {
        name: TRANSFER_FORM_NOTE_FIELD,
        label: 'Notes',
        placeholder: 'Enter notes...'
    }
});
