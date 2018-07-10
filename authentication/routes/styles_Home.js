import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#002080',
   },
  weatherText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 2 },
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  buttonWrapper: {
		backgroundColor:'#D3D3D3',
		marginBottom: 10,
    width: 300,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 100,
  },
  logoWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  dateWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  roseWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rose: {
    width: 110,
    height: 120,
  },
  back: {
    width: '100%',
    height: '100%',
  }
});
