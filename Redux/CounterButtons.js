// CounterButtons.js

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const CounterButtons = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default CounterButtons;
