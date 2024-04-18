import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { UserProfileScreenStyles } from '../styles/UserProfileScreenStyles';

const UserProfileScreen = ({ route }) => {
    const { user } = route.params;
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUserData, setEditedUserData] = useState(null);

    useEffect(() => {
        fetchUserData(); // Fetch user data when component mounts
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://10.0.2.2:3000/api/user?email=${user.email}`);
            setUserData(response.data.user);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setEditedUserData({ ...userData });
    };

    const handleSave = async () => {
        try {
            console.log("Edited User Data:", editedUserData);
            await axios.put(`http://10.0.2.2:3000/api/user/${user.email}`, editedUserData); // Ensure the URL matches the backend endpoint
            setUserData({ ...editedUserData });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleChange = (key, value) => {
        setEditedUserData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const renderContent = () => {
        if (!userData) return null;

        return (
            <View style={UserProfileScreenStyles.userProfileContent}>
                <Text style={UserProfileScreenStyles.heading}>Your Profile Information</Text>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>ID Number:</Text>
                    <TextInput
                        style={UserProfileScreenStyles.input}
                        value={userData.idNumber ? String(userData.idNumber) : ''}
                        onChangeText={value => handleChange('idNumber', value)}
                        editable={false}
                    />
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>First Name:</Text>
                    <TextInput
                        style={UserProfileScreenStyles.input}
                        value={editedUserData?.firstName || userData.firstName}
                        onChangeText={value => handleChange('firstName', value)}
                        editable={isEditing}
                    />
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>Last Name:</Text>
                    <TextInput
                        style={UserProfileScreenStyles.input}
                        value={editedUserData?.lastName || userData.lastName}
                        onChangeText={value => handleChange('lastName', value)}
                        editable={isEditing}
                    />
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>Email Address:</Text>
                    <TextInput
                        style={UserProfileScreenStyles.input}
                        value={userData.email}
                        editable={false}
                    />
                </View>

                <View style={UserProfileScreenStyles.userInfoContainer}>
                    <Text style={UserProfileScreenStyles.label}>Phone Number:</Text>
                    <TextInput
                        style={UserProfileScreenStyles.input}
                        value={editedUserData?.phoneNumber || userData.phoneNumber}
                        onChangeText={value => handleChange('phoneNumber', value)}
                        editable={isEditing}
                    />
                </View>

                {isEditing ? (
                    <TouchableOpacity style={UserProfileScreenStyles.button} onPress={handleSave}>
                        <Text style={UserProfileScreenStyles.buttonText}>Save Changes</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={[UserProfileScreenStyles.button, { backgroundColor: 'blue' }]} onPress={handleEdit}>
                        <Text style={UserProfileScreenStyles.buttonText}>Edit Details</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    return (
        <View style={UserProfileScreenStyles.container}>
            {renderContent()}
        </View>
    );
};

export default UserProfileScreen;