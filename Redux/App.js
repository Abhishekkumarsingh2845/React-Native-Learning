import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';

import Main from './Redux/Main';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <Main/>
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

export default App;