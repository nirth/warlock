import React, {PropTypes} from 'react-native';
import {TextField, Typography, textField} from './base';

const BoringText = ({children, ...options}) => {
  const props = {style: Typography.boringText, ...options};
  return <TextField {...props}>{children}</TextField>;
};

BoringText.propTypes = {
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dontTranslate: PropTypes.bool.isRequired,
};

BoringText.defaultProps = {
  dontTranslate: false,
};

export default textField(BoringText);
