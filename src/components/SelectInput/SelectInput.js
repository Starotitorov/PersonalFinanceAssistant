/*
 * SelectInput.js
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
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';
import { Icon } from 'react-native-elements';
import { colors } from 'src/styles';
import styles from './SelectInputStyles';
import OptionItem from './components/OptionItem';

const SelectInputComponent = ({
  onChange,
  selectedOption,
  options,
  style,
  disabled
}) =>
  <Menu onSelect={ onChange }>
    <MenuTrigger style={ [styles.containerStyle, style] } disabled={ disabled }>
      <OptionItem item={ selectedOption } color={ disabled ? colors.LIGHT_GRAY : colors.COLOR_WHITE } />
      <Icon
        color={ disabled ? colors.LIGHT_GRAY : colors.COLOR_WHITE }
        name="arrow-drop-down"
        type="material" />
    </MenuTrigger>
    <MenuOptions>
      { options.map(option =>
        <MenuOption
          key={ option.value }
          value={ option.value }>
          <OptionItem item={ option } />
        </MenuOption>)
      }
    </MenuOptions>
  </Menu>;

export default SelectInputComponent;
