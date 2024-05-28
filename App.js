import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import CarouselComponent from './AA.js';

const Slider = () => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image
        source={item}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CarouselComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Slider;
