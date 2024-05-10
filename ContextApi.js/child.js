// ChildComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import MyContext from './Context';

const ChildComponent = () => {
  return (
    <MyContext.Consumer>
      {value => (
        <View>
          <Text>{value.message}</Text>
          <Text>Count: {value.count}</Text>
        </View>
      )}
    </MyContext.Consumer>
  );
};

export default ChildComponent;
