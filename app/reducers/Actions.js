import uuid from 'uuid';

export const ADD_RITUAL = 'addRitual';
export const WIPE_DATA = 'wipeData';

export const addEmptyRitual = () => ({
  type: ADD_RITUAL,
  payload: {
    name: 'Arcanely Unknown',
    uuid: uuid.v4(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
});

export const wipeData = () => ({
  type: WIPE_DATA,
});
