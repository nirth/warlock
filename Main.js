/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react-native';
import {
  App,
  Preloader,
  initializeAppState,
} from './app';
import {Provider} from 'react-redux';

class Main extends Component {
  constructor() {
    super();
    this.state = {appStateLoaded: false};
  }

  componentDidMount() {
    initializeAppState()
      .then(this.handleAppStateInitialization.bind(this));
  }

  handleAppStateInitialization(store) {
    this.setState({appStateLoaded: true, store});
  }

  renderPreloader() {
    return <Preloader message="Please wait while warlock fetching your rituals" />;
  }

  renderApp() {
    const {store} = this.state;
    return <Provider store={store}><App /></Provider>;
  }

  render() {
    const {appStateLoaded} = this.state;

    if (!appStateLoaded) {
      return this.renderPreloader();
    }

    return this.renderApp();
  }
}

export default Main;
