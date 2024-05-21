import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import CarouselComponent from './AA.js';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
