import {
  ADD_RITUAL,
} from './Actions';

export const ritualsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_RITUAL:
      return state.concat([payload]);
    default:
      return state;
  }
};
