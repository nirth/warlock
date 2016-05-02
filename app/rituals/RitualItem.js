import React, {
  PropTypes,
  Text,
  View,
} from 'react-native';
// import {styles} from '../styles';

const RitualItem = ({name, uuid}) => (
  <View>
    <Text>{name}</Text>
    <Text>{uuid}</Text>
  </View>
);

RitualItem.propTypes = {
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
};

export default RitualItem;
