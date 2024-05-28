import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BoxComponent from './ComponentPropPassing/Component'; // Assuming BoxComponent.js is in the same directory

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BoxComponent color="red" />
      <BoxComponent color="blue" />
      <BoxComponent color="green" />
      <BoxComponent color="yellow" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
