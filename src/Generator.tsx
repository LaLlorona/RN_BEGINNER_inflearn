import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React from 'react';

export default function Generator(props) {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={props.add}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#ccb9bc',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
