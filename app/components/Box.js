import React, {
  PropTypes,
  View,
} from 'react-native';
import {styles} from './styles';

const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';

const computeStyles = (direction) => {
  const initialStyle = styles.box;
  const withDirection = initialStyle.concat([direction === HORIZONTAL ? styles.hbox : styles.vbox]);

  return withDirection;
};

const Box = ({direction, children}) => <View style={computeStyles(direction)}>{children}</View>;

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
