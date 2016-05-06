import {StyleSheet} from 'react-native';
import {
  titleStyle,
  subTitleStyle,
  bodyTextStyle,
  boringBodyTextStyle,
} from './typography';
import {
  boxStyle,
  vboxStyle,
  hboxStyle,
} from './boxes';


// // Figure out how to use motherfucking fonts.
// const FONT = 'AktivGrotesk';
// const REGULAR = `${FONT}_Rg`;

export const styles = StyleSheet.create({
  title: titleStyle,
  subtitle: subTitleStyle,
  bodyText: bodyTextStyle,
  boringBodyText: boringBodyTextStyle,
  box: boxStyle,
  vbox: vboxStyle,
  hbox: hboxStyle,
});
