import { lifecycle } from 'recompose';

export default screen => lifecycle({
  componentDidMount() {
    this.props.onFocus();
  },

  componentWillReceiveProps({ navigation: { state: { routeName: nextRouteName }}}) {
    const { navigation: { state: { routeName }}, onFocus } = this.props;

    if (routeName !== screen && nextRouteName === screen) {
      onFocus();
    }
  }
});
