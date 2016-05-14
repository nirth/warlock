/**
 * @flow
 */
import React, {PropTypes} from 'react-native';
import {
  Spacer,
  Title,
  BoringText,
  HBox,
  VBox,
} from '../components';

const RitualItem = ({name, uuid, createdAt, updatedAt, onPress}) => (
  // FIXME: Figure out what's wrong with TouchableHighlight and how should it be used.
  <VBox>
    <Title dontTranslate>{name}</Title>
    <HBox>
      <BoringText date>{createdAt}</BoringText>
      <Spacer />
      <BoringText date>{updatedAt}</BoringText>
    </HBox>
    <HBox>
      <Spacer />
      <BoringText dontTranslate>{uuid}</BoringText>
    </HBox>
  </VBox>
);

RitualItem.propTypes = {
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  updatedAt: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RitualItem;

/*

<VBox>
      <Title>{name}</Title>
      <HBox>
        <BodyText>{formatDate(createdAt)}</BodyText>
        <Spacer />
        <BodyText>{formatDate(updatedAt)}</BodyText>
      </HBox>
      <HBox>
        <Spacer />
        <BodyText>{uuid}</BodyText>
      </HBox>
    </VBox>

*/
