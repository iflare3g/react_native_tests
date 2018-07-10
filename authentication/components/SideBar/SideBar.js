import React, { Component } from 'react';
import { Container, Text, Header } from 'native-base';
import { View, Stylesheet } from 'react-native';
import styles from './style';

class SideBar extends Component{
  render(){
    return(
        <Container style={{ alignItems: 'center'}}>
        <Header style={ styles.header }>
        </Header>
          <Text>Test</Text>
        </Container>
    );
  }
}

export default SideBar;
