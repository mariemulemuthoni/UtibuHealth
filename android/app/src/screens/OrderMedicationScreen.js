import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { OrderMedicationScreenStyles } from '../styles/OrderMedicationScreenStyles';
import { useNavigation } from '@react-navigation/native';

const OrderMedicationScreen = ({ route }) => {
    const navigation = useNavigation();
    const [medicationData, setMedicationData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchMedicationData();
    }, []);

    useEffect(() => {
        if (route.params?.updatedCartItems) {
            setCartItems(route.params.updatedCartItems);
        }
    }, [route.params?.updatedCartItems]);

    const fetchMedicationData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/api/medication');
            const data = await response.json();
            setMedicationData(data);
        } catch (error) {
            console.error('Error fetching medication data:', error);
            // Handle error
        }
    };

    const handleSelectMedication = (medication) => {
        setSelectedMedication(medication);
    };

    const handleAddToCart = () => {
        if (selectedMedication) {
            const alreadyInCart = cartItems.some(item => item.id === selectedMedication.medicationID);
            if (alreadyInCart) {
                Alert.alert('Error', 'This medication is already in your cart');
            } else {
                const newItem = {
                    id: selectedMedication.medicationID,
                    name: selectedMedication.medicationName,
                    image: selectedMedication.medicationImage,
                    price: selectedMedication.medicationPrice,
                    quantity: selectedQuantity
                };
                setCartItems([...cartItems, newItem]);
                setSelectedMedication(null);
                setSelectedQuantity(1);
                Alert.alert('Success', 'Item added to cart');
            }
        } else {
            Alert.alert('Error', 'Please select a medication');
        }
    };

    const handleViewCart = () => {
        navigation.navigate('Cart', { cartItems });
    };

    return (
        <View style={OrderMedicationScreenStyles.container}>
            <TextInput
                style={OrderMedicationScreenStyles.searchInput}
                placeholder="Search medication by disease"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <FlatList
                data={medicationData.filter(med => med.medicationName.toLowerCase().includes(searchQuery.toLowerCase()))}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity onPress={() => handleSelectMedication(item)}>
                            <View style={OrderMedicationScreenStyles.medicationItem}>
                                <Image source={{ uri: item.medicationImage }} style={OrderMedicationScreenStyles.medicationImage} />
                                <View>
                                    <Text style={OrderMedicationScreenStyles.medicationName}>{item.medicationName}</Text>
                                    <Text style={OrderMedicationScreenStyles.medicationPrice}>Price: ${item.medicationPrice}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {selectedMedication && selectedMedication.medicationID === item.medicationID && (
                            <View style={OrderMedicationScreenStyles.selectedMedicationDetails}>
                                <Text>Description: {selectedMedication.medicationDescription}</Text>
                                <Text>Instructions: {selectedMedication.medicationInstructions}</Text>
                                <Text>Contraindications: {selectedMedication.medicationContraindications}</Text>
                                <TextInput
                                    style={OrderMedicationScreenStyles.quantityInput}
                                    placeholder="Enter quantity"
                                    keyboardType="numeric"
                                    value={selectedQuantity.toString()}
                                    onChangeText={text => setSelectedQuantity(parseInt(text))}
                                />
                                <TouchableOpacity style={OrderMedicationScreenStyles.addToCartButton} onPress={handleAddToCart}>
                                    <Text>Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                )}
                keyExtractor={(item) => item.medicationID.toString()}
            />

            <TouchableOpacity style={OrderMedicationScreenStyles.viewCartButton} onPress={handleViewCart}>
                <Text>View Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OrderMedicationScreen;