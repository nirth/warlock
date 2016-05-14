import {StyleSheet} from 'react-native';

const BOX_STYLE = {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

const VBOX_STYLE = {
  flexDirection: 'column',
};

const HBOX_STYLE = {
  flexDirection: 'row',
};

const Styles = StyleSheet.create({
  box: BOX_STYLE,
  vbox: VBOX_STYLE,
  hbox: HBOX_STYLE,
});

export default Styles;
