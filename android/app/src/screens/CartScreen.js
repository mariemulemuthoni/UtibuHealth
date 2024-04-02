import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { CartScreenStyles } from '../styles/CartScreenStyles';

// Sample data for medication products in the shopping cart
const cartData = [
    {
        id: 1,
        name: 'Medication 1',
        image: require('../assets/images/medication1.jpg'),
        price: 10,
        quantity: 2,
    },
    {
        id: 2,
        name: 'Medication 2',
        image: require('../assets/images/medication2.jpg'),
        price: 15,
        quantity: 1,
    },
    // Add more medication items as needed
];

const ShoppingCartScreen = () => {
    const [deliveryOption, setDeliveryOption] = useState('pickup');

    // Function to calculate total price of items in the cart
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartData.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    // Function to handle changing delivery option
    const handleDeliveryOptionChange = (option) => {
        setDeliveryOption(option);
    };

    return (
        <View style={CartScreenStyles.container}>
            {/* Cart Items */}
            <FlatList
                data={cartData}
                renderItem={({ item }) => (
                    <View style={CartScreenStyles.cartItem}>
                        <Image source={item.image} style={CartScreenStyles.medicationImage} />
                        <View style={CartScreenStyles.medicationDetails}>
                            <Text style={CartScreenStyles.medicationName}>{item.name}</Text>
                            <Text style={CartScreenStyles.medicationPrice}>Price: ${item.price}</Text>
                            <Text style={CartScreenStyles.quantityText}>Quantity:</Text>
                            <TextInput
                                style={CartScreenStyles.quantityInput}
                                value={item.quantity.toString()}
                                keyboardType="numeric"
                                onChangeText={(text) => console.log(text)}
                            />
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            {/* Delivery Options */}
            <View style={CartScreenStyles.deliveryOptions}>
                <TouchableOpacity
                    style={[CartScreenStyles.deliveryOptionButton, deliveryOption === 'pickup' && CartScreenStyles.selectedDeliveryOption]}
                    onPress={() => handleDeliveryOptionChange('pickup')}>
                    <Text>Pickup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[CartScreenStyles.deliveryOptionButton, deliveryOption === 'delivery' && CartScreenStyles.selectedDeliveryOption]}
                    onPress={() => handleDeliveryOptionChange('delivery')}>
                    <Text>Delivery</Text>
                </TouchableOpacity>
            </View>

            {/* Total Price */}
            <Text style={CartScreenStyles.totalPriceText}>Total Price: ${calculateTotalPrice()}</Text>
        </View>
    );
};

export default ShoppingCartScreen;
