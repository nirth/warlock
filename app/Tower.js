import {Component, Children, PropTypes} from 'react-native';

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
    theme: PropTypes.string,
  };
  
  static defaultProps = {
    theme: 'light',
  };
  
  constructor(props, context) {
    super(props, context);
    const {theme} = props;
    this.theme = theme;
  }
  
  getChildContext() {
    const {theme} = this.props;
    
    return {theme};
  }
  
  render() {
    const {children} = this.props;
    return Children.only(children);
  }
}

export default Tower;
