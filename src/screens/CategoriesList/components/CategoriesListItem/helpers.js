export const getItemData = ({ icon, ...category }) => ({
  ...category,
  icon: icon ? { name: icon, type: 'material-community' } : undefined
});
