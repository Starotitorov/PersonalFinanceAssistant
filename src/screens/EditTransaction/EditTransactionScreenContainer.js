import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withLoadingIndicator } from 'src/components'
import EditTransactionScreen from './EditTransactionScreen';
import { updateTransaction, fetchTransaction } from './actions'
import { getEditTransactionFormInitialValues, isTransactionFetching } from './selectors';

const withEditTransactionData = lifecycle({
    componentDidMount() {
        const { navigation: { state: { params: { id }}}, fetchTransaction } = this.props;

        fetchTransaction(id);
    }
});

const mapStateToProps = state => {
    return {
        isLoading: isTransactionFetching(state),
        initialValues: getEditTransactionFormInitialValues(state)
    }
};

export default compose(
    connect(mapStateToProps, { updateTransaction, fetchTransaction }),
    withEditTransactionData,
    withLoadingIndicator
)(EditTransactionScreen);
