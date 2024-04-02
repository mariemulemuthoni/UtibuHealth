import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { OrderMedicationScreenStyles } from '../styles/OrderMedicationScreenStyles';

// Sample data for medication products
const medicationData = [
    {
        id: 1,
        name: 'Medication 1',
        image: require('../assets/images/medication1.jpg'),
        price: '$10',
        description: 'Description for Medication 1',
        instructions: 'Instructions for Medication 1',
        contraindications: 'Contraindications for Medication 1',
    },
    // Add more medication items as needed
];

const OrderMedicationScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleSelectMedication = (medication) => {
        setSelectedMedication(medication);
    };

    const handleAddToCart = () => {
        // Implement logic to add selected medication to cart
    };

    return (
        <View style={OrderMedicationScreenStyles.container}>
            {/* Search Input */}
            <TextInput
                style={OrderMedicationScreenStyles.searchInput}
                placeholder="Search medication by disease"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            {/* Medication List */}
            <FlatList
                data={medicationData.filter(med => med.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectMedication(item)}>
                        <View style={OrderMedicationScreenStyles.medicationItem}>
                            <Image source={item.image} style={OrderMedicationScreenStyles.medicationImage} />
                            <View>
                                <Text style={OrderMedicationScreenStyles.medicationName}>{item.name}</Text>
                                <Text style={OrderMedicationScreenStyles.medicationPrice}>{item.price}</Text>
                            </View>
                        </View>
                        {selectedMedication && selectedMedication.id === item.id && (
                            <View style={OrderMedicationScreenStyles.medicationDetails}>
                                <Text>Description: {item.description}</Text>
                                <Text>Instructions: {item.instructions}</Text>
                                <Text>Contraindications: {item.contraindications}</Text>
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
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default OrderMedicationScreen;
