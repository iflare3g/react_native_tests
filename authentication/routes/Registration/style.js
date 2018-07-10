import {StyleSheet} from 'react-native';
import { Constants } from 'expo';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#002699',
    paddingTop: 80,
  },
  logo_down: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#002699',
    margin: 0,
  },
  logo_upper: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#002699',
    marginTop: 3,
  },
  logoWrapper: {
    position: 'absolute',
    top: 0,
    flex: 1,
    alignSelf: 'flex-start',
    right: 0,
    left: 0,
    paddingTop: 20,
  },
  form: {
    flex: 1,
    paddingTop:0,
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    marginBottom: 0,
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  switchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    marginTop: 10,
    paddingTop: 10,
  },
  leftTextSwitch: {
    margin: 10,
    marginLeft: 50,
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 18,
  },
  rightTextSwitch: {
    margin: 10,
    marginRight: 50,
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 18,
  },
  switchButton: {
    margin: 10,
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
    width: '100%',
    marginTop: -10,
  },
  datePickerBox:{
    marginTop: 9,
    padding: 0,
    height: 38,
    justifyContent:'center',
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
    padding: 10,
    marginLeft: 5
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  inputStyle: {
    color: 'black',
    fontSize: 16
  },
  inputWrapper: {
    marginBottom: 10,
    width: '100%',
    borderBottomColor: "black",
  }
});

export default styles;
