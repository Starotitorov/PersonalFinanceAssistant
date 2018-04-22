import {
  TRANSACTION_FORM_ACCOUNT_ID_FIELD,
  TRANSACTION_FORM_CATEGORY_ID_FIELD,
  TRANSACTION_FORM_DATE_FIELD,
  TRANSACTION_FORM_NOTE_FIELD,
  TRANSACTION_FORM_VALUE_FIELD
} from './constants';

export const createAddTransactionViewModel = ({ accounts = [], categories = []} = {}) => ({
  value: {
    name: TRANSACTION_FORM_VALUE_FIELD,
    label: 'Sum',
    placeholder: 'Enter sum...',
    keyboardType: 'numeric'
  },
  accountId: {
    name: TRANSACTION_FORM_ACCOUNT_ID_FIELD,
    label: 'Account',
    options: accounts
  },
  categoryId: {
    name: TRANSACTION_FORM_CATEGORY_ID_FIELD,
    label: 'Category',
    options: categories
  },
  date: {
    name: TRANSACTION_FORM_DATE_FIELD,
    label: 'Date'
  },
  note: {
    name: TRANSACTION_FORM_NOTE_FIELD,
    label: 'Note',
    placeholder: 'Enter note...'
  }
});

export const createEditTransactionViewModel = () => ({
  value: {
    name: TRANSACTION_FORM_VALUE_FIELD,
    label: 'Sum',
    placeholder: 'Enter sum...',
    keyboardType: 'numeric'
  },
  date: {
    name: TRANSACTION_FORM_DATE_FIELD,
    label: 'Date'
  },
  note: {
    name: TRANSACTION_FORM_NOTE_FIELD,
    label: 'Note',
    placeholder: 'Enter note...'
  }
});
