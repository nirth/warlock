/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  AppRegistry, Text, View
} from 'react-native';
import {Main} from './app';

const WarlockAndroid = () => <Main />;

AppRegistry.registerComponent('WarlockNative', () => WarlockAndroid);
