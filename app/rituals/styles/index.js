import {StyleSheet} from 'react-native';
// // Figure out how to use motherfucking fonts.
// const FONT = 'AktivGrotesk';
// const REGULAR = `${FONT}_Rg`;

export const styles = StyleSheet.create({
  ritualItem: {
    marginLeft: 7,
    marginRight: 7,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  ritualItemRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});

const {
  ritualItem: ritualItemStyle,
  ritualItemRow: ritualItemRowStyle,
} = styles;

export {
  ritualItemStyle,
  ritualItemRowStyle,
};
