import React from 'react';
import { View, Text } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightseagreen'}}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;