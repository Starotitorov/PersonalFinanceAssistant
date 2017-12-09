import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';
import { getIcomeCategoriesList } from 'src/selectors/categories';

const mapStateToProps = (state) => {
    return {
        data: getIcomeCategoriesList(state)
    };
};

export default compose(
    CategoriesListContainer,
    connect(mapStateToProps)
)(CategoriesList);
