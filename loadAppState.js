import {AsyncStorage} from 'react-native';

const initialState = {
  player: {},
  rituals: [],
};

export const loadAppState = () => AsyncStorage.getItem('warlockState')
  .then((warlockState) => {
    if (warlockState === null) {
      return initialState;
    }

    return warlockState;
  });
