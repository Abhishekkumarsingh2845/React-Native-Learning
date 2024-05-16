// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import CounterDisplay from './Redux/CounterDisplay';
import CounterButtons from './Redux/CounterButtons';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterDisplay />
        <CounterButtons />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
