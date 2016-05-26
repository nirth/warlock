import React, {PropTypes} from 'react';
import {TouchableOpacity, Text} from 'react-native';

const LinkButton = ({label, children}) => (
  <TouchableOpacity>
    <Text>{label || children}</Text>
  </TouchableOpacity>
);

LinkButton.propTypes = {
  label: PropTypes.string,
  children: PropTypes.string,
};

LinkButton.defaultProps = {
  label: null,
  children: null,
};

export default LinkButton;
