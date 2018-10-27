/*
 * CalculatorButton.js
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
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './CalculatorButtonStyles';

const CalculatorButton = (props) => {
  const {
    buttonStyle,
    containerStyle,
    token,
    icon,
    color = 'gray',
    onPress,
    ...options
  } = props;

  return (
    <View style={ [styles.containerStyle, containerStyle] }>
      <Button
        { ...options }
        title={ token }
        icon={ icon }
        containerViewStyle={ styles.containerButtonStyle }
        buttonStyle={ [styles.buttonStyle, buttonStyle] }
        fontSize={ 18 }
        color={ color }
        onPress={ () => onPress(token) } />
    </View>
  );
};

CalculatorButton.propTypes = {
  containerStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  title: PropTypes.string,
  token: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.shape({}),
  onPress: PropTypes.func
};

export default CalculatorButton;
