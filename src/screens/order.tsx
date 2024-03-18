import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Image,
  ToastAndroid,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import {CartContext, Product} from '../../contextApi/cartContext';
import {darkGreen} from './constants';

const CartPage: React.FC = () => {
  const {cart, removeFromCart} = useContext(CartContext);
  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);

    if (Platform.OS === 'android') {
      ToastAndroid.show('Item removed from cart', ToastAndroid.SHORT);
    } else {
      Alert.alert('Item removed from cart');
    }
  };

  const renderCartItem = ({item}: {item: Product}) => (
    <View style={styles.content}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.laptopContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Remove Item"
          onPress={() => handleRemoveItem(item.id)}
          color={darkGreen}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Order</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const windowWidth = Dimensions.get('window').width;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  laptopContainer: {
    marginBottom: 20,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  content: {
    padding: 10,
    paddingBottom: 90,
  },

  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '100%',
    borderRadius: 50,
    fontSize: 20,
    height: 50,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export default CartPage;
