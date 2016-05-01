import React, {
  Component,
  PropTypes,
  Text,
  View
} from 'react-native';
import {ritualStyles} from './ritualStyles';
import {NoRitualsMessage} from './NoRitualsMessage';
import {RitualsList} from './RitualsList';
import ActionButton from 'react-native-action-button';

export class App extends Component {
  static propTypes = {
    warlockState: PropTypes.shape({
      player: PropTypes.any.isRequired,
      rituals: PropTypes.array.isRequired
    }).isRequired
  };

  render() {
    const {warlockState: {rituals, player}} = this.props;

    return (
      <View style={ritualStyles.container}>
        {rituals.length ? <RitualsList />: <NoRitualsMessage />}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.onActionButtonPress}
        />
      </View>
    );
  }
}
