import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

export default function MyHeader(props) {
  return (
    <TouchableOpacity
      style={styles.header}
      onLongPress={() => alert('hello fucker')}>
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
