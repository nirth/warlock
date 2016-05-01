/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component
} from 'react-native';
import Main from './Main';

class Warlock extends Component {
  render() {
    return <Main />;
  }
}

// class Warlock extends Component {
//   constructor() {
//     super();
//     this.state = null;
//   }
//
//   componentDidMount() {
//     console.info('Warlock.componentDidMount');
//     loadAppState()
//       .then(this.applyState.bind(this))
//       .done();
//   }
//
//   applyState(warlockState) {
//     console.info('Warlock.applyState');
//     this.setState(warlockState);
//   }
//
//   render() {
//     console.info('Warlock.render')
//     if (this.state === null) {
//       return <Preloader message="Please wait while warlock fetching your rituals" />;
//     }
//
//     return <App warlockState={this.state} />;
//   }
// }

AppRegistry.registerComponent('Warlock', () => Warlock);
