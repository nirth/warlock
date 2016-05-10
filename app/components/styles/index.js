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

export const styles = StyleSheet.create({
  title: titleStyle,
  subtitle: subTitleStyle,
  bodyText: bodyTextStyle,
  boringBodyText: boringBodyTextStyle,
  box: boxStyle,
  vbox: Object.assign({}, boxStyle, vboxStyle),
  hbox: Object.assign({}, boxStyle, hboxStyle),
});
