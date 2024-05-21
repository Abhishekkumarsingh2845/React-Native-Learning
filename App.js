import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('./Assets/clothes.png'),
  require('./Assets/clothes.png'),
  require('./Assets/clothes.png'),
  // Add more image paths as needed
];

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
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width,
    height: 200, // Adjust height as needed
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Slider;
