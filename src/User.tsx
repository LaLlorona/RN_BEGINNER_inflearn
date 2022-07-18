import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';

export default class User extends Component {
  render() {
    const {params} = this.props.route;
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>hell ouser</Text>
        <Button
          title="to home screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}></Button>
        <Text>User Idx : {JSON.stringify(userIdx)}</Text>
        <Text>User name : {JSON.stringify(userName)}</Text>
        <Text>User last name : {JSON.stringify(userLastName)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
