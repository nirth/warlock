import React, {
  PropTypes,
  Text,
} from 'react-native';
import {styles} from './styles';
import {FormattedDate} from 'react-intl';
import {curry} from 'ramda';

const createTextNode = curry((style, value) => (
  <Text style={[styles.bodyText, style]}>{value}</Text>
));

const resolveTextNode = (value, style, date = false, time = false) => {
  if (date) {
    return <FormattedDate value={new Date(value)}>{createTextNode(style)}</FormattedDate>;
  }

  return createTextNode(style, value);
};

const BodyText = ({children, style, date, time}) => resolveTextNode(children, style, date, time);

BodyText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  style: PropTypes.object,
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
};

BodyText.defaultProps = {
  style: {},
  date: false,
  time: false,
};

export default BodyText;
