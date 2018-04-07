import { connect } from 'react-redux';
import { getEditAccountFormInitialValues, isAccountFetching } from './selectors';
import { updateAccount, fetchAccount } from './actions';
import EditAccountScreenView from './EditAccountScreenView';

const mapStateToProps = state => ({
    isLoading: isAccountFetching(state),
    initialValues: getEditAccountFormInitialValues(state)
});

export default connect(
    mapStateToProps,
    { updateAccount, fetchAccount }
)(EditAccountScreenView);
