/*
 * PrimaryButton.js
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
import { ViewPropTypes } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './PrimaryButtonStyles';

const PrimaryButton = ({ disabled, onPress, title, containerViewStyle }) =>
  <Button
    containerViewStyle={ [styles.buttonContainer, containerViewStyle] }
    buttonStyle={ styles.button }
    disabledStyle={ styles.disabledStyle }
    title={ title }
    disabled={ disabled }
    onPress={ onPress } />;

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  containerViewStyle: ViewPropTypes.style
};

export default PrimaryButton;
