import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Home_Tab extends Component {
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
            this.props.navigation.navigate('Home_Stack');
          }}></Button>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
