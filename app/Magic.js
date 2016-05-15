import React, {Component, Children, PropTypes} from 'react-native';

class Magic extends Component {
  static LIGHT = 'light';
  static DARK = 'dark';
  
  static propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']),
  };
  
  static childContextTypes = {
    theme: PropTypes.string,
  };
  
  static defaultProps = {
    theme: 'light',
  };
  
  getChildContext() {
    const {theme} = this.props;
    
    return {theme};
  }
  
  constructor(props, context) {
    super(props, context);
    const {theme} = props;
    this.theme = theme;
  }
  
  render() {
    const {children} = this.props;
    return Children.only(children);
  }
}

export default Magic;
