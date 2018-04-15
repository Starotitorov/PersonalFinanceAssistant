import { BYN } from 'src/constants/currency';

export const getInitialValues = () => ({
  icon: 'cash',
  initialDate: new Date().toUTCString(),
  currency: BYN
});
