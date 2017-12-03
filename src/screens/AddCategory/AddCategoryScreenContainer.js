import { connect } from 'react-redux';
import { getCategoryFormInitialValues } from 'src/selectors/forms';
import AddCategoryScreen from './AddCategoryScreen';

const mapStateToProps = () => {
    return {
        initialValues: getCategoryFormInitialValues()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCategory() {}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryScreen);
