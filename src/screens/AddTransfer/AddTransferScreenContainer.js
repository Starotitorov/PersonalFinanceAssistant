import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
import { withLoadingIndicator } from 'src/components'
import { addTransfer, fetchAddTransferData } from './actions';
import { getAddTransferFormOptions, isAddTransferDataFetching } from './selectors'
import AddTransferScreen from './AddTransferScreen';

const withFetchAddTransferData = lifecycle({
    componentDidMount() {
        this.props.fetchAddTransferData();
    }
});

const mapStateToProps = state => {
    return {
        isLoading: isAddTransferDataFetching(state),
        options: getAddTransferFormOptions(state)
    };
};

export default compose(
    connect(mapStateToProps, { addTransfer, fetchAddTransferData }),
    withFetchAddTransferData,
    withLoadingIndicator
)(AddTransferScreen);
