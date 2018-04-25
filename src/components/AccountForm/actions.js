import { submit } from 'redux-form';
import { ACCOUNT_FORM } from './constants';

export const submitAccountForm = () => submit(ACCOUNT_FORM);
