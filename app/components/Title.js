import React, {
  PropTypes,
  Text,
} from 'react-native';
import {styles} from './styles';

const Title = ({children, style}) => <Text style={[styles.title, style]}>{children}</Text>;

Title.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

Title.defaultProps = {
  style: {},
};

export default Title;
