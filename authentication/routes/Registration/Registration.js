import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, TouchableOpacity, Alert, Keyboard }
from 'react-native';
import { Switch } from 'react-native-switch';
import { Button, Divider, FormInput, FormValidationMessage } from 'react-native-elements';
import moment from 'moment';
import styles from './style';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import { Actions } from 'react-native-router-flux';


export default class Registration extends Component {
  constructor(){
    super();
    this.state = {
      socio : true,
      dateText: 'Inserisci la tua data di nascita',
      dateHolder: null,
      email: '',
      name: '',
      surname: '',
      pwd: '',
      errorUsernameMsg: '',
      errorNameMsg: '',
      errorSurnameMsg: '',
      errorEmailMsg: '',
      errorPwdMsg: 'La password deve essere tra i 7 e i 20 caratteri e contenere almeno un numero. Inoltre deve avere un carattere speciale tra questi !@#$%.',
      errorDateMsg: '',
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

   DatePickerMainFunctionCall = () => {
    let DateHolder = this.state.dateHolder;

    if(!DateHolder || DateHolder == null){
      DateHolder = new Date();
      this.setState({
        dateHolder: moment(DateHolder).format('DD MMM YYYY')
      });
    }
    //To open the dialog
    this.DatePickerDialog.open({
      date: DateHolder,
    });
  }

  onDatePickedFunction = (date) => {
    this.setState({
      dateText: moment(date).format('DD MMM YYYY')
    });
  }

  handleChangeText = (oldState, newState) => {
    this.setState({ [oldState]: newState });
  }

   handleSubmit = (event) => {
    event.preventDefault();
    this.handleInputs();
  }

  handleInputEmail = () => {
    let validUsername = false;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(this.state.email) === false || this.state.email.trim() === ""){
      this.setState(() => ({ errorEmailMsg: "Please give me a valid email."}));
      validUsername = false;
    } else {
      this.setState(() => ({ errorEmailMsg: ""}));
      validUsername = true;
    }
    return validUsername;
  }

  handleInputPwd = () => {
      let validPwd = false;
      let pattern = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/ ;
      if(this.state.pwd.trim() === "" || pattern.test(this.state.pwd) === false){
        this.setState(() => ({ errorPwdMsg: "Please give me a valid password."}));
        validPwd = false;
      } else {
        this.setState(() => ({ errorPwdMsg: ""}));
        validPwd = true;
      }
      return validPwd;
  }

  handleInputName = () => {
   let validName = false;
   let pattern = /^[a-zA-Z]+$/ ;
   if(this.state.name.trim() === "" || pattern.test(this.state.name) === false){
      this.setState(() => ({ errorNameMsg: "Sono permesse solo lettere."}));
      validName = false;
    } else {
      this.setState(() => ({ errorNameMsg: ""}));
      validName = true;
    }
    return validName;
  }

  handleInputSurname = () => {
   let validSurname = false;
   let pattern = /^[a-zA-Z]+$/ ;
   if(this.state.surname.trim() === "" || pattern.test(this.state.surname) === false){
      this.setState(() => ({ errorSurnameMsg: "Sono permesse solo lettere."}));
      validSurname = false;
    } else {
      this.setState(() => ({ errorSurnameMsg: ""}));
      validSurname = true;
    }
    return validSurname;
  }

  handleInputDate = () => {
   let validDate = false;
   let pattern = 'Inserisci la tua data di nascita' ;
   if(this.state.dateText.trim() === pattern){
      this.setState(() => ({ errorDateMsg: "Devi inserire una data."}));
      validDate = false;
    } else {
      this.setState(() => ({ errorDateMsg: ""}));
      validDate = true;
    }
    return validDate;
  }

  handleInputs = () => {
    let validPwd = this.handleInputPwd();
    let validUsername = this.handleInputEmail();
    let validName = this.handleInputName();
    let validSurname = this.handleInputSurname();
    let validDate = this.handleInputDate();
    if(validPwd && validUsername && validName && validSurname && validDate){
      console.log(this.state);
      Keyboard.dismiss();
      Actions.HomePage();
    }
    else {
      Alert.alert("Controlla bene gli avvisi sotto i campi. \n Hai degli errori di input.");
      Keyboard.dismiss();
      return;
    }
  }

  render() {
    return (
      <BackgroundImage>
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-30}>
        <View style={styles.logoWrapper}>
           <Text style={styles.logo_upper}>
              Circolo Nautico
            </Text>
            <Text style={styles.logo_down}>
                Santa Cesarea {"\n"} Terme
            </Text>
          </View>
          <View style={ styles.registerText }>
            <Text style={styles.paragraph }>
              REGISTRATI
            </Text>
            <View>
              <Divider style={ styles.divider } />
            </View>
          </View>
          <ScrollView style={styles.form} keyboardShouldPersistTaps="always">
           <View style={ styles.form }>
            <FormInput
                placeholder="Nome"
                placeholderTextColor="black"
                containerStyle={styles.inputWrapper}
                inputStyle={ styles.inputStyle }
                underlineColorAndroid="black"
                selectionColor="black"
                value={ this.state.name }
                onChangeText={(text) => this.handleChangeText('name',text)}/>
            <FormValidationMessage>{ this.state.errorNameMsg }</FormValidationMessage>
            <FormInput
                placeholder="Cognome"
                placeholderTextColor="black"
                underlineColorAndroid="black"
                inputStyle={ styles.inputStyle }
                containerStyle={styles.inputWrapper}
                selectionColor="black"
                value={ this.state.surname }
                onChangeText={(text) => this.handleChangeText('surname',text)} />
                        <FormValidationMessage>{this.state.errorSurnameMsg}</FormValidationMessage>
            <FormInput
                ref = {input=>this.emailInput = input }
                placeholder="Email"
                placeholderTextColor="black"
                underlineColorAndroid="black"
                inputStyle={ styles.inputStyle }
                containerStyle={styles.inputWrapper}
                selectionColor="black"
                value={ this.state.email }
                onChangeText={(text) => this.handleChangeText('email',text)}/>
                        <FormValidationMessage>{this.state.errorEmailMsg}</FormValidationMessage>

            <FormInput
                placeholder="Password"
                placeholderTextColor="black"
                underlineColorAndroid="black"
                inputStyle={ styles.inputStyle }
                secureTextEntry={ true }
                containerStyle={styles.inputWrapper}
                selectionColor="black"
                value={ this.state.password }
                onChangeText={(text) => this.handleChangeText('pwd',text)} />
                        <FormValidationMessage>{this.state.errorPwdMsg}</FormValidationMessage>
             <View style={ styles.dateWrapper }>
              <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)}>
                <Text style={ styles.dateText }> { this.state.dateText }</Text>
              </TouchableOpacity>
            </View>
            <FormValidationMessage>{ this.state.errorDateMsg }</FormValidationMessage>
            <DatePickerDialog ref={c => this.DatePickerDialog = c} onDatePicked={this.onDatePickedFunction.bind(this)} />
            </View>
          </ScrollView>
          <View style={ styles.switchWrapper }>
            <Text style={styles.leftTextSwitch}>OSPITE</Text>
            <Switch
                value={false}
                style={ styles.switchButton }
                activeText={''}
                inActiveText={''}
                backgroundActive={'blue'}
                backgroundInactive={'#66a3ff'}
                onValueChange={(val) => this.handleChangeText('socio', val)}>
            </Switch>
            <Text style={styles.rightTextSwitch}>SOCIO</Text>
          </View>
          <View style={ styles.buttonWrapper }>
             <Button
                title="SALVA"
                style={ styles.saveButton }
                onPress= { this.handleSubmit }
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "#002699",
                  width: 300,
                  height: 45,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 20 }}>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </BackgroundImage>
    );
  }
}
