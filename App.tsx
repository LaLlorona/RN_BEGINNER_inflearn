import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackgroundBase} from 'react-native';
import MyHeader from './src/MyHeader';
export default class App extends Component {
  state = {
    appName: 'my app fuckyou',
  };
  render() {
    return (
      <View style={styles.mainView}>
        <MyHeader name={this.state.appName}></MyHeader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  subView2: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    fontSize: 20,
    color: 'red',
    padding: 20,
  },
});
