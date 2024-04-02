import React from 'react';
import { View, Text } from 'react-native';
import { UserProfileScreenStyles } from '../styles/UserProfileScreenStyles';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = ({ route }) => {
    const { firstName, lastName, email, phoneNumber } = route.params;
    const navigation = useNavigation();

    const goToDashboard = () => {
        navigation.goBack(); // Go back to the previous screen (Dashboard)
    };

    return (
        <View style={UserProfileScreenStyles.container}>
            {/* User Profile Content */}
            <View style={UserProfileScreenStyles.userProfileContent}>
                <Text style={UserProfileScreenStyles.heading}>User Profile Information</Text>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>First Name:</Text>
                    <Text style={UserProfileScreenStyles.value}>{firstName}</Text>
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>Last Name:</Text>
                    <Text style={UserProfileScreenStyles.value}>{lastName}</Text>
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>Email Address:</Text>
                    <Text style={UserProfileScreenStyles.value}>{email}</Text>
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>Phone Number:</Text>
                    <Text style={UserProfileScreenStyles.value}>{phoneNumber}</Text>
                </View>
            </View>
        </View>
    );
};

export default UserProfileScreen;