import React from 'react';
import PropTypes from 'prop-types';
import { Platform, KeyboardAvoidingView, ViewPropTypes } from 'react-native';

export default function PlatformKeyboardAvoidingView({ children, style }) {
  return (
    <KeyboardAvoidingView
      style={ style }
      behavior={ Platform.OS === 'ios' ? 'padding' : null }>
      {children}
    </KeyboardAvoidingView>
  );
}

PlatformKeyboardAvoidingView.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.node.isRequired
};
