import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../screens/LandingScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
      return (
          <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Welcome" component={LandingScreen} />
                <Stack.Screen name="Register" component={RegistrationScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
      );
};

export default AppNavigator;