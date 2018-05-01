import { connect } from 'react-redux';
import AppView from './AppView';
import { isConnected } from 'src/components/HOC/withNetwork/selectors';

const mapStateToProps = state => ({
  navigationState: state.navigation,
  isConnected: isConnected(state)
});

export default connect(mapStateToProps)(AppView);
