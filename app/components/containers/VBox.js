import React, {
  PropTypes,
} from 'react-native';
import Box from './Box';

const VBox = ({children}) => <Box direction="vertical">{children}</Box>;

VBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default VBox;
