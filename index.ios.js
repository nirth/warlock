/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './Main';

class Warlock extends Component {
  render() {
    return <Main />;
  }
}

AppRegistry.registerComponent('Warlock', () => Warlock);
