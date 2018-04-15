import { lifecycle, withProps, compose } from 'recompose';
import { createAddTransactionViewModel } from '../../components/TransactionForm/viewModel';
import AddTransactionScreen from './AddTransactionScreen';

const withViewModel = withProps(({ options }) => ({
  viewModel: createAddTransactionViewModel(options)
}));

const withAddTransactionData = lifecycle({
  componentDidMount() {
    const { navigation: { state: { params }}, setAddTransactionData } = this.props;

    setAddTransactionData(params);
  }
});

export default compose(
  withViewModel,
  withAddTransactionData
)(AddTransactionScreen);
