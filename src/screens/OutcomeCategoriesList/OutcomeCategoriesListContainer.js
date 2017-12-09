import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';
import { getOutcomeCategoriesList } from 'src/selectors/categories';

const mapStateToProps = (state) => {
    return {
        data: getOutcomeCategoriesList(state)
    };
};

export default compose(
    CategoriesListContainer,
    connect(mapStateToProps)
)(CategoriesList);
