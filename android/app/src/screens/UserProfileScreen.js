import React from 'react';
import { View, Text } from 'react-native';
import { UserProfileScreenStyles } from '../styles/UserProfileScreenStyles';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = ({ route }) => {
    // Assuming route.params contains user information passed from the registration screen
    const { firstName, lastName, email, phoneNumber } = route.params;

    return (
        <View style={UserProfileScreenStyles.container}>
            <Text style={UserProfileScreenStyles.heading}>User Profile</Text>
            <View style={UserProfileScreenStyles.userInfoContainer}>
                <Text style={UserProfileScreenStyles.label}>First Name:</Text>
                <Text style={UserProfileScreenStyles.value}>{firstName}</Text>
            </View>
            <View style={UserProfileScreenStyles.userInfoContainer}>
                <Text style={UserProfileScreenStyles.label}>Last Name:</Text>
                <Text style={UserProfileScreenStyles.value}>{lastName}</Text>
            </View>
            <View style={UserProfileScreenStyles.userInfoContainer}>
                <Text style={UserProfileScreenStyles.label}>Email:</Text>
                <Text style={UserProfileScreenStyles.value}>{email}</Text>
            </View>
            <View style={UserProfileScreenStyles.userInfoContainer}>
                <Text style={UserProfileScreenStyles.label}>Phone Number:</Text>
                <Text style={UserProfileScreenStyles.value}>{phoneNumber}</Text>
            </View>
        </View>
    );
};

export default UserProfileScreen;