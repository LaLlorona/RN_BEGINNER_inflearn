import {Text, StyleSheet, View, Button, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import Logo from './assets/pics/home.png';

import {CommonActions} from '@react-navigation/native';
export default class MyDrawer extends Component {
  navigateToScreen = route => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image source={Logo} style={{width: 40, height: 40}}></Image>
            </View>
            <Text style={styles.sectionHeading}> section1</Text>
            <View style={styles.navSectionColor}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('User')}>
                User
              </Text>
              <Text style={styles.navItemStyle}>Home</Text>
              <Text style={styles.navItemStyle}>Home</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingLeft: 10, paddingBottom: 30}}>
          <Text>Copyright @ Kyungmo, 2022</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionHeading: {
    color: '#fff',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSectionColor: {
    backgroundColor: '#04b6ff',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
});
