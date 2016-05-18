import React, {PropTypes, View} from 'react-native';

const Screen = ({style, children}, {theme}) => (
  <View style={[theme.screen, style]}>{children}</View>
);

Screen.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Screen.defaultProps = {
  style: {},
};

Screen.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Screen;
