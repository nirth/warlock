import React, {
  Component,
  PropTypes,
  ListView,
} from 'react-native';
import {styles} from '../styles';
import Row from './Row';
import Header from './Header';
import Footer from './Footer';

const renderHeader = () => <Header />;
const renderRow = (data) => <Row {...data} />;
const renderFooter = () => <Footer />;

const RitualsList = ({rituals}) => {
  const dataSource = new ListView.DataSource({rowHasChanged: (a, b) => a !== b})
    .cloneWithRows(rituals);

  return (
    <ListView
      contentContainerStyle={styles.box}
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
