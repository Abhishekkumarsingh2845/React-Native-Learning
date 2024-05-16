import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './action';
import cartIcon from '../Assets/cart1.png'; // Import the image

const CounterDisplay = () => {
  const [cartCount, setCartCount] = useState(0);
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setCartCount(cartCount + 1);
  };

  const handleDecrement = () => {
    if (cartCount > 0) {
      dispatch(decrement());
      setCartCount(cartCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleIncrement} style={styles.iconContainer}>
        <Image source={cartIcon} style={styles.icon} resizeMode="contain" />
        {cartCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={handleIncrement} style={styles.button}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecrement} style={styles.button}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttons: {
    bottom: -122,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  iconContainer: {
    position: 'relative',
    marginTop: -222,
  },
  icon: {
    width: 100,
    height: 90,
    backgroundColor: 'white',
    left: 22,
    marginTop: 22,
  },
  badge: {
    position: 'absolute',
    top: -5,
    left: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 32,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CounterDisplay;
