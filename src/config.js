import { Platform } from 'react-native';
import { BASE_CURRENCY } from 'src/constants/currency';

const facebookLoginBehaviour = Platform.OS === 'android' ? 'web_only' : 'web';

const DEVELOPERS = [
    {
        email: 'starotitorov1997@gmail.com',
        name: 'Artem Starotitorov'
    },
    {
        name: 'Andrey Gayduk'
    },
    {
        name: 'Denis Gridiushko'
    },
    {
        name: 'Valera Yalovchuk'
    }
];

const EXCHANGE_RATES_URL = `https://api.fixer.io/latest?base=${BASE_CURRENCY}`;

export default {
    apiUrl: 'http://dzianis.mooo.com:8090/api/v1',
    developers: DEVELOPERS,
    facebookLoginBehaviour,
    exchangeRatesUrl: EXCHANGE_RATES_URL
}
