import { withProps } from 'recompose';
import { getItemData } from './helpers';
import AccountListItem from './AccountListItem';

const withViewData = withProps(({ account }) => ({
  item: getItemData(account)
}));

export default withViewData(AccountListItem);
