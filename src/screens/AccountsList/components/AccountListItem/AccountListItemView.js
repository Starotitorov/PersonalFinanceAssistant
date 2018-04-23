import { withProps, withHandlers, compose } from 'recompose';
import { getItemData } from './helpers';
import AccountListItem from './AccountListItem';

const withViewData = withProps(({ account }) => ({
  item: getItemData(account)
}));

const withHandleSelectAccount = withHandlers({
  handleSelectAccount: ({ onSelectAccount, account: { id }}) => () => onSelectAccount(id)
});

export default compose(
  withViewData,
  withHandleSelectAccount
)(AccountListItem);
