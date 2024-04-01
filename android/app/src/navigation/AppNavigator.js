import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../screens/LandingScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
      return (
            <Stack.Navigator initialRouteName="Dashboard">
                  <Stack.Screen name="Welcome" component={LandingScreen} />
                  <Stack.Screen name="Register" component={RegistrationScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Dashboard" component={DashboardScreen} />
                  <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            </Stack.Navigator>
      );
};

export default AppNavigator;