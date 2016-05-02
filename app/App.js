import React, {
  Component,
  PropTypes,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {addEmptyRitual} from './reducers';
import {styles} from './styles';
import NoRitualsMessage from './NoRitualsMessage';
import {RitualsList} from './rituals';
import ActionButton from 'react-native-action-button';

@connect((state) => ({
  rituals: state.rituals,
}))
class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    rituals: PropTypes.array.isRequired,
  };

  onActionButtonPress(event) {
    const {dispatch} = this.props;
    dispatch(addEmptyRitual());
  }

  render() {
    const {rituals} = this.props;

    return (
      <View style={styles.screen}>
        {rituals.length ? <RitualsList rituals={rituals} /> : <NoRitualsMessage />}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.onActionButtonPress.bind(this)}
        />
      </View>
    );
  }
}

export default App;
