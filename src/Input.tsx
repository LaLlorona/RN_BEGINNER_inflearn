import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';

export default class Input extends Component {
  state = {
    myTextInput: 'fukc youeah',
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#64b5f6',
    marginTop: 30,
    fontSize: 25,
    padding: 10,
  },
  mainView: {
    width: '100%',
  },
});
