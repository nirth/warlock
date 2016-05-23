/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  AppRegistry,
} from 'react-native';
import Main from './Main';

const WarlockAndroid = () => <Main />;


AppRegistry.registerComponent('WarlockNative', () => WarlockAndroid);
