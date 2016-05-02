import {AsyncStorage} from 'react-native';

const nextStack = (fun) => setTimeout(fun, 0);

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
  nextStack(() => store.dispatch({type: 'saveAppState'}));

  return next(action);
};
