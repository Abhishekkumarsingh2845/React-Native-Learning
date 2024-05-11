
import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const countRef = useRef(0);

  const increaseCounter = () => {
    countRef.current += 1;
    forceUpdate(); // Force re-render to update the displayed count
  };

  const decreaseCounter = () => {
    countRef.current -= 1;
    forceUpdate(); // Force re-render to update the displayed count
  };

  const forceUpdate = () => {
    // Dummy update to force re-render
    countRef.current += 0;
  };

  return (
    <View>
      <Text>Counter: {countRef.current}</Text>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />
    </View>
  );
};

export default App;
