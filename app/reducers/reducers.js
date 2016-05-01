import {
  ADD_RITUAL,
} from './Actions';

export const ritualsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_RITUAL:
      return state.concat([{}]);
    default:
      return state;
  }
};
