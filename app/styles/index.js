import {StyleSheet} from 'react-native';
import {screenStyle} from './device';
import {
  darkContainerStyle,
  darkTextStyle,
} from './dark';
import {
  lightContainerStyle,
  lightTextStyle,
} from './light';
import {
  hboxStyle,
  vboxStyle,
} from './containers';

export const darkTheme = StyleSheet.create({
  hbox: Object.assign({}, darkContainerStyle, hboxStyle),
  vbox: Object.assign({}, darkContainerStyle, vboxStyle),
  screen: Object.assign({}, darkContainerStyle, screenStyle),
  
  text: darkTextStyle,
});

export const lightTheme = StyleSheet.create({
  hbox: Object.assign({}, lightContainerStyle, hboxStyle),
  vbox: Object.assign({}, lightContainerStyle, vboxStyle),
  screen: Object.assign({}, lightContainerStyle, screenStyle),
  
  text: lightTextStyle,
});
