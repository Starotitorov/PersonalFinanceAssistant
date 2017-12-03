import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';

const mapStateToProps = (state) => {
    const data = [];

    state.categories.order.forEach((id) => {
        const item = state.categories.byId[id];

        if (item.categoryType === 0) {
            data.push(item);
        }
    });

    return {
        data
    };
};

export default compose(
    CategoriesListContainer,
    connect(mapStateToProps)
)(CategoriesList);