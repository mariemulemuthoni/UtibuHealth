import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RegistrationScreenStyles } from '../styles/RegistrationScreenStyles';
import axios from 'axios';

const RegisterScreen = () => {
      const [idNumber, setidNumber] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

      const handleRegister = async () => {
            if (password !== confirmPassword) {
                  alert('Passwords do not match');
                  return;
            }

            try {
                  const response = await axios.post('http://192.168.100.8:3000/api/register', {
                        idNumber,
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        password
                  });
                  alert(response.data.message);
            } catch (error) {
                  console.error('Error registering user:', error);
                  alert('An error occurred. Please try again later.');
            }
      };

      return (
            <View style={RegistrationScreenStyles.container}>
                  <Text style={RegistrationScreenStyles.heading}>Register to Utibu Health</Text>

                  <TextInput
                        style={RegistrationScreenStyles.input}
                        placeholder="ID Number :"
                        value={idNumber}
                        onChangeText={setidNumber}
                  />

                  <TextInput
                        style={RegistrationScreenStyles.input}
                        placeholder="First Name :"
                        value={firstName}
                        onChangeText={setFirstName}
                  />

                  <TextInput
                        style={RegistrationScreenStyles.input}
                        placeholder="Last Name :"
                        value={lastName}
                        onChangeText={setLastName}
                  />

                  <TextInput
                        style={RegistrationScreenStyles.input}
                        placeholder="Email Address :"
                        value={email}
                        onChangeText={setEmail}
                  />

                  <TextInput
                        style={RegistrationScreenStyles.input}
                        placeholder="Phone Number :"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                  />

                  <TextInput
                        style={RegistrationScreenStyles.input}
                        placeholder="Create Password :"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                  />

                  <TextInput
                        style={RegistrationScreenStyles.input}
                        placeholder="Confirm Password :"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                  />

                  <TouchableOpacity style={RegistrationScreenStyles.button} onPress={handleRegister}>
                        <Text style={RegistrationScreenStyles.buttonText}>Register</Text>
                  </TouchableOpacity>
            </View>
      );
};

export default RegisterScreen;