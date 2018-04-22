import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
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
    activeTintColor: Platform.OS === 'ios' ? colors.COLOR_WHITE : undefined,
    labelStyle: Platform.OS === 'ios' ? {
      fontSize: fontSizes.FONT_SIZE_L,
      marginBottom: 16
    } : {},
    style: {
      backgroundColor: colors.COLOR_PRIMARY
    }
  }
});
