import { lifecycle, withProps, compose } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import { createEditTransactionViewModel } from '../../components/TransactionForm/viewModel';
import EditTransactionScreen from './EditTransactionScreen'

const withViewModel = withProps(() => ({
    viewModel: createEditTransactionViewModel()
}));

const withEditTransactionData = lifecycle({
    componentDidMount() {
        const { navigation: { state: { params: { id }}}, fetchTransaction } = this.props;

        fetchTransaction(id);
    }
});

export default compose(
    withEditTransactionData,
    withLoadingIndicator,
    withViewModel
)(EditTransactionScreen);
