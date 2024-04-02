import { StyleSheet } from 'react-native';

export const CartScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    medicationImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },

    medicationDetails: {
        flex: 1,
    },

    medicationName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

    medicationPrice: {
        marginBottom: 5,
    },

    quantityText: {
        marginBottom: 5,
    },

    quantityInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    },

    deliveryOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },

    deliveryOptionButton: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },

    selectedDeliveryOption: {
        backgroundColor: 'lightblue',
    },

    totalPriceText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});