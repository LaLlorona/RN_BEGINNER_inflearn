import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackgroundBase,
  Alert,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import MyHeader from './src/MyHeader';
import Generator from './src/Generator';
import Numlist from './src/Numlist';
import Input from './src/Input';
export default class App extends Component {
  state = {
    appName: 'my app yes ',
    random: [36, 999],
    myTextInput: 'fukc youeah',
    alphabet: ['b', 'c'],
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };
  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;

    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = position => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    });
    this.setState({
      random: newArray,
    });
  };

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <MyHeader name={this.state.appName}></MyHeader>

        <Generator add={this.onAddRandomNum}></Generator>
        <ScrollView
          style={styles.scrollView}
          onMomentumScrollEnd={() => alert('begin')}>
          <Numlist num={this.state.random} delete={this.onNumDelete}></Numlist>
        </ScrollView> */}

        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
        />
        <Button
          title="add text here fucker"
          onPress={this.onAddTextInput}></Button>

        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text key={idx}>{item}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    // justifyContent: 'center',
    paddingTop: 50,
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
  scrollView: {
    width: '100%',
  },
  input: {
    backgroundColor: 'red',
  },
});
