import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';

export default class HomeDrawer extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home screen</Text>
        <Button
          title="to user screen"
          onPress={() => {
            this.props.navigation.navigate('User');
          }}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
