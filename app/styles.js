import {StyleSheet} from 'react-native';

const FONT = 'AktivGrotesk';
const REGULAR = `${FONT}_Rg`;

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  centeredBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  heading: {
    // fontFamily: REGULAR,
    fontSize: 16,
    textAlign: 'left',
    margin: 5,
  },
  subHeading: {
    // fontFamily: REGULAR,
    fontSize: 14,
    textAlign: 'left',
    margin: 2,
  },
  bodyText: {
    // fontFamily: REGULAR,
    fontSize: 13,
    textAlign: 'left',
    margin: 1,
  },
  greyBodyText: {
    // fontFamily: REGULAR,
    fontSize: 14,
    textAlign: 'left',
    color: 'rgba(222,222,222,1)',
    margin: 1,
  },
});
