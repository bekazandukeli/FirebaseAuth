import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import {LoginScreenProps} from '../types';
import {logIn} from '../lib/firebase';

export default function Login({navigation}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={{backgroundColor: 'white'}}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        style={{backgroundColor: 'white'}}
      />
      <Button title="Log In" onPress={() => logIn(email, password)} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
