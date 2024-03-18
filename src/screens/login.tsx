import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Background from './backGroud.tsx';
import Btn from './btn.tsx';
import {darkGreen} from './constants.tsx';
import Field from './fields.tsx';

interface LoginProps {
  navigation: any;
}

const Login: FC<LoginProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError('');
  };

  return (
    <Background>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <View style={{alignSelf: 'center', width: 460, alignContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 'bold',
              marginVertical: 20,
              textAlign: 'center',
              paddingRight: 40,
            }}>
            Login
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: '100%',
              alignContent: 'center',
              width: '100%',
              borderTopLeftRadius: 120,
              paddingRight: 35,
              paddingTop: 80,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
              Welcome Back
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 19,
                fontWeight: 'bold',
                marginBottom: 30,
              }}>
              Login to your account
            </Text>
            <Field
              placeholder="Email / Username"
              keyboardType={'email-address'}
              onChangeText={handleEmailChange}
              value={email}
            />
            {emailError ? (
              <Text style={{color: 'red'}}>{emailError}</Text>
            ) : null}
            <Field
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              value={password}
            />
            {passwordError ? (
              <Text style={{color: 'red'}}>{passwordError}</Text>
            ) : null}
            <View
              style={{
                alignItems: 'center',
                width: '78%',
                paddingRight: 26,
                paddingTop: 25,
                marginBottom: 45,
              }}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Forgot Password ?
              </Text>
            </View>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Login"
              onPress={() => {
                if (email.trim() === '') {
                  setEmailError('Please enter your email');
                } else {
                  setEmailError('');
                }

                if (password.trim() === '') {
                  setPasswordError('Please enter your password');
                } else {
                  setPasswordError('');
                }

                if (email.trim() !== '' && password.trim() !== '') {
                  props.navigation.navigate('Details');
                }
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
                Don't have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUp')}>
                <Text
                  style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default Login;
