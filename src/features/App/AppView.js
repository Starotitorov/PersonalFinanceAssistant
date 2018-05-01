import { compose, withProps } from 'recompose';
import { addNavigationHelpers } from 'react-navigation';
import { withNetwork } from 'src/components';
import App from './App';

const withNavigation = withProps(({ dispatch, navigationState }) => ({
  navigation: addNavigationHelpers({
    dispatch,
    state: navigationState
  })
}));

export default compose(
  withNetwork,
  withNavigation
)(App);
