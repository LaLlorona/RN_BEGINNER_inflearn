import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';

export default class User_Tab extends Component {
  render() {
    console.warn(this.props.route);
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>User screen</Text>
        <Button
          title="to home screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
