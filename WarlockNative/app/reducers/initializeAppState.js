import {AsyncStorage} from 'react-native';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {rituals, auxiliary} from './Reducers';
import {asyncStorageMiddleware} from './asyncStorageMiddleware';
import {initialState} from './initialState';

const resolveState = (state) => {
  if (state === null || state === undefined) {
    return initialState;
  } else if (typeof state === 'string') {
    // TODO: Probably a good idea to validate state.
    return JSON.parse(state);
  }

  return state;
};

const createReduxApp = (state) => {
  const store = createStore(combineReducers({
    auxiliary,
    rituals,
  }),
  state,
  applyMiddleware(asyncStorageMiddleware));

  return store;
};

export const initializeAppState = () => AsyncStorage.getItem('warlockAppState')
  .then(resolveState)
  .then(createReduxApp);
