import { handleActions } from 'redux-actions';
import { setCategory } from './actions';

const initialState = {
  category: {}
};

const editCategory = handleActions({
  [setCategory]: (state, { payload: { category }}) => ({
    category
  })
}, initialState);

export default editCategory;
