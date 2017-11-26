import { connect } from 'react-redux';
import App from './App';
import { isUserFetching } from 'src/selectors/authorization';

const mapStateToProps = state => {
    return {
        isLoading: isUserFetching(state),
        navigationState: state.navigation
    };
};

export default connect(mapStateToProps)(App);
