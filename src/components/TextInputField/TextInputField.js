import React from 'react';
import { TextField } from 'react-native-material-textfield';
import { colors } from 'src/styles';

export default function TextInputField({
  input,
  label,
  secureTextEntry,
  editable,
  placeholder,
  meta: { error, touched } = {},
  keyboardType
}) {
  return (
    <TextField
      { ...input }
      keyboardType={ keyboardType }
      tintColor={ colors.COLOR_SECONDARY }
      label={ label }
      error={ touched && error }
      editable={ editable }
      placeholder={ placeholder }
      secureTextEntry={ secureTextEntry }
      onChangeText={ input.onChange } />
  );
}
