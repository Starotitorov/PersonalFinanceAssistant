import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
    return {
        navigationState: state.navigation
    };
};

export default connect(mapStateToProps)(App);
