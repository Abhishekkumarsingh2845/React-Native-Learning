import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const data = [
  { id: 1, image: require('./Assets/cart1.png') },
  { id: 2, image: require('./Assets/cart1.png') },
  { id: 3, image: require('./Assets/cart1.png') },
];

const { width } = Dimensions.get('window');

const CarouselComponent = () => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        autoPlayInterval={3000}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
          </View>
        )}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CarouselComponent;
