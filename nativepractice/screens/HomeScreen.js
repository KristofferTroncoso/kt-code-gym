import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightseagreen'}}>
      <Text>HomeScreen</Text>
      <Button title='stack me' onPress={() => navigation.navigate('PopupScreen')} />
    </View>
  )
}

export default HomeScreen;