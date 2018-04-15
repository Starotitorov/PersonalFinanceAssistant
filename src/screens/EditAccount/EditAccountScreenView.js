import { lifecycle, withProps, compose } from 'recompose';
import { withLoadingIndicator } from 'src/components';
import { createEditAccountViewModel } from '../../components/AccountForm/viewModel';
import EditAccountScreen from './EditAccountScreen';

const withViewModel = withProps(() => ({
  viewModel: createEditAccountViewModel()
}));

const withSelectedAccount = lifecycle({
  componentDidMount() {
    const { id } = this.props.navigation.state.params;

    this.props.fetchAccount(id);
  }
});

export default compose(
  withSelectedAccount,
  withLoadingIndicator,
  withViewModel
)(EditAccountScreen);
