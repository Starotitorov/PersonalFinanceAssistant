import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
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
        },

        onChangePassword() {
            dispatch(NavigationActions.navigate({ routeName: 'ChangePassword' }))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
