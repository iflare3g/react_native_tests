import React, {Component} from 'react';
import WeatherInfo from '../components/Weather';
import CurrentDate from '../components/CurrentDate/CurrentDate';
import { Text,
         TouchableOpacity,
         View,
         Keyboard,
         Image,
         ImageBackground,
         ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles_Home';
import NavigationBar from 'react-native-navbar';
import SideBar from '../components/SideBar/SideBar';
import SideMenu from 'react-native-side-menu';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      weatherData : [],
      isOpen: false,
    };
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  toggleSideMenu() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }


  componentDidMount(){
    Keyboard.dismiss();
    let openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Rome,it&APPID=b5fa716f150a7f0e1336b164874ffe01&units=metric"
    return fetch(openWeatherUrl)
      .then((response) => response.json())
      .then(( responseJson ) => {
        const weatherInfo = this.mapOpenWeatherData(responseJson);
        this.setState({ weatherData: weatherInfo });
      })
      .catch((error) => {
        Alert.alert(error.toString());
      });
  }
  userLogout(){
    Actions.Authentication();
  }

  register(){
    Actions.Registration();
  }

  mapOpenWeatherData(responseJson){
    if(responseJson){
        return {
          "temperature": responseJson.main.temp,
          "wind_speed": parseInt(responseJson.wind.speed) * 3.60,
        }
    }
  }

  render() {
    const rightBtn = {
      title: 'Logout',
      handler: () => this.userLogout(),
    };
    const leftBtn = {
      title: 'Menu',
      handler: () => this.register(),
    };

    const title = {
      title: "Home",
      style: styles.title,
    };

    const menu = <SideBar />;

    return (
      <ImageBackground style={ styles.back } source={{uri:"https://sketch.io/render/sk-bb5eb7c251c57d7623289137e4dd7c8d.jpeg"}}>
        <SideMenu menu={ menu }>
        <View style={ styles.container }>
          <NavigationBar style={ styles.navBar }
            title={ title }
            rightButton = { rightBtn }
            leftButton = { leftBtn } />
          <View style={ styles.logoWrapper }>
            <Image style={ styles.logo } source={require('./assets/img/logo-originale.png')} />
          </View>
          <View style={ styles.content }>
            <View style={styles.roseWrapper}>
              <Image style={ styles.rose } source={require('./assets/img/rose.png')} />
            </View>
            <View style={ styles.dateWrap }>
              <CurrentDate />
            </View>
          </View>
          <View style={ styles.footer }>
              <WeatherInfo weatherInfo= {this.state.weatherData} />
          </View>
        </View>
        </SideMenu>
      </ImageBackground>
    );
  }
}

export default HomePage;
