import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Authentication from './routes/Authentication';
import HomePage from './routes/HomePage';
import Registration from './routes/Registration/Registration';

class App extends Component {
  render() {
    return(
      <Router>
        <Scene key='root'>
          <Scene
            component={ Authentication }
            hideNavBar={ true }
            initial={ true }
            key= 'Authentication'
            title='Authentication'
          />
          <Scene
            component={ HomePage }
            hideNavBar= { true }
            key= 'HomePage'
            title= 'Home Page'
          />
          <Scene
            component={ Registration }
            hideNavBar= { true }
            key= 'Registration'
            title= 'Registration'
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
