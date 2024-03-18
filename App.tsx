import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/screens/details.tsx';
import Home from './src/screens/home.tsx';
import Order from './src/screens/order.tsx';
import LogIn from './src/screens/login.tsx';
import SignUp from './src/screens/signup.tsx';
import {CartProvider} from './contextApi/cartContext.tsx';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default MyStack;
