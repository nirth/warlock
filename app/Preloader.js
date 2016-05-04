import React, {
  PropTypes,
  Text,
  View,
} from 'react-native';

const Preloader = ({message}) => (
  <View>
    <Text>Loading</Text>
    <Text>{message}</Text>
  </View>
);

Preloader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Preloader;
