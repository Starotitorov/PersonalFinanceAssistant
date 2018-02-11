import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { withLoadingIndicator } from 'src/components'
import { getEditAccountFormInitialValues, isAccountFetching } from './selectors';
import { updateAccount, fetchAccount } from './actions';
import EditAccountScreen from './EditAccountScreen';

const withSelectedAccount = lifecycle({
    componentDidMount() {
        const { id } = this.props.navigation.state.params;

        this.props.fetchAccount(id);
    }
});

const mapStateToProps = state => {
    return {
        isLoading: isAccountFetching(state),
        initialValues: getEditAccountFormInitialValues(state)
    }
};

export default compose(
    connect(
        mapStateToProps,
        { updateAccount, fetchAccount }
    ),
    withSelectedAccount,
    withLoadingIndicator
)(EditAccountScreen);
