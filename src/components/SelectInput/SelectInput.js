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
  style
}) =>
  <Menu onSelect={ onChange }>
    <MenuTrigger style={ [styles.containerStyle, style] }>
      <OptionItem item={ selectedOption } color={ colors.COLOR_WHITE } />
      <Icon
        color={ colors.COLOR_WHITE }
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
