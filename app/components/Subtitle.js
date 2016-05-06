import React, {
  PropTypes,
  Text,
} from 'react-native';
import {styles} from './styles';

const Subtitle = ({children, style}) => <Text style={[styles.subtitle, style]}>{children}</Text>;

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

Subtitle.defaultProps = {
  style: {},
};

export default Subtitle;
