import { withProps } from 'recompose';
import AddAccountScreen from './AddAccountScreen';
import { createAddAccountViewModel } from '../../components/AccountForm/viewModel';

const withViewModel = withProps(() => ({
    viewModel: createAddAccountViewModel()
}));

export default withViewModel(AddAccountScreen);
