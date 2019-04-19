import React from 'react';
import { View, Text, Button } from 'react-native';

function PopupScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'deeppink'}}>
      <Text>PopupScreen</Text>
      <Button title='stack me' onPress={() => navigation.push('PopupScreen')} />
      <Button title='stack me profile' onPress={() => navigation.push('ProfileScreen')} />
    </View>
  )
}

export default PopupScreen;