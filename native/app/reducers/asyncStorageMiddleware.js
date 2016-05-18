import {AsyncStorage} from 'react-native';
import {nextStack} from '../utils';

// Middleware will take action and dispatch `saveAppState` action on next call stack.
// On next run it will save updated app state.
export const asyncStorageMiddleware = (store) => (next) => (action) => {
  // Saving application state on every mutation.

  if (action.type === 'saveAppState') {
    const state = store.getState();
    // TODO: It might make sense to keep 5-10 versions of app state in key-value store.
    // nextStach(saveState(store));
    AsyncStorage.setItem('warlockAppState', JSON.stringify(state));
    return null;
  }
  // TODO: Probably need to ignore async actions.
  // TODO: It might cause race conditions, keep an eye on this one.
  nextStack(() => store.dispatch({type: 'saveAppState'}));

  return next(action);
};
