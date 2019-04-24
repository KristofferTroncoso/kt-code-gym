import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { Platform } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabBarIcon from '../components/TabBarIcon';
import StackNavigator from '../navigation/StackNavigator';

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

ProfileScreen.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-options'
          : 'md-options'
      }
    />
  ),
};

StackNavigator.navigationOptions = {
  tabBarLabel: 'Stack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-options'
          : 'md-options'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeScreen,
  ProfileScreen,
  StackNavigator
});
