import React, {
  PropTypes,
  View,
} from 'react-native';
import Styles from './Styles';

const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';

const Box = ({direction, children}) => {
  const props = {
    style: [Styles.box, direction === HORIZONTAL ? Styles.hbox : Styles.vbox],
  };
  
  return <View {...props}>{children}</View>;
};

Box.propTypes = {
  direction: PropTypes.oneOf([VERTICAL, HORIZONTAL]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

Box.defaultProps = {
  direction: HORIZONTAL,
};

export default Box;
