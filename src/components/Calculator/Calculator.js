/*
 * Calculator.js
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
import { Text, View } from 'react-native';
import R from 'ramda';
import CalcButton from './CalculatorButton';
import styles from './CalculatorStyles';
import { colors } from 'src/styles';

const Button = onPress => token => <CalcButton key={ token } token={ token } onPress={ onPress } />;

const ButtonsGroup = (onPress, style) => ({ tokens }) => (
  <View style={ [styles.keyboardRowStyle, style] }>
    {R.map(Button(onPress), tokens)}
  </View>
);

const Calculator = (props) => {
  const {
    expr,
    isReadyForSubmit,
    onPressToken,
    onCalculate,
    onClear,
    onBackspace,
    onSubmitResult
  } = props;

  const Group = ButtonsGroup(onPressToken, { flex: 2 });
  const Row = ButtonsGroup(onPressToken);

  return (
    <View>
      <View style={ styles.expressionContainerStyle }>
        <Text style={ styles.expressionStyle }>{expr}</Text>
      </View>
      <View style={ styles.keyboardRowStyle }>
        <CalcButton token="C" onPress={ onClear } />
        <Group tokens={ ['/', '*'] } />
        <CalcButton
          icon={{ name: 'backspace', style: { marginRight: 0 }, color: 'darkgray', size: 24 }}
          onPress={ onBackspace } />
      </View>
      <Row tokens={ ['7', '8', '9', '-'] } />
      <Row tokens={ ['4', '5', '6', '+'] } />
      <View style={ styles.keyboardRowStyle }>
        <View style={ styles.keyboardShortRowStyle }>
          <Row tokens={ ['1', '2', '3'] } />
          <Row tokens={ ['0', '000', '.'] } />
        </View>
        <CalcButton
          containerStyle={ styles.submitButtonContainerStyle }
          buttonStyle={ styles.submitButtonStyle }
          token={ isReadyForSubmit ? 'Ok' : '=' }
          color={ colors.COLOR_WHITE }
          isReadyForSubmit={ isReadyForSubmit }
          onPress={ isReadyForSubmit ? onSubmitResult : onCalculate } />
      </View>
    </View>
  );
};

Calculator.propTypes = {
  expr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isReadyForSubmit: PropTypes.bool,
  onBackspace: PropTypes.func,
  onCalculate: PropTypes.func,
  onClear: PropTypes.func,
  onPressToken: PropTypes.func,
  onSubmitResult: PropTypes.func
};

export default Calculator;
