import Immutable from 'seamless-immutable';

export const combineImmutableReducers = (reducers) => {
  console.warn('combineImmutableReducers', reducers);
  const keys = Object.keys(reducers);

  return (state, action) => {
    return Immutable(keys.reduce((currentState, reducerName) => {
      console.warn('combineImmutableReducers', currentState, currentState.asMutable);
      const reducer = reducers[reducerName];
      const childState = currentState[reducerName];
      const nextState = currentState;
      nextState[reducerName] = reducer(childState, action);
      return nextState;
    }));
  };
};
