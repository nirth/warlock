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

  constructor(props) {
    super(props);

    this.state = {};
  }

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

export default RitualPreferences;
