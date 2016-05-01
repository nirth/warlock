import {AsyncStorage} from 'react-native';
import {combineReducers, createStore} from 'redux';
import {ritualsReducer} from './reducers';

const initialState = {
  // player: {},
  rituals: [],
};

const resolveState = (state) => {
  if (state === null || state === undefined) {
    return initialState;
  }

  return state;
};

const createReduxApp = (state) => {
  const store = createStore(combineReducers({
    rituals: ritualsReducer,
  }), state);

  return store;
};

export const initializeAppState = () => AsyncStorage.getItem('warlockAppState')
  .then(resolveState)
  .then(createReduxApp);
