import { INCOME_CATEGORY, OUTCOME_CATEGORY } from 'src/constants/categoryTypes'

const getCategoriesListByType = (state, type) => {
    const data = [];

    state.categoriesList.categories.order.forEach((id) => {
        const item = state.categories.byId[id];

        if (item.categoryTypeId === type) {
            data.push(item);
        }
    });

    return data;
};

export const getIncomeCategoriesList = state =>
    getCategoriesListByType(state, INCOME_CATEGORY);

export const getOutcomeCategoriesList = state =>
    getCategoriesListByType(state, OUTCOME_CATEGORY);

export const isCategoriesListDataFetching = state => state.categoriesList.fetching;

export const isCategoriesListDataRefreshing = state => state.categoriesList.refreshing;
