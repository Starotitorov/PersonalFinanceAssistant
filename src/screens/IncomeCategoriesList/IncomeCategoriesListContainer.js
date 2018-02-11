import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';
import { getIncomeCategoriesList } from '../CategoriesList/selectors';

const mapStateToProps = (state) => {
    return {
        data: getIncomeCategoriesList(state)
    };
};

export default compose(
    CategoriesListContainer,
    connect(mapStateToProps)
)(CategoriesList);
