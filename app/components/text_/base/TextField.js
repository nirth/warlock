import React, {PropTypes, Text} from 'react-native';
import {injectIntl, intlShape} from 'react-intl';

const resolveText = (children, intl, {date, time, dontTranslate}) => {
  if (dontTranslate) {
    return children;
  } else if (date) {
    return intl.formatDate(new Date(children));
  } else if (time) {
    return intl.formatTime(new Date(children));
  }
  
  return intl.formatMessage({id: children});
};

const TextField = ({children, style, intl, ...options}) => {
  const value = resolveText(children, intl, options);
  const props = {style};
  return <Text {...props}>{value}</Text>;
};

TextField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  style: PropTypes.number,
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
  dontTranslate: PropTypes.bool.isRequired,
  intl: intlShape,
};

TextField.defaultProps = {
  style: {},
  date: false,
  time: false,
  dontTranslate: false,
};

export default injectIntl(TextField);
