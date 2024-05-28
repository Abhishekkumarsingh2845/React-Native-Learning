import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Info = [
  {
    name: 'abhishek',
    department: 'IT',age:19},
   { name: 'harsh',
    department: 'sales',age:9},
    {name: 'kartik',
    department: 'design',age:20
  },
];

const App = () => {

  const right= Info.filter(Info=>Info.department=='sales')
  return (
    <View>
      <Text style={{backgroundColor: 'black'}}>PEOPLE DATA </Text>
      <FlatList
        data={right}
        renderItem={({item}) => (
          <View style={{backgroundColor:'white'}}>
            <Text style={{color: 'blue'}}> {item.name}</Text>
            <Text style={{color: 'blue'}}> {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
