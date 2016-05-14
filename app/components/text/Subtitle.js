import React, {PropTypes} from 'react-native';
import {TextField, Typography, textField} from './base';

const Subtitle = ({children, ...options}) => {
  const props = {style: Typography.subtitle, ...options};
  return <TextField {...props}>{children}</TextField>;
};

Subtitle.propTypes = {
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dontTranslate: PropTypes.bool.isRequired,
};

Subtitle.defaultProps = {
  dontTranslate: false,
};

export default textField(Subtitle);
