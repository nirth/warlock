import React, {
  Component,
  View,
  Text,
  TextInput
} from 'react-native';
import {ritualStyles} from './ritualStyles';

export class Ritual extends Component {
  render() {
    console.info('Ritual.render');
    return (
      <View style={ritualStyles.container}>
        <Text>Create your first Ritual!!!</Text>
        <TextInput onChangeText={(text) => console.log('textChange', text)} />
      </View>
    );
  }
}
