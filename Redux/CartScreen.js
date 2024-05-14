// CartScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './action';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ name: 'Sample Item' }));
  };

  return (
    <View>
      <Text>Cart Itms:</Text>
      {cartItems.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
      <Button title="Add Item to Cart" onPress={handleAddToCart} />
    </View>
  );
};

export default CartScreen;



