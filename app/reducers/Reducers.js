import {
  ADD_RITUAL,
  WIPE_DATA,
} from './Actions';

export const rituals = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_RITUAL:
      return state.concat([payload]);
    case WIPE_DATA:
      return [];
    default:
      return state;
  }
};

export const 