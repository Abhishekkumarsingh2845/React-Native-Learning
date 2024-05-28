import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const dd = [
  { name: 'Abhishek', dept: 'IT' },
  { name: 'Harsh', dept: 'Sales' }
];

const App = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      {dd.map((item) => (
        <View >
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.dept}>{item.dept}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
  name: {
    color: 'green',
    fontSize: 18,
  },
  dept: {
    color: 'green',
    fontSize: 16,
  },
});

export default App;
