import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {HomeScreenProps} from '../types';
import {getUserName, logOut} from '../lib/firebase';
import UserName from '../components/UserName';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';

export default function Home({route}: HomeScreenProps) {
  const {uid} = route.params;
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getUserName(uid).then(userName => setUserName(userName));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            justifyContent: 'space-between',
          }}>
          <UserName style={{marginTop: '9%'}} {...{userName}} />
          <Button
            style={{marginBottom: 169}}
            title="Sign Out"
            onPress={() => logOut()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
