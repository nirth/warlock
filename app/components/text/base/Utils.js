/* @flow */
import {PropTypes} from 'react-native';

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
  const {propTypes, defaultProps} = componentClass;
  Object.assign(componentClass, assignProps(propTypes, defaultProps));
  return componentClass;
};
