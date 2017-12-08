import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';
import { fetchCategories } from 'src/actions/categories';
import { getIcomeCategoriesList, isCategoriesFetching } from 'src/selectors/categories';

const mapStateToProps = (state) => {
    return {
        data: getIcomeCategoriesList(state),
        fetching: isCategoriesFetching(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRefresh() {
            dispatch(fetchCategories());
        }
    };
};

export default compose(
    CategoriesListContainer,
    connect(mapStateToProps, mapDispatchToProps)
)(CategoriesList);
