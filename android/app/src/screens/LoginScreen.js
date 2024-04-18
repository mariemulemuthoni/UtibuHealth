import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenStyles } from '../styles/LoginScreenStyles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/api/login', {
        email,
        password
      });
      alert(response.data.message);
      navigation.navigate('Dashboard', { user: response.data.user });
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.heading}>Continue to Utibu Health</Text>

      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Enter your email address:"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Enter your password:"
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