import {uniqueId} from '../utils';

export const ADD_RITUAL = 'addRitual';

export const addEmptyRitual = () => ({
  type: ADD_RITUAL,
  payload: {
    name: 'Arcanely Unknown',
    uuid: uniqueId(),
  },
});
