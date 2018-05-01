import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import AppView from './AppView';
import { isConnected } from 'src/components/HOC/withNetwork/selectors';
import { isInitializing } from './selectors';
import { initialize } from './actions';

const mapStateToProps = state => ({
  isLoading: isInitializing(state),
  navigationState: state.navigation,
  isConnected: isConnected(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ initialize }, dispatch),
  dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(AppView);
