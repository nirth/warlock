import {AsyncStorage} from 'react-native';

const nextStack = (fun) => setTimeout(fun, 0);

const saveState = (store) => () => {
  const state = store.getState();
  AsyncStorage.setItem('warlockAppState', JSON.stringify(state));
};

export const asyncStorageMiddleware = (store) => (next) => (action) => {
  // Saving application state on every mutation.
  nextStack(saveState(store));
  // TODO: We probably need to ignore async actions.
  // TODO: It might make sense to keep 5-10 versions of app state in key-value store.
  // in case one of them is invalid use previous.
  return next(action);
};
