/**
 * @flow
 */
import React, {
  PropTypes,
  Text,
  View,
} from 'react-native';
import {
  Spacer,
  Title,
} from '../components';
import {
  ritualItemStyle,
  ritualItemRowStyle,
} from './styles';

const formatDate = (epoch: Number) => (new Date(epoch)).toDateString();

const RitualItem = ({name, uuid, createdAt, updatedAt}) => (
  <View style={ritualItemStyle}>
    <View style={ritualItemRowStyle}>
      <Title>{name}</Title>
    </View>
    <View style={ritualItemRowStyle}>
      <Text>{formatDate(createdAt)}</Text>
      <Spacer />
      <Text>{formatDate(updatedAt)}</Text>
    </View>
    <View style={ritualItemRowStyle}>
      <Spacer />
      <Text>{uuid}</Text>
    </View>
  </View>
);

RitualItem.propTypes = {
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number.isRequired,
};

export default RitualItem;
