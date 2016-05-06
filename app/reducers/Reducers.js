import {
  ADD_RITUAL,
  WIPE_DATA,
} from './Actions';

const copy = (state, change) => Object.assign({}, state, change);

export const rituals = (state = [], {type, payload}) => {
  switch (type) {
    case ADD_RITUAL: {
      const {uuid} = payload;
      if (state.hasOwnProperty(uuid)) {
        throw new Error('reducers.ritual: Ritual with UUID already exists');
      }
      return copy(state, {[uuid]: payload});
    }
    case WIPE_DATA: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export const auxiliary = (state = {}, {type, payload}) => {
  switch (type) {
    default: return state;
  }
};
