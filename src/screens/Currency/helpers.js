import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency';

export const getCurrencyLine = entry => `1 ${DEFAULT_BASE_CURRENCY} -> ${entry[1]} ${entry[0]}`;
