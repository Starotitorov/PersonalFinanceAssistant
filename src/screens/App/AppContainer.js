import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppView from './AppView';
import { getCurrentUser } from '../LogIn/actions'
import { isUserFetching } from '../LogIn/selectors';
import { isConnected } from 'src/components/HOC/withNetwork/selectors';

const mapStateToProps = state => ({
    isLoading: isUserFetching(state),
    navigationState: state.navigation,
    isConnected: isConnected(state)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ getCurrentUser }, dispatch),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
