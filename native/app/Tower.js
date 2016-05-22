import React, {Component, Children, PropTypes} from 'react-native';
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
  static propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']).isRequired,
    children: PropTypes.element.isRequired,
  };
  
  static childContextTypes = {
    theme: PropTypes.object,
  };
  
  static defaultProps = {
    theme: 'light',
  };
  
  constructor(props, context) {
    super(props, context);
    
    this.themeName = props.theme;
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
    this.setState({appStateLoaded: true, store});
  }
  
  render() {
    const {children} = this.props;
    const {store} = this.state;

    return (
      <Provider store={store}>
        <IntlProvider locale="en" messages={resolveLocale()}>
          {Children.only(children)}
        </IntlProvider>
      </Provider>
    );
  }
}

export default Tower;
