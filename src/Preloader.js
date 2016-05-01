import React, {
  Component,
  PropTypes,
  Text,
  View
} from 'react-native';
import {ritualStyles} from './ritualStyles';

const Preloader = ({message}) => (
  <View style={ritualStyles.container}>
    <Text>Loading</Text>
    <Text>{message}</Text>
  </View>
);

Preloader.propTypes = {
  message: PropTypes.string.isRequired
};

export {Preloader};
