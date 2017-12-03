import { connect } from 'react-redux';
import { addAccount } from 'src/actions/accounts';
import AddAccountScreen from './AddAccountScreen';

const mapDispatchToProps = dispatch => {
    return {
        onAddAccount(accountData) {
            return dispatch(addAccount(accountData));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddAccountScreen);
