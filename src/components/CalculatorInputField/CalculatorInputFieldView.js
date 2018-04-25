import { compose, withHandlers } from 'recompose';
import withToggle from '../HOC/withToggle';
import CalculatorInputField from './CalculatorInputField';

const withHandleSubmit = withHandlers({
  handleCalculatorModalSubmit: ({ input: { onChange }, toggleOpen }) => value => {
    onChange(value);
    toggleOpen();
  }
});

export default compose(
  withToggle,
  withHandleSubmit
)(CalculatorInputField);
