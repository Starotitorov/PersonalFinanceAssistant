import { connect } from 'react-redux';
import { getEditAccountFormInitialValues } from 'src/selectors/forms';
import { updateAccount } from 'src/actions/accounts';
import EditAccountScreen from './EditAccountScreen';

const mapStateToProps = state => {
    return {
        initialValues: getEditAccountFormInitialValues(state)
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
