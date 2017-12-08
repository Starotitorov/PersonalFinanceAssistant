import { connect } from 'react-redux';
import { logout } from 'src/actions/authorization';
import { getCurrentUser } from 'src/selectors/authorization'
import SettingsScreen from './SettingsScreen';

const mapStateToProps = state => {
    return {
        user: getCurrentUser(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout() {
            dispatch(logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
