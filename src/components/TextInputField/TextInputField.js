/*
 * TextInputField.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { TextField } from 'react-native-material-textfield';
import { colors } from 'src/styles';

export default function TextInputField({
  input,
  label,
  secureTextEntry,
  editable,
  placeholder,
  containerStyle,
  meta: { error, touched } = {},
  keyboardType
}) {
  return (
    <TextField
      { ...input }
      containerStyle={ containerStyle }
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
