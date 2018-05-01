import { compose } from 'redux';
import { connect } from 'react-redux';
import CategoriesList, { CategoriesListContainer } from '../CategoriesList';
import { getOutcomeCategoriesList } from '../CategoriesList/selectors';

const mapStateToProps = (state) => ({
  data: getOutcomeCategoriesList(state)
});

export default compose(
  CategoriesListContainer,
  connect(mapStateToProps)
)(CategoriesList);
