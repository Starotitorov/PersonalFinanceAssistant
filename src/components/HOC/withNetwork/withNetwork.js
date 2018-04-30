import { withHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { NetInfo } from 'react-native';
import { setConnectionInfo } from './actions';

const withHandleConnectionChange = withHandlers({
  handleConnectionChange: ({ setConnectionInfo }) => connectionInfo => setConnectionInfo(connectionInfo)
});

const withLifecycle = lifecycle({
  componentDidMount() {
    NetInfo.getConnectionInfo()
      .then(this.props.handleConnectionChange);

    NetInfo.addEventListener(
      'connectionChange',
      this.props.handleConnectionChange
    );
  },
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.props.handleConnectionChange
    );
  }
});

export default compose(
  connect(null, { setConnectionInfo }),
  withHandleConnectionChange,
  withLifecycle
);
