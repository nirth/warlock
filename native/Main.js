/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react-native';
import {
  App,
  Preloader,
  Tower,
} from './app';
import {
  en,
  ru,
} from './intl';


class Main extends Component {
  constructor() {
    super();
    this.state = {appStateLoaded: false};
  }

  

  renderPreloader() {
    return <Preloader message="Please wait while warlock fetching your rituals" />;
  }

  renderApp() {
    return <App />;
  }

  render() {
    const {appStateLoaded} = this.state;
    let result;

    if (!appStateLoaded) {
      result = this.renderPreloader();
    } else {    
      result = this.renderApp();
    }
    
    return (
      <Tower theme="dark">
        {result}
      </Tower>
    );
  }
}

export default Main;
