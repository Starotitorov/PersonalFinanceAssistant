export const getItemData = ({ icon, balance, currency, ...account }) => ({
  ...account,
  icon: icon ? { name: icon, type: 'material-community' } : undefined,
  balance: `${balance.toFixed(2)} ${currency}`
});
