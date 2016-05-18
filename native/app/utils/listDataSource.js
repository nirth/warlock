import {ListView} from 'react-native';

const defaultComparator = (a, b) => a !== b;

/**
 * Utility function creates basic data source for a list view with default comparator.
 *
 * @param {Array} items - Array of items to be added to data source. Default: Empty array (`[]`).
 * @param {function} rowComparator - Comparator function. Default: Uses basic comparator.
 * @returns {ListView.DataSource} - Initialized and ready to use datasource.
 */
export const listDataSource = (items = [], rowComparator = defaultComparator) => new ListView
  .DataSource({rowHasChanged: rowComparator})
  .cloneWithRows(items);
