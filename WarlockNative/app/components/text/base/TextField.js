import React, {PropTypes} from 'react';
import {Text} from 'react-native';
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

const TextField = ({children, style, intl, ...options}, {theme}) => {
  const value = resolveText(children, intl, options);
  const props = {
    style: [
      style,
      theme.text,
    ],
  };
  
  return (
    <Text {...props}>{value}</Text>
  );
};

TextField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  style: PropTypes.oneOfType([
    PropTypes.number,
  ]),
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
  dontTranslate: PropTypes.bool.isRequired,
  intl: intlShape,
};

TextField.contextTypes = {
  theme: PropTypes.object.isRequired,
};

TextField.defaultProps = {
  style: {},
  date: false,
  time: false,
  dontTranslate: false,
};

export default injectIntl(TextField);
