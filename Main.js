/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react-native';
import {
  App,
  Preloader,
  Tower,
  initializeAppState,
} from './app';
import {
  en,
  ru,
} from './intl';
import {Provider} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';

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
    let result;

    if (!appStateLoaded) {
      result = this.renderPreloader();
    } else {    
      result = this.renderApp();
    }
    
    return (
      <Tower theme="dark">
        <IntlProvider locale="en" messages={en}>
          {result}
        </IntlProvider>
      </Tower>
    );
  }
}

export default Main;
