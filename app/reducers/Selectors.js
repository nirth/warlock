import {createSelector} from 'reselect';

const ritualsSelector = (state) => state.rituals;

export const ritualsAsListSelector = createSelector(
  [ritualsSelector], (rituals) => Object.keys(rituals).map((key) => rituals[key])
);
