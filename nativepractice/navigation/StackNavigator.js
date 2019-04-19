import { createStackNavigator } from 'react-navigation';
import PopupScreen from '../screens/PopupScreen';
import ProfileScreen from '../screens/ProfileScreen';


const StackNavigator = createStackNavigator({
  PopupScreen,
  ProfileScreen
});

export default StackNavigator;