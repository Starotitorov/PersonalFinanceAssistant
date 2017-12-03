import { handleActions } from 'redux-actions';
import { fetchCategoriesStart, setCategories } from 'src/actions/categories';

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
            fetching: false
        };
    },
}, initialState);

export default categories;