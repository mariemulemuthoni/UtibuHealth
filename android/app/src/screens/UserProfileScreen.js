import React from 'react';
import { View, Text } from 'react-native';
import { UserProfileScreenStyles } from '../styles/UserProfileScreenStyles';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
    const navigation = useNavigation();

    // Dummy data for user profile
    const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
    };

    const goToDashboard = () => {
        navigation.goBack(); // Go back to the previous screen (Dashboard)
    };

    return (
        <View style={UserProfileScreenStyles.container}>
            {/* User Profile Content */}
            <View style={UserProfileScreenStyles.userProfileContent}>
                <Text style={UserProfileScreenStyles.heading}>Your Profile Information</Text>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <View style={UserProfileScreenStyles.iconContainer}>
                        <Text style={UserProfileScreenStyles.icon}>👤</Text>
                    </View>
                    <View>
                        <Text style={UserProfileScreenStyles.label}>Name:</Text>
                        <Text style={UserProfileScreenStyles.value}>{userData.firstName} {userData.lastName}</Text>
                    </View>
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <View style={UserProfileScreenStyles.iconContainer}>
                        <Text style={UserProfileScreenStyles.icon}>✉️</Text>
                    </View>
                    <View>
                        <Text style={UserProfileScreenStyles.label}>Email Address:</Text>
                        <Text style={UserProfileScreenStyles.value}>{userData.email}</Text>
                    </View>
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <View style={UserProfileScreenStyles.iconContainer}>
                        <Text style={UserProfileScreenStyles.icon}>📞</Text>
                    </View>
                    <View>
                        <Text style={UserProfileScreenStyles.label}>Phone Number:</Text>
                        <Text style={UserProfileScreenStyles.value}>{userData.phoneNumber}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UserProfileScreen;
