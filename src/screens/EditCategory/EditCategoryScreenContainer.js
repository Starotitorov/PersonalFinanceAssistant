import { connect } from 'react-redux';
import { updateCategory } from 'src/actions/categories';
import { getSelectedCategory } from 'src/selectors/categories';
import { getCategoryFormInitialValues } from 'src/selectors/forms';
import EditCategoryScreen from './EditCategoryScreen';

const mapStateToProps = (state) => {
    const category = getSelectedCategory(state);

    return {
        initialValues: getCategoryFormInitialValues(category)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateCategory(data) {
            return dispatch(updateCategory(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryScreen);
