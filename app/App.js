import React, {
  Component,
  ListView
  PropTypes,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {addEmptyRitual} from './reducers';
import {ritualStyles} from './ritualStyles';
import NoRitualsMessage from './NoRitualsMessage';
import RitualsList from './RitualsList';
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
    const dataSource = 

    return (
      <View style={ritualStyles.container}>
        {rituals.length ? <RitualsList /> : <NoRitualsMessage />}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={this.onActionButtonPress.bind(this)}
        />
      </View>
    );
  }
}

// connect((state) => ({rituals: state.rituals}))(App);

export default App;
