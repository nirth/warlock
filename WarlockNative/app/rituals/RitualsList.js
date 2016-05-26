import React, {Component, PropTypes} from 'react';
import {ListView} from 'react-native';
import RitualItem from './RitualItem';
import {listDataSource} from '../utils';

const onRitualPress = () => {
    console.log('RitualsList:onRitualPress', 'event:', event);
};

const renderRow = (onPress) => (data) => <RitualItem {...data} onPress={onPress} />;

const RitualsList = ({rituals}) => {
  const dataSource = listDataSource(rituals);

  return (
    <ListView
      dataSource={dataSource}
      renderRow={renderRow(onRitualPress)}
    />
  );
};

RitualsList.propTypes = {
  rituals: PropTypes.array.isRequired,
};

export default RitualsList;
