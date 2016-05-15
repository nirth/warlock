import {StyleSheet} from 'react-native';

const TITLE_STYLE = {
  fontSize: 20,
};

const SUBTITLE_STYLE = {
  fontSize: 16,
};

const MESSAGE_STYLE = {
  fontSize: 15,
};

const BORING_TEXT_STYLE = {
  fontSize: 12,
};

const LIGHT_THEME = {
  color: 'rgba(12, 18, 15, 1);',
};

const DARK_THEME = {
  color: 'orange',
};

const Typography = StyleSheet.create({
  title: TITLE_STYLE,
  subtitle: SUBTITLE_STYLE,
  message: MESSAGE_STYLE,
  boringText: BORING_TEXT_STYLE,
  lightTheme: LIGHT_THEME,
  darkTheme: DARK_THEME,
});

export default Typography;
