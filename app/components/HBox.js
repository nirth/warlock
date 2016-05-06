import React, {
  PropTypes,
} from 'react-native';
import Box from './Box';

const HBox = ({children}) => <Box direction="horizontal">{children}</Box>;


HBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default HBox;
