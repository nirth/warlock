/**
 * @flow
 */
import React, {
  PropTypes,
  Text,
  TouchableHighlight,
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

const formatDate = (epoch) => (new Date(epoch)).toDateString();

const RitualItem = ({name, uuid, createdAt, updatedAt, onPress}) => (
  <TouchableHighlight style={ritualItemStyle} onPress={() => onPress({uuid})}>
    <View>
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
  </TouchableHighlight>
);

RitualItem.propTypes = {
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RitualItem;
