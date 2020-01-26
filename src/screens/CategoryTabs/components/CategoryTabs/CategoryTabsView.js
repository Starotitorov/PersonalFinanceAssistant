import { compose, lifecycle } from 'recompose';
import { View } from 'react-native';

export default compose(
  lifecycle({
    componentDidMount() {
      this.props.resetCategoriesListData();

      this.props.fetchCategoriesListData();
    }
  })
)(View);
