import { lifecycle, withProps, compose } from 'recompose';
import { createEditAccountViewModel } from '../../components/AccountForm/viewModel';
import EditAccountScreen from './EditAccountScreen';

const withViewModel = withProps(() => ({
  viewModel: createEditAccountViewModel()
}));

const withSelectedAccount = lifecycle({
  componentDidMount() {
    const { account } = this.props.navigation.state.params;

    this.props.setAccount(account);
  }
});

export default compose(
  withSelectedAccount,
  withViewModel
)(EditAccountScreen);
