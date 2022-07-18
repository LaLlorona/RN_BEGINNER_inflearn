import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Homvvve</Text>
        <Button
          title="to user screen"
          onPress={() => {
            this.props.navigation.navigate('User', {
              userIdx: 100,
              userName: 'kkm',
              userLastName: 'm',
            });
          }}></Button>

        <Button
          title="change title"
          onPress={() => {
            this.props.navigation.setOptions({
              title: 'changed',
              headerStyle: {
                backgroundColor: 'pink',
              },
              headerTintColor: 'red',
            });
          }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
