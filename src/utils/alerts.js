import { Alert } from 'react-native';
import RNExitApp from 'react-native-exit-app';

export const showFatalErrorAlert = () => {
  Alert.alert(
    'Unexpected error occurred',
    'Please close the application and start again!',
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
    'The error occurred! Try again later.',
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

export const showResetDataAlert = () => {
  Alert.alert(
    null,
    'All application data was reseted.',
    [
      {
        text: 'OK'
      }
    ]
  );
};
