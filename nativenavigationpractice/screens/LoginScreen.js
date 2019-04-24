import React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen({navigation}) {
  function handlePress() {
    navigation.navigate('Main');
  }
  
  return (
    <View style={{flex: 1, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white'}}>LoginScreen</Text>
      <Text>Welcome</Text>
      <Button title="Log In" onPress={handlePress} />
    </View>
  )
}

export default LoginScreen;