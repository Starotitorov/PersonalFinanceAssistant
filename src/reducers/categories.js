import { handleActions, combineActions } from 'redux-actions';
import {
    fetchCategoriesStart,
    setCategories,
    selectCategory,
    resetCategories,
    fetchCategoriesFailure,
    refreshCategoriesStart,
    refreshCategoriesFailure
} from 'src/actions/categories';

const initialState = {
    byId: {},
    order: [],
    selected: null,
    fetching: false
};

const categories = handleActions({
    [fetchCategoriesStart]: (state) => {
        return {
            ...state,
            fetching: true
        }
    },
    [refreshCategoriesStart]: state => {
        return {
            ...state,
            refreshing: true
        }
    },
    [combineActions(fetchCategoriesFailure, refreshCategoriesFailure)](state) {
        return {
            ...state,
            refreshing: false,
            fetching: false
        }
    },
    [setCategories]: (state, action) => {
        const { categories } = action.payload;
        let newById = {};
        let newOrder = [];

        categories.forEach(category => {
            newById[category.id] = category;
            newOrder.push(category.id);
        });

        return {
            byId: newById,
            order: newOrder,
            selected: null,
            fetching: false,
            refreshing: false
        };
    },
    [selectCategory]: (state, action) => {
        return {
            ...state,
            selected: action.payload.id
        }
    },
    [resetCategories]: () => initialState
}, initialState);

export default categories;
