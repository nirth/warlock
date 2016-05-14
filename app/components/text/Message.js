import React, {PropTypes} from 'react-native';
import {TextField, Typography, textField} from './base';

const Message = ({children, ...options}) => {
  const props = {style: Typography.message, ...options};
  return <TextField {...props}>{children}</TextField>;
};

Message.propTypes = {
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dontTranslate: PropTypes.bool.isRequired,
};

Message.defaultProps = {
  dontTranslate: false,
};

export default textField(Message);
