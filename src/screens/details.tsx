import React, {useContext} from 'react';
import {CartContext} from '../../contextApi/cartContext';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {darkGreen} from './constants';

export interface Product {
  id: string;
  name: string;
  image: any;
  description: string;
  price: number;
}
const laptops = [
  {
    id: '1',
    name: 'Gaming Laptop ',
    image: require('./assets/gaming-laptop.png'),
    description: 'Powerful laptop for gaming enthusiasts.',
    price: 1500,
  },
  {
    id: '2',
    name: 'Business Laptop ',
    image: require('./assets/Professional-Laptop.png'),
    description: 'Professional laptop for business and productivity.',
    price: 1200,
  },
  {
    id: '3',
    name: 'HP ProBook 14',
    image: require('./assets/Hp_1.jpg'),
    description: 'Refurbished HP ProBook 14" Laptop Intel i5-2520M 8460P.',
    price: 550,
  },
  {
    id: '4',
    name: 'Dell Latitude 13 - 7320',
    image: require('./assets/dell.png'),
    description:
      'FHD+ 13” Touch Display | i7-1180G7 | Detachable | 16GB RAM | 512 GB Windows 11 Pro',
    price: 1350,
  },
  {
    id: '5',
    name: 'Lenovo ThinkPad T460 Laptop - 14" HD',
    image: require('./assets/lenovo.png'),
    description:
      'Touch Screen, Intel Core i5, 8GB RAM, 256 GB SSD, Windows 10 Pro.',
    price: 300,
  },
  {
    id: '6',
    name: 'HP EliteBook 840 G5 14" Laptop',
    image: require('./assets/Hp_elite.png'),
    description: 'Intel Core i5, 16GB, 256GB SSD, Win11 Pro.',
    price: 390,
  },
  {
    id: '7',
    name: 'Acer Aspire 115.6',
    image: require('./assets/accer.png'),
    description: 'HD Laptop Intel N4500 A115-32-C0MW.',
    price: 330,
  },
  {
    id: '8',
    name: 'Acer Chromebook 311 11.6',
    image: require('./assets/accer_chromebook.png'),
    description: 'MediaTek Cortex A73, 4GB LPDDR4X 64GB eMMC.',
    price: 230,
  },
  {
    id: '9',
    name: 'Apple MacBook Pro 13-inch',
    image: require('./assets/mac.png'),
    description:
      '(i5 2.9GHz, 256GB SSD) (Late 2016, MLH12LL/A) - Space Gray (Refurbished).',
    price: 800,
  },
  {
    id: '10',
    name: 'Lenovo Legion Slim 5i Gen 8 Intel Laptop',
    image: require('./assets/lenovo_legion.png'),
    description:
      '6" IPS Narrow Bezel, i5-13500H, NVIDIAÂ® GeForce RTXâ¢ 4050 Laptop GPU 6GB GDDR6, 16GB, 512GB, For Gaming.',
    price: 1220,
  },
];

const DetailsPage: React.FC<{navigation: any}> = ({navigation}) => {
  const {addToCart} = useContext(CartContext);

  const handleAddToCart = (laptop: Product) => {
    const product: Product = {
      id: laptop.id,
      name: laptop.name,
      image: laptop.image,
      description: laptop.description,
      price: laptop.price,
    };
    addToCart(product);
  };

  const handleOrderPress = () => {
    navigation.navigate('Order');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories Of Laptop</Text>
        <TouchableOpacity onPress={handleOrderPress}>
          <Image source={require('./assets/order.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {laptops.map(laptop => (
          <View key={laptop.id} style={styles.laptopContainer}>
            <Image source={laptop.image} style={styles.image} />
            <Text style={styles.name}>{laptop.name}</Text>
            <Text style={styles.description}>{laptop.description}</Text>
            <Text style={styles.price}>Price: {laptop.price}$</Text>
            <Button
              title="Add to Cart"
              onPress={() => handleAddToCart(laptop)}
              color={darkGreen}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  icon: {
    width: 40,
    height: 40,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    paddingBottom: 90,
  },
  laptopContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
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
    paddingBottom: 20,
  },
  addToCartButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default DetailsPage;

//

// import React, {useState} from 'react';
// import {
//   View,
//   Image,
//   Text,
//   StyleSheet,
//   Animated,
//   TouchableOpacity,
// } from 'react-native';

// interface Laptop {
//   id: string;
//   imageUrl: string;
//   description: string;
//   price: string;
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const laptops: Laptop[] = [
//   {
//     id: '1',
//     imageUrl: './assets/gaming-laptop.png',
//     description: 'Laptop 1 Description',
//     price: '$999',
//   },
//   {
//     id: '2',
//     imageUrl: './assets/Professional-Laptop.png',
//     description: 'Laptop 2 Description',
//     price: '$1299',
//   },
//   // Add more laptops here
// ];

// interface Laptop {
//   id: string;
//   imageUrl: string;
//   description: string;
//   price: string;
// }

// interface LaptopDetailsScreenProps {
//   laptops: Laptop[];
// }

// const LaptopDetailsScreen: React.FC<LaptopDetailsScreenProps> = ({
//   laptops = [],
// }) => {
//   const [flippedLaptop, setFlippedLaptop] = useState<Laptop | null>(null);
//   const animatedValue = new Animated.Value(0);

//   const flipAnimation = () => {
//     Animated.timing(animatedValue, {
//       toValue: 180,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   };

//   const resetAnimation = () => {
//     Animated.timing(animatedValue, {
//       toValue: 0,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleLaptopPress = (laptop: Laptop) => {
//     setFlippedLaptop(laptop);
//     flipAnimation();
//   };

//   const handleCloseDetails = () => {
//     resetAnimation();
//     setFlippedLaptop(null);
//   };

//   const interpolatedRotateAnimation = animatedValue.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['0deg', '180deg'],
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.laptopGrid}>
//         {laptops.map(laptop => (
//           <TouchableOpacity
//             key={laptop.id}
//             onPress={() => handleLaptopPress(laptop)}
//             style={styles.laptopContainer}>
//             <Image source={{uri: laptop.imageUrl}} style={styles.laptopImage} />
//           </TouchableOpacity>
//         ))}
//       </View>
//       {flippedLaptop && (
//         <Animated.View
//           style={[
//             styles.detailsContainer,
//             {transform: [{rotateY: interpolatedRotateAnimation}]},
//           ]}>
//           <Text style={styles.description}>{flippedLaptop.description}</Text>
//           <Text style={styles.price}>Price: {flippedLaptop.price}</Text>
//           <TouchableOpacity
//             onPress={handleCloseDetails}
//             style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   laptopGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   laptopContainer: {
//     margin: 10,
//   },
//   laptopImage: {
//     width: 150,
//     height: 150,
//   },
//   detailsContainer: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     marginTop: 10,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });

// export default LaptopDetailsScreen;
