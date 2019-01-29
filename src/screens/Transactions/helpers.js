export const getSumString = (sum, currency) => `${sum > 0 ? '+' : ''}${sum.toFixed(2)} ${currency}`;
