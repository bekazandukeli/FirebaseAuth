import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, Pressable} from 'react-native';
import {RegisterScreenProps} from '../types';
import {signUp} from '../lib/firebase';
import {SmallText, Title} from '../components/styled';
import TextField from '../components/TextField';
import Button from '../components/Button';

export default function Register({navigation}: RegisterScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            justifyContent: 'space-between',
          }}>
          <Title>Create an Account</Title>
          <View>
            <TextField
              type="email"
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
              containerStyle={{marginBottom: 32}}
            />
            <TextField
              type="username"
              placeholder="Name"
              onChangeText={text => setUserName(text)}
              value={userName}
              containerStyle={{marginBottom: 32}}
            />
            <TextField
              type="password"
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
          <View style={{marginBottom: 115}}>
            <Button
              title="Sign Up"
              onPress={() => signUp(email, password, userName)}
              style={{marginBottom: 32}}
            />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <SmallText>Already have an account? </SmallText>
              <Pressable
                onPress={() => navigation.navigate('Login')}
                hitSlop={10}>
                <SmallText style={{textDecorationLine: 'underline'}}>
                  Log In
                </SmallText>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
