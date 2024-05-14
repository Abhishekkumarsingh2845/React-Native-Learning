import React from 'react';
import {View,Text} from "react-native";
import MyContext from './Context';

const MyChild =()=>
  {
    return (
      <MyContext.Consumer>
        {value=>
        <View>
          <Text>{value.message}</Text>
          <Text>{value.count}</Text>
          </View>}
      </MyContext.Consumer>
    )
  }
 export default MyChild;








