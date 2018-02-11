import { handleActions } from 'redux-actions';
import {
    setCategory,
    fetchCategoryStart,
    fetchCategoryFailure
} from './actions'

const initialState = {
    category: {},
    fetching: false
};

const editCategory = handleActions({
    [fetchCategoryStart]: state => {
        return {
            ...state,
            fetching: true
        };
    },
    [fetchCategoryFailure]: state => {
        return {
            ...state,
            fetching: false
        }
    },
    [setCategory]: (state, { payload: { category }}) => {
        return {
            category,
            fetching: false
        }
    }
}, initialState);

export default editCategory;
