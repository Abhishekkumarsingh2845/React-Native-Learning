import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleTextPress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      {isVisible && (
        <View style={styles.box}>
          <Text style={styles.boxText}>This is the box view</Text>
        </View>
      )}
      <TouchableOpacity onPress={handleTextPress}>
        <Text style={styles.toggleText}>
           the View
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxText: {
    fontSize: 18,
    color: 'white',
  },
  toggleText: {
    fontSize: 18,
    color: 'blue',
  },
});

export default App;
