import React,{useReducer} from 'react';
import {View,Text,Button} from 'react-native';

const Reducer=(state,action)=>
  {
    switch(action.type)
    {
      case 'INCREMENT':
        return {...state,count:state.count+1}
    
    
      case 'DECREMENT':
        return {...state,count:state.count-1}

      default:
        return state;
    }
  };

  const Counter =()=>
    {
      const initalState={count:0};
      const[state,dispatch]=useReducer(Reducer,initalState);
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Count: {state.count}</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
          </View>
        </View>
      );
    }
    export default Counter;
  