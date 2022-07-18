import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  Text,
  View,
  StyleSheet,
  ImageBackgroundBase,
  Alert,
  ScrollView,
  Button,
  TextInput,
  Image,
  Linking,
} from 'react-native';

import Home from './src/Home';
import User from './src/User';
import Logo from './src/Logo';

import PictogramHome from './src/assets/pics/home.png';

import HomeDrawer from './src/Home_drawer';
import UserDrawer from './src/User_drawer';
import MyDrawer from './src/MyDrawer';

import Home_Tab from './src/Home_Tab';
import User_Tab from './src/User_Tab';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-information-circle-outline';
          } else {
            iconName = 'newspaper-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home_Tab} />
      <Tab.Screen name="User" component={User_Tab} />
      <Tab.Screen name="Message" component={User_Tab} />
    </Tab.Navigator>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Hlep"
        onPress={() => Linking.openURL('https://www.google.com')}
        icon={() => <Logo></Logo>}></DrawerItem>
      <DrawerItem
        label="Info"
        onPress={() => Linking.openURL('https://www.google.com')}></DrawerItem>
    </DrawerContentScrollView>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 200,
        },
        drawerActiveTintColor: 'red',
      }}
      drawerContent={props => <MyDrawer {...props}></MyDrawer>}>
      <Drawer.Screen name="Route" component={TabComponent} />
    </Drawer.Navigator>
  );
};
export default class App extends Component {
  logoTitle = () => {
    return (
      <Image
        style={{width: 40, height: 40}}
        source={require('./src/assets/pics/home.png')}></Image>
    );
  };

  render() {
    return (
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       drawerType: 'slide',
      //       drawerStyle: {
      //         backgroundColor: '#c6cbef',
      //         width: 200,
      //       },
      //       drawerActiveTintColor: 'red',
      //     }}
      //     drawerContent={props => <MyDrawer {...props}></MyDrawer>}>
      //     <Drawer.Screen
      //       name="Home"
      //       component={HomeDrawer}
      //       options={{
      //         drawerIcon: () => (
      //           <Image
      //             source={PictogramHome}
      //             style={{width: 40, height: 40}}></Image>
      //         ),
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={UserDrawer} />
      //   </Drawer.Navigator>
      // </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: 'pink',
      //       },
      //       headerTintColor: 'black',
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={Home}
      //       options={{
      //         title: 'Home Screedfn ',
      //         headerTitle: () => <Logo />,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={() => alert('hello')}
      //             color="orange"></Button>
      //         ),
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={User}
      //       initialParams={{
      //         userIdx: 123,
      //         userName: 'please go to home first',
      //         userLastName: 'go to home~',
      //       }}
      //       options={{
      //         title: 'user screen yeah',

      //         headerStyle: {
      //           backgroundColor: 'cyan',
      //         },
      //         headerTintColor: 'black',
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="User" component={User}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
