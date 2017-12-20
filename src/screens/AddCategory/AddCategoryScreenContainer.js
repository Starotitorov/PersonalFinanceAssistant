import { connect } from 'react-redux';
import { getCategoryFormInitialValues } from 'src/selectors/forms';
import { addCategory } from 'src/actions/categories';
import AddCategoryScreen from './AddCategoryScreen';

const mapStateToProps = () => {
    return {
        initialValues: getCategoryFormInitialValues()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddCategory(data) {
            return dispatch(addCategory(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryScreen);
