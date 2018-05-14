import { lifecycle, compose, withProps, withHandlers } from 'recompose';
import { addNavigationHelpers } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
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

const withHandleSplashScreen = lifecycle({
  componentDidMount() {
    SplashScreen.hide();
  }
})

const withNavigation = withProps(({ dispatch, navigationState }) => ({
  navigation: addNavigationHelpers({
    dispatch,
    state: navigationState
  })
}));

const withToast = withHandlers(() => {
  let toast;

  return {
    setToastRef: () => el => {
      toast = el;
    },
    openToast: () => () => {
      toast.show('You are not connected to the Internet.');
    },
    closeToast: () => () => {
      toast && toast.close();
    }
  }
});

const withConnectionInfoMessage = lifecycle({
  componentWillReceiveProps(nextProps) {
    nextProps.isConnected ? this.props.closeToast() : this.props.openToast();
  }
});

export default compose(
  withHandleSplashScreen,
  withNetwork,
  withCurrentUser,
  withLoadingIndicator,
  withNavigation,
  withToast,
  withConnectionInfoMessage
)(App);
