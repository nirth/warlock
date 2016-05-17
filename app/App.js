import React, {Component, PropTypes} from 'react-native';
import {connect} from 'react-redux';
import ActionButton from 'react-native-action-button';
import {addEmptyRitual, wipeData, ritualsAsListSelector} from './reducers';
import {Screen} from './components';
import NoRitualsMessage from './NoRitualsMessage';
import {RitualsList} from './rituals';

@connect((state) => ({
  rituals: ritualsAsListSelector(state),
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
      <Screen>
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
      </Screen>
    );
  }
}

export default App;
