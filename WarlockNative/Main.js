/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {PropTypes, View, Text} from 'react-native';
// import {
//   App,
//   Preloader,
//   Tower,
// } from './app';

const Main = ({style}) => (
  <View><Text>Main</Text></View>
);


// class Main extends Component {
//   constructor() {
//     super();
//     this.state = {appStateLoaded: false};
//   }

//   // renderPreloader() {
//   //   return <Preloader message="Please wait while warlock fetching your rituals" />;
//   // }

//   // renderApp() {
//   //   return <App />;
//   // }

//   render() {
//     const {appStateLoaded} = this.state;

//     return <View><Text>Main</Text></View>;
//     /*
//     return (
//       <Tower theme="dark">
//         {!appStateLoaded ? this.renderPreloader() : this.renderApp()}
//       </Tower>
//     );
//     */
//   }
// }

export default Main;
