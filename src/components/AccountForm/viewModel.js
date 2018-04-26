import {
  ACCOUNT_FORM_ICON_FIELD,
  ACCOUNT_FORM_BALANCE_FIELD,
  ACCOUNT_FORM_INITIAL_DATE_FIELD,
  ACCOUNT_FORM_NAME_FIELD,
  ACCOUNT_FORM_CURRENCY_FIELD
} from './constants';
import currencies from 'src/constants/currency';

export const createAddAccountViewModel = () => ({
  icon: {
    name: ACCOUNT_FORM_ICON_FIELD
  },
  name: {
    name: ACCOUNT_FORM_NAME_FIELD,
    label: 'Account name',
    placeholder: 'Enter account name...'
  },
  balance: {
    name: ACCOUNT_FORM_BALANCE_FIELD,
    label: 'Initial balance',
    placeholder: 'Enter initial balance...',
    keyboardType: 'numeric'
  },
  initialDate: {
    name: ACCOUNT_FORM_INITIAL_DATE_FIELD,
    label: 'Initial date',
    placeholder: 'Enter initial date...'
  },
  currency: {
    name: ACCOUNT_FORM_CURRENCY_FIELD,
    label: 'Currency',
    placeholder: 'Choose currency...',
    options: currencies
  }
});

export const createEditAccountViewModel = () => ({
  icon: {
    name: ACCOUNT_FORM_ICON_FIELD
  },
  name: {
    name: ACCOUNT_FORM_NAME_FIELD,
    label: 'Account name',
    placeholder: 'Enter account name...'
  },
  initialDate: {
    name: ACCOUNT_FORM_INITIAL_DATE_FIELD,
    label: 'Initial date',
    placeholder: 'Enter initial date...'
  }
});
