import { SubmissionError } from 'redux-form';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { setAuthorizationData } from '../LogIn/actions';

export const signUp = (userData) => dispatch => api.signUp(userData)
  .then(async ({ user, token }) => {
    await dispatch(setAuthorizationData(user, token));

    dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' })
      ]
    }));
  })
  .catch(async response => {
    let errors = {};

    try {
      const json = await response.json();
      errors = json.errors;
    } catch(e) {}

    throw new SubmissionError(errors);
  });

export const handleHaveAccount = () => dispatch => {
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'LogIn' })
    ]
  }));
};
