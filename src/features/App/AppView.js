import { compose, withProps, lifecycle, withHandlers } from 'recompose';
import { addNavigationHelpers } from 'react-navigation';
import { withNetwork, withLoadingIndicator } from 'src/components';
import App from './App';

const withNavigation = withProps(({ dispatch, navigationState }) => ({
  navigation: addNavigationHelpers({
    dispatch,
    state: navigationState
  })
}));

const withDatabaseInitialize = lifecycle({
  componentDidMount() {
    this.props.initialize();
  }
});

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
  withDatabaseInitialize,
  withLoadingIndicator,
  withNetwork,
  withNavigation,
  withToast,
  withConnectionInfoMessage
)(App);
