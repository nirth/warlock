import React, {
  Component,
  PropTypes,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {addEmptyRitual, wipeData} from './reducers';
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

  addRitualPressed() {
    const {dispatch} = this.props;
    dispatch(addEmptyRitual());
  }
  
  wipeDataPressed() {
    const {dispatch} = this.props;
    dispatch(wipeData());
  }

  render() {
    const {rituals} = this.props;

    return (
      <View style={styles.screen}>
        {rituals.length ? <RitualsList rituals={rituals} /> : <NoRitualsMessage />}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={::this.addRitualPressed}
        />
        <ActionButton
          buttonColor="rgba(60,76,231,1)"
          onPress={::this.wipeDataPressed}
          position="center"
        />
      </View>
    );
  }
}

export default App;
