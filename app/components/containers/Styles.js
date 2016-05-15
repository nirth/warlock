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

const LIGHT_THEME = {
  backgroundColor: 'rgba(248, 252, 245, 1);',
};

const DARK_THEME = {
  backgroundColor: 'rgba(12, 21, 6, 1);',
};

const Styles = StyleSheet.create({
  box: BOX_STYLE,
  vbox: VBOX_STYLE,
  hbox: HBOX_STYLE,
  darkTheme: DARK_THEME,
  lightTheme: LIGHT_THEME,
});

export default Styles;
