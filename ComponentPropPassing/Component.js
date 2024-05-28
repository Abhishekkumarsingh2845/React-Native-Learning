import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxComponent = ({ color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: color }]}>
        <Text style={styles.text}>Box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BoxComponent;
