import { lifecycle } from 'recompose'

export default screen => lifecycle({
    componentDidMount() {
        this.props.fetchScreenData();
    },

    componentWillReceiveProps({ navigation: { state: { routeName: nextRouteName }}}) {
        const { navigation: { state: { routeName }}, fetchScreenData} = this.props;

        if (routeName !== screen && nextRouteName === screen) {
            fetchScreenData();
        }
    }
});
