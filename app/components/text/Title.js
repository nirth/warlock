import React, {PropTypes} from 'react-native';
import {TextField, Typography, textField} from './base';

const Title = ({children, ...options}) => {
  const props = {style: Typography.title, ...options};
  return <TextField {...props}>{children}</TextField>;
};

Title.propTypes = {
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dontTranslate: PropTypes.bool.isRequired,
};

Title.defaultProps = {
  dontTranslate: false,
};

export default textField(Title);
