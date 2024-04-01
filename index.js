import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './android/app/src/navigation/AppNavigator';
import { name as appName } from './app.json';

const App = () => (
      <SafeAreaProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
      </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => App);