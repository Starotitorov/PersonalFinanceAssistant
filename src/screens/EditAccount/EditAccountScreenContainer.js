import { connect } from 'react-redux';
import { getInitialValues } from 'src/selectors/editAccountForm';
import { updateAccount } from 'src/actions/accounts';
import EditAccountScreen from './EditAccountScreen';

const mapStateToProps = state => {
    return {
        initialValues: getInitialValues(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateAccount(accountData) {
            return dispatch(updateAccount(accountData))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountScreen);
