import React from 'react';
import { View, Text, Button } from 'react-native';

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'crimson'}}>
      <Text>ProfileScreen</Text>
      <Button title='stack me popup' onPress={() => navigation.push('PopupScreen')} />
      <Button title='stack me profile' onPress={() => navigation.push('ProfileScreen')} />
    </View>
  )
}

export default ProfileScreen;