import React, { Component } from 'react';
import { Text,
         TextInput,
         TouchableOpacity,
         View,
         Alert,
         Switch,
         Image,
         ScrollView,
         ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import styles from './styles';

class Authentication extends Component {
  constructor(){
    super();
    this.state = { username: '',
                   password: '',
                   saved: false,
                   errorUrsernameMsg: '',
                   errorPwdMsg: '', };
  }

  userSignup(){
    Actions.HomePage();
  }

  userLogin(){
    let validUsername = false;
    let validPwd = false;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(this.state.username) === false || this.state.username.trim() === ""){
      this.setState(() => ({ errorUrsernameMsg: "Please give me a valid username."}));
      validUsername = false;
    } else {
      this.setState(() => ({ errorUrsernameMsg: ""}));
      validUsername = true;
    }

    if(this.state.password.trim() === ""){
      this.setState(() => ({ errorPwdMsg: "Please fill the password field."}));
      validPwd = false;
    } else {
      this.setState(() => ({ errorPwdMsg: ""}));
      validPwd = true;
    }

    if(validPwd && validUsername){
      Actions.HomePage();
    }
    else {
      return;
    }
  }

  _onSavedCredentials(value){
    this.setState({ saved: value });
    let saved = this.state.saved
    Alert.alert(saved.toString());
  }

  render(){
    return (
      <ImageBackground style={ styles.back } source={require('./assets/img/back.jpg')}>
      <ScrollView contentContainerStyle={ styles.container }
                  keyboardShouldPersistTaps="always">
        <View style={{paddingTop: 30}}>
          <Image style={ styles.logo } source={require('./assets/img/logo-originale.png')} />
        </View>
        <Text style={ styles.title }> Santa Cesarea Terme </Text>

        <View style={ styles.form }>
          <TextInput
            editable={ true }
            onChangeText={ (username) => this.setState({ username: username }) }
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={ styles.inputText }
            underlineColorAndroid="black"
            value={ this.state.username }
          />
          {!!this.state.errorUrsernameMsg && (
            <Text style={{color: "red"}}>{this.state.errorUrsernameMsg}</Text>
          )}

          <TextInput
            editable={ true }
            onChangeText={ (password) => this.setState({ password: password }) }
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={ true }
            style={ styles.inputText }
            underlineColorAndroid="black"
            value={ this.state.password }
          />
          {!!this.state.errorPwdMsg && (
            <Text style={{color: "red"}}>{this.state.errorPwdMsg}</Text>
          )}

          <View style={ styles.switchContainer }>
            <View style={styles.switchTextView}>
              <Text style={styles.switchText}> Remember credentials </Text>
            </View>
            <View style={styles.switchText}><Switch
              onValueChange= { (value) => this._onSavedCredentials(value) }
              value = { this.state.saved }
              tintColor="black"
              thumbTintColor="white"
              onTintColor="green"
            /></View>
          </View>

          <View style={ styles.buttonsContainer }>
            <View>
              <TouchableOpacity
                style={ styles.buttonWrapper }
                onPress={ this.userLogin.bind(this) }
              >
              <Text style={ styles.buttonText }> Log In </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={ styles.buttonWrapper }
              onPress={ this.userSignup.bind(this) }
            >
              <Text style={ styles.buttonText }> Sign up </Text>
            </TouchableOpacity>
          </View>

            <Text style={ styles.buttonText }
                  onPress={ () => Alert.alert("RESETTED") }
            > Forgot password ? </Text>
          </View>

        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

Authentication.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  saved: PropTypes.bool,
  userLogin:PropTypes.func,
  userSignup: PropTypes.func,
  _onSavedCredentials: PropTypes.func,
}

export default Authentication;
