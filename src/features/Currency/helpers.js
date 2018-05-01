import { get } from 'lodash';
import { ALL_CURRENCIES } from 'src/constants/currency';

export const getCurrencyLine = (values, key) => {
  const [from, to] = key.split('_');
  return `1 ${from} -> ${get(values, `${key}.val`, 1)} ${to}`;
};

export const getRequestQueryParameter = () => ALL_CURRENCIES
  .reduce((acc, fromCurrency) => [
    ...acc,
    ...ALL_CURRENCIES.filter(c => c !== fromCurrency).map(c => `${fromCurrency}_${c}`)
  ], [])
  .join(',');
