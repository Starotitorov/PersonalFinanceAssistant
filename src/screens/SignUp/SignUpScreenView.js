import { compose, withHandlers } from 'recompose';
import { NavigationActions, StackActions } from 'react-navigation';
import SignUpScreen from './SignUpScreen';

export default compose(
  withHandlers({
    handleHaveAccount: ({ navigation }) => () => {
      navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'LogIn' })
        ]
      }));
    }
  })
)(SignUpScreen);
