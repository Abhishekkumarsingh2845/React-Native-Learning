import React, {useState} from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../Redux/action';

const Main = () => {
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
      <Image source={require('../Assets/cart1.png')} style={styles.cart} />
      {cartCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartCount}</Text>
        </View>
      )}

      <Text style={styles.main}>ADD TO ITEM</Text>

      <View style={styles.product}>
        <Image source={require('../Assets/clothes.png')} style={styles.image} />
        <View style={styles.buttons}>
          <Button title="Add" onPress={handleIncrement} />
          <Button title="Remove" onPress={handleDecrement} />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.product}>
        <Image source={require('../Assets/clothes1.png')} style={styles.image} />
        <View style={styles.buttons}>
          <Button title="Add" onPress={handleIncrement} />
          <Button
            title="Remove"
            onPress={handleDecrement}
          />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.product}>
        <Image source={require('../Assets/clothes2.png')} style={styles.image} />
        <View style={styles.buttons}>
          <Button title="Add" onPress={handleIncrement} />
          <Button
            title="Remove"
            onPress={handleIncrement}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    width:"100%",
  },
  main: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 110,
  },
  buttons: {
    justifyContent: 'space-between',
    height: 90,
  },
  iconContainer: {
    position: 'relative',
    marginTop: -472,
    marginLeft: 112,
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    left: 22,
    marginTop: 22,
    borderRadius: 19,
  },
  badge: {
    position: 'absolute',
    top: 65,
    left: 152,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  cart: {
    width:70,
    height: 70,
  },
  horizontalLine: {
    width: '100%', // Adjust the width as needed
    height: 0.8, // Adjust the thickness as needed
    backgroundColor: 'grey', // Adjust the color as needed
    marginBottom: 20,
  },
});

export default Main;
