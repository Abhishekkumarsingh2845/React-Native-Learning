import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'


const App = () => {
  const[count,setcount]= useState(0);

  const add=()=>
    {
      setcount(count+1);
    } 

    const sub=()=>
      {
        setcount(count-1);
      }
  return (
    <View>
<Text>counter:{count}</Text>
<Button title='Increase' onPress={add}/>
<Button title='decrease' onPress={sub}/>
      </View>

  )
}

export default App;