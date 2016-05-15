import React, {
  PropTypes,
  View,
} from 'react-native';
import Styles from './Styles';

const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';

const Box = ({direction, children}, {theme}) => {
  const props = {
    style: [
      Styles.box,
      direction === HORIZONTAL ? Styles.hbox : Styles.vbox,
      theme === 'light' ? Styles.lightTheme : Styles.darkTheme,
    ],
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

Box.contextTypes = {
  theme: PropTypes.string.isRequired,
};

Box.defaultProps = {
  direction: HORIZONTAL,
};

export default Box;
