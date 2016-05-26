import React, {Component, PropTypes} from 'react';
import {darkTheme, lightTheme} from './styles';
import {Provider} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import {initializeAppState} from './reducers';
import {en, ru} from '../intl';

const LIGHT = 'light';
const DARK = 'dark';

const resolveLocale = (locale = '') => {
  switch (locale) {
    case 'en':
    case 'en-GB':
      return en;
    case 'ru':
    case 'ru-RU':
      return ru;
    default:
      return en;
  }
};

/**
 * Tower application context provider. It‘s a funky name for boring functionality.
 * Anything that should be provided in a context and accross application goes here.
 */
class Tower extends Component {
  /**
   * Props of tower regulate application wide settings like theme, preloader etc.
   *
   * @property {Object} propTypes - Props of tower regulate application wide settings like theme, preloader etc.
   * @property {string} propTypes.theme - Name of the theme, default value `light`.
   * @property {Class} propTypes.preloader - Component responsible for showing preloader message.
   * @property {Class} propTypes.application - Component that acts as main container for application.
   */
  static propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    preloader: PropTypes.func.isRequired,
    app: PropTypes.func.isRequired,
  };
  
  static childContextTypes = {
    theme: PropTypes.object,
  };
  
  static defaultProps = {
    theme: 'light',
  };
  
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      themeName: props.theme,
      store: null,
    };
  }
  
  getChildContext() {
    const {theme} = this.props;
    
    switch (theme) {
      case LIGHT: {
        return {theme: lightTheme};
      }
      case DARK: {
        return {theme: darkTheme};
      }
      default: {
        throw new Error(`Tower Unexpected theme name ${theme}`);
      }
    }
  }
  
  componentDidMount() {
    addLocaleData(enLocale);

    initializeAppState()
      .then(::this.handleAppStateInitialization);
  }
  
  handleAppStateInitialization(store) {
    this.setState({loaded: true, store});
  }
  
  render() {
    // React components should start with capital letter.
    const {app: App, preloader: Preloader} = this.props;
    const {store} = this.state;
    
    if (store === null) {
      return (
        <IntlProvider locale="en" messages={resolveLocale()}>
          <Preloader />
        </IntlProvider>
      );
    }
    
    return (
      <IntlProvider locale="en" messages={resolveLocale()}>
        <Provider store={store}>
          <App />
        </Provider>
      </IntlProvider>
    );
  }
}

export default Tower;
