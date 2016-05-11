import uuid from 'uuid';

export const ADD_RITUAL = 'addRitual';
export const WIPE_DATA = 'wipeData';

const defaultRitualNames = [
  'Arcane Morning',
  'Arcane Evening',
  'Unknown and Arcane',
  'Some Occult Bullshit',
  'Focus Pokus Ritual',
];

const randomItem = (list) => list[Math.floor(Math.random() * list.length)];

export const addEmptyRitual = () => ({
  type: ADD_RITUAL,
  payload: {
    name: randomItem(defaultRitualNames),
    uuid: uuid.v4(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
});

// This action might actually be useful outside of debugging
// in case of user want's to start over.
export const wipeData = (force = false) => ({
  type: WIPE_DATA,
  force
});
