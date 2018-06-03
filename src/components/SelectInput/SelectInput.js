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
