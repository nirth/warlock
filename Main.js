/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
import {loadAppState} from './loadAppState';
import {
  App,
  Preloader
} from './src';

class Main extends Component {
  constructor() {
    super();
    this.state = null;
  }

  componentDidMount() {
    console.info('Main.componentDidMount');
    loadAppState()
      .then(this.applyState.bind(this))
      .done();
  }

  applyState(warlockState) {
    console.info('Main.applyState');
    this.setState(warlockState);
  }

  render() {
    console.info('Main.render')
    if (this.state === null) {
      return <Preloader message="Please wait while warlock fetching your rituals" />;
    }

    return <App warlockState={this.state} />;
  }
}

export default Main;
