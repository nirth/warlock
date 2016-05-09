import React, {
  Component,
  PropTypes,
  ListView,
} from 'react-native';
// import {styles} from '../styles';
import RitualItem from './RitualItem';
// import HeaderRenderer from './HeaderRenderer';
// import FooterRenderer from './FooterRenderer';
import {listDataSource} from '../utils';

const renderRow = (onPress) => (data) => <RitualItem {...data} onPress={onPress} />;

class RitualsList extends Component {
  static propTypes = {
    rituals: PropTypes.array.isRequired,
  };

  onRitualPress({uuid}) {
    // console.log('onRitualPress', uuid);
    // console.warn('onRitualPress', uuid);
  }

  render() {
    const {rituals} = this.props;
    const dataSource = listDataSource(rituals);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={renderRow(::this.onRitualPress)}
      />
    );
  }
}

export default RitualsList;
