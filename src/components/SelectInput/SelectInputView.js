import { withProps } from 'recompose';
import SelectInput from './SelectInput';

const withSelectedOption = withProps(({ value, options }) => ({
  selectedOption: options.find(({ value: v }) => v === value)
}));

export default withSelectedOption(SelectInput);
