import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
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
  containerStyle: View.propTypes.style,
  buttonStyle: View.propTypes.style,
  title: PropTypes.string,
  token: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.shape({}),
  onPress: PropTypes.func
};

export default CalculatorButton;
