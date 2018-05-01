import { getCurrencyLine } from './helpers';

export const isExchangeRatesFetching = ({
  currency: {
    fetching
  }
}) => fetching;

export const getExchangeRatesData = ({
  currency: {
    rates
  }
}) => [
  {
    title: 'BYN',
    lines: ['BYN_USD', 'BYN_EUR'].map(string => getCurrencyLine(rates, string))
  },
  {
    title: 'USD',
    lines: ['USD_BYN', 'USD_EUR'].map(string => getCurrencyLine(rates, string))
  },
  {
    title: 'EUR',
    lines: ['EUR_BYN', 'EUR_USD'].map(string => getCurrencyLine(rates, string))
  }
];

export const isErrorState = ({
  currency: {
    error
  }
}) => error;
