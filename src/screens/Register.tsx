import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {RegisterScreenProps} from '../types';
import {signUp} from '../lib/firebase';

export default function Register({navigation}: RegisterScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

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
      <TextInput
        placeholder="Name"
        onChangeText={text => setUserName(text)}
        value={userName}
        style={{backgroundColor: 'white'}}
      />
      <Button
        title="Register"
        onPress={() => signUp(email, password, userName)}
      />
      <Button title="Log In" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
