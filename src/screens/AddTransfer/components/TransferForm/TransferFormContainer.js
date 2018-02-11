import { connect } from 'react-redux';
import { isSameCurrency, getTransferFormValues } from './selectors';
import TransferForm from './TransferForm';

const mapStateToProps = state => {
    const { fromAccountId, toAccountId } = getTransferFormValues(state) || {};

    return {
        isSameCurrency: isSameCurrency(state, fromAccountId, toAccountId)
    }
};

export default connect(mapStateToProps)(TransferForm);
