import {Text, StyleSheet, View, Button, Image} from 'react-native';
import React, {Component} from 'react';
import PictogramHome from './assets/pics/home.png';
export default class UserDrawer extends Component {
  //   drawerStyle = () => {
  //     this.props.navigation.setOptions({
  //       drawerIcon: () => (
  //         <Image source={PictogramHome} style={{width: 40, height: 40}}></Image>
  //       ),
  //     });
  //   };
  render() {
    // this.drawerStyle();
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>user screen</Text>
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
