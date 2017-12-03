import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const mapDispatchToProps = dispatch => {
    return {
        onSelectCategory(item) {
        }
    };
};

export default connect(null, mapDispatchToProps);