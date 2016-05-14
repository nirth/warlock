import {PropTypes} from 'react-native';
import {resolveTextNode} from './Utils';

const TextField = ({children, style, date, time}) => resolveTextNode(children, style, date, time);

TextField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  style: PropTypes.object,
  date: PropTypes.bool.isRequired,
  time: PropTypes.bool.isRequired,
};

TextField.defaultProps = {
  style: {},
  date: false,
  time: false,
};

export default TextField;
