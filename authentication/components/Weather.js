import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from '../routes/styles_Home';

class WeatherInfo extends Component {
  render(){
    const weatherData = this.props.weatherInfo
      return (
        <View>
          <Text style={ styles.weatherText }>{ weatherData.temperature } °C </Text>
          <Text style={ styles.weatherText }>Vento: { weatherData.wind_speed } Km/h</Text>
        </View>
      );
  }
}

export default WeatherInfo;
