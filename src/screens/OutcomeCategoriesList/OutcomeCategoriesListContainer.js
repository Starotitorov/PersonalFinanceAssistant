import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';
import { getOutcomeCategoriesList, isCategoriesFetching } from 'src/selectors/categories';
import { fetchCategories } from 'src/actions/categories';

const mapStateToProps = (state) => {
    return {
        data: getOutcomeCategoriesList(state),
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
