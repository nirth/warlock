import React, {
  Component,
  PropTypes,
  // HBox,
  VBox,
  Title,
  Subtitle,
} from 'react-native';

class RitualPreferences extends Component {
  static propTypes = {
    ritual: PropTypes.shape({
      name: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const {ritual: {name: ritualName}} = this.props;
    return (
      <VBox>
        <Title>Preferences</Title>
        <Subtitle>{ritualName}</Subtitle>
      </VBox>
    );
  }
}
