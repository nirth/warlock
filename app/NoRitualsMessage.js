import React, {
  Component,
  Text,
  View
} from 'react-native';
import {styles} from './styles';

const NoRitualsMessage = () => (
  <View style={styles.centeredBox}>
    <Text>You don‘t have any routines / rituals yet</Text>
  </View>
);

export default NoRitualsMessage;
