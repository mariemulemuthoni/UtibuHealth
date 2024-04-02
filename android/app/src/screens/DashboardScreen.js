import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DashboardScreenStyles } from '../styles/DashboardScreenStyles';
import { useNavigation } from '@react-navigation/native';

// Define avatar images for each screen
const avatars = {
    UserProfile: require('../assets/images/user_profile_avatar.png'),
    OrderMedication: require('../assets/images/medication_avatar.jpg'),
    Cart: require('../assets/images/cart_avatar.png'),
    OrderHistory: require('../assets/images/history_avatar.png'),
    PaymentStatement: require('../assets/images/payment_avatar.png'),
};

const DashboardScreen = () => {
    const navigation = useNavigation();

    // Function to navigate to user profile screen
    const goToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    // Render a card for each screen
    const renderScreenCard = (screenName) => (
        <TouchableOpacity style={DashboardScreenStyles.card} onPress={() => goToScreen(screenName)}>
            <Image source={avatars[screenName]} style={DashboardScreenStyles.avatar} />
            <Text style={DashboardScreenStyles.cardText}>{screenName}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={DashboardScreenStyles.container}>
            <View style={DashboardScreenStyles.cardContainer}>
                {renderScreenCard('UserProfile')}
                {renderScreenCard('OrderMedication')}
                {renderScreenCard('Cart')}
                {renderScreenCard('OrderHistory')}
                {renderScreenCard('PaymentStatement')}
            </View>
        </View>
    );
};

export default DashboardScreen;