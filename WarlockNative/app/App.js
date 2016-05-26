import React, {Component, PropTypes} from 'react';
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
    const {rituals, rituals: {length: rl}} = this.props;
    
    return (
      <Screen>
        {rl ? <RitualsList rituals={rituals} /> : <NoRitualsMessage />}
        <ActionButton
          buttonColor="rgba(231, 76, 60, 1.0)"
          onPress={::this.addRitualPressed}
        />
      </Screen>
    );
  }
}

export default App;
