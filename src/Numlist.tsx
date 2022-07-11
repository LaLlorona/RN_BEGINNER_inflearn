import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Numlist(props) {
  return props.num.map((item, idx) => (
    <TouchableOpacity
      style={styles.numlist}
      key={idx}
      onPress={() => props.delete(idx)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  numlist: {
    backgroundColor: '#ffebee',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});
