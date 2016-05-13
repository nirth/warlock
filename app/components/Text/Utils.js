import React from 'react-native';
import {FormattedDate, FormattedTime} from 'react-intl';
import {curry} from 'ramda';

export const createTextNode = curry((styles, value) => (
  <Text style={styles}>{value}</Text>
));

export const resolveTextNode = (value, styles, date = false, time = false) => {
  if (date) {
    return <FormattedDate value={new Date(value)}>{createTextNode(styles)}</FormattedDate>;
  } else if (time) {
    return <FormattedTime value={new Date(value)}>{createTextNode(styles)}</FormattedTime>;
  }

  return createTextNode(styles, value);
};
