import {Component, Children, PropTypes} from 'react-native';
import {darkTheme, lightTheme} from './styles';

/**
 * Tower application context provider. It‘s a funky name for boring functionality.
 * Anything that should be provided in a context and accross application goes here.
 */
class Tower extends Component {
  static LIGHT = 'light';
  static DARK = 'dark';
  
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
    return Children.only(children);
  }
}

export default Tower;
