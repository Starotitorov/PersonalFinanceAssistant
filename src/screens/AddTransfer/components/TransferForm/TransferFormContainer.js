import { connect } from 'react-redux';
import { isSameCurrency, getTransferFormValues } from './selectors';
import TransferFormView from './TransferFormView';

const mapStateToProps = state => {
    const { fromAccountId, toAccountId } = getTransferFormValues(state) || {};

    return {
        isSameCurrency: isSameCurrency(state, fromAccountId, toAccountId)
    }
};

export default connect(mapStateToProps)(TransferFormView);
