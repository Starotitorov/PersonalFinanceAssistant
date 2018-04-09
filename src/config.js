import { Platform } from 'react-native';
import { BASE_CURRENCY } from 'src/constants/currency';

const facebookLoginBehaviour = Platform.OS === 'android' ? 'web_only' : 'web';

const DEVELOPERS = [
    {
        email: 'starotitorov1997@gmail.com',
        name: 'Artem Starotitorov'
    }
];

const EXCHANGE_RATES_URL = `https://api.fixer.io/latest?base=${BASE_CURRENCY}`;

export default {
    apiUrl: 'https://personalfinanceassistant.herokuapp.com',
    developers: DEVELOPERS,
    facebookLoginBehaviour,
    exchangeRatesUrl: EXCHANGE_RATES_URL
}
