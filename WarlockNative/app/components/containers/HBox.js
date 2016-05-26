import React, {PropTypes} from 'react';
import Box from './Box';

const HBox = ({children}) => <Box direction="horizontal">{children}</Box>;

HBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default HBox;
