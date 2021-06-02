import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {HomeScreenProps} from '../types';
import {getUserName, logOut} from '../lib/firebase';

export default function Home({route}: HomeScreenProps) {
  const {uid} = route.params;
  const [userName, setUserName] = useState();

  useEffect(() => {
    getUserName(uid).then(userName => setUserName(userName));
  }, []);

  return (
    <View>
      <Text>{userName}</Text>
      <Button title="Sign Out" onPress={() => logOut()} />
    </View>
  );
}
