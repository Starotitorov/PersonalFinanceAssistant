import { compose, withState, withHandlers } from 'recompose';

export default compose(
  withState('isOpen', 'setOpenState', false),
  withHandlers({
    toggleOpen: ({ setOpenState, isOpen }) => () => setOpenState(!isOpen)
  })
);
