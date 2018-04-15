import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import configs from './configs';

const ConcreteActionButton = ({ onPress, type }) => {
  const { iconName, backgroundColor, color } = configs[type];

  return (
    <ActionButton
      iconName={ iconName }
      color={ color }
      backgroundColor={ backgroundColor }
      onPress={ onPress } />
  );
};

ConcreteActionButton.propTypes = {
  onPress: PropTypes.func,
  type: PropTypes.string
};

export default ConcreteActionButton;
