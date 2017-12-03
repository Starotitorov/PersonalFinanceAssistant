import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';
import { fetchCategories } from 'src/actions/categories';

const mapStateToProps = (state) => {
    const data = [];

    state.categories.order.forEach((id) => {
        const item = state.categories.byId[id];

        if (item.categoryType === 0) {
            data.push(item);
        }
    });

    return {
        data,
        fetching: state.categories.fetching
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
