import React, {
  PropTypes,
  Text,
} from 'react-native';
import {styles} from './styles';

const BodyText = ({children, style}) => <Text style={[styles.bodyText, style]}>{children}</Text>;

BodyText.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

BodyText.defaultProps = {
  style: {},
};

export default BodyText;
