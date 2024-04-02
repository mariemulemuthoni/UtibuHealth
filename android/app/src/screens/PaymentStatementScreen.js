import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { PaymentStatementScreenStyles } from '../styles/PaymentStatementScreenStyles';

// Sample data for payment statements
const paymentStatementsData = [
    {
        id: 'SD17UACWB7',
        medicationName: 'Medication 1',
        paymentMethod: 'Credit Card',
        image: require('../assets/images/medication1.jpg'), // Example image
        price: '$10.00',
    },
    {
        id: 'SCU9LODC27',
        medicationName: 'Medication 2',
        paymentMethod: 'M-Pesa',
        image: require('../assets/images/medication2.jpg'),
        price: '$15.00',
    },
];

const PaymentStatementsScreen = () => {
    return (
        <View style={PaymentStatementScreenStyles.container}>
            {/* Payment Statements List */}
            <FlatList
                data={paymentStatementsData}
                renderItem={({ item }) => (
                    <View style={PaymentStatementScreenStyles.paymentStatementItem}>
                        <Image source={item.image} style={PaymentStatementScreenStyles.medicationImage} />
                        <View style={PaymentStatementScreenStyles.medicationDetails}>
                            <Text style={PaymentStatementScreenStyles.transactionId}>{item.id}</Text>
                            <Text style={PaymentStatementScreenStyles.medicationName}>{item.medicationName}</Text>
                            <Text style={PaymentStatementScreenStyles.paymentMethod}>Paid with {item.paymentMethod}</Text>
                            <Text style={PaymentStatementScreenStyles.price}>{item.price}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default PaymentStatementsScreen;