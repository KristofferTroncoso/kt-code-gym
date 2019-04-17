import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabNavigator
}, 
{
  initialRouteName: 'Login'
});

export default AppNavigator;