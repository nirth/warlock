import React, {PropTypes} from 'react';
import {View} from 'react-native';

const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';

const Box = ({direction, children}, {theme}) => {
  const props = {
    style: [
      direction === HORIZONTAL ? theme.hbox : theme.vbox,
    ],
  };
  
  return (
    <View {...props}>{children}</View>
  );
};

Box.propTypes = {
  direction: PropTypes.oneOf([VERTICAL, HORIZONTAL]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

Box.contextTypes = {
  theme: PropTypes.object.isRequired,
};

Box.defaultProps = {
  direction: HORIZONTAL,
};

export default Box;
