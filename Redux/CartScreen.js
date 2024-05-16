// CounterDisplay.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 24,
  },
});

export default CounterDisplay;
