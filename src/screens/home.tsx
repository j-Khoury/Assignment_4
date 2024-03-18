import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Background from './backGroud.tsx';
import Btn from './btn.tsx';
import {darkGreen} from './constants.tsx';

interface HomeProps {
  navigation: any;
}

const Home: FC<HomeProps> = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 50, marginVertical: 220}}>
        <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontWeight: '800',
            paddingBottom: 20,
          }}>
          Let's start
        </Text>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel="Log In"
          onPress={() => props.navigation.navigate('LogIn')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Sign Up"
          onPress={() => props.navigation.navigate('SignUp')}
        />
      </View>
    </Background>
  );
};

export default Home;
