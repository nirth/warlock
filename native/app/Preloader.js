import React, {
  PropTypes,
} from 'react-native';
import {Title, Message, Screen} from './components';

const Preloader = ({message}) => (
  <Screen>
    <Title>loading.title</Title>
    <Message>loading.message</Message>
  </Screen>
);

Preloader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Preloader;
