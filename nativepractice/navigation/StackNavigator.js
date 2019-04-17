import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';

const StackNavigator = createStackNavigator({
  Login: LoginScreen,
  Main: MainTabNavigator
}, 
{
  initialRouteName: 'Login'
});

export default StackNavigator;