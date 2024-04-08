import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput, Alert } from 'react-native';
import { CartScreenStyles } from '../styles/CartScreenStyles';

const ShoppingCartScreen = ({ route }) => {
    const { cartItems } = route.params;
    const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

    useEffect(() => {
        if (route.params?.updatedCartItems) {
            setUpdatedCartItems(route.params.updatedCartItems);
        }
    }, [route.params?.updatedCartItems]);

    const calculateItemPrice = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        updatedCartItems.forEach(item => {
            totalPrice += calculateItemPrice(item);
        });
        return totalPrice;
    };

    const handleRemoveItem = (itemId) => {
        const updatedItems = updatedCartItems.filter(item => item.id !== itemId);
        setUpdatedCartItems(updatedItems);
    };

    const handleQuantityChange = (itemId, text) => {
        // Check if text is empty or undefined
        if (!text || text.trim() === '') {
            // If empty or undefined, set quantity to 0
            const updatedItems = updatedCartItems.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantity: 0 };
                }
                return item;
            });
            setUpdatedCartItems(updatedItems);
            return; // Exit the function
        }

        // Parse the input as an integer
        const quantity = parseInt(text);

        // Check if quantity is a valid number
        if (!isNaN(quantity)) {
            // Update the quantity of the item
            const updatedItems = updatedCartItems.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantity: quantity };
                }
                return item;
            });
            setUpdatedCartItems(updatedItems);
        }
    };

    const handleCheckout = () => {
        if (updatedCartItems.length > 0) {
            // Implement checkout logic here
            Alert.alert('Success', 'Checkout successful');
            // Reset cart items after checkout
            setUpdatedCartItems([]);
        } else {
            Alert.alert('Error', 'Your cart is empty');
        }
    };

    return (
        <View style={CartScreenStyles.container}>
            {updatedCartItems.length > 0 ? (
                <FlatList
                    data={updatedCartItems}
                    renderItem={({ item }) => (
                        <View style={CartScreenStyles.cartItem}>
                            <Image source={{ uri: item.image }} style={CartScreenStyles.medicationImage} />
                            <View style={CartScreenStyles.medicationDetails}>
                                <Text style={CartScreenStyles.medicationName}>{item.name}</Text>
                                <Text style={CartScreenStyles.medicationPrice}>Price: ${item.price}</Text>
                                <Text style={CartScreenStyles.quantityText}>Quantity:</Text>
                                <TextInput
                                    style={CartScreenStyles.quantityInput}
                                    value={item.quantity.toString()}
                                    keyboardType="numeric"
                                    onChangeText={(text) => handleQuantityChange(item.id, parseInt(text))}
                                />
                                <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                                    <Text style={CartScreenStyles.removeItemButton}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={CartScreenStyles.emptyCartText}>Your cart is empty</Text>
            )}

            <Text style={CartScreenStyles.totalPriceText}>Total Price: ${calculateTotalPrice()}</Text>

            <TouchableOpacity style={CartScreenStyles.checkoutButton} onPress={handleCheckout}>
                <Text>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ShoppingCartScreen;
