import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { OrderHistoryScreenStyles } from '../styles/OrderHistoryScreenStyles';

// Sample data for order history
const orderHistoryData = [
    {
        id: 1,
        name: 'Medication 1',
        image: require('../assets/images/medication1.jpg'),
        price: '$10',
    },
    {
        id: 2,
        name: 'Medication 2',
        image: require('../assets/images/medication2.jpg'),
        price: '$15',
    },
    // Add more order history items as needed
];

const OrderHistoryScreen = () => {
    const [showOrderButton, setShowOrderButton] = useState(false);
    const [selectedMedication, setSelectedMedication] = useState(null);

    // Function to handle selecting a medication from order history
    const handleSelectMedication = (medication) => {
        setSelectedMedication(medication);
        setShowOrderButton(true);
    };

    // Function to handle ordering the selected medication again
    const handleOrderAgain = () => {
        // Implement logic to order the selected medication again
        console.log('Order again:', selectedMedication);
    };

    return (
        <View style={OrderHistoryScreenStyles.container}>
            {/* Order History List */}
            <FlatList
                data={orderHistoryData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectMedication(item)}>
                        <View style={OrderHistoryScreenStyles.medicationItem}>
                            <Image source={item.image} style={OrderHistoryScreenStyles.medicationImage} />
                            <View style={OrderHistoryScreenStyles.medicationDetails}>
                                <Text style={OrderHistoryScreenStyles.medicationName}>{item.name}</Text>
                                <Text style={OrderHistoryScreenStyles.medicationPrice}>{item.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            {/* Order Again Button */}
            {showOrderButton && (
                <TouchableOpacity style={OrderHistoryScreenStyles.orderAgainButton} onPress={handleOrderAgain}>
                    <Text style={OrderHistoryScreenStyles.orderAgainButtonText}>Order Again</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default OrderHistoryScreen;