import { reduxForm } from 'redux-form';
import { withProps, compose } from 'recompose';
import { TRANSFER_FORM } from './constants';
import TransferForm from './TransferForm';
import validate from './validate';
import { createAddTransferViewModel } from './viewModel';
import { getInitialValues } from './helpers';

const withViewModel = withProps(({ options }) => ({
  viewModel: createAddTransferViewModel(options)
}));

export default compose(
  reduxForm({
    form: TRANSFER_FORM,
    initialValues: getInitialValues(),
    validate
  }),
  withViewModel
)(TransferForm);
