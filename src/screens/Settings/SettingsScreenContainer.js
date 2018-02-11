import { connect } from 'react-redux';
import { logout, handleChangePassword } from './actions';
import { getCurrentUser } from '../LogIn/selectors'
import SettingsScreen from './SettingsScreen';

const mapStateToProps = state => {
    return {
        user: getCurrentUser(state)
    }
};

export default connect(mapStateToProps, { logout, handleChangePassword })(SettingsScreen)
