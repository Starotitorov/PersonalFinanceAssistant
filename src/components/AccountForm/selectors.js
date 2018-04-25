import { isInvalid } from 'redux-form';
import { ACCOUNT_FORM } from './constants';

export const isAccountFormInvalid = isInvalid(ACCOUNT_FORM);
