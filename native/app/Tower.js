import {Component, Children, PropTypes} from 'react-native';
import {darkTheme, lightTheme} from './styles';
import {Provider} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import {initializeAppState} from './reducers';

static const LIGHT = 'light';
static const DARK = 'dark';

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
  
  componentDidMount() {
    initializeAppState()
      .then(this.handleAppStateInitialization.bind(this));
  }

  handleAppStateInitialization(store) {
    this.setState({appStateLoaded: true, store});
  }
  
  getChildContext() {
    const {theme} = this.props;
    
    switch (theme) {
      case 'light': {
        return {theme: lightTheme};
      }
      case 'dark': {
        return {theme: darkTheme};
      }
      default: {
        throw new Error(`Tower Unexpected theme name ${theme}`);
      }
    }
  }
  
  render() {
    const {children} = this.props;
    return ;
    
    return (
      <Provider store={store}>
        <IntlProvider locale="en" messages={en}>
          {Children.only(children)}
        </IntlProvider>
      </Provider>
    )
  }
}

export default Tower;
