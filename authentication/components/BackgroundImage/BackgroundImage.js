import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import styles from './style.js';

export default class BackgroundImage extends Component {
  render() {
    return (
        <ImageBackground style={styles.backgroundImage} source={{uri:"https://sketch.io/render/sk-bb5eb7c251c57d7623289137e4dd7c8d.jpeg"}}>
          { this.props.children }
        </ImageBackground>
    );
  }
}
