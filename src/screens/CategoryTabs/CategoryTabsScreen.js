import { TabNavigator } from 'react-navigation';
import OutcomeCategoriesList from '../OutcomeCategoriesList';
import IncomeCategoriesList from '../IncomeCategoriesList';
import { colors } from 'src/styles';

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
  tabBarOptions: {
    style: {
      backgroundColor: colors.COLOR_PRIMARY
    }
  }
});
