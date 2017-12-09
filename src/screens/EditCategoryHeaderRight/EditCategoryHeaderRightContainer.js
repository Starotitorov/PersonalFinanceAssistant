import { connect } from 'react-redux';
import { removeCategory } from 'src/actions/categories';
import { RemoveHeaderIcon } from 'src/components';

const mapDispatchToProps = dispatch => {
    return {
        onPress() {
            dispatch(removeCategory());
        }
    }
};

export default connect(null, mapDispatchToProps)(RemoveHeaderIcon);
