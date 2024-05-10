import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
  const [catFacts, setCatFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCatFacts([data]);
      } catch (error) {
        setError(error.message);
      } 
    };
  

  const renderCatFact = ({ item }) => {
    return (
      <View style={styles.catFactItem}>
        <Text>{item.disclaimer}</Text>
        <Text>{item.time.updated}</Text>
      </View>
    );
  };



 
  return (
    <View style={styles.container}>
      <FlatList
        data={catFacts}
        renderItem={renderCatFact}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  catFactItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;