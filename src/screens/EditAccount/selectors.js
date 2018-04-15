export const getEditAccountFormInitialValues = ({
  editAccount: {
    account: {
      name,
      icon,
      initialDate
    } = {}
  }
}) => ({
  icon,
  name,
  initialDate
});

export const isAccountFetching = ({
  editAccount: {
    fetching
  }
}) => fetching;
