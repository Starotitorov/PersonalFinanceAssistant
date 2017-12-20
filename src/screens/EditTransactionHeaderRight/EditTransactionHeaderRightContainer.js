import { connect } from 'react-redux';
import { RemoveHeaderIcon } from 'src/components';
import { removeTransaction } from 'src/actions/transactions';

const mapDispatchToProps = dispatch => {
    return {
        onPress() {
            dispatch(removeTransaction());
        }
    }
};

export default connect(null, mapDispatchToProps)(RemoveHeaderIcon);

