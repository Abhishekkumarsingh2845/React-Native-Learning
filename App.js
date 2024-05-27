import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const boxes = [
  { id: '1', text: 'Box 1', color: 'yellow' },
  { id: '2', text: 'Box 2', color: 'blue' },
  { id: '3', text: 'Box 3', color: 'green' },
  { id: '4', text: 'Box 4', color: 'red' },
];

const BoxComponent = () => {
  return (
    <View style={styles.container}>
      {boxes.map(box => (
        <View key={box.id} style={{ ...styles.box, backgroundColor: box.color }}>
          <Text style={styles.text}>{box.text}</Text>
        </View>
      ))}
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
