import { BASE_CURRENCY } from 'src/constants/currency';

export const getCurrencyLine = entry => `1 ${BASE_CURRENCY} -> ${entry[1]} ${entry[0]}`;
