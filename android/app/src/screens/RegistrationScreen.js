import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RegistrationScreenStyles } from '../styles/RegistrationScreenStyles';

const RegisterScreen = () => {
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

      const handleRegister = () => {
        // Handle registration logic here
      };

      return (
            <View style={RegistrationScreenStyles.container}>
                  <Text style={RegistrationScreenStyles.heading}>Register to Utibu Health</Text>

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
                          value={password}
                          onChangeText={setPassword}
                       />

                  <TextInput
                          style={RegistrationScreenStyles.input}
                          placeholder="Confirm Password :"
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
