import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { lifecycle, compose } from 'recompose'
import App from './App';
import { getCurrentUser } from '../LogIn/actions'
import { isUserFetching } from '../LogIn/selectors';
import { isConnected } from 'src/components/HOC/withNetwork/selectors';

const withCurrentUser = lifecycle({
    componentDidMount() {
        this.props.getCurrentUser();
    }
});

const mapStateToProps = state => {
    return {
        isLoading: isUserFetching(state),
        navigationState: state.navigation,
        isConnected: isConnected(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({ getCurrentUser }, dispatch),
        dispatch
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withCurrentUser
)(App);
