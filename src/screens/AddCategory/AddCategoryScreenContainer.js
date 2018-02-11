import { connect } from 'react-redux';
import { getAddCategoryFormInitialValues } from './selectors';
import { addCategory } from './actions';
import AddCategoryScreen from './AddCategoryScreen';

const mapStateToProps = () => {
    return {
        initialValues: getAddCategoryFormInitialValues()
    };
};

export default connect(mapStateToProps, { addCategory })(AddCategoryScreen);
