import React, {
  PropTypes,
  Text,
  View,
} from 'react-native';
import {styles} from '../styles';

const Row = ({name, uuid}) => (
  <View style={styles.leftBox}>
    <Text style={styles.heading}>{name}</Text>
    <Text style={styles.subHeading}>{uuid}</Text>
  </View>
);

Row.propTypes = {
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
};

export default Row;
