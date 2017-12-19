import { connect } from 'react-redux';
import { RemoveHeaderIcon } from 'src/components';

const mapDispatchToProps = dispatch => {
    return {
        onPress() { }
    }
};

export default connect(null, mapDispatchToProps)(RemoveHeaderIcon);

