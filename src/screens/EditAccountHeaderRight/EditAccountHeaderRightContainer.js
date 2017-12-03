import { connect } from 'react-redux';
import { removeAccount } from 'src/actions/accounts';
import { RemoveHeaderIcon } from 'src/components';

const mapDispatchToProps = dispatch => {
    return {
        onRemove() {
            dispatch(removeAccount());
        }
    }
};

export default connect(null, mapDispatchToProps)(RemoveHeaderIcon);

