import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LandingScreenStyles } from '../styles/LandingScreenStyles';

const LandingPage = ({ navigation }) => {
      const handleRegister = () => {
        navigation.navigate('Register');
      };

      const handleLogin = () => {
        navigation.navigate('Login');
      };

      return (
            <View style={LandingScreenStyles.container}>
                  <Image
                    source={require('../assets/images/logo.png')}
                    style={LandingScreenStyles.logo}
                  />

                  <Text style={LandingScreenStyles.heading}>Welcome to Utibu Health</Text>

                  <TouchableOpacity style={LandingScreenStyles.button} onPress={handleRegister}>
                    <Text style={LandingScreenStyles.buttonText}>Register</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={LandingScreenStyles.button} onPress={handleLogin}>
                    <Text style={LandingScreenStyles.buttonText}>Login</Text>
                  </TouchableOpacity>
            </View>
      );
};

export default LandingPage;
