import { StyleSheet } from 'react-native';

export const PaymentStatementScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    paymentStatementItem: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 15,
        marginBottom: 15,
    },

    medicationImage: {
        width: 80,
        height: 80,
        marginRight: 30,
        borderRadius: 5,
    },

    medicationDetails: {
        flex: 1,
    },

    transactionId: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

    medicationName: {
        marginBottom: 5,
    },

    paymentMethod: {
        color: '#666',
    },
});
