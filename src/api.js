import config from './config';
import { get } from './services/networkService';

export const fetchExchangeRates = ({ q, date, endDate }) => get(
  `${config.currencyConverterApiUrl}/exchangeRates`,
  {},
  { q, date, endDate }
);
