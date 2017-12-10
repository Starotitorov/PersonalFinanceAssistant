import { connect } from 'react-redux';
import { getTransferFormOptions } from 'src/selectors/forms';
import { addTransfer } from 'src/actions/transfers';
import AddTransferScreen from './AddTransferScreen';

const mapStateToProps = state => {
    return {
        options: getTransferFormOptions(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTransfer(transferData) {
            return dispatch(addTransfer({
                ...transferData,
                value: Number(transferData.value)
            }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransferScreen);
