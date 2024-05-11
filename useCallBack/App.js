import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Decrement function
  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
};

export default Counter;
