import { connect } from 'react-redux';
import { getAddCategoryFormInitialValues } from './selectors';
import { addCategory } from './actions';
import AddCategoryScreenView from './AddCategoryScreenView';

const mapStateToProps = () => ({
  initialValues: getAddCategoryFormInitialValues()
});

export default connect(mapStateToProps, { addCategory })(AddCategoryScreenView);
