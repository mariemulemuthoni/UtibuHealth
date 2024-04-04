import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LoginScreenStyles } from '../styles/LoginScreenStyles';

const LoginScreen = () => {
      const [idNumber, setidNumber] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = () => {
        // Handle login logic here
      };

      return (
            <View style={LoginScreenStyles.container}>
                  <Text style={LoginScreenStyles.heading}>Continue to Utibu Health</Text>

                  <TextInput
                    style={LoginScreenStyles.input}
                    placeholder="Enter your ID Number"
                    value={idNumber}
                    onChangeText={setidNumber}
                  />

                  <TextInput
                    style={LoginScreenStyles.input}
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />

                  <TouchableOpacity style={LoginScreenStyles.button} onPress={handleLogin}>
                    <Text style={LoginScreenStyles.buttonText}>Login</Text>
                  </TouchableOpacity>
            </View>
      );
};

export default LoginScreen;