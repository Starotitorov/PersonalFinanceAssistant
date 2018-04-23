import { connect } from 'react-redux';
import { updateCategory, setCategory } from './actions';
import { getEditCategoryFormInitialValues } from './selectors';
import EditCategoryScreenView from './EditCategoryScreenView';

const mapStateToProps = state => ({
  initialValues: getEditCategoryFormInitialValues(state)
});

export default connect(mapStateToProps, { updateCategory, setCategory })(EditCategoryScreenView);
