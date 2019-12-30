import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        header: null,
        gesturesEnabled: false
      },
    },
    CreateAccount: CreateAccountScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
