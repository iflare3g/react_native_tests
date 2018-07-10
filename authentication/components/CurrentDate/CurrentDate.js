import React, {Component} from 'react';
import moment from 'moment';
import localization from 'moment/locale/it';
import { Text } from 'react-native';
import styles from './styles';

class CurrentDate extends Component {
  render(){
    return (
      <Text style={ styles.date }>
        { moment().locale("it", localization).format('dddd DD MMMM YYYY')}
      </Text>
    );
  }
}

export default CurrentDate;
