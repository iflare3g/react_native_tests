import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  buttonWrapper: {
		backgroundColor:'#D3D3D3',
		marginBottom: 10,
    width: 300,
    borderRadius: 20,
  },
  container: {
    alignItems: 'center',
    flex: 0,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  form: {
    width: 350
  },
  image: {
    margin: 10
  },
  inputText: {
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  title: {
    paddingTop: 60,
    fontSize: 40,
    margin: 10,
    textAlign: 'center',
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchTextView: {
    flex:1,
  },
  buttonsContainer: {
    flex:0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 110,
    height: 100,
  },
  back: {
    width: '100%',
    height: '100%',
  }
});
