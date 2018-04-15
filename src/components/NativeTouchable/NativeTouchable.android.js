import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';

export default function NativeTouchable({ children, ...rest }) {
  return (
    <TouchableNativeFeedback { ...rest }>
      {children}
    </TouchableNativeFeedback>
  );
}

NativeTouchable.propTypes = {
  children: PropTypes.node.isRequired
};
