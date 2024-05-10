// ParentComponent.js
import React from 'react';
import { View } from 'react-native';
import ChildComponent from './ContextApi.js/child';
import MyContext from './ContextApi.js/Context';

const ParentComponent = () => {
  const data = {
    message: 'Hello from Parent!',
    count: 810,
  };

  return (
    <MyContext.Provider value={data}>
      <View>
        <ChildComponent />
      </View>
    </MyContext.Provider>
  );
};

export default ParentComponent;
