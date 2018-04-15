import { lifecycle, compose, withProps } from 'recompose';
import { addNavigationHelpers } from 'react-navigation';
import {
  withLoadingIndicator,
  withNetwork
} from 'src/components';
import App from './App';

const withCurrentUser = lifecycle({
  componentDidMount() {
    this.props.getCurrentUser();
  }
});

const withNavigation = withProps(({ dispatch, navigationState }) => ({
  navigation: addNavigationHelpers({
    dispatch,
    state: navigationState
  })
}));

export default compose(
  withNetwork,
  withCurrentUser,
  withLoadingIndicator,
  withNavigation
)(App);
