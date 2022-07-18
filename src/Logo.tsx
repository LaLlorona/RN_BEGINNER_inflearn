import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

import logo from './assets/pics/home.png';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image style={{width: 40, height: 40}} source={logo}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
