import { compose, withHandlers } from 'recompose';
import { NavigationActions } from 'react-navigation';
import LogInScreen from './LogInScreen';

export default compose(
  withHandlers({
    handleNewUser: ({ navigation }) => () => {
      navigation.dispatch(NavigationActions.navigate({ routeName: 'SignUp' }));
    }
  })
)(LogInScreen);
