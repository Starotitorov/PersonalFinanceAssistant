import { compose, lifecycle } from 'recompose';
import AuthLoadingScreen from './AuthLoadingScreen';

const withCurrentUser = lifecycle({
  componentDidMount() {
    this.props.getCurrentUser({ navigation: this.props.navigation });
  }
});

export default compose(
  withCurrentUser
)(AuthLoadingScreen);
