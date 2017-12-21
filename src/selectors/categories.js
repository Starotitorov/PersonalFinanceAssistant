import { INCOME_CATEGORY, OUTCOME_CATEGORY } from 'src/constants/categoryTypes'

const getCategoriesListByType = (state, type) => {
    const data = [];

    state.categories.order.forEach((id) => {
        const item = state.categories.byId[id];

        if (item.categoryTypeId === type) {
            data.push(item);
        }
    });

    return data;
};

export const getIcomeCategoriesList = state =>
    getCategoriesListByType(state, INCOME_CATEGORY);

export const getOutcomeCategoriesList = state =>
    getCategoriesListByType(state, OUTCOME_CATEGORY);

export const isCategoriesFetching = state => state.categories.fetching;

export const isCategoreisRefreshing = state => state.categories.refreshing;

export const getSelectedCategory = state => {
    const id = state.categories.selected;

    return state.categories.byId[id];
};

export const getAllCategories = ({ categories: { byId, order }}) =>
    order.map(id => byId[id]);

export const getSelectInputOptionsFromAllCategories = state => {
    const categories = getAllCategories(state);

    const categoryOptions = [{
        label: 'Select category...',
        value: null
    }];

    return categoryOptions.concat(
        categories.map(({name, id}) => ({
            value: id,
            label: name
        }))
    );
};
