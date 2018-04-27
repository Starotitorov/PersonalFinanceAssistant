import { Alert } from 'react-native';
import RNExitApp from 'react-native-exit-app';

export const showFacebookLoginErrorAlert = (error) => {
  Alert.alert(
    'Facebook login',
    `Facebook login has error: ${error}`,
    [
      { text: 'OK' }
    ]
  );
};

export const showFacebookLoginCancelledAlert = () => {
  Alert.alert(
    'Facebook login',
    'Facebook login is cancelled',
    [
      { text: 'OK' }
    ]
  );
};

export const showFatalErrorAlert = () => {
  Alert.alert(
    'Unexpected error occurred',
    'Please close the app and start again!',
    [
      {
        text: 'Close',
        onPress: RNExitApp.exitApp
      }
    ],
    { cancelable: false }
  );
};

export const showNetworkErrorAlert = () => {
  Alert.alert(
    'Network error',
    'You are not connected to the internet, try again later.',
    [
      {
        text: 'OK'
      }
    ]
  );
};

export const showCanNotPerformOperationAlert = () => {
  Alert.alert(
    'Operation error',
    'Cannot perform operation. Try again later.',
    [
      {
        text: 'OK'
      }
    ]
  );
};

export const showTrendsInstructionsAlert = () => {
  Alert.alert(
    null,
    'The result is shown in BYN.' +
    ' Transactions values were converted to BYN using exchange rates received from free.currencyconverterapi.com.',
    [
      {
        text: 'OK'
      }
    ]
  );
};
