import React, {
  PropTypes,
  ListView,
} from 'react-native';
// import {styles} from '../styles';
import RitualItem from './RitualItem';
import HeaderRenderer from './HeaderRenderer';
import FooterRenderer from './FooterRenderer';
import {listDataSource} from '../utils';

const renderHeader = () => <HeaderRenderer />;
const renderRow = (data) => <RitualItem {...data} />;
const renderFooter = () => <FooterRenderer />;

const RitualsList = ({rituals}) => {
  const dataSource = listDataSource(rituals);

  return (
    <ListView
      dataSource={dataSource}
      renderRow={renderRow}
      renderHeader={renderHeader}
      renderFooter={renderFooter}
    />
  );
};

RitualsList.propTypes = {
  rituals: PropTypes.array.isRequired,
};

export default RitualsList;
