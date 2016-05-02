import React, {
  Component,
  PropTypes,
  Text,
  View
} from 'react-native';
import {styles} from './styles';

const Preloader = ({message}) => (
  <View style={styles.centeredBox}>
    <Text style={styles.heading}>Loading</Text>
    <Text style={styles.greyBodyText}>{message}</Text>
  </View>
);

Preloader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Preloader;
