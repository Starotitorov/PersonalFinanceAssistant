import { lifecycle, withProps, compose } from 'recompose';
import { createEditTransactionViewModel } from '../../components/TransactionForm/viewModel';
import EditTransactionScreen from './EditTransactionScreen';

const withViewModel = withProps(() => ({
  viewModel: createEditTransactionViewModel()
}));

const withEditTransactionData = lifecycle({
  componentDidMount() {
    const { navigation: { state: { params: { transaction }}}, setTransaction } = this.props;

    setTransaction(transaction);
  }
});

export default compose(
  withEditTransactionData,
  withViewModel
)(EditTransactionScreen);
