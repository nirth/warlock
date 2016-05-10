import Immutable from 'seamless-immutable';

export const combineImmutableReducers = (reducers) => {
  const keys = Object.keys(reducers);

  return (state, action) => Immutable(keys.reduce((currentState, reducerName) => {
    const reducer = reducers[reducerName];
    const childState = currentState[reducerName];
    const nextState = currentState;
    nextState[reducerName] = reducer(childState, action);
    return nextState;
  }));
};
