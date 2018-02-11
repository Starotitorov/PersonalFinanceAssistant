import { AppRegistry } from 'react-native';
import 'es6-symbol/implement';
import Application from './src';

// Disable warnings
console.disableYellowBox = true;

AppRegistry.registerComponent('PersonalFinanceAssistant', () => Application);
