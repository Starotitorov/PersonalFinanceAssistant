import { connect } from 'react-redux';
import { getEditAccountFormInitialValues } from './selectors';
import { updateAccount, setAccount } from './actions';
import EditAccountScreenView from './EditAccountScreenView';

const mapStateToProps = state => ({
  initialValues: getEditAccountFormInitialValues(state)
});

export default connect(
  mapStateToProps,
  { updateAccount, setAccount }
)(EditAccountScreenView);
