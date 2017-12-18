import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { isSameCurrency } from 'src/selectors/accounts';
import { TRANSFER_FORM } from 'src/constants/forms';
import TransferForm from './TransferForm';

const mapStateToProps = state => {
    const { fromAccountId, toAccountId } = getFormValues(TRANSFER_FORM)(state) || {};

    return {
        isSameCurrency: isSameCurrency(state, fromAccountId, toAccountId)
    }
};

export default connect(mapStateToProps)(TransferForm);
