import { View, Text, FlatList } from 'react-native'
import React from 'react'

const App = () => {
  const data=[{
    name:'abhsihek',
    age:22
  },
{
  name:'harsh',
  age:22
}]
const renderItem=({item,index})=>{
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.age}</Text>
    </View>
  )
}

  return (
    <View>
      <FlatList
      data={data}
      renderItem={renderItem}/>

    </View>
  )
}

export default App