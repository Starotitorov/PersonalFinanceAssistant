import { TabNavigator } from 'react-navigation';
import OutcomeCategoriesList from '../OutcomeCategoriesList';
import IncomeCategoriesList from '../IncomeCategoriesList';
import { colors, fontSizes } from 'src/styles';

export default TabNavigator({
  IncomeCategoriesList: {
    screen: IncomeCategoriesList,
    navigationOptions: {
      tabBarLabel: 'Income'
    }
  },
  OutcomeCategoriesList: {
    screen: OutcomeCategoriesList,
    navigationOptions: {
      tabBarLabel: 'Outcome'
    }
  }
}, {
  initialRouteName: 'IncomeCategoriesList',
  swipeEnabled: true,
  lazy: false,
  animationEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: colors.COLOR_WHITE,
    inactiveTintColor: colors.COLOR_GRAY,
    labelStyle: {
      fontSize: fontSizes.FONT_SIZE_L,
      marginBottom: 16
    },
    style: {
      backgroundColor: colors.COLOR_PRIMARY
    }
  }
});
