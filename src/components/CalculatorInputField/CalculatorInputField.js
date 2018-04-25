import React from 'react';
import { TouchableOpacity } from 'react-native';
import TextInputField from '../TextInputField';
import CalculatorModal from '../CalculatorModal';

const CalculatorInputField = ({
  isOpen,
  label,
  placeholder,
  toggleOpen,
  input,
  handleCalculatorModalSubmit,
  style,
  ...props
}) =>
  <TouchableOpacity style={ style } onPress={ toggleOpen }>
    <TextInputField
      { ...props }
      input={ input }
      label={ label }
      placeholder={ placeholder }
      editable={ false } />
    <CalculatorModal value={ input.value } show={ isOpen } onSubmit={ handleCalculatorModalSubmit } />
  </TouchableOpacity>;

export default CalculatorInputField;
