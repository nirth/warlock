/* @flow */
import React, {PropTypes} from 'react-native';
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

const componentNameCollisions = (propTypes = {}, propNames = []) => (
  Object.keys(propTypes).filter((key) => propNames.indexOf(key) !== -1)
);

const assignProps = (propTypes = {}, defaultProps = {}) => ({
  propTypes: Object.assign({
    date: PropTypes.bool,
    time: PropTypes.bool,
  }, propTypes),
  defaultProps: Object.assign({
    date: false,
    time: false,
  }, defaultProps),
});

/**
 * Decorator
 * Note: this function has a side effect, it modifies component directly.
 *
 *
 *
 */
export const textField = (componentClass: Function) => {
  const props = ['date', 'time'];
  const {propTypes, defaultProps} = componentClass;
  const collisions = componentNameCollisions(componentClass.propTypes, props);
  
  if (collisions.length > 0) {
    const ns = 'components.text.utils.textField';
    throw new Error(`${ns} Component ${componentClass} already has property(ies): ${collisions}`);
  }
  
  Object.assign(componentClass, assignProps(propTypes, defaultProps));
  return componentClass;
};
