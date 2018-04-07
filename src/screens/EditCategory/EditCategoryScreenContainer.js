import { connect } from 'react-redux';
import { updateCategory, fetchCategory } from './actions';
import { getEditCategoryFormInitialValues, isCategoryFetching } from './selectors';
import EditCategoryScreenView from './EditCategoryScreenView';

const mapStateToProps = state => ({
    isLoading: isCategoryFetching(state),
    initialValues: getEditCategoryFormInitialValues(state)
});

export default connect(mapStateToProps, { updateCategory, fetchCategory })(EditCategoryScreenView);
