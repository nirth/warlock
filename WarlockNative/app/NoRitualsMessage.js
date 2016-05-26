import React from 'react';
import ActionButton from 'react-native-action-button';
import {
  Message,
  VBox,
} from './components';

const NoRitualsMessage = () => (
  <VBox>
    <Message dontTranslate>Aye!</Message>
    <Message>app.noRituals</Message>
  </VBox>
);

export default NoRitualsMessage;
