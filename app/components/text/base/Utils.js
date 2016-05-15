/* @flow */
import React, {PropTypes} from 'react-native';
import TextField from './TextField';

export const createTextFieldComponent = (style) => {
  const result = ({children, ...options}) => {
    const props = {style, ...options};
    return <TextField {...props}>{children}</TextField>;
  };
  
  result.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    date: PropTypes.bool.isRequired,
    time: PropTypes.bool.isRequired,
    dontTranslate: PropTypes.bool.isRequired,
  };
  
  result.defaultProps = {
    date: false,
    time: false,
    dontTranslate: false,
  };
  
  return result;
};