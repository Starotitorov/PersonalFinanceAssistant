import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

export default function NativeTouchable({ children, ...rest }) {
  return (
    <TouchableOpacity { ...rest }>
      {children}
    </TouchableOpacity>
  );
}

NativeTouchable.propTypes = {
  children: PropTypes.node.isRequired
};
