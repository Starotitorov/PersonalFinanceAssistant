import { Platform } from 'react-native';

const facebookLoginBehaviour = Platform.OS === 'android' ? 'web_only' : 'web';

const DEVELOPERS = [
  {
    email: 'starotitorov1997@gmail.com',
    name: 'Artem Starotitorov'
  }
];

export default {
  currencyConverterApiUrl: 'https://financeassistantconverter.herokuapp.com',
  developers: DEVELOPERS,
  facebookLoginBehaviour
};
