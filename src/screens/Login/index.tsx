import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {LoginScreenProps} from '../../types';
import {SmallText, Title} from '../../components/styled';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextField from '../../components/TextField';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {logIn} from '../../lib/firebase';
import {Container, InputsContainer} from './styles';

export default function Login({navigation}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Container>
          <Title>Welcome Back</Title>
          <InputsContainer>
            <TextField
              type="email"
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
              containerStyle={{marginBottom: 32}}
            />
            <TextField
              type="password"
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </InputsContainer>
          <View style={{marginBottom: 115}}>
            <Button
              title="Log In"
              onPress={() => logIn(email, password)}
              style={{marginBottom: 32}}
            />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <SmallText>Don’t you have an account yet? </SmallText>
              <Pressable
                onPress={() => navigation.navigate('Register')}
                hitSlop={10}>
                <SmallText style={{textDecorationLine: 'underline'}}>
                  Sign Up
                </SmallText>
              </Pressable>
            </View>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
