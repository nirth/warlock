import React, {
  PropTypes,
  View,
} from 'react-native';
import {Title, Message} from './components';

const Preloader = ({message}) => (
  <View>
    <Title>loading.title</Title>
    <Message>loading.message</Message>
  </View>
);

Preloader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Preloader;
